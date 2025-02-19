import store from "../store/store";

class StoreUtils {
  static actions = {
    auth: {
      login: "auth/login",
      createUser: "auth/createUser",
      updateUser: "auth/updateUser",
      deleteUser: "auth/deleteUser",
      resetPassword: "auth/resetPassword",
      readReadUserById: "auth/readReadUserById",
      allUsers: "auth/allUsers",
      updateUserStatus: "auth/updateUserStatus",
      resendOtp: "auth/resendOtp",
      sendTwoFactor: "auth/sendTwoFactor",
    },
    deposit: {
      depositCreate: "deposit/depositCreate",
      updateDeposit: "deposit/updateDeposit",
      deleteDeposit: "deposit/deleteDeposit",
      readAllDeposit: "deposit/readAllDeposit",
      readDepositById: "deposit/readDepositById",
      readUserDeposit: "deposit/readUserDeposit",
      updateDepositStatus: "deposit/updateDepositStatus",
    },
    withdrawal: {
      withdrawalCreate: "withdrawal/withdrawalCreate",
      withdrawalUpdate: "withdrawal/withdrawalUpdate",
      deleteWithdrawal: "withdrawal/deleteWithdrawal",
      readAllWithdrawal: "withdrawal/readAllWithdrawal",
      readWithdrawalById: "withdrawal/readWithdrawalById",
      readUserWithdrawal: "withdrawal/readUserWithdrawal",
      updateWithdrawalStatus: "withdrawal/updateWithdrawalStatus",
    },
    trade: {
      tradeCreate: "trade/tradeCreate",
      updateTrade: "trade/updateTrade",
      deleteTrade: "trade/deleteTrade",
      readAllTrade: "trade/readAllTrade",
      readTradeById: "trade/readTradeById",
      readUserTrade: "trade/readUserTrade",
      updateTradeStatus: "trade/updateTradeStatus",
    },
    paymentWallet: {
      paymentWalletCreate: "paymentWallet/paymentWalletCreate",
      updatePaymentWallet: "paymentWallet/updatePaymentWallet",
      deletePaymentWallet: "paymentWallet/deletePaymentWallet",
      readAllPaymentWallet: "paymentWallet/readAllPaymentWallet",
      readPaymentWalletById: "paymentWallet/readPaymentWalletById",
    },
    sbucket: {
      uploadEncodedFile: "sbucket/uploadEncodedFile",
    },
  };

  static mutations = {
    auth: {
      updateLoading: "auth/updateLoading",
      updateUserInfo: "auth/updateUserInfo",
      updateToken: "auth/updateToken",
      updateScreen: "auth/updateScreen",
      updateAdminUserId: "auth/updateAdminUserId",
      updateSignUpFormData: "auth/updateSignUpFormData",
      updateForgotPasswordFormData: "auth/updateForgotPasswordFormData",
      updateReadUserById: "auth/updateReadUserById",
      updateReadAllUsers: "auth/updateReadAllUsers",
      updateBitcoinRate: "auth/updateBitcoinRate",
      updateIsModalOpened: "auth/updateIsModalOpened",
    },
    deposit: {
      updateLoading: "deposit/updateLoading",
      updateDeposit: "deposit/updateDeposit",
      updateAllDeposit: "deposit/updateAllDeposit",
      updateReadDepositById: "deposit/updateReadDepositById",
      updateReadUserDeposit: "deposit/updateReadUserDeposit",
    },
    withdrawal: {
      updateLoading: "withdrawal/updateLoading",
      updateWithdrawal: "withdrawal/updateWithdrawal",
      updateAllWithdrawal: "withdrawal/updateAllWithdrawal",
      updateReadWithdrawalById: "withdrawal/updateReadWithdrawalById",
      updateReadUserWithdrawal: "withdrawal/updateReadUserWithdrawal",
    },
    trade: {
      updateLoading: "trade/updateLoading",
      updateTrade: "trade/updateTrade",
      updateAllTrade: "trade/updateAllTrade",
      updateReadTradeById: "trade/updateReadTradeById",
      updateReadUserTrade: "trade/updateReadUserTrade",
    },
    paymentWallet: {
      updateLoading: "paymentWallet/updateLoading",
      updatePaymentWallet: "paymentWallet/updatePaymentWallet",
      updateAllPaymentWallet: "paymentWallet/updateAllPaymentWallet",
      updateReadPaymentWalletById: "paymentWallet/updateReadPaymentWalletById",
    },
    sbucket: {
      updateS3BucketLoading: "sbucket/updateS3BucketLoading",
    },
  };

  static getters = {
    auth: {
      getUserInfo: "auth/getUserInfo",
      getToken: "auth/getToken",
      getAdminUserId: "auth/getAdminUserId",
      getSignUpFormData: "auth/getSignUpFormData",
      getForgotPasswordFormData: "auth/getForgotPasswordFormData",
      getReadUserById: "auth/getReadUserById",
      getReadAllUsers: "auth/getReadAllUsers",
      getBitcoinRate: "auth/getBitcoinRate",
      getIsModalOpened: "auth/getIsModalOpened",
    },
    deposit: {
      getDeposit: "deposit/getDeposit",
      getAllDeposit: "deposit/getAllDeposit",
      getReadDepositById: "deposit/getReadDepositById",
      getReadUserDeposit: "deposit/getReadUserDeposit",
    },
    withdrawal: {
      getWithdrawal: "withdrawal/getWithdrawal",
      getAllWithdrawal: "withdrawal/getAllWithdrawal",
      getReadWithdrawalById: "withdrawal/getReadWithdrawalById",
      getReadUserWithdrawal: "withdrawal/getReadUserWithdrawal",
    },
    trade: {
      getTrade: "trade/getTrade",
      getAllTrade: "trade/getAllTrade",
      getReadTradeById: "trade/getReadTradeById",
      getReadUserTrade: "trade/getReadUserTrade",
    },
    paymentWallet: {
      getPaymentWallet: "paymentWallet/getPaymentWallet",
      getAllPaymentWallet: "paymentWallet/getAllPaymentWallet",
      getReadPaymentWalletById: "paymentWallet/getReadPaymentWalletById",
    },
  };

  static dispatch(actionToDispatch, payload) {
    console.log(payload)
    console.log(actionToDispatch)
    return store.dispatch(actionToDispatch, payload, { root: true });
  }

  static commit(mutationToCommit, payload) {
    return store.commit(mutationToCommit, payload, { root: true });
  }

  static rootGetters(getter, payload) {
    if (payload) {
      return store.getters[getter](payload);
    } else {
      return store.getters[getter];
    }
  }
}

export default StoreUtils;
