import { skill } from "../assets/data/skill"

const Skill = () => {
    return (
        <div className="mx-5 md:mx-auto mt-16 max-w-6xl text-gray-800 dark:text-white">
            <h3 className= "text-6xl font-semibold">
                This is the Technology I've Used Before</h3>
            <div className="flex flex-row flex-wrap my-12 md:my-16 gap-5">
                {skill.map((skill) => (
                    <div className="mt-4 w-[39%] md:w-[23%]">
                        <img src={skill.img} alt="" className="h-16" />
                        <h4 className="font-semibold text-xl md:text-lg my-1">{skill.name}</h4>
                        <p className="text-base md:text-sm text-gray-500 dark:text-gray-400">{skill.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skill