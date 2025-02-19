// noinspection JSCheckFunctionSignatures,JSUnresolvedVariable

   import axios from "axios";
   import StoreUtils from "@/utility/StoreUtils";
   // import RouterUtils from "@/utility/RouterUtils";
   import swal from "sweetalert";    
       
   const apiClient = axios.create({    
     baseURL: window.__env.api.baseUrl,    
     withCredentials: false,   
     headers: {    
       Accept: "application/json",   
       "Content-Type": "application/json", 
     },    
   }); 
       
   apiClient.interceptors.request.use((config) => {    
     config.headers.Authorization = StoreUtils.rootGetters(StoreUtils.getters.auth.getToken);  
     return config;    
   }); 
       
   apiClient.interceptors.response.use((config) => {   
     if (config.data.responseCode === '115'){  
       swal('Error', 'Expired Session... Please login again', 'error').then(()=>{  
         // RouterUtils.navigateTo(RouterUtils.routes.auth.login.name)
         this.$router.push('/login')
       })  
     } 
     return config;    
   }); 
       
   const s3ApiClient = axios.create({  
     baseURL: window.__env.api.uploadS3BaseUrl,    
     withCredentials: false,   
     headers: {    
       Accept: "application/json",   
       "Content-Type": "application/json", 
     },    
   }); 
       
   s3ApiClient.interceptors.request.use((config) => {  
     // config.headers.Authorization = StoreUtils.rootGetters(StoreUtils.getters.auth.getToken);
     return config;    
   }); 
       
   export default {    
     apiClient: apiClient, 
     s3ApiClient: s3ApiClient, 
   };  
       

