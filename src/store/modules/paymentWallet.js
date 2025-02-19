import swal from "sweetalert";
import StoreUtils from "@/utility/StoreUtils";
import PaymentWalletResponse from "@/model/response/PaymentWalletResponse";
import PaymentWalletRequest from "@/model/request/PaymentWalletRequest";
import paymentWalletService from "@/service/PaymentWalletService";


export const state = {
    loading: false,
    paymentWallet: null,
    allPaymentWallet: new PaymentWalletResponse().readAllWallets,
    readPaymentWalletById: new PaymentWalletResponse().readPaymentWalletById,
};

export const getters = {
    getPaymentWallet: (state) => {
        return state.paymentWallet;
    },
    getAllPaymentWallet: (state) => {
        return state.allPaymentWallet;
    },
    getReadPaymentWalletById: (state) => {
        return state.readPaymentWalletById;
    },
};


export const mutations = {
    updateLoading(state, payload){
        state.loading = payload
    },
    updatePaymentWallet(state, payload){
        state.paymentWallet = payload
    },
    updateAllPaymentWallet(state, payload){
        state.allPaymentWallet = payload
    },
    updateReadPaymentWalletById(state, payload){
        state.readPaymentWalletById = payload
    },
};

export const actions = {
    // eslint-disable-next-line no-empty-pattern
    paymentWalletCreate({}, payload = new PaymentWalletRequest().createPaymentWallet){
        StoreUtils.commit(StoreUtils.mutations.paymentWallet.updateLoading, true)
        return paymentWalletService.callCreatePaymentWalletApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.paymentWallet.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === "00"){
                swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
                StoreUtils.commit(StoreUtils.mutations.paymentWallet.updatePaymentWallet, responseData)
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.paymentWallet.updateLoading, false)
        })
    },

    // eslint-disable-next-line no-empty-pattern
    updatePaymentWallet({}, payload = new PaymentWalletRequest().updatePaymentWallet){
        StoreUtils.commit(StoreUtils.mutations.paymentWallet.updateLoading, true)
        return paymentWalletService.callUpdatePaymentWalletApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.paymentWallet.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === "00"){
                swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.paymentWallet.updateLoading, false)
        })
    },

    // eslint-disable-next-line no-empty-pattern
    deletePaymentWallet({}, payload = new PaymentWalletRequest().deletePaymentWallet){
        StoreUtils.commit(StoreUtils.mutations.paymentWallet.updateLoading, true)
        return paymentWalletService.callDeletePaymentWalletApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.paymentWallet.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === "00"){
                swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.paymentWallet.updateLoading, false)
        })
    },

    //eslint-disable-next-line no-empty-pattern
    readAllPaymentWallet({}, payload = {}){
        StoreUtils.commit(StoreUtils.mutations.paymentWallet.updateLoading, true)
        return paymentWalletService.callReadAllTradeApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.paymentWallet.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === '00'){
                StoreUtils.commit(StoreUtils.mutations.paymentWallet.updateAllPaymentWallet, responseData)
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.paymentWallet.updateLoading, false)
        })
    },

    //eslint-disable-next-line no-empty-pattern
    readPaymentWalletById({}, payload = new PaymentWalletRequest().readPaymentWalletById){
        StoreUtils.commit(StoreUtils.mutations.paymentWallet.updateLoading, true)
        return paymentWalletService.callReadPaymentWalletByIdApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.paymentWallet.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === '00'){
                StoreUtils.commit(StoreUtils.mutations.paymentWallet.updateReadPaymentWalletById, responseData)
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.paymentWallet.updateLoading, false)
        })
    },

};