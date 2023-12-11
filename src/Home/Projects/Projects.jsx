
import { useEffect, useState } from "react";
import Project from './Project';
const Projects = () => {
    const [projectts,setprojects]=useState([])
    
    useEffect(() => {
        
        fetch('/projects.json')
        .then(res=>res.json())
        .then(data=>
            setprojects(data))
       
    }, [])
    console.log(projectts)
    return (
        <div className=" max-w-7xl mx-auto my-16 grid grid-cols-3">
            {projectts.map(project => <Project key={project.id} project={project}></Project>)}
           {/* <FontAwesomeIcon icon={faCodeBranch} /> */}
        </div>
    );
};

export default Projects;