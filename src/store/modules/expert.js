import swal from "sweetalert";
import StoreUtils from "@/utility/StoreUtils";
import ExpertService from "@/service/ExpertService";
import ExpertResponse from "@/model/response/ExpertResponse";
import ExpertRequest from "@/model/request/ExpertRequest";




export const state = {
    loading: false,
    expert: null,
    allExpert: new ExpertResponse().readAllExpert,
    readExpertById: new ExpertResponse().readExpertById,
    readUserExpert: new ExpertResponse().readUserExpert,
};

export const getters = {
    getExpert: (state) => {
        return state.expert;
    },
    getAllExpert: (state) => {
        return state.allExpert;
    },
    getReadExpertById: (state) => {
        return state.readExpertById;
    },
    getReadUserExpert: (state) => {
        return state.readUserExpert;
    },
};


export const mutations = {
    updateLoading(state, payload){
        state.loading = payload
    },
    updateExpert(state, payload){
        state.expert = payload
    },
    updateAllExpert(state, payload){
        state.allExpert = payload
    },
    updateReadExpertById(state, payload){
        state.readExpertById = payload
    },
    updateReadUserExpert(state, payload){
        state.readUserExpert = payload
    },
};

export const actions = {
    // eslint-disable-next-line no-empty-pattern
    expertCreate({}, payload = new ExpertRequest().createExpert){
        StoreUtils.commit(StoreUtils.mutations.expert.updateLoading, true)
        return ExpertService.callCreateExpertApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.expert.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === "00"){
                // swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
                StoreUtils.commit(StoreUtils.mutations.expert.updateExpert, responseData)
                // router.push("/over-view")
                // router.push("/loan-dashboard")
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.expert.updateLoading, false)
        })
    },

    // eslint-disable-next-line no-empty-pattern
    updateExpert({}, payload = new ExpertRequest().updateExpert){
        StoreUtils.commit(StoreUtils.mutations.expert.updateLoading, true)
        return ExpertService.callUpdateExpertApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.expert.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === "00"){
                swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.expert.updateLoading, false)
        })
    },

    // eslint-disable-next-line no-empty-pattern
    updateExpertStatus({}, payload = new ExpertRequest().updateExpertStatus){
        StoreUtils.commit(StoreUtils.mutations.expert.updateLoading, true)
        return ExpertService.callUpdateExpertStatusApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.expert.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === "00"){
                swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.expert.updateLoading, false)
        })
    },

    // eslint-disable-next-line no-empty-pattern
    deleteExpert({}, payload = new ExpertRequest().deleteExpert){
        StoreUtils.commit(StoreUtils.mutations.expert.updateLoading, true)
        return ExpertService.callDeleteExpertApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.expert.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === "00"){
                swal("Success",responseData.responseMessage, 'success').then(r => console.log(r))
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.expert.updateLoading, false)
        })
    },

    //eslint-disable-next-line no-empty-pattern
    readAllExpert({}, payload = {}){
        StoreUtils.commit(StoreUtils.mutations.expert.updateLoading, true)
        return ExpertService.callReadAllExpertApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.expert.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === '00'){
                StoreUtils.commit(StoreUtils.mutations.expert.updateAllExpert, responseData)
            }else{
                // swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.expert.updateLoading, false)
        })
    },

    //eslint-disable-next-line no-empty-pattern
    readExpertById({}, payload = new ExpertRequest().readExpertById){
        StoreUtils.commit(StoreUtils.mutations.expert.updateLoading, true)
        return ExpertService.callReadExpertByIdApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.expert.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === '00'){
                StoreUtils.commit(StoreUtils.mutations.expert.updateReadExpertById, responseData)
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.expert.updateLoading, false)
        })
    },

    //eslint-disable-next-line no-empty-pattern
    readUserExpert({}, payload = new ExpertRequest().readUserExpert){
        StoreUtils.commit(StoreUtils.mutations.expert.updateLoading, true)
        return ExpertService.callReadUserExpertApi(payload).then(response=>{
            StoreUtils.commit(StoreUtils.mutations.expert.updateLoading, false)
            let responseData = response.data
            if (responseData.responseCode === '00'){
                StoreUtils.commit(StoreUtils.mutations.expert.updateReadUserExpert, responseData)
            }else{
                swal("Error",responseData.responseMessage, 'error').then(r => console.log(r))
            }
        }).catch(error=>{
            console.log(error)
            StoreUtils.commit(StoreUtils.mutations.expert.updateLoading, false)
        })
    },


};