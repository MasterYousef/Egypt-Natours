import BaseUrl from "../BaseUrl";
const useGetData = async (url,par)=>{
    try {
        const res = await BaseUrl.get(url,par);
        return res
    } catch (error) {
        return error.massege
    }
}
export default useGetData