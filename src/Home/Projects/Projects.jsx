
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
        <div className=" max-w-6xl md:mx-auto  my-16 ">
             <h3 className="text-5xl font-medium text-[#311E25] mb-8 text-center">
                Recent Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-20 items-center justify-center">
            {projectts.map(project => <Project key={project.id} project={project}></Project>)}
            </div>
            
           {/* <FontAwesomeIcon icon={faCodeBranch} /> */}
        </div>
    );
};

export default Projects;