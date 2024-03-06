

// function Signup() {
//   return (
//   <div className="flex justify-center">

// <div className="bg-white h-48">

// <p>Login/signup</p>

// <input type="text" placeholder="Mobile number" />
// <p>by continuing, I agree to the <span>Terms of use </span> & <span>Privacy policy</span> </p>
// <button>Continue</button>




// </div>




//   </div>
//   )
// }

// export default Signup


export default function Login() {
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-green-600/40  ring-2 ring-green-900 lg:max-w-xl">
                <h1 className="text-2xl font-semibold text-green-900 ">
                   login or signup
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                     
                        <input
                            type="number"
                            placeholder="Mobile Number*"
                            className="block w-full px-4 py-2 mt-2 text-green-900 bg-white border rounded-md focus:border-green-900 focus:ring-green-900 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                  
                    <a
                        href="#"
                        className="text-xs text-green-900 hover:underline"
                    >
                        by continuing ,I agreed to the <span className="text-green-900 font-bold">privacy policy </span>
& <span className="text-green-900 font-bold">terms of use </span>                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-900 rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-700">
                            Login
                        </button>
                    </div>
                </form>

             
            </div>
        </div>
    );
}
