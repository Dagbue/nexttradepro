import client  from "./BaseService";

export default {
    callCreateTradeBotApi(payload) {
        return client.apiClient.post("create-tradebot", payload);
    },
    callUpdateTradeBotApi(payload) {
        return client.apiClient.post("update-tradebot", payload);
    },
    callDeleteTradeBotApi(payload){
        return client.apiClient.post("delete-tradebot",payload)
    },
    callReadTradeBotByIdApi(payload){
        return client.apiClient.post("read-tradebot-by-id",payload)
    },
    callReadUserTradeBotApi(payload){
        return client.apiClient.post("read-user-tradebot",payload)
    },
    callUpdateTradeBotStatusApi(payload){
        return client.apiClient.post("update-tradebot-status",payload)
    },
    callReadAllTradeBotApi(){
        return client.apiClient.get("all-user-tradebot", {})
    },
};