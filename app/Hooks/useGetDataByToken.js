import { getServerSession } from "next-auth";
import BaseUrl from "../BaseUrl";
import { AuthOption } from "../api/auth/[...nextauth]/route";
const session = await getServerSession(AuthOption)
const useGetDataByToken = async (url)=>{
    const config={
        headers:{Authorization : `Bearer ${session?.user?.token}`}
    }
    try{
        const res = await BaseUrl.get(url,config);

        return res
    }catch(error){
        return error
    }
}
export default useGetDataByToken