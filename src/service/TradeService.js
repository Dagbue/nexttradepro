import client  from "./BaseService";

export default {
    callCreateTradeApi(payload) {
        return client.apiClient.post("create-trade", payload);
    },
    callUpdateTradeApi(payload) {
        return client.apiClient.post("update-trade", payload);
    },
    callDeleteTradeApi(payload){
        return client.apiClient.post("delete-trade",payload)
    },
    callReadTradeByIdApi(payload){
        return client.apiClient.post("read-trade-by-id",payload)
    },
    callReadUserTradeApi(payload){
        return client.apiClient.post("user-trades",payload)
    },
    callUpdateTradeStatusApi(payload){
        return client.apiClient.post("update-trade-status",payload)
    },
    callReadAllTradeApi(){
        return client.apiClient.get("all-user-trades", {})
    },
};