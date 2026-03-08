import Footer from '@/components/Footer';
import { months } from '@/data/links.ts'
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom';

function Register() {

  return (
    <>
      <section id="register-section" className="min-h-screen bg-darkbg flex justify-center overflow-hidden py-3">
        <div className="w-full max-w-lg flex flex-col py-8 px-2">
          <div className="arrow-btn mb-3 hover:bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer">
            <MdOutlineKeyboardArrowLeft color='white' size={30} />
          </div>

          <div className="meta-logo mb-5 ml-1">
            <svg aria-label="Meta logo" className="x1kpxq89 x1247r65 w-15 h-auto block " role="img" viewBox="0 0 500 100">
              <path className="xt3erj5" d="M185.508 3.01h18.704l31.803 57.313L267.818 3.01h18.297v94.175h-15.264v-72.18l-27.88 49.977h-14.319l-27.88-49.978v72.18h-15.264V3.01ZM336.281 98.87c-7.066 0-13.286-1.565-18.638-4.674-5.352-3.12-9.527-7.434-12.528-12.952-2.989-5.517-4.483-11.835-4.483-18.973 0-7.214 1.461-13.608 4.385-19.17 2.923-5.561 6.989-9.908 12.187-13.05 5.198-3.13 11.176-4.707 17.923-4.707 6.715 0 12.484 1.587 17.319 4.74 4.847 3.164 8.572 7.598 11.177 13.291 2.615 5.693 3.923 12.371 3.923 20.046v4.171h-51.793c.945 5.737 3.275 10.258 6.989 13.554 3.715 3.295 8.407 4.937 14.078 4.937 4.549 0 8.461-.667 11.747-2.014 3.286-1.347 6.374-3.383 9.253-6.12l8.099 9.886c-8.055 7.357-17.934 11.036-29.638 11.036Zm11.143-55.867c-3.198-3.252-7.385-4.872-12.56-4.872-5.045 0-9.264 1.653-12.66 4.97-3.407 3.318-5.55 7.784-6.451 13.39h37.133c-.451-5.737-2.275-10.237-5.462-13.488ZM386.513 39.467h-14.044V27.03h14.044V6.447h14.715V27.03h21.341v12.437h-21.341v31.552c0 5.244.901 8.988 2.703 11.233 1.803 2.244 4.88 3.36 9.253 3.36 1.935 0 3.572-.076 4.924-.23a97.992 97.992 0 0 0 4.461-.645v12.316c-1.67.493-3.549.898-5.637 1.205-2.099.317-4.286.47-6.583.47-15.89 0-23.836-8.649-23.836-25.957V39.467ZM500 97.185h-14.44v-9.82c-2.571 3.678-5.835 6.513-9.791 8.506-3.968 1.993-8.462 3-13.506 3-6.209 0-11.715-1.588-16.506-4.752-4.803-3.153-8.572-7.51-11.308-13.039-2.748-5.54-4.121-11.879-4.121-19.006 0-7.17 1.395-13.52 4.187-19.038 2.791-5.518 6.648-9.843 11.571-12.985 4.935-3.13 10.594-4.707 16.99-4.707 4.813 0 9.132.93 12.956 2.791a25.708 25.708 0 0 1 9.528 7.905v-9.01H500v70.155Zm-14.715-45.61c-1.571-3.985-4.066-7.138-7.461-9.448-3.396-2.31-7.33-3.46-11.781-3.46-6.308 0-11.319 2.102-15.055 6.317-3.737 4.215-5.605 9.92-5.605 17.09 0 7.215 1.802 12.94 5.396 17.156 3.604 4.215 8.484 6.317 14.66 6.317 4.538 0 8.593-1.16 12.154-3.492 3.549-2.332 6.121-5.475 7.692-9.427V51.575Z" fill="#DEE3E9" >
              </path>
              <path className="xt3erj5 " d="M107.666 0C95.358 0 86.865 4.504 75.195 19.935 64.14 5.361 55.152 0 42.97 0 18.573 0 0 29.768 0 65.408 0 86.847 12.107 99 28.441 99c15.742 0 25.269-13.2 33.445-27.788l9.663-16.66a643.785 643.785 0 0 1 2.853-4.869 746.668 746.668 0 0 1 3.202 5.416l9.663 16.454C99.672 92.72 108.126 99 122.45 99c16.448 0 27.617-13.723 27.617-33.25 0-37.552-19.168-65.75-42.4-65.75ZM57.774 46.496l-9.8 16.25c-9.595 15.976-13.639 19.526-19.67 19.526-6.373 0-11.376-5.325-11.376-17.547 0-24.51 12.062-47.451 26.042-47.451 7.273 0 12.678 3.61 22.062 17.486a547.48 547.48 0 0 0-7.258 11.736Zm64.308 35.776c-6.648 0-11.034-4.233-20.012-19.39l-9.663-16.386c-2.79-4.737-5.402-9.04-7.88-12.945 9.73-14.24 15.591-17.984 23.002-17.984 14.118 0 26.204 20.96 26.204 49.158 0 11.403-4.729 17.547-11.651 17.547Z" fill="#DEE3E9">
              </path>
            </svg>
          </div>

          <h2 className="text-gray-200 text-2xl mb-3 ml-1">Get started on Instagram</h2>

          <p className="text-gray-200 text-sm mb-3 ml-1">Sign up to see photos and videos from your friends.</p>

          {/* Email */}
          <div className="email-field flex flex-col mb-3">
            <label
              htmlFor="email"
              className="text-gray-200 text-sm mb-2 ml-1"
            >
              Mobile number or email
            </label>
            <input
              id="email"
              type="email"
              name='email'
              placeholder="Mobile number or email"
              className="border border-gray-500 p-4 rounded-xl text-gray-100 text-sm"
            />
          </div>

          <p className="text-gray-200 text-xs mb-3 ml-1">
            You may receive notifications from us.
            <a href="#" className="text-blue-400 hover:underline">Learn why we ask for your contact information</a>
          </p>

          {/* Password */}
          <div className="email-field flex flex-col mb-3">
            <label
              htmlFor="password"
              className="text-gray-200 text-sm mb-2 ml-1"
            >
              Password
            </label>
            <input
              id="password"
              name='password'
              type="password"
              placeholder="Password"
              className="border border-gray-500 p-4 rounded-xl text-gray-100 text-sm"
            />
          </div>

          {/* Birhtday */}
          <div className="birthday-field mb-3">
            <div className="text-gray-100 text-sm flex items-center gap-2 mb-2 ml-1">
              <label>Birthday</label>
              <FaRegCircleQuestion />
            </div>
            <div className="flex gap-3">
              {/* Month */}
              <select name="" id="" className="w-1/3 border border-gray-500 text-gray-400 text-sm rounded-xl p-3">
                <option value="" className="text-gray-100" >Month</option>
                {months.map((month, idx) => (
                  <option key={idx} className='text-black'>{month}</option>
                ))}
              </select>

              {/* Day */}
              <select name="" id="" className="w-1/3 border border-gray-500 text-gray-400 text-sm rounded-xl p-3">
                <option value="" className="text-gray-100">Day</option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} className='text-black'>{i + 1}</option>
                ))}
              </select>

              {/* Year */}
              <select name="" id="" className="w-1/3 border border-gray-500 text-gray-400 text-sm rounded-xl p-3">
                <option value="" className="text-gray-100">Year</option>
                {Array.from({ length: 100 }, (_, i) => {
                  const year = new Date().getFullYear() - i;
                  return (
                    <option key={year} className='text-black'>{year}</option>
                  )
                })}
              </select>
            </div>
          </div>

          {/*Name */}
          <div className="name-field flex flex-col mb-3">
            <label
              htmlFor="name"
              className="text-gray-200 text-sm mb-2 ml-1"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Full name"
              className="border border-gray-500 p-4 rounded-xl text-gray-100 text-sm"
            />
          </div>

          {/* User Name */}
          <div className="username-field flex flex-col mb-8">
            <label
              htmlFor="username"
              className="text-gray-200 text-sm mb-2 ml-1"
            >
              Username
            </label>
            <input
              id="username"
              name='username'
              type="text"
              placeholder="Username"
              className="border border-gray-500 p-4 rounded-xl text-gray-100 text-sm"
            />
          </div>

          {/* Privacy Policy */}
          <div className='privacy-policy ml-1'>
            <p className='text-gray-200 text-xs leading-snug tracking-wide mb-2'>People who use our service may have uploaded your contact information to Instagram.
              <a href='#' className='text-blue-400 hover:underline' >Learn more</a>
            </p>

            <p className='text-gray-200 text-xs mb-2 leading-snug tracking-wide'>
              By tapping Submit, you agree to create an account and to Instagram's
              <a href="#" className='text-blue-400 hover:underline'> Privacy policy </a> and
              <a href="#" className='text-blue-400 hover:underline'> Cookie policy</a>
            </p>

            <p className='text-gray-200 text-xs mb-5 leading-snug tracking-wide'>
              The
              <a href="#" className='text-blue-400 hover:underline '> Privacy policy </a>
              describes the ways we can use the information we collect when you create an account. For example, we use this information to provide, personalize and improve our products, including ads.
            </p>
          </div>

          {/* Buttons */}
          <Link
            to=''
            className='bg-blue-600 text-white text-center text-bold text-xs rounded-full hover:bg-blue-500 p-3 mb-3'
          >
            Submit
          </Link>

          <Link
            to='/accounts/login'
            className='border border-gray-600 text-white text-center text-bold text-xs rounded-full hover:bg-gray-900 p-3'
          >
            I already have an account
          </Link>

        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;