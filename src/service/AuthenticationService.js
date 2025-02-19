import client  from "./BaseService";

export default {
  callLoginApi(payload) {
    return client.apiClient.post("login", payload);
  },
  callCreateUserApi(payload) {
    return client.apiClient.post("create-user", payload);
  },
  callUpdateUserApi(payload) {
    return client.apiClient.post("update-user", payload);
  },
  callDeleteUserApi(payload) {
    return client.apiClient.post("delete-user", payload);
  },
  callResetPasswordApi(payload) {
    return client.apiClient.post("reset-password", payload);
  },
  callReadUserByIdApi(payload) {
    return client.apiClient.post("read-user-by-id", payload);
  },
  callUpdateUserStatusApi(payload) {
    return client.apiClient.post("update-user-status", payload);
  },
  callSendTwoFactorApi(payload) {
    return client.apiClient.post("send-two-factor", payload);
  },
  callResendOtpApi(payload) {
    return client.apiClient.post("resend-otp", payload);
  },
  callAllUsersApi(){
    return client.apiClient.get("all-users",{})
  },
};
