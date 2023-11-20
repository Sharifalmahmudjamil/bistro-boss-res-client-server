import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


 const axiosSecure= axios.create({
    baseURL:'http://localhost:5000'
})

const useAxiosSecure = () => {
    const navigate= useNavigate();
    const {logOut} = useAuth();
    // request interceptors to add authorization header for every secure call to the api 
    axiosSecure.interceptors.request.use(function(config){
        const token= localStorage.getItem('access Token')
        // console.log('req stopped by interceptors',token);
        config.headers.authorization= `Bearer ${token}`;
        return config;
    }, function(error){

        return Promise.reject(error);
    });

    // interceptors 401 and 403 interceptors
    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, async(error)=>{
        const status=error.response.status;
        console.log('stats error in the interceptors ',status);
        if(status=== 401 || status=== 403){
            await logOut();
            navigate('/login')
        }
        return Promise.reject(error);

    })

    return axiosSecure;
};

export default useAxiosSecure;