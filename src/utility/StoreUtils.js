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
    expert: {
      expertCreate: "expert/expertCreate",
      updateExpert: "expert/updateExpert",
      updateExpertStatus: "expert/updateExpertStatus",
      deleteExpert: "expert/deleteExpert",
      readAllExpert: "expert/readAllExpert",
      readExpertById: "expert/readExpertById",
      readUserExpert: "expert/readUserExpert",
    },
    tradeBot: {
      tradeBotCreate: "tradeBot/tradeBotCreate",
      updateTradeBot: "tradeBot/updateTradeBot",
      updateTradeBotStatus: "tradeBot/updateTradeBotStatus",
      deleteTradeBot: "tradeBot/deleteTradeBot",
      readAllTradeBot: "tradeBot/readAllTradeBot",
      readTradeBotById: "tradeBot/readTradeBotById",
      readUserTradeBot: "tradeBot/readUserTradeBot",
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
      updatePlaceTradeStatus: "auth/updatePlaceTradeStatus",
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
    expert: {
      updateLoading: "expert/updateLoading",
      updateExpert: "expert/updateExpert",
      updateAllExpert: "expert/updateAllExpert",
      updateReadExpertById: "expert/updateReadExpertById",
      updateReadUserExpert: "expert/updateReadUserExpert",
    },
    tradeBot: {
      updateLoading: "tradeBot/updateLoading",
      updateTradeBot: "tradeBot/updateTradeBot",
      updateAllTradeBot: "tradeBot/updateAllTradeBot",
      updateReadTradeBotById: "tradeBot/updateReadTradeBotById",
      updateReadUserTradeBot: "tradeBot/updateReadUserTradeBot",
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
      getPlaceTradeStatus: "auth/getPlaceTradeStatus",
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
    expert: {
      getExpert: "expert/getExpert",
      getAllExpert: "expert/getAllExpert",
      getReadExpertById: "expert/getReadExpertById",
      getReadUserExpert: "expert/getReadUserExpert",
    },
    tradeBot: {
      getTradeBot: "tradeBot/getTradeBot",
      getAllTradeBot: "tradeBot/getAllTradeBot",
      getReadTradeBotById: "tradeBot/getReadTradeBotById",
      getReadUserTradeBot: "tradeBot/getReadUserTradeBot",
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
