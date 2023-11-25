import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-toastify";
function SignUpLogic() {
    let [isOpen, setIsOpen] = useState(false)
    const { csrfToken } = useSession();
    const HandSubmit = async (e)=>{
      e.preventDefault()
      setIsOpen(true)
      if (e.target.password.value !== e.target.passwordConfirm.value) {
        toast.error('password confirm is incorrect', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            className: 'custom-toast'
            });
            setIsOpen(false)
            return;
      }
        const result = await signIn('credentials', {
          name:e.target.name.value,
          email:e.target.email.value,
          password:e.target.password.value,
          passwordConfirm:e.target.passwordConfirm.value,
          NewUser: true,
          redirect:false,
          csrfToken
        })
      setIsOpen(false)
        if(result?.error !== null){
          toast.error(result?.error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            className: 'custom-toast'
            });
        }else if(result?.status === 200){
          toast.success('You logged in successfully',{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            className: 'custom-toast'
          })
          setTimeout(()=>{
            window.location.reload()
          },3000)
        }
    }
    return [isOpen, setIsOpen,HandSubmit]
}

export default SignUpLogic