import client  from "./BaseService";

export default {
    callCreateDepositApi(payload) {
        return client.apiClient.post("create-deposit", payload);
    },
    callUpdateDepositApi(payload) {
        return client.apiClient.post("update-deposit", payload);
    },
    callDeleteDepositApi(payload){
        return client.apiClient.post("delete-deposit",payload)
    },
    callReadDepositByIdApi(payload){
        return client.apiClient.post("read-deposit-by-id",payload)
    },
    callReadUserDepositApi(payload){
        return client.apiClient.post("read-user-deposit",payload)
    },
    callUpdateDepositStatusApi(payload){
        return client.apiClient.post("update-deposit-status",payload)
    },
    callReadAllDepositApi(){
        return client.apiClient.get("read-all-user-deposit", {})
    },
};