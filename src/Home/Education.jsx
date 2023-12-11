import { FaUniversity } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import bubt from '../assets/bubt.png'
import bcic from '../assets/bcic.jpg'
const Education = () => {
    return (

        <div className="max-w-7xl mx-auto  my-16">
            <ul className=" space-y-7  ">
                <li className="flex  items-center justify-between">
                    <div className="flex items-center">
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="text-lg mr-5 ml-2">2019 - 2023</div>
                        <div className="timeline-end timeline-box  justify-between space-y-5">

                            <p className="text-3xl font-medium text-[#311E25]"> B.Sc. in Computer Science and Engineering</p>
                            <p className="text-lg"> <div className="flex items-center gap-2"><FaUniversity /> Bangladesh University of Business and Technology</div></p>
                            <p className="text-lg"> <div className="flex items-center gap-2"><FaAward /> CGPA : 3.97/4.00</div></p>
                        </div>
                    </div>


                    <img src={bubt} alt="shirin" className="w-4/12" />
                </li>
                <li className="flex  items-center justify-between">
                    <div className="flex items-center">
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="text-lg mr-5 ml-2">2016 - 2018</div>
                        <div className="timeline-end timeline-box  justify-between space-y-5">

                            <p className="text-3xl font-medium text-[#311E25]"> Higher Secondary School Certificate</p>
                            <p className="text-lg"> <div className="flex items-center gap-2"><FaUniversity /> Bcic College</div></p>
                            <p className="text-lg"> <div className="flex items-center gap-2"><FaAward /> CGPA : 4.33/5.00</div></p>
                        </div>
                    </div>


                    <img src={bcic} alt="shirin" className="w-4/12" />
                </li>
                <li className="flex  items-center justify-between">
                    <div className="flex items-center">
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="text-lg mr-5  ml-2">2006 - 2016</div>
                        <div className="timeline-end timeline-box  justify-between space-y-5">

                            <p className="text-3xl font-medium text-[#311E25]"> Secondary School Certificate</p>
                            <p className="text-lg"> <div className="flex items-center gap-2"><FaUniversity /> Monipur High School and College</div></p>
                            <p className="text-lg"> <div className="flex items-center gap-2"><FaAward /> CGPA : 5.00/5.00</div></p>
                        </div>
                    </div>


                    <img src={bubt} alt="shirin" className="w-4/12" />
                </li>

            </ul>

        </div>

    );
};

export default Education;

// nontechnical, technical