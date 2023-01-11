import { project } from "../assets/data/project"
import ProjectCard from "./ProjectCard"

const FavProjects = () => {
    const favProject = project.slice(0, 3)
    return (
        <div className='md:max-h-[800px]'>
            <h3 className='text-5xl font-semibold pt-28 pb-16 text-white text-center'>Here are a few of my favorite projects</h3>
            <div className="flex flex-row flex-wrap justify-center gap-5 text-white">
                {favProject.map((projects) => (
                    <ProjectCard key={projects.name} projects={projects} />
                ))}
            </div>
            <div className="flex justify-center items-center text-white">
                <button className="text-base md:text-sm rounded-full px-4 py-2 border-2 border-blue-500 hover:bg-blue-900 hover:opacity-90 mt-8">View More</button>
            </div>
        </div>
    )
}

export default FavProjects