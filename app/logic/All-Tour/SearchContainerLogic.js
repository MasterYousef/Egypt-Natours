import BaseUrl from "@/app/BaseUrl";
import useGetData from "@/app/Hooks/useGetData";


async function SearchContainerLogic() {
        const res = useGetData('api/v1/tours')
        return res
}
export default SearchContainerLogic