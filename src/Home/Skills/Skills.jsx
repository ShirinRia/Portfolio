
import { useEffect, useState } from "react";
import Skill from "./Skill";

const Skills = () => {
    const [skills, setskills] = useState([])
    useEffect(() => {

        fetch('/skills.json')
            .then(res => res.json())
            .then(data =>
                setskills(data))

    }, [])
    // console.log(skills)
    return (
        <div className="max-w-6xl mx-0 md:mx-auto ">

            <h3 className="text-5xl font-medium text-[#311E25] mb-8 text-center">
                Technical Skills
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-5 items-center justify-center">
                {skills.map(skill => <Skill key={skill.id} skill={skill}></Skill>)}
            </div>

            {/* <div>
            <img src="./images/icons/mongo.png" alt="" />
            <p>MongoDb</p>
            </div> */}
        </div>
    );
};

export default Skills;