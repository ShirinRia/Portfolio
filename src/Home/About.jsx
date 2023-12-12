import pic1 from '../assets/lerv.png'
import uits from '../assets/uits.png'
const About = () => {
    return (
        <div className='max-w-6xl  my-16 mb-80 md:mb-56'> <h3 className="text-5xl font-medium text-[#311E25] mb-8 text-center">
        About Me
    </h3>
    
    <div className="flex flex-col lg:flex-row justify-between gap-20 items-center">
            
           
                <p className="text-lg text-justify w-full lg:w-7/12">
                    I am a passionate MERN (MongoDB, Express.js, React.js, Node.js) stack developer with a passion for coding and problem solving. I have solved over 500 problems on various coding platforms like Codeforces, Codechef, and Leetcode. Recently completed my Bachelor degree in Computer Science and Engineering in April 2023.

                    My goal is to establish myself as a successful software developer. I love using my solid grasp of full-stack JavaScript development to create high quality web applications. Continuous learning through taking on programming challenges excites me, as I can constantly upgrade my skills in this fast moving industry. I hope to apply my technical knowledge and solving complex problems mindset to build both robust and user-friendly web apps.
                </p>
           

            <div className="w-full lg:w-7/12 relative">
                
                <img src={uits} alt=""  className='mb-4 md:mb-0  h-72 w-[400px]'/>
                <img src={pic1} alt="" className='absolute lg:-right-10 md:right-10 md:top-[70%] h-72 w-[400px]' />
            </div>
        </div></div>
       
    );
};

export default About;