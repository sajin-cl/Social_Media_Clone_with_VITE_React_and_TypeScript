import Footer from "@/components/Footer";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

function ForgetPassword() {
  return (
    <>
      <section id="forget-password-section" className="min-h-screen items-center bg-darkbg flex justify-center overflow-hidden py-3">
        <div className="max-w-xl">

          <div
            className="left-arrow-btn mb-3 hover:bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
          >
            <MdOutlineKeyboardArrowLeft color='white' size={30} />
          </div>

          <h2 className="text-3xl text-white mb-3 ml-1">Find your account</h2>

          <p className="text-xs text-white mb-5 ml-1">
            Enter your mobile number, username or email.
            <a href="#" className="text-blue-500 hover:underline"> Can't reset your password?</a>
          </p>

          {/* Email */}
          <div className="email-field flex flex-col mb-3 ml-1">
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

          <p
            className="text-xs text-white mb-5 ml-1"
          >
            You may receive WhatsApp and SMS notifications from us for security and login purposes.
          </p>

          <button
            className='bg-blue-600 w-full text-white text-center text-bold text-xs rounded-full hover:bg-blue-500 p-3 mb-3'
          >
            Continue
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ForgetPassword;