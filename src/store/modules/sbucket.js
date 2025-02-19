// import router from "@/router";
import S3BucketService from "@/service/S3BucketService";
import swal from "sweetalert";
import S3Response from "@/model/response/S3Response";

export const state = {
    s3bucketLoading: false,
    s3bucketResponse: S3Response.prototype.uploadBase64Response(),
    urls:[]
};
export const getters = {};
export const mutations = {
    updateS3BucketLoading: (state, payload) => {
        state.s3bucketLoading = payload;
    },
    updateS3BucketResponse: (state, payload) => {
        state.s3bucketResponse = payload;
    },
    updateUrls: (state, payload) => {
        state.urls = payload;
    },
};
export const actions = {
    uploadEncodedFile: ({ commit }, payload) => {
        // TODO USER LOADING
        commit("updateS3BucketResponse", "{}");
        commit("updateS3BucketLoading", true);
        return S3BucketService.callUploadBase64Api(payload)
            .then((response) => {
                commit("updateS3BucketLoading", false);
                let responseData = response.data;
                if (responseData.responseCode === "00") {
                    commit("updateS3BucketResponse", responseData);
                    console.log(responseData)
                } else {
                    swal("Error", responseData.responseMessage, "error");
                }
            })
            .catch((err) => {
                commit("updateS3BucketLoading", false);
                console.log(err);
            });
    },
};
