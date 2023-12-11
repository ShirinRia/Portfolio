
import { useEffect, useState } from "react";
import Skill from "./Skill";

const Skills = () => {
    const [skills,setskills]=useState([])
    useEffect(() => {
        
        fetch('/skills.json')
        .then(res=>res.json())
        .then(data=>
            setskills(data))
       
    }, [])
    // console.log(skills)
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-5 gap-5 items-center justify-center">
           { skills.map(skill => <Skill key={skill.id} skill={skill}></Skill>)}
            {/* <div>
            <img src="./images/icons/mongo.png" alt="" />
            <p>MongoDb</p>
            </div> */}
        </div>
    );
};

export default Skills;