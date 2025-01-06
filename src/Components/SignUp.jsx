import { createUserWithEmailAndPassword } from "firebase/auth"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "../firebase"
import { useState } from "react"


const SignUp = () => {
  console.log(auth)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmPassword] = useState("")
  const navigate = useNavigate()
  const signUp = (e) => {
    if(password != confirmpassword){
      alert("Passwords do not match!");
      return;
    }
    e.preventDefault()
    createUserWithEmailAndPassword(auth,email,password).then((auth) => {
      if(auth){
        navigate("/")
      }
    }).catch((error) => {
      alert(error.message)
    })
  }
  return (
    <section className="flex justify-center items-center container " >
    <form action="" className="my-[19.5px]">
    <div className= "flex flex-col w-[500px] shadow-lg shadow-slate-700  p-[10px] rounded-[20px] px-[30px]">
      <h1 className="font-bold text-center text-[30px]">Sign Up</h1>
      <label className="py-[10px]" htmlFor="">Name</label>
          <input className="p-[10px]  border-[2px] border-orange-400 rounded-[8px]"  type="text" placeholder="Name" />
          <label className="py-[4px]" htmlFor="">Email</label>
          <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
           className="p-[10px] border-[2px] border-orange-400 rounded-[8px]"  type="email" placeholder="Email" />
            <label className="py-[4px]" htmlFor="">Password</label>
          <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           className="p-[10px] border-[2px] border-orange-400 rounded-[8px]" type="password" placeholder="Password" />
            <label className="py-[4px]" htmlFor="">Confirm Password</label>
          <input
                      value={confirmpassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
            className="p-[10px] border-[2px] border-orange-400 rounded-[8px]" type="password" placeholder="Confirm password" />
          <button  onClick={signUp} className="bg-orange-500 p-[6px] font-bold rounded-[30px] my-[20px] ">Sign Up</button>
          <h1 className="pb-[10px] text-center font-bold">Already have an account?
              <button><Link className="text-green-800 ml-[10px]" to="/signin">Sign in</Link></button>
          </h1>
      </div>
    </form>
  </section>
  )
}

export default SignUp
