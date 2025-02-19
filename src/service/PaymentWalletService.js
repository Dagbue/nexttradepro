import client  from "./BaseService";

export default {
    callCreatePaymentWalletApi(payload) {
        return client.apiClient.post("create-wallet", payload);
    },
    callUpdatePaymentWalletApi(payload) {
        return client.apiClient.post("update-wallet", payload);
    },
    callDeletePaymentWalletApi(payload){
        return client.apiClient.post("delete-wallet",payload)
    },
    callReadPaymentWalletByIdApi(payload){
        return client.apiClient.post("read-wallet-by-id",payload)
    },
    callReadAllTradeApi(){
        return client.apiClient.get("all-wallets", {})
    },
};