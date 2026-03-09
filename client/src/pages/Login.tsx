import Footer from "@/components/Footer";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  return (
    <>
      <section id="login" className="min-h-screen flex relative">
        {/* Left Section */}
        <div className="left-side hidden md:block w-1/2 bg-darkbg  justify-center items-center ">
          <div className="w-full  p-5 m-8">
            <img src="/insta_logo.svg" alt="insta_log0" width={80} />
          </div>
          <div className="w-full">
            <p className="text-white text-3xl font-semibold leading-normal text-center px-20 font-sans">See everyday moments from your
              <span className="ml-2 bg-linear-to-l from-[#FDD074] via-[#DD326E] to-[#A432B1] bg-clip-text text-transparent font-mono">
                close friends
              </span>.</p>
          </div>
          <div className="w-full flex justify-center">
            <img src="/gallery.webp" alt="login-page-avatar" height={400} width={400} />
          </div>
        </div>

        {/* Right Section */}
        <div className="right-side w-full md:w-1/2 bg-gray-800 border-l border-gray-500">
          <div className="container flex flex-col jufify-center py-12 px-10">
            <span className="text-white fw-bold mb-5">Log into Instagram</span>

            <form action="" method="post">

              <input type="email"
                name="email"
                placeholder="Mobile number,username or email"
                className="text-white text-sm p-5 border border-gray-500 rounded-xl focus:outline-none hover:border-gray-400 w-full mb-3"
              />

              <input type="password"
                name="password"
                placeholder="Password"
                className="text-white text-sm p-5 border border-gray-500 rounded-xl focus:outline-none focus:ring  focus:ring-gray-300 hover:border-gray-400 w-full mb-10"
              />

              <button className="w-full rounded-full bg-blue-600 text-white text-sm p-3 mb-3">Login</button>

              <button
                type="button"
                className="w-full rounded-full hover:bg-gray-700 text-white text-sm p-3 mb-3"
                onClick={() => { navigate('/accounts/password/reset') }}
              >
                Forget Password?
              </button>

            </form>
          </div>

          <div className="px-12 container">
            <button
              className="w-full rounded-full text-white text-sm tracking-wider border border-gray-500 hover:bg-gray-700 p-3 mb-3"
            >
              Login with Facebook
            </button>

            <Link
              to='/accounts/emailsignup'
              className="w-full block rounded-full text-center text-blue-500 font-medium tracking-wider font-sans text-sm  hover:bg-gray-700 border border-blue-500 p-3 mb-5"
            >
              Create new account
            </Link>

            <div className="mx-auto">
              <svg aria-label="Meta logo" className="x1kpxq89 x1247r65 w-15 h-auto block mx-auto" role="img" viewBox="0 0 500 100">
                <path className="xt3erj5" d="M185.508 3.01h18.704l31.803 57.313L267.818 3.01h18.297v94.175h-15.264v-72.18l-27.88 49.977h-14.319l-27.88-49.978v72.18h-15.264V3.01ZM336.281 98.87c-7.066 0-13.286-1.565-18.638-4.674-5.352-3.12-9.527-7.434-12.528-12.952-2.989-5.517-4.483-11.835-4.483-18.973 0-7.214 1.461-13.608 4.385-19.17 2.923-5.561 6.989-9.908 12.187-13.05 5.198-3.13 11.176-4.707 17.923-4.707 6.715 0 12.484 1.587 17.319 4.74 4.847 3.164 8.572 7.598 11.177 13.291 2.615 5.693 3.923 12.371 3.923 20.046v4.171h-51.793c.945 5.737 3.275 10.258 6.989 13.554 3.715 3.295 8.407 4.937 14.078 4.937 4.549 0 8.461-.667 11.747-2.014 3.286-1.347 6.374-3.383 9.253-6.12l8.099 9.886c-8.055 7.357-17.934 11.036-29.638 11.036Zm11.143-55.867c-3.198-3.252-7.385-4.872-12.56-4.872-5.045 0-9.264 1.653-12.66 4.97-3.407 3.318-5.55 7.784-6.451 13.39h37.133c-.451-5.737-2.275-10.237-5.462-13.488ZM386.513 39.467h-14.044V27.03h14.044V6.447h14.715V27.03h21.341v12.437h-21.341v31.552c0 5.244.901 8.988 2.703 11.233 1.803 2.244 4.88 3.36 9.253 3.36 1.935 0 3.572-.076 4.924-.23a97.992 97.992 0 0 0 4.461-.645v12.316c-1.67.493-3.549.898-5.637 1.205-2.099.317-4.286.47-6.583.47-15.89 0-23.836-8.649-23.836-25.957V39.467ZM500 97.185h-14.44v-9.82c-2.571 3.678-5.835 6.513-9.791 8.506-3.968 1.993-8.462 3-13.506 3-6.209 0-11.715-1.588-16.506-4.752-4.803-3.153-8.572-7.51-11.308-13.039-2.748-5.54-4.121-11.879-4.121-19.006 0-7.17 1.395-13.52 4.187-19.038 2.791-5.518 6.648-9.843 11.571-12.985 4.935-3.13 10.594-4.707 16.99-4.707 4.813 0 9.132.93 12.956 2.791a25.708 25.708 0 0 1 9.528 7.905v-9.01H500v70.155Zm-14.715-45.61c-1.571-3.985-4.066-7.138-7.461-9.448-3.396-2.31-7.33-3.46-11.781-3.46-6.308 0-11.319 2.102-15.055 6.317-3.737 4.215-5.605 9.92-5.605 17.09 0 7.215 1.802 12.94 5.396 17.156 3.604 4.215 8.484 6.317 14.66 6.317 4.538 0 8.593-1.16 12.154-3.492 3.549-2.332 6.121-5.475 7.692-9.427V51.575Z" fill="#DEE3E9" >
                </path>
                <path className="xt3erj5 " d="M107.666 0C95.358 0 86.865 4.504 75.195 19.935 64.14 5.361 55.152 0 42.97 0 18.573 0 0 29.768 0 65.408 0 86.847 12.107 99 28.441 99c15.742 0 25.269-13.2 33.445-27.788l9.663-16.66a643.785 643.785 0 0 1 2.853-4.869 746.668 746.668 0 0 1 3.202 5.416l9.663 16.454C99.672 92.72 108.126 99 122.45 99c16.448 0 27.617-13.723 27.617-33.25 0-37.552-19.168-65.75-42.4-65.75ZM57.774 46.496l-9.8 16.25c-9.595 15.976-13.639 19.526-19.67 19.526-6.373 0-11.376-5.325-11.376-17.547 0-24.51 12.062-47.451 26.042-47.451 7.273 0 12.678 3.61 22.062 17.486a547.48 547.48 0 0 0-7.258 11.736Zm64.308 35.776c-6.648 0-11.034-4.233-20.012-19.39l-9.663-16.386c-2.79-4.737-5.402-9.04-7.88-12.945 9.73-14.24 15.591-17.984 23.002-17.984 14.118 0 26.204 20.96 26.204 49.158 0 11.403-4.729 17.547-11.651 17.547Z" fill="#DEE3E9">
                </path>
              </svg>
            </div>
          </div>
        </div>
      </section >
      <Footer />
    </>

  )
};

export default Login;