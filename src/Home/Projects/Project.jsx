import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

const Project = ({ project }) => {
    const {projectName,logo,description,technologies,gitClient,gitServer,liveLink}=project
    return (
       
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                       {projectName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className='text-justify'>{description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
       
    );
};

export default Project;