<template>
  <div class="alpha">

    <div style="color: white;" class="section-1-alpha">
      <p class="text-1">User Profile</p>
      <hr/>
      <div class="section-1-part-1">
        <img v-if="UserDetails.user.displayPicture === ''" src="@/assets/Avatar.svg" alt="logo"  class="avatar"/>
        <img v-else :src="UserDetails.user.displayPicture" alt="displayPicture"  class="displayPicture"/>
        <div>
          <p style="text-align: left">{{UserDetails.user.firstName}} {{UserDetails.user.lastName}}</p>
          <p style="text-align: left">{{UserDetails.user.email}}</p>
        </div>
      </div>

      <div class="referral-part">
        <input type="text" v-model="reflink" class="link-box"/>
        <button class="link-button" @click="copyToClipboard('https://www.nexttradepro.com/register')">Copy Link</button>
      </div>
    </div>


    <div style="color: white;" class="section-2-alpha">
      <p class="text-1">Personal Information</p>
      <hr/>
      <div class="form">
        <form @submit.prevent="updateDetails">

          <div class="separate">

            <div class="space">
              <label>First Name</label>
              <input type="text" v-model="firstName"   class="form-input"/>
            </div>

            <div class="space">
              <label>Last Name</label>
              <input type="text" v-model="lastName"  class="form-input"/>
            </div>

          </div>

          <div class="separate">

            <div class="space">
              <label>Email</label>
              <input type="text" v-model="email"  class="form-input"/>
            </div>

            <div class="space">
              <label>Country</label>
              <input type="text" v-model="country"  class="form-input"/>
            </div>

          </div>

          <div class="separate">

            <div class="space">
              <label>Address</label>
              <input type="text" v-model="address"  class="form-input"/>
            </div>

            <div class="space">
              <label>Phone Number</label>
              <input type="text" v-model="phoneNumber"  class="form-input"/>
            </div>

          </div>


          <div v-if="this.url === ''" class="separate">
            <div class="form-group">
              <label class="id">Identification Card (Upload front of ID card for verification)</label>
              <input
                  type="file"
                  id="files"
                  name="files"
                  @change="uploadFile"
                  accept="image/*"
                  ref="file"
                  placeholder="Identification Card (Upload ID card for verification)"
                  required
              />
            </div>

            <div class="form-group">
              <label class="id">Identification Card (Upload back of ID card for verification)</label>
              <input
                  type="file"
                  id="files2"
                  name="files"
                  @change="uploadFile2"
                  accept="image/*"
                  ref="file2"
                  placeholder="Identification Card (Upload ID card for verification)"
                  required
              />
            </div>
          </div>

          <div v-else class="separate left">
            <div style="display:block;" class="form-group">
              <p style="text-align: left" class="id">Front ID card</p>
              <a style="text-align: left;font-size: 19px;float: left" :href="url" >view</a>
            </div>

            <div style="display:block;" class="form-group">
              <p style="text-align: left;" class="id mobile">Back ID card</p>
              <a style="text-align: left;font-size: 19px;float: left" :href="url2" >view</a>
            </div>
          </div>


          <div class="btn-alpha">
<!--            <p class="btn">Update Details</p>-->
            <base-button
                :loading="loading"

                style="background-color: #5d78ff; border: 1px solid #5d78ff;"
            >Update Details</base-button>
          </div>

        </form>

      </div>
    </div>

  </div>
</template>

<script>


import StoreUtils from "@/utility/StoreUtils";
import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";
import {mapState} from "vuex";
import S3Request from "@/model/request/S3Request";

export default {
  name: "DashBoardUpdateAccount",
  components: {BaseButton},
  // components: {UpdateAccountModal},
  data () {
    return {
      contacts: [],
      dialogIsVisible: false,
      firstName: "",
      lastName: "",
      email: "",
      country:"",
      address: "",
      phoneNumber: "",
      reflink: "https://www.nexttradepro.com/register",
      userId: "",
      userInfo: "",
      base64: "",
      uploadmodel: S3Request.prototype.uploadBase64(),
      url: "",
      base642: "",
      uploadmodel2: S3Request.prototype.uploadBase64(),
      url2: "",
    }
  },
  computed:{
    ...mapState(["sbucket"]),
    ...mapState({
      loading: state => state.auth.loading,
      loading2: state => state.sbucket.s3bucketLoading,
      auth: state => state.auth,
    }),
    UserDetails() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)
    },
  },

  methods: {
    uploadFile() {
      let input = this.$refs.file;
      let files = input.files;
      //console.log(size);
      const reader = new FileReader();
      try {
        reader.onload = (e) => {
          this.base64 = e.target.result;
          this.uploadOfficerImage();
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      } catch (e) {
        console.warn(e.message);
      }
    },
    async uploadOfficerImage() {

      this.uploadmodel.username = `${
          this.auth.userInfo.userFirstName + this.auth.userInfo.userLastName
      }_${Date.now()}`;
      this.uploadmodel.base64 = this.base64;
      await StoreUtils.dispatch(StoreUtils.actions.sbucket.uploadEncodedFile, this.uploadmodel, { root: true });
      this.url = this.sbucket.s3bucketResponse.url;

    },

    uploadFile2() {
      let input = this.$refs.file2;
      let files = input.files;
      //console.log(size);
      const reader = new FileReader();
      try {
        reader.onload = (e) => {
          this.base642 = e.target.result;
          this.uploadOfficerImage2();
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      } catch (e) {
        console.warn(e.message);
      }
    },
    async uploadOfficerImage2() {
      // this.showLoader = true;
      this.uploadmodel2.username = `${
          this.auth.userInfo.userFirstName + this.auth.userInfo.userLastName
      }_${Date.now()}`;
      this.uploadmodel2.base64 = this.base642;
      // await this.$store.dispatch("sbucket/uploadEncodedFile", this.uploadmodel, { root: true });
      await StoreUtils.dispatch(
          StoreUtils.actions.sbucket.uploadEncodedFile,
          this.uploadmodel2,
          { root: true }
      );
      this.url2 = this.sbucket.s3bucketResponse.url;
      // this.showLoader = false;
    },

    copyToClipboard(content) {
      const textarea = document.createElement('textarea')
      textarea.value = content
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    populateForm() {
      this.firstName = this.userInfo.firstName;
      this.lastName = this.userInfo.lastName;
      this.email = this.userInfo.email;
      this.country = this.userInfo.country;
      this.phoneNumber = this.userInfo.phoneNumber;
      this.address = this.userInfo.address;
      this.url = this.userInfo.frontId;
      this.url2 = this.userInfo.backId;
    },

    updateDetails() {
      StoreUtils.dispatch(StoreUtils.actions.auth.updateUser, {
        userId: this.userId,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        country: this.country,
        address: this.address,
        // frontId: this.url,
        // backId: this.url2,
      })
    }
  },

  beforeMount() {
    StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
      userId : localStorage.getItem('userId')
    })

    StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)
    this.populateForm();
    this.generateRandomString()
    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }
  },

  created() {
    StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
      userId : localStorage.getItem('userId')
    })

    StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)
    this.populateForm();
    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }
  },

  mounted() {
    StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
      userId : localStorage.getItem('userId')
    })

    StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)
    this.populateForm();
    this.generateRandomString()

    this.userId = localStorage.getItem('userId')

    // Retrieve the object from local storage
    const storedObject = localStorage.getItem('userInfo');

    if (storedObject) {
      this.userInfo = JSON.parse(storedObject);
    }
  }

}
</script>

<style scoped>
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
  max-width: 500px;
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
