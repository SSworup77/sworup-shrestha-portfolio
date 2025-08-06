import { cn } from "@/lib/utils";
import React from "react";
import CardFlip from "./CardFlip";
const Projects = () => {
	const projects = [
		{ image: "/edusity-project.png", title: "Edusity Landing page" },
	];
	return (
		<div className="md:mt-10 mt-6 ">
			<div className="font-bold text-2xl text-primary">Projects</div>
			<div className={cn("text-secondary md:mt-2")}>
				I love building fun things here are some of my works
			</div>
			<div className="md:mt-6 grid grid-cols-3">
				<CardFlip
					title="Edusity Landing page"
					subtitle="A Landing page for educational institute"
					description="The friendly and modern landing page for educational institutes, designed to engage and inform visitors with a clean and intuitive layout."
					image="/edusity-project.png"
					githubLink="https://github.com/SSworup77/Edusity"
					liveLink="https://edusity-two-alpha.vercel.app/"
				/>
				<CardFlip
					title="CodeOn"
					subtitle="An online code previewer for learning developers"
					description="This code previewer will help any developers preview their code written in HTML, CSS and JavaScript and download the snippet of their code to their device."
					image="/codeon-editor.png"
					githubLink="https://github.com/SSworup77/Online-Editor"
					liveLink="https://online-editor-iota.vercel.app/"
				/>
			</div>
		</div>
	);
};

export default Projects;
