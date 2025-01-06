import { signInWithEmailAndPassword } from "firebase/auth"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "../firebase"
import { useState } from "react"

const SignIn = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  console.log(email)
  const navigate = useNavigate()
  const signIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth,email,password).then((auth) => {
      if(auth){
          navigate("/")
      }
    }).catch((error) => {
      alert(error.message)
    })
  }
  return (
    <section className="flex justify-center my-[101px]">
      <form className="flex flex-col w-[40%] p-[20px] shadow-lg shadow-slate-700 rounded-[10px]" action="">
        <label className="my-[10px]" htmlFor="">Email</label>
        <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
         className="p-[10px] border-[2px] border-orange-400 rounded-[8px]" type="email" placeholder="Enter Yor Email"/>
        <label className="my-[10px]" htmlFor="">Password:</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
         className="p-[10px] border-[2px] border-orange-400 rounded-[8px]" type="password" placeholder="Enter Yor Password outline-none" />
        <button onClick={signIn} className="rounded-[30px] text-center py-[6px] w-full bg-orange-500 mx-auto mt-[20px]">
            Sign In
        </button>
        <h1 className="py-[20px] text-center font-sembold">Don't have an account?
              <Link className="text-green-800 ml-[10px]" to="/signup">Sign Up</Link>
          </h1>


      </form>
    </section>
  )
}

export default SignIn
