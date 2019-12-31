import axios from "axios";
import config from "../constants/config";

export const postService = data => {
    const url = data.url;
    axios.post(
            url,
            {data:data}
        ).then((res)=>{
            //on success
        }).catch((error)=>{
            //on error
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
  