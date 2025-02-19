import client  from "./BaseService";


export default {
    callCreateWithdrawalApi(payload) {
        return client.apiClient.post("create-withdrawals", payload);
    },
    callUpdateWithdrawalApi(payload) {
        return client.apiClient.post("update-withdrawals", payload);
    },
    callDeleteWithdrawalApi(payload){
        return client.apiClient.post("delete-withdrawals",payload)
    },
    callReadWithdrawalByIdApi(payload){
        return client.apiClient.post("read-withdrawals-by-id",payload)
    },
    callReadUserWithdrawalApi(payload){
        return client.apiClient.post("read-user-withdrawals",payload)
    },
    callUpdateWithdrawalStatusApi(payload){
        return client.apiClient.post("update-withdrawal-status",payload)
    },
    callReadAllWithdrawalApi(){
        return client.apiClient.get("all-user-withdrawals", {})
    },
};