import { SectionLabel } from "@/components/ui/SectionLabel";
import { Pill } from "@/components/ui/Pill";

const skills = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "XGBoost",
  "scikit-learn",
  "Claude API",
  "OpenAI API",
  "Streamlit",
  "pandas",
  "SQL",
  "React",
  "Data Visualization",
];

export function About() {
  return (
    <section id="about" className="py-10 border-t-[0.5px] border-border">
      <SectionLabel>About</SectionLabel>
      <h2 className="mb-6 text-[26px] font-semibold tracking-[-0.5px]">
        Who I am
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <p className="text-[15px] leading-[1.65] text-text-muted">
          I&apos;m a CS &amp; Data Science student at Rutgers University,
          graduating early and building production AI tools for small
          businesses along the way. I&apos;ve shipped a full-stack AI app and
          an ML model with 91% accuracy — and I care about delivering things
          that work in the real world, not just in a notebook.
          <br />
          <br />
          Outside of code, I&apos;m a D1 athlete and coach on the Rutgers
          Taekwondo team. Years of competing and coaching taught me how to
          break big goals into small, repeatable steps and follow through —
          the same discipline I bring to every project.
        </p>
        <div className="flex flex-wrap content-start gap-2">
          {skills.map((skill) => (
            <Pill key={skill}>{skill}</Pill>
          ))}
        </div>
      </div>
    </section>
  );
}
