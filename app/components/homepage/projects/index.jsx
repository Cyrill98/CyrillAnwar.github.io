import { projectsData } from '@/utils/data/projects-data';
import SectionHeading from '../../helper/section-heading';
import ProjectCard from './project-card';

const Projects = () => {

  return (
    <div id='projects' className="relative z-50 my-16 lg:my-28">
      <div className="sticky top-16 z-10 py-3 bg-canvas/70 backdrop-blur-md">
        <SectionHeading index="04" title="Projects" />
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;