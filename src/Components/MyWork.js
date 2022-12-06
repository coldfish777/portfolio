import ProjectCard from "./ProjectCard";

export default function MyWork() {
    return (
        <div>
            <div className="split">
            <ProjectCard/>
            <ProjectCard/>
            </div>
            <div>
            <ProjectCard/>
            <ProjectCard/>
            </div>
        </div>
    );
}