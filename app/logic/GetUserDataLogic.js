import { getServerSession } from 'next-auth'
import { AuthOption } from '../api/auth/[...nextauth]/route'
async function GetUserDataLogic() {
const session = await getServerSession(AuthOption)
const profile = session?.user
return profile
}

export default GetUserDataLogic