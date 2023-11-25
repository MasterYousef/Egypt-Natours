import useGetData from "@/app/Hooks/useGetData"
async function ToursLogic() {
    const res = await useGetData('api/v1/tours/?sort=-ratingsAverage')
    return res?.data?.data
}

export default ToursLogic