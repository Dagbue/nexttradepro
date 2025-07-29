import client  from "./BaseService";

export default {
    callCreateExpertApi(payload) {
        return client.apiClient.post("create-expert", payload);
    },
    callUpdateExpertApi(payload) {
        return client.apiClient.post("update-expert", payload);
    },
    callDeleteExpertApi(payload){
        return client.apiClient.post("delete-expert",payload)
    },
    callReadExpertByIdApi(payload){
        return client.apiClient.post("read-expert-by-id",payload)
    },
    callReadUserExpertApi(payload){
        return client.apiClient.post("read-user-expert",payload)
    },
    callUpdateExpertStatusApi(payload){
        return client.apiClient.post("update-expert-status",payload)
    },
    callReadAllExpertApi(){
        return client.apiClient.get("all-user-expert", {})
    },
};