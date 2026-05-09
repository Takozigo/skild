import { createFileRoute, Link } from "@tanstack/react-router";
import { TerminalIcon } from "lucide-react";
import SkillCard from "#/components/skill-card";
import { dummySkills } from "#/lib/dummy-skill";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div id="home">
			<section className="hero">
				<div className="copy">
					<h1>
						The Registery for <br />
						<span className="text-gradient">Agentic Intelligence</span>
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fuga
						veritatis maxime facere laboriosam? Porro animi eos corporis quo
						omnis delectus modi! Similique quis distinctio sed asperiores
						facilis veritatis a.
					</p>
				</div>

				<div className="actions">
					<Link to="/skills" className="btn-primary">
						<TerminalIcon size={18} />
						<span>Browse Registry</span>
					</Link>
					<Link to="/skills/new" className="btn-secondary">
						Publish Skill
					</Link>
				</div>
			</section>
			<section className="latest">
				<div className="space-y-2">
					<h2>
						Recently Created <span className="text-gradient">Skills</span>
					</h2>
					<p>
						{" "}
						Latest skills loaded from Firestore in descending creation order.
					</p>
				</div>
				<div className="skills-grid">
					{dummySkills.map((skill) => (
						<SkillCard key={skill.id} {...skill} />
					))}
				</div>
			</section>
		</div>
	);
}
