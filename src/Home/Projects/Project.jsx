import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

const Project = ({ project }) => {
    const { projectName, logo, description, technologies, gitClient, gitServer, liveLink } = project
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes"  /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl text-[#311E25]">
                    {projectName}

                </h2>
                <p className='text-justify'>{description}</p>
              
                    <div className='flex gap-2 items-center my-4'>
                        {technologies.map((technology, idx) =>  <img key={idx} src={technology} alt="" className="h-[25px] w-[25px]"/>)}
                    </div>

                
                <div className="card-actions justify-end ">
                    <div>
                        <div className="mr-1 badge badge-outline"> <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Preview</a> </div>
                        <div className="mr-1 badge badge-outline"> <a href={gitClient} target="_blank" rel="noopener noreferrer">Github-Client</a> </div>
                        <div className="mr-1 badge badge-outline"> <a href={gitServer} target="_blank" rel="noopener noreferrer">Github-Server</a> </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Project;