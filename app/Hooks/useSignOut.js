import { signOut } from 'next-auth/react';
async function useSignOut() {
        await signOut();
        setTimeout(()=>{
            window.location.reload()
        },2000)
}

export default useSignOut