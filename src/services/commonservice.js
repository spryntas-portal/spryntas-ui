import axios from "axios";
import config from "../constants/config";
import { constants } from "../constants/constants";

export const postService = (data, url) => {
    // const url = data.url;
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    };
    return axios.post(
            url,
            {data:data},
            {headers}
        ).then((res)=>{
            //on success
            console.log("###res",res);
        }).catch((error)=>{
            //on error
            console.log("###error",error);
        });
}
export const getService = data => {
    console.log("###data",data);
    const url = data.url;
    axios.get(
            url,
            {data:data}
        ).then((res)=>{
            //on success
        }).catch((error)=>{
            //on error
        });
}
export const success = (res, type, data) => {
    switch (type) {
        case constants.LOGIN_REQUEST:
            return {
                type: constants.LOGIN_SUCCESS,
                data: res
            };
            default:
                return {};
    }
}
export const failure = (res = {}, type) => {
    switch (type) {
        case constants.LOGIN_REQUEST:
            // AlertHelper.alertError(res.message);
            return {}
        default:
                return {};
    }
}
  