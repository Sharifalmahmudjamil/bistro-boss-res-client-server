import axios from "axios";

 const axiosSecure= axios.create({
    baseURL:'http://localhost:5000'
})

const useAxiosSecure = () => {
    // request interceptors to add authorization header for every secure call to the api 
    axiosSecure.interceptors.request.use(function(config){
        const token= localStorage.getItem('access Token')
        console.log('req stopped by interceptors',token);
        config.headers.authorization= `Bearer ${token}`;
        return config;
    }, function(error){

        return Promise.reject(error);
    });

    // interceptors 401 and 403 interceptors
    axiosSecure.interceptors.request.use(function(response){
        return response;
    }, function(error){
        const status=error.response.status;
        console.log('stats error in the interceptors ',status);
        return Promise.reject(error);

    })

    return axiosSecure;
};

export default useAxiosSecure;