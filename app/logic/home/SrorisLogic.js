import useGetDataByToken from "@/app/Hooks/useGetDataByToken"


async function SrorisLogic() {
    const res = await useGetDataByToken('/api/v1/reviews?sort=-rating')
    return res?.data?.data?.data
}

export default SrorisLogic