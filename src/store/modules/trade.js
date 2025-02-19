import swal from "sweetalert";
import StoreUtils from "@/utility/StoreUtils";
import TradeRequest from "@/model/request/TradeRequest";
import TradeResponse from "@/model/response/TradeResponse";
import TradeService from "@/service/TradeService";


export const state = {
    loading: false,
    trade: null,
    allTrade: new TradeResponse().readAllTrade,
    readTradeById: new TradeResponse().readTradeById,
    readUserTrade: new TradeResponse().readUserTrade,
};

export const getters = {
    getTrade: (state) => {
        return state.trade;
    },
    getAllTrade: (state) => {
        return state.allTrade;
    },
    getReadTradeById: (state) => {
        return state.readTradeById;
    },
    getReadUserTrade: (state) => {
        return state.readUserTrade;
    },
};


export const mutations = {
    updateLoading(state, payload){
        state.loading = payload
    },
    updateTrade(state, payload){
        state.trade = payload
    },
    updateAllTrade(state, payload){
        state.allTrade = payload
    },
    updateReadTradeById(state, payload){
        state.readTradeById = payload
    },
    updateReadUserTrade(state, payload){
        state.readUserTrade = payload
    },
};

export const actions = {
    // eslint-disable-next-line no-empty-pattern
    tradeCreate({}, payload = new TradeRequest().createTrade){
        StoreUtils.commit(StoreUtils.mutations.trade.updateLoading, true)
        return TradeService.callCreateTradeApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.trade.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === "00"){
                swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
                StoreUtils.commit(StoreUtils.mutations.trade.updateTrade, responseData)
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.trade.updateLoading, false)
        })
    },

    // eslint-disable-next-line no-empty-pattern
    updateTrade({}, payload = new TradeRequest().updateTrade){
        StoreUtils.commit(StoreUtils.mutations.trade.updateLoading, true)
        return TradeService.callUpdateTradeApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.trade.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === "00"){
                swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.trade.updateLoading, false)
        })
    },

    // eslint-disable-next-line no-empty-pattern
    updateTradeStatus({}, payload = new TradeRequest().updateTradeStatus){
        StoreUtils.commit(StoreUtils.mutations.trade.updateLoading, true)
        return TradeService.callUpdateTradeStatusApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.trade.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === "00"){
                swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.trade.updateLoading, false)
        })
    },

    // eslint-disable-next-line no-empty-pattern
    deleteTrade({}, payload = new TradeRequest().deleteTrade){
        StoreUtils.commit(StoreUtils.mutations.trade.updateLoading, true)
        return TradeService.callDeleteTradeApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.trade.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === "00"){
                swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.trade.updateLoading, false)
        })
    },

    //eslint-disable-next-line no-empty-pattern
    readAllTrade({}, payload = {}){
        StoreUtils.commit(StoreUtils.mutations.trade.updateLoading, true)
        return TradeService.callReadAllTradeApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.trade.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === '00'){
                StoreUtils.commit(StoreUtils.mutations.trade.updateAllTrade, responseData)
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.trade.updateLoading, false)
        })
    },

    //eslint-disable-next-line no-empty-pattern
    readTradeById({}, payload = new TradeRequest().readTradeById){
        StoreUtils.commit(StoreUtils.mutations.trade.updateLoading, true)
        return TradeService.callReadTradeByIdApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.trade.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === '00'){
                StoreUtils.commit(StoreUtils.mutations.trade.updateReadTradeById, responseData)
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.trade.updateLoading, false)
        })
    },



    // eslint-disable-next-line no-empty-pattern
    readUserTrade({}, payload = new TradeRequest().readUserTrade){
        StoreUtils.commit(StoreUtils.mutations.trade.updateLoading, true)
        return TradeService.callReadUserTradeApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.trade.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === '00'){
                StoreUtils.commit(StoreUtils.mutations.trade.updateReadUserTrade, responseData)
            }else{
                // swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.trade.updateLoading, false)
        })
    },


};