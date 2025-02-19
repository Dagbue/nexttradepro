import swal from "sweetalert";
import StoreUtils from "@/utility/StoreUtils";
import WithdrawalRequest from "@/model/request/WithdrawalRequest";
import WithdrawalService from "@/service/WithdrawalService";
import WithdrawalResponse from "@/model/response/WithdrawalResponse";


export const state = {
    loading: false,
    withdrawal: null,
    allWithdrawal: new WithdrawalResponse().readAllWithdrawal,
    readWithdrawalById: new WithdrawalResponse().readWithdrawalById,
    readUserWithdrawal: new WithdrawalResponse().readUserWithdrawal,
};

export const getters = {
    getWithdrawal: (state) => {
        return state.withdrawal;
    },
    getAllWithdrawal: (state) => {
        return state.allWithdrawal;
    },
    getReadWithdrawalById: (state) => {
        return state.readWithdrawalById;
    },
    getReadUserWithdrawal: (state) => {
        return state.readUserWithdrawal;
    },
};


export const mutations = {
    updateLoading(state, payload){
        state.loading = payload
    },
    updateWithdrawal(state, payload){
        state.withdrawal = payload
    },
    updateAllWithdrawal(state, payload){
        state.allWithdrawal = payload
    },
    updateReadWithdrawalById(state, payload){
        state.readWithdrawalById = payload
    },
    updateReadUserWithdrawal(state, payload){
        state.readUserWithdrawal = payload
    },
};

export const actions = {
    // eslint-disable-next-line no-empty-pattern
    withdrawalCreate({}, payload = new WithdrawalRequest().createWithdrawal){
        StoreUtils.commit(StoreUtils.mutations.withdrawal.updateLoading, true)
        return WithdrawalService.callCreateWithdrawalApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.withdrawal.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === "00"){
                // swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
                StoreUtils.commit(StoreUtils.mutations.withdrawal.updateWithdrawal, responseData)
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.withdrawal.updateLoading, false)
        })
    },

    // eslint-disable-next-line no-empty-pattern
    withdrawalUpdate({}, payload = new WithdrawalRequest().updateWithdrawal){
        StoreUtils.commit(StoreUtils.mutations.withdrawal.updateLoading, true)
        return WithdrawalService.callUpdateWithdrawalApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.withdrawal.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === "00"){
                swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.withdrawal.updateLoading, false)
        })
    },

    // eslint-disable-next-line no-empty-pattern
    updateWithdrawalStatus({}, payload = new WithdrawalRequest().updateWithdrawalStatus){
        StoreUtils.commit(StoreUtils.mutations.withdrawal.updateLoading, true)
        return WithdrawalService.callUpdateWithdrawalStatusApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.withdrawal.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === "00"){
                swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.withdrawal.updateLoading, false)
        })
    },

    // eslint-disable-next-line no-empty-pattern
    deleteWithdrawal({}, payload = new WithdrawalRequest().deleteWithdrawal){
        StoreUtils.commit(StoreUtils.mutations.withdrawal.updateLoading, true)
        return WithdrawalService.callDeleteWithdrawalApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.withdrawal.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === "00"){
                swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.withdrawal.updateLoading, false)
        })
    },

    //eslint-disable-next-line no-empty-pattern
    readAllWithdrawal({}, payload = {}){
        StoreUtils.commit(StoreUtils.mutations.withdrawal.updateLoading, true)
        return WithdrawalService.callReadAllWithdrawalApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.withdrawal.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === '00'){
                StoreUtils.commit(StoreUtils.mutations.withdrawal.updateAllWithdrawal, responseData)
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.withdrawal.updateLoading, false)
        })
    },

    //eslint-disable-next-line no-empty-pattern
    readWithdrawalById({}, payload = {}){
        StoreUtils.commit(StoreUtils.mutations.withdrawal.updateLoading, true)
        return WithdrawalService.callReadWithdrawalByIdApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.withdrawal.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === '00'){
                StoreUtils.commit(StoreUtils.mutations.withdrawal.updateReadWithdrawalById, responseData)
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.withdrawal.updateLoading, false)
        })
    },

    //eslint-disable-next-line no-empty-pattern
    readUserWithdrawal({}, payload = {}){
        StoreUtils.commit(StoreUtils.mutations.withdrawal.updateLoading, true)
        return WithdrawalService.callReadUserWithdrawalApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.withdrawal.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === '00'){
                StoreUtils.commit(StoreUtils.mutations.withdrawal.updateReadUserWithdrawal, responseData)
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.withdrawal.updateLoading, false)
        })
    },


};