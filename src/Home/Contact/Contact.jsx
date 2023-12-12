import { BsSendCheck } from "react-icons/bs";
import { useForm } from "react-hook-form"
import { TiHomeOutline } from "react-icons/ti";
import { BsWhatsapp } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
const Contact = () => {

    // const { register, handleSubmit } = useForm()
    const form = useRef();
    const onSubmit = (e) => {
        e.preventDefault();
       
        emailjs.sendForm('service_u7xq4ar', 'template_8cjq44f', form.current, 'GHf3s46vmAs8Hoy4p')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="max-w-6xl mx-auto my-16">  <h3 className="text-5xl font-medium text-[#311E25] text-center">Get In Touch</h3>
            <div className="flex justify-between items-center gap-10 mt-8">

                <form ref={form} onSubmit={onSubmit} className="flex flex-col gap-4 w-7/12 ">
                    <input name="name" className="input input-bordered border-[#311E25] w-full " placeholder="Your Name" />
                    <input name="email" className="input input-bordered border-[#311E25] w-full " placeholder="Email" />
                    <input name="subject" className="input input-bordered border-[#311E25] w-full " placeholder="Subject" />
                    <textarea name="message" placeholder="Message" className="textarea  textarea-bordered border-[#311E25] textarea-lg w-full " ></textarea>
                    <button type="submit" className="btn  bg-[#311E25]  text-white  rounded-lg text-xl  hover:bg-transparent hover:border-2 hover:border-[#311E25] hover:text-[#311E25]  font-normal" ><BsSendCheck /> Send</button>
                    {/* <input type="submit" className="btn  bg-[#311E25]  text-white  rounded-lg text-xl font-bold hover:bg-transparent hover:border-2 hover:border-[#311E25] hover:text-[#311E25]" value="Send"/> */}
                </form>
                <div className="flex flex-col gap-4 w-5/12 space-y-3">

                    {/* <p className="flex items-center bg-white shadow-lg py-6 px-6 rounded-lg gap-2 text-xl"><TiHomeOutline className="text-2xl"/> <span>
                        Mirpur-2, Dhaka-1216</span></p> */}

                    <p className="flex items-center bg-white shadow-lg py-6 px-6 rounded-lg gap-2 text-xl"><BsWhatsapp className="text-2xl" />
                        <span>+8801990524201</span></p>

                    <p className="flex items-center bg-white shadow-lg py-6 px-6 rounded-lg gap-2 text-xl"><MdAlternateEmail className="text-2xl" /> <span>
                        shirinsultana596@gmail.com</span></p>
                    <p className="flex items-center bg-white shadow-lg py-6 px-6 rounded-lg gap-2 text-xl"><FaLinkedin className="text-2xl" /> <a href="https://www.linkedin.com/in/shirin-sultana-28b338251/">
                    Shirin Sultana</a></p>
                    <p className="flex items-center bg-white shadow-lg py-6 px-6 rounded-lg gap-2 text-xl"><FaGithub className="text-2xl" /><a href="https://github.com/"> Shirin Sultana </a></p>
                    {/* <p className="flex items-center bg-white shadow-lg py-6 px-6 rounded-lg gap-2 text-xl"><CgWebsite className="text-2xl" /><span>
                        yoursite.com</span> </p> */}

                </div>

            </div></div>

    );
};

export default Contact;