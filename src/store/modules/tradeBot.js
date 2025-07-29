import swal from "sweetalert";
import StoreUtils from "@/utility/StoreUtils";
import TradeBotService from "@/service/TradeBotService";
import TradeBotRequest from "@/model/request/TradeBotRequest";
import TradeBotResponse from "@/model/response/TradeBotResponse";




export const state = {
    loading: false,
    tradeBot: null,
    allTradeBot: new TradeBotResponse().readAllTradeBot,
    readTradeBotById: new TradeBotResponse().readTradeBotById,
    readUserTradeBot: new TradeBotResponse().readUserTradeBot,
};

export const getters = {
    getTradeBot: (state) => {
        return state.tradeBot;
    },
    getAllTradeBot: (state) => {
        return state.allTradeBot;
    },
    getReadTradeBotById: (state) => {
        return state.readTradeBotById;
    },
    getReadUserTradeBot: (state) => {
        return state.readUserTradeBot;
    },
};


export const mutations = {
    updateLoading(state, payload){
        state.loading = payload
    },
    updateTradeBot(state, payload){
        state.tradeBot = payload
    },
    updateAllTradeBot(state, payload){
        state.allTradeBot = payload
    },
    updateReadTradeBotById(state, payload){
        state.readTradeBotById = payload
    },
    updateReadUserTradeBot(state, payload){
        state.readUserTradeBot = payload
    },
};

export const actions = {
    // eslint-disable-next-line no-empty-pattern
    tradeBotCreate({}, payload = new TradeBotRequest().createTradeBot){
        StoreUtils.commit(StoreUtils.mutations.tradeBot.updateLoading, true)
        return TradeBotService.callCreateTradeBotApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.tradeBot.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === "00"){
                // swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
                StoreUtils.commit(StoreUtils.mutations.tradeBot.updateTradeBot, responseData)
                // router.push("/over-view")
                // router.push("/loan-dashboard")
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.tradeBot.updateLoading, false)
        })
    },

    // eslint-disable-next-line no-empty-pattern
    updateTradeBot({}, payload = new TradeBotRequest().updateTradeBot){
        StoreUtils.commit(StoreUtils.mutations.tradeBot.updateLoading, true)
        return TradeBotService.callUpdateTradeBotApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.tradeBot.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === "00"){
                swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.tradeBot.updateLoading, false)
        })
    },

    // eslint-disable-next-line no-empty-pattern
    updateTradeBotStatus({}, payload = new TradeBotRequest().updateTradeBotStatus){
        StoreUtils.commit(StoreUtils.mutations.tradeBot.updateLoading, true)
        return TradeBotService.callUpdateTradeBotStatusApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.tradeBot.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === "00"){
                swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.tradeBot.updateLoading, false)
        })
    },

    // eslint-disable-next-line no-empty-pattern
    deleteTradeBot({}, payload = new TradeBotRequest().deleteTradeBot){
        StoreUtils.commit(StoreUtils.mutations.tradeBot.updateLoading, true)
        return TradeBotService.callDeleteTradeBotApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.tradeBot.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === "00"){
                swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.tradeBot.updateLoading, false)
        })
    },

    //eslint-disable-next-line no-empty-pattern
    readAllTradeBot({}, payload = {}){
        StoreUtils.commit(StoreUtils.mutations.tradeBot.updateLoading, true)
        return TradeBotService.callReadAllTradeBotApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.tradeBot.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === '00'){
                StoreUtils.commit(StoreUtils.mutations.tradeBot.updateAllTradeBot, responseData)
            }else{
                // swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.tradeBot.updateLoading, false)
        })
    },

    //eslint-disable-next-line no-empty-pattern
    readTradeBotById({}, payload = new TradeBotRequest().readTradeBotById){
        StoreUtils.commit(StoreUtils.mutations.tradeBot.updateLoading, true)
        return TradeBotService.callReadTradeBotByIdApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.tradeBot.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === '00'){
                StoreUtils.commit(StoreUtils.mutations.tradeBot.updateReadTradeBotById, responseData)
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.tradeBot.updateLoading, false)
        })
    },

    //eslint-disable-next-line no-empty-pattern
    readUserTradeBot({}, payload = new TradeBotRequest().readUserTradeBot){
        StoreUtils.commit(StoreUtils.mutations.tradeBot.updateLoading, true)
        return TradeBotService.callReadUserTradeBotApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.tradeBot.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === '00'){
                StoreUtils.commit(StoreUtils.mutations.tradeBot.updateReadUserTradeBot, responseData)
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.tradeBot.updateLoading, false)
        })
    },


};