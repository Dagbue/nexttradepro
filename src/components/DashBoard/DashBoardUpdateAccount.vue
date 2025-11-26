<template>
  <div class="alpha">

    <!-- USER PROFILE SUMMARY -->
    <div style="color: white;" class="section-1-alpha">
      <p class="text-1">User Profile</p>
      <hr/>
      <div class="section-1-part-1">
        <img v-if="!UserDetails.user.displayPicture" src="@/assets/Avatar.svg" alt="Avatar" class="avatar"/>
        <img v-else :src="UserDetails.user.displayPicture" alt="Display Picture" class="displayPicture"/>
        <div>
          <p style="text-align: left">{{ UserDetails.user.firstName }} {{ UserDetails.user.lastName }}</p>
          <p style="text-align: left">{{ UserDetails.user.email }}</p>
        </div>
      </div>

      <div class="referral-part">
        <input type="text" :value="referralLink" readonly class="link-box"/>
        <button class="link-button" @click="copyToClipboard(referralLink)">Copy Link</button>
      </div>
    </div>

    <!-- PERSONAL INFORMATION FORM -->
    <div style="color: white;" class="section-2-alpha">
      <p class="text-1">Personal Information</p>
      <hr/>

      <div class="form">
        <form @submit.prevent="updateDetails">

          <!-- Name Row -->
          <div class="separate">
            <div class="space">
              <label>First Name</label>
              <input type="text" v-model="firstName" class="form-input" required />
            </div>
            <div class="space">
              <label>Last Name</label>
              <input type="text" v-model="lastName" class="form-input" required />
            </div>
          </div>

          <!-- Email & Country -->
          <div class="separate">
            <div class="space">
              <label>Email</label>
              <input type="email" v-model="email" class="form-input" required />
            </div>
            <div class="space">
              <label>Country</label>
              <input type="text" v-model="country" class="form-input" required />
            </div>
          </div>

          <!-- Address & Phone -->
          <div class="separate">
            <div class="space">
              <label>Address</label>
              <input type="text" v-model="address" class="form-input" required />
            </div>
            <div class="space">
              <label>Phone Number</label>
              <input type="text" v-model="phoneNumber" class="form-input" required />
            </div>
          </div>

          <!-- ID CARD UPLOAD SECTION - INDEPENDENT FRONT & BACK -->
          <div class="separate">

            <!-- FRONT ID -->
            <div class="form-group">
              <label class="id">Identification Card (Upload front of ID card for verification)</label>

              <!-- Upload Input -->
              <div v-if="!url" class="upload-box">
                <input
                    type="file"
                    accept="image/*"
                    @change="uploadFile"
                    ref="file"
                    class="file-input"
                    placeholder="Identification Card (Upload ID card for verification)"
                />
                <p v-if="uploadingFront" style="color: #5d78ff; font-size: 14px;">Uploading front ID...</p>
              </div>

              <!-- Preview -->
              <div v-else class="image-preview">
                <p style="color: #a0d8ff; margin: 8px 0;">Front ID Uploaded</p>
                <img :src="url" alt="Front ID" class="uploaded-id-img" />
                <button @click="removeFrontId" class="remove-btn">Remove</button>
              </div>
            </div>

            <!-- BACK ID -->
            <div class="form-group">
              <label class="id">Identification Card (Upload back of ID card for verification)</label>

              <div v-if="!url2" class="upload-box">
                <input
                    type="file"
                    accept="image/*"
                    @change="uploadFile2"
                    ref="file2"
                    class="file-input"
                    placeholder="Identification Card (Upload ID card for verification)"
                />
                <p v-if="uploadingBack" style="color: #5d78ff; font-size: 14px;">Uploading back ID...</p>
              </div>

              <div v-else class="image-preview">
                <p style="color: #a0d8ff; margin: 8px 0;">Back ID Uploaded</p>
                <img :src="url2" alt="Back ID" class="uploaded-id-img" />
                <button @click="removeBackId" class="remove-btn">Remove</button>
              </div>
            </div>
          </div>

          <!-- SUBMIT BUTTON -->
          <div class="btn-alpha">
            <base-button
                :loading="loading"
                style="background-color: #5d78ff; border: 1px solid #5d78ff; padding: 12px 30px; font-size: 16px;"
            >
              Update Details
            </base-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import StoreUtils from "@/utility/StoreUtils";
import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";
import { mapState } from "vuex";
import S3Request from "@/model/request/S3Request";
import swal from "sweetalert";

export default {
  name: "DashBoardUpdateAccount",
  components: { BaseButton },

  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      address: "",
      phoneNumber: "",
      userId: localStorage.getItem("userId") || "",
      userInfo: null,

      // ID Uploads
      url: "",           // Front ID S3 URL
      url2: "",          // Back ID S3 URL
      base64: "",
      base642: "",
      uploadmodel: new S3Request().uploadBase64(),
      uploadmodel2: new S3Request().uploadBase64(),

      uploadingFront: false,
      uploadingBack: false,
    };
  },

  computed: {
    ...mapState({
      loading: (state) => state.auth.loading,
      auth: (state) => state.auth,
      sbucket: (state) => state.sbucket,
    }),

    UserDetails() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById) || { user: {} };
    },

    referralLink() {
      return `https://www.topsharespro.com/register`;
    },
  },

  watch: {
    UserDetails: {
      handler(newVal) {
        if (newVal?.user) {
          this.populateForm(newVal.user);
        }
      },
      immediate: true,
    },
  },

  methods: {
    populateForm(user) {
      this.firstName = user.firstName || "";
      this.lastName = user.lastName || "";
      this.email = user.email || "";
      this.country = user.country || "";
      this.address = user.address || "";
      this.phoneNumber = user.phoneNumber || "";
      this.url = user.frontId || "";
      this.url2 = user.backId || "";
      this.userInfo = user;
    },

    async uploadFile(e) {
      const file = e.target.files[0];
      if (!file) return;

      this.uploadingFront = true;
      const reader = new FileReader();

      reader.onload = async (event) => {
        this.base64 = event.target.result;

        try {
          this.uploadmodel.username = `${this.auth.userInfo.userFirstName}_${Date.now()}_front`;
          this.uploadmodel.base64 = this.base64;

          await StoreUtils.dispatch(StoreUtils.actions.sbucket.uploadEncodedFile, this.uploadmodel, { root: true });
          this.url = this.sbucket.s3bucketResponse.url;

          this.$refs.file.value = ""; // Clear input
        } catch (err) {
          await swal("Error", "Failed to upload front ID. Please try again." , 'error')
          console.error(err);
        } finally {
          this.uploadingFront = false;
        }
      };

      reader.readAsDataURL(file);
    },

    async uploadFile2(e) {
      const file = e.target.files[0];
      if (!file) return;

      this.uploadingBack = true;
      const reader = new FileReader();

      reader.onload = async (event) => {
        this.base642 = event.target.result;

        try {
          this.uploadmodel2.username = `${this.auth.userInfo.userFirstName}_${Date.now()}_back`;
          this.uploadmodel2.base64 = this.base642;

          await StoreUtils.dispatch(StoreUtils.actions.sbucket.uploadEncodedFile, this.uploadmodel2, { root: true });
          this.url2 = this.sbucket.s3bucketResponse.url;

          this.$refs.file2.value = "";
        } catch (err) {
          await swal("Error", "Failed to upload back ID. Please try again.", 'error')
          console.error(err);
        } finally {
          this.uploadingBack = false;
        }
      };

      reader.readAsDataURL(file);
    },

    removeFrontId() {
      this.url = "";
      this.base64 = "";
      if (this.$refs.file) this.$refs.file.value = "";
    },

    removeBackId() {
      this.url2 = "";
      this.base642 = "";
      if (this.$refs.file2) this.$refs.file2.value = "";
    },

    async copyToClipboard(text) {
      try {
        await navigator.clipboard.writeText(text);
        await swal("Success", "Referral link copied!", 'success')
      } catch {
        // Fallback
        const el = document.createElement("textarea");
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        await swal("Success", "Referral link copied!", 'success')
      }
    },

    updateDetails() {
      if (!this.url || !this.url2) {
        if (!confirm("You haven't uploaded both ID cards. Continue anyway?")) return;
      }

      StoreUtils.dispatch(StoreUtils.actions.auth.updateUser, {
        userId: this.userId,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        country: this.country,
        address: this.address,
        frontId: this.url,
        backId: this.url2,
      }).then(() => {
      }).catch((err) => {
        console.error(err);
        swal("Error", "Update failed. Please try again.", 'error')
      });
    },
  },

  created() {
    this.userId = localStorage.getItem("userId");
    const stored = localStorage.getItem("userInfo");
    if (stored) this.userInfo = JSON.parse(stored);

    // Fetch fresh user data
    StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, { userId: this.userId });
  },
};
</script>

<style scoped>
.image-preview {
  text-align: center;
  padding: 10px;
  background: rgba(255,255,255,0.05);
  border-radius: 8px;
  margin-top: 10px;
}


.uploaded-id-img {
  max-width: 50%;
  max-height: 130px;
  border-radius: 8px;
  margin: 10px 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
}



.remove-btn {
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  margin-top: 8px;
}

.remove-btn:hover {
  background: #ff5252;
}


.link-box {
  width: 70%;
  padding: 10px;
  background: #333;
  color: white;
  border: 1px solid #555;
  border-radius: 6px 0 0 6px;
}

.link-button {
  padding: 10px 16px;
  background: #5d78ff;
  color: white;
  border: none;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
}



.left{
  margin-left: 1.8%;
}
.alpha{
  display: flex;
  flex-direction: column;
}
.section-2-alpha{
  margin-top: 4%;
  float: left;
  margin-left: 20px;
  background-color: #0f171c;
  padding: 30px 40px;
  width: 93%;
}
.section-1-alpha{
  margin-top: 4%;
  float: left;
  margin-left: 20px;
  background-color: #0f171c;
  padding: 30px 40px;
  width: 100%;
  max-width: 700px;
}
.section-1-part-1{
  display: flex;
  align-content: center;
  align-items: center;
}
.link-box{
  background-color: #000000;
  border: 1px solid #000000;
  border-radius: 5px 0 0 5px;
  width: 350px;
  height: 33px;
  color: white;
  padding: 5px 20px;
}

.separate{
  display: flex;
  justify-content: space-around;
}

.form-input{
  background-color: #000000;
  border: 1px solid #000000;
  border-radius: 5px ;
  width: 460px;
  height: 35px;
  color: white;
  padding: 5px 20px;
}
.link-button{
  background-color: #5d78ff;
  border: 1px solid #5d78ff;
  display: inline-block;
  font-weight: 400;
  width: 130px;
  padding: 5px 20px;
  color: #ffffff;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  /*background-color: transparent;*/
  /*border: 1px solid transparent;*/
  /*padding: 0.375rem 0.75rem;*/
  font-size: 0.875rem;
  height: 35px;
  line-height: 1.4;
  border-radius: 0 5px 5px 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.text-1{
  text-align: left;
}

.referral-part{
  padding-top: 20px;
  display: flex;
}
hr {
  border-top: 1px solid #ffffff;
  margin-bottom: 20px;
  margin-top: 20px;
}
.avatar{
  padding-right: 10px;
  width: 13%;
}
.space{
  display: flex;
  flex-direction: column;
  text-align: left;
}
label{
  padding-bottom: 5px;
  padding-top: 25px;
}
.btn{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 250px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  background-color: #5d78ff;
  border: 1px solid #5d78ff;
}

.btn-alpha{
  display: flex;
  float: left;
  margin-top: 3%;
}

.displayPicture{
  width: 13%;
  border-radius: 100px;
  margin-right: 5px;
}

.form-group {
  margin-bottom: 15px;
  margin-right: 5px;
  margin-left: 5px;
  width: 100%;
  margin-top: 1.5%;
}

.form-group input {
  display: block;
  font-size: 16px;
  line-height: 24px;

  padding: 12px 16px;
  height: 48px;
  border-radius: 8px;
  color: var(--black-color);
  border: 1px solid #e4e8ee;
  box-shadow: none;
  width: 100%;
}

.form-group input:focus {
  outline: none;
  border: 1px solid #24405A;
}

.form-group input::placeholder {
  color: var(--black-color);
  font-weight: 400;
  font-size: 14px;
}

.form-group select {
  display: block;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: -0.1px;
  padding: 12px 16px;
  height: 48px;
  border-radius: 5px;
  color: var(--black-color);
  border: 1px solid #e4e8ee;
  box-shadow: none;
  width: 100%;
}

.form-group select:focus {
  outline: none;
  border: 1px solid #24405A;
}

.form-group select::placeholder {
  color: var(--black-color);
  font-weight: 400;
  font-size: 14px;
}

.id{
  font-size: 16px;
  text-align: left;
  color: #ffffff;
}

@media (max-width: 990px) {

}

@media (max-width: 700px) {
  .separate{
    display: block;
    justify-content: space-around;
  }
}

@media (max-width: 500px) {
  .section-2-alpha{
    margin-left: unset;
    padding: 20px 20px;
    width: 100%;
    max-width: 500px;
  }
  .section-1-alpha{
    margin-left: unset;
    padding: 20px 20px;
    width: 100%;
    max-width: 500px;
  }
  .form-input{
    width: 100%;
  }
  .link-button{
    font-size: 10px;
  }
  .btn-alpha{
    margin-top: 8%;
  }
  .mobile{
    margin-left: unset;
    padding-left: unset;
    margin-top: 8%
  }
  .id{
    margin-left: unset;
    padding-left: unset;
  }
}

</style>
