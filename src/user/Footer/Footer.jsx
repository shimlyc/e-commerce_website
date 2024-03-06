import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";

function Footer() {
  return (
    <>



      <footer className="bg-green-900">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="flex text-white text-[16px] items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="#" >
                    <MdOutlineEmail />
                    <span className="flex-1 text-white">john@doe.com</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center text-white text-[16px] justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="#"
                  >
                    <FaPhone />
                    <span className="flex-1 text-white">0123456789</span>
                  </a>
                </li>
                <li
                  className="flex items-start text-white text-[16px] justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                >
                  <IoLocation />
                  <address className="-mt-0.5 flex-1 not-italic text-white">
                    213 Lane, London, United Kingdom
                  </address>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Quick links</p>
                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a className="text-white transition hover:text-white/75" href="#">
                      home
                    </a>
                  </li>

                  <li>
                    <a className="text-white transition hover:text-white/75" href="#">
                      about
                    </a>
                  </li>
                  <li>
                    <a className="text-white transition hover:text-white/75" href="#">
                      services
                    </a>
                  </li>

                  <li>
                    <a className="text-white transition hover:text-white/75" href="#"> Careers </a>
                  </li>
                  <li>
                    <a className="text-white transition hover:text-white/75" href="#">contact </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">specialties</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a className="text-white transition hover:text-white/75" href="#">anesthesiology</a>
                  </li>

                  <li>
                    <a className="text-white transition hover:text-white/75" href="#"> psychiatry </a>
                  </li>

                  <li>
                    <a className="text-white transition hover:text-white/75" href="#"> general surgery </a>
                  </li>

                  <li>
                    <a className="text-white transition hover:text-white/75" href="#"> family medicine </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">services</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a className="text-white transition hover:text-white/75" href="#">medical </a>
                  </li>

                  <li>
                    <a className="text-white transition hover:text-white/75" href="#"> operation </a>
                  </li>
                  <li>
                    <a className="text-white transition hover:text-white/75" href="#"> laboratary </a>
                  </li>
                  <li>
                    <a className="text-white transition hover:text-white/75" href="#"> operation </a>
                  </li>
                  <li>
                    <a className="text-white transition hover:text-white/75" href="#"> ICU </a>
                  </li>


                </ul>
              </div>

              <div className="">
              <p className="text-lg font-medium text-white">social media</p>
                <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                  <li>
                    <a

                      className="text-white transition text-[18px] hover:text-white/75"
                    >
                      <span className="sr-only">GitHub</span>
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a

                      className="text-white transition text-[18px] hover:text-white/75"
                    >
                      <span className="sr-only">GitHub</span>
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition text-[18px] hover:text-white/75">
                      <span className="sr-only">GitHub</span>
                      <FaInstagram />
                    </a>
                  </li>

                  

                  <li>
                    <a

                      className="text-white transition text-[18px] hover:text-white/75"
                    >
                      <span className="sr-only">GitHub</span>
                      <FaYoutube />
                    </a>
                  </li>


                </ul>
              </div>



            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-6">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-white">
                <span className="block sm:inline">All rights reserved.</span>

                <a
                  className="inline-block text-white underline transition hover:text-white/75"
                  href="#"
                >
                  Terms & Conditions
                </a>

                <span>&middot;</span>

                <a
                  className="inline-block text-white underline transition hover:text-white/75"
                  href="#"
                >
                  Privacy Policy
                </a>
              </p>

              <p className="mt-4 text-sm text-white sm:order-first sm:mt-0">&copy; 2022 Company Name</p>
            </div>
          </div>
        </div>
      </footer>



    </>


  )
}

export default Footer