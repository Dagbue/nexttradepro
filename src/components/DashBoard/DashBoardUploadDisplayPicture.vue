<template>
  <div class="alpha">

    <form style="color: white;" class="section-1-alpha" @submit.prevent="updateDetails">
      <p class="text-1">User Profile</p>
      <hr/>
      <div class="section-1-part-1">
        <img v-if="UserDetails.user.displayPicture === ''" src="@/assets/Avatar.svg" alt="logo"  class="avatar"/>
        <img v-else :src="UserDetails.user.displayPicture" alt="displayPicture"  class="displayPicture"/>
        <div>
          <p style="text-align: left;padding-bottom: 5px;">{{UserDetails.user.firstName}} {{UserDetails.user.lastName}}</p>
          <p style="text-align: left">{{UserDetails.user.email}}</p>
        </div>
      </div>

      <div class="referral-part">
        <input
            class="link-box"
            type="file"
            id="files"
            name="files"
            @change="uploadFile"
            accept="image/*"
            ref="file"
            required
        />
        <button
            class="link-button"
        >Upload</button>
      </div>
      </form>
    </div>


</template>

<script>
import {mapState} from "vuex";
import StoreUtils from "@/utility/StoreUtils";
import S3Request from "@/model/request/S3Request";

export default {
  name: "DashBoardUploadDisplayPicture",
  data () {
    return {
      userId: "",
      userInfo: "",
      base64: "",
      uploadmodel: S3Request.prototype.uploadBase64(),
      url: "",
    }
  },
  computed:{
    ...mapState(["sbucket"]),
    ...mapState({
      loading: state => state.auth.loading,
      auth: state => state.auth,
    }),
    UserDetails() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)
    },
  },

  methods: {
    async updateDetails() {
      await StoreUtils.dispatch(StoreUtils.actions.auth.updateUser, {
        userId: this.userId,
        displayPicture: this.url,
      });
      await StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
        userId: this.userId,
      })
      await StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)
      this.$refs.file = '';
    },

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

  },

  beforeMount() {
    StoreUtils.dispatch(StoreUtils.actions.auth.readReadUserById, {
      userId : localStorage.getItem('userId')
    })

    StoreUtils.rootGetters(StoreUtils.getters.auth.getReadUserById)

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
.alpha{
  display: flex;
  flex-direction: column;
}
.section-1-alpha{
  margin-top: 4%;
  float: left;
  margin-left: 20px;
  background-color: #0f171c;
  padding: 30px 40px;
  width: 100%;
  max-width: 550px;
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
  width: 370px;
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

label{
  padding-bottom: 5px;
  padding-top: 25px;
}

.displayPicture{
  width: 13%;
  border-radius: 100px;
  margin-right: 5px;
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

  .link-box{
    width: 100%;
  }
}
</style>