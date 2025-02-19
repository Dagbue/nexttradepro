import swal from "sweetalert";
import StoreUtils from "@/utility/StoreUtils";
import DepositService from "@/service/DepositService";
import DepositRequest from "@/model/request/DepositRequest";
import DepositResponse from "@/model/response/DepositResponse";


export const state = {
    loading: false,
    deposit: null,
    allDeposit: new DepositResponse().readAllDeposit,
    readDepositById: new DepositResponse().readDepositById,
    readUserDeposit: new DepositResponse().readUserDeposit,
};

export const getters = {
    getDeposit: (state) => {
        return state.deposit;
    },
    getAllDeposit: (state) => {
        return state.allDeposit;
    },
    getReadDepositById: (state) => {
        return state.readDepositById;
    },
    getReadUserDeposit: (state) => {
        return state.readUserDeposit;
    },
};


export const mutations = {
    updateLoading(state, payload){
        state.loading = payload
    },
    updateDeposit(state, payload){
        state.deposit = payload
    },
    updateAllDeposit(state, payload){
        state.allDeposit = payload
    },
    updateReadDepositById(state, payload){
        state.readDepositById = payload
    },
    updateReadUserDeposit(state, payload){
        state.readUserDeposit = payload
    },
};

export const actions = {
    // eslint-disable-next-line no-empty-pattern
    depositCreate({}, payload = new DepositRequest().createDeposit){
        StoreUtils.commit(StoreUtils.mutations.deposit.updateLoading, true)
        return DepositService.callCreateDepositApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.deposit.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === "00"){
                // swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
                StoreUtils.commit(StoreUtils.mutations.deposit.updateDeposit, responseData)
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.deposit.updateLoading, false)
        })
    },

    // eslint-disable-next-line no-empty-pattern
    updateDeposit({}, payload = new DepositRequest().updateDeposit){
        StoreUtils.commit(StoreUtils.mutations.deposit.updateLoading, true)
        return DepositService.callUpdateDepositApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.deposit.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === "00"){
                swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.deposit.updateLoading, false)
        })
    },

    // eslint-disable-next-line no-empty-pattern
    updateDepositStatus({}, payload = new DepositRequest().updateDepositStatus){
        StoreUtils.commit(StoreUtils.mutations.deposit.updateLoading, true)
        return DepositService.callUpdateDepositStatusApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.deposit.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === "00"){
                swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.deposit.updateLoading, false)
        })
    },

    // eslint-disable-next-line no-empty-pattern
    deleteDeposit({}, payload = new DepositRequest().deleteDeposit){
        StoreUtils.commit(StoreUtils.mutations.deposit.updateLoading, true)
        return DepositService.callDeleteDepositApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.deposit.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === "00"){
                swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.deposit.updateLoading, false)
        })
    },

    //eslint-disable-next-line no-empty-pattern
    readAllDeposit({}, payload = {}){
        StoreUtils.commit(StoreUtils.mutations.deposit.updateLoading, true)
        return DepositService.callReadAllDepositApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.deposit.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === '00'){
                StoreUtils.commit(StoreUtils.mutations.deposit.updateAllDeposit, responseData)
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.deposit.updateLoading, false)
        })
    },

    //eslint-disable-next-line no-empty-pattern
    readDepositById({}, payload = {}){
        StoreUtils.commit(StoreUtils.mutations.deposit.updateLoading, true)
        return DepositService.callReadDepositByIdApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.deposit.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === '00'){
                StoreUtils.commit(StoreUtils.mutations.deposit.updateReadDepositById, responseData)
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.deposit.updateLoading, false)
        })
    },

    //eslint-disable-next-line no-empty-pattern
    readUserDeposit({}, payload = {}){
        StoreUtils.commit(StoreUtils.mutations.deposit.updateLoading, true)
        return DepositService.callReadUserDepositApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.deposit.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === '00'){
                StoreUtils.commit(StoreUtils.mutations.deposit.updateReadUserDeposit, responseData)
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.deposit.updateLoading, false)
        })
    },


};