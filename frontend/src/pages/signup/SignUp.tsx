import GenderCheckbox from "./GenderCheckbox"

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="rounded-lg w-full p-6 shadow-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300">
                SignUp
                <span className="text-blue-500"> ChatApp</span>
            </h1>


            <form className="mt-6">
                <div className="">
                    <label className="label p-2">
                        <span className="text-base label-text">Full name</span>
                    </label>
                    <input type="text" placeholder="Enter your full name" className="w-full input input-bordered h-10" />
                </div>

                <div className="">
                    <label className="label p-2">
                        <span className="text-base label-text">Username</span>
                    </label>
                    <input type="text" placeholder="Enter your username" className="w-full input input-bordered h-10" />
                </div>

                <div className="">
                    <label className="label p-2">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter your passsword" className="w-full input input-bordered h-10" />
                </div>
                <div className="">
                    <label className="label p-2">
                        <span className="text-base label-text">Confirm Password</span>
                    </label>
                    <input type="password" placeholder="Enter your passsword" className="w-full input input-bordered h-10" />
                </div>

                <GenderCheckbox/>
                <a href="">
                "Already have an account?"
                </a>

                <div className="mt-6">
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp