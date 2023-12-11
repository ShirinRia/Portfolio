

const Skill = ({ skill }) => {
    const { skillname, logo } = skill;

    return (
        <div className="flex gap-2 pl-4 border-2 rounded-lg  py-4 border-[#DB9A64]">
            <img src={logo} alt="" className=""/>
            <p className="text-2xl text-[#311E25] font-medium">{skillname}</p>
        </div>
    );
};

export default Skill;