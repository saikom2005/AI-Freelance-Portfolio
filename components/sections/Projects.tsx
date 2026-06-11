import { projects } from "@/components/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Projects() {
  return (
    <section id="work" className="py-10 border-t-[0.5px] border-border">
      <SectionLabel>Selected Work</SectionLabel>
      <h2 className="mb-6 text-[26px] font-semibold tracking-[-0.5px]">
        Recent projects
      </h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
