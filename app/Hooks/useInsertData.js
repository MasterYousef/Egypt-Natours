import BaseUrl from "../BaseUrl";

const useInsertData = async (url,par)=>{
    const config={
        headers:{Authorization : `Bearer ${localStorage.getItem('token')}`}
    }
    try{
        const res = await BaseUrl.post(url,par,config);
        return res
    }catch(error){
        return error
    }
}
const useInsertDataWithImg = async (url,par)=>{
    const config={
        headers:{"Content-Type":"multipart/form-data",Authorization : `Bearer ${localStorage.getItem('token')}`}
    }
    const res = await BaseUrl.post(url,par,config);
    return res
}
export {useInsertData,useInsertDataWithImg}