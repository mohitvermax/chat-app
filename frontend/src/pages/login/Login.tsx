import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin";

const Login = () => {
    const [username, setUsername ] = useState("");
    const [password, setPassword ] = useState("");
    const {loading, login} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(username, password)
    }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="rounded-lg w-full p-6 shadow-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300">
                Login
                <span className="text-blue-500"> ChatApp</span>
            </h1>


            <form onSubmit={handleSubmit} className="mt-6">
                <div className="">
                    <label className="label p-2">
                        <span className="text-base label-text">Username</span>
                    </label>
                    <input type="text"
                     placeholder="Enter your username"
                      className="w-full input input-bordered h-10"
                      value= {username}
                      onChange={(e) => {setUsername(e.target.value)}} />
                </div>

                <div className="mb-6">
                    <label className="label p-2">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password" 
                    placeholder="Enter your passsword" 
                    className="w-full input input-bordered h-10"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>

                </div>
                <Link to="/signup" className="text-sm hover:underline hover:text-blue-500 ">
                "Don't have an account yet?"
                </Link>

                <div className="mt-6">
                    <button type="submit" disabled={loading} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
                        
                        {loading ? <span className="loading loading-spinner"></span> : "Login"}
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login