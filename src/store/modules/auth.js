import AuthenticationRequest from "@/model/request/AuthenticationRequest";
import StoreUtils from "@/utility/StoreUtils";
import AuthenticationService from "@/service/AuthenticationService";
import AuthenticationResponse from "@/model/response/AuthenticationResponse";
// import RouterUtils from "@/utility/RouterUtils";
import router from '@/router'
import swal from "sweetalert";

export const state = {
  loading: false,
  userInfo: new AuthenticationResponse().login,
  token: null,
  adminUserId: null,
  signUpFormData: null,
  forgotPasswordFormData: null,
  readUserById: null,
  readAllUsers: [],
  bitcoinRate: null,
  isModalOpened: false,
};

export const getters = {
  getToken: (state) => {
    return state.token ? state.token : localStorage.token;
  },
  getUserInfo: (state) => {
    // console.log("getter getTok")
    return state.userInfo;
  },
  getAdminUserId: (state) => {
    return state.adminUserId;
  },
  getSignUpFormData: (state) => {
    return state.signUpFormData;
  },
  getForgotPasswordFormData: (state) => {
    return state.forgotPasswordFormData;
  },
  getReadUserById: (state) => {
    return state.readUserById;
  },
  getReadAllUsers: (state) => {
    return state.readAllUsers;
  },
  getBitcoinRate: (state) => {
    return state.bitcoinRate;
  },
  getIsModalOpened: (state) => {
    return state.isModalOpened;
  },
};

export const mutations = {
  updateLoading(state, payload){
    state.loading = payload
  },
  updateUserInfo(state, payload){
    state.userInfo = payload
  },
  updateToken(state, payload){
    state.token = payload
  },
  updateAdminUserId(state, payload){
    state.adminUserId = payload
  },
  updateSignUpFormData(state, payload){
    state.signUpFormData = payload
  },
  updateForgotPasswordFormData(state, payload){
    state.forgotPasswordFormData = payload
  },
  updateReadUserById(state, payload){
    state.readUserById = payload
  },
  updateReadAllUsers(state, payload){
    state.readAllUsers = payload
  },
  updateBitcoinRate(state, payload){
    state.bitcoinRate = payload
  },
  updateIsModalOpened(state, payload){
    state.isModalOpened = payload
  },
};

export const actions = {
  // eslint-disable-next-line no-empty-pattern
  login({}, payload = new AuthenticationRequest().login){
    StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, true)
    return AuthenticationService.callLoginApi(payload).then(async response => {
      StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
      let responseData = response.data

      if (responseData.responseCode === "00") {
        // swal("Success",responseData.responseMessage, 'success')
        //     .then(() => {
        //
        //     })
        await StoreUtils.commit(StoreUtils.mutations.auth.updateUserInfo, responseData)
        // StoreUtils.commit(StoreUtils.mutations.auth.updateToken, responseData.token)
        await StoreUtils.commit(StoreUtils.mutations.auth.updateUserInfo, responseData)
        await StoreUtils.dispatch(StoreUtils.actions.trade.readUserTrade, {
          userId: responseData.user.userId
        })
        localStorage.userId = responseData.user.userId
        await router.push("/login-success")
      } else {
        swal("Error", responseData.message, 'error').then(r => console.log(r))
      }

    }).catch(error=>{
      console.log(error)
      StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
    })
  },

  // eslint-disable-next-line no-empty-pattern
  createUser({}, payload = new AuthenticationRequest().createUser){
    StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, true)
    return AuthenticationService.callCreateUserApi(payload).then(response=>{
      StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
      let responseData = response.data
      if (responseData.responseCode === "00"){
        router.push("/email-auth")
        // swal("Success",responseData.responseMessage, 'success')
        //     .then(() => {
        //   // RouterUtils.navigateTo(RouterUtils.routes.authentication.verifyEmailAddress.name)
        // })
      }else{
        swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
      }
    }).catch(error=>{
      console.log(error)
      StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
    })
  },


    // eslint-disable-next-line no-empty-pattern
      updateUser({}, payload = new AuthenticationRequest().updateUser){
        StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, true)
        return AuthenticationService.callUpdateUserApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === "00"){
                swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
        })
    },

  // eslint-disable-next-line no-empty-pattern
  updateUserStatus({}, payload = new AuthenticationRequest().updateUserStatus){
    StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, true)
    return AuthenticationService.callUpdateUserStatusApi(payload).then(response=>{
      StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
      let responseData = response.data
      if (responseData.responseCode === "00"){
        swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
      }else{
        swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
      }
    }).catch(error=>{
      console.log(error)
      StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
    })
  },

  // eslint-disable-next-line no-empty-pattern
  deleteUser({}, payload = new AuthenticationRequest().deleteUser){
    StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, true)
    return AuthenticationService.callDeleteUserApi(payload).then(response=>{
      StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
      let responseData = response.data
      if (responseData.responseCode === "00"){
        swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
      }else{
        swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
      }
    }).catch(error=>{
      console.log(error)
      StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
    })
  },

  // eslint-disable-next-line no-empty-pattern
  resetPassword({}, payload = new AuthenticationRequest().resetPassword){
    StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, true)
    return AuthenticationService.callResetPasswordApi(payload).then(response=>{
      StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
      let responseData = response.data
      if (responseData.responseCode === "00"){
        swal("Success",responseData.responseMessage, 'success').then(() => {
          // RouterUtils.navigateTo(RouterUtils.routes.auth.login)
        })

      }else{
        swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
      }
    }).catch(error=>{
      console.log(error)
      StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
    })
  },

  //eslint-disable-next-line no-empty-pattern
  readReadUserById({}, payload = new AuthenticationRequest().readUserById){
    StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, true)
    return AuthenticationService.callReadUserByIdApi(payload).then(response=>{
      StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
      let responseData = response.data
      if (responseData.responseCode === '00'){
        StoreUtils.commit(StoreUtils.mutations.auth.updateReadUserById, responseData)
      }else{
        // swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
      }
    }).catch(error=>{
      console.log(error)
      StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
    })
  },

  // eslint-disable-next-line no-empty-pattern
  resendOtp({}, payload = new AuthenticationRequest().resendOtp){
    StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, true)
    return AuthenticationService.callResendOtpApi(payload).then(response=>{
      StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
      let responseData = response.data
      if (responseData.responseCode === "00"){
        swal("Success","OTP sent successfully", 'success').then(() => {
          // RouterUtils.navigateTo(RouterUtils.routes.auth.forgotPasswordVerifyEmail.name)
        })

      }else{
        swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
      }
    }).catch(error=>{
      console.log(error)
      StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
    })
  },

  // eslint-disable-next-line no-empty-pattern
  sendTwoFactor({}, payload = new AuthenticationRequest().sendTwoFactor){
    StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, true)
    return AuthenticationService.callSendTwoFactorApi(payload).then(response=>{
      StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
      let responseData = response.data
      if (responseData.responseCode === "00"){
        swal("Success",responseData.responseMessage, 'success').then(() => {
          // RouterUtils.navigateTo(RouterUtils.routes.auth.forgotPasswordVerifyEmail.name)
        })

      }else{
        swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
      }
    }).catch(error=>{
      console.log(error)
      StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
    })
  },



  //eslint-disable-next-line no-empty-pattern
  allUsers({}, payload = {}){
    StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, true)
    return AuthenticationService.callAllUsersApi(payload).then(response=>{
      StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
      let responseData = response.data
      // if (responseData.responseCode === '00'){
      //   StoreUtils.commit(StoreUtils.mutations.auth.updateReadAllUsers, responseData)
      // }else{
      //   // RouterUtils.navigateTo(RouterUtils.routes.authentication.login.name)
      //   // this.$router.push("/login")
      //   console.log()
      // }
      StoreUtils.commit(StoreUtils.mutations.auth.updateReadAllUsers, responseData)
    }).catch(error=>{
      console.log(error)
      StoreUtils.commit(StoreUtils.mutations.auth.updateLoading, false)
    })
  }
};
