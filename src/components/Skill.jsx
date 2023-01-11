import { skill } from "../assets/data/skill"

const Skill = () => {
    return (
        <div className="mx-5 md:mx-auto mt-32 md:mt-16 max-w-6xl">
            <h3 className="text-white text-6xl font-semibold">
                This is the Technology I've Used Before</h3>
            <div className="flex flex-row flex-wrap my-12 md:my-16 text-white ">
                {skill.map((skill) => (
                    <div className="mt-4 mx-5 w-[39%] md:w-[23%]">
                        <img src={skill.img} alt="" className="h-16" />
                        <h4 className="font-semibold text-xl md:text-lg my-1">{skill.name}</h4>
                        <p className="text-base md:text-sm text-gray-400">{skill.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skill