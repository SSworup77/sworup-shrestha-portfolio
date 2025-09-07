import { cn } from "@/lib/utils";
import React from "react";
import CardFlip from "./CardFlip";
const Projects = () => {
	const projects = [
		{ image: "/edusity-project.png", title: "Edusity Landing page" },
	];
	return (
		<div className="mt-10 sm:mt-6 ">
			<div className="font-bold text-2xl text-primary">Projects</div>
			<div className={cn("text-secondary mt-2")}>
				I love building fun things here are some of my works
			</div>
			<div className="mt-6 grid items-center justify-center md:grid-cols-3 sm:grid-cols-1 sm:flex-row sm:items-center sm:justify-center sm:gap-4 xs:grid-cols-1 xs:flex-row xs:items-center xs:justify-center xs:gap-4">
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
				<CardFlip
					title="FontForge"
					subtitle="An google fonts like font tester application"
					description="The Font Forge font tester is a web application that allows users to preview and test different fonts in real-time, helping them choose the perfect typography for their projects."
					image="/font-tester.png"
					githubLink="https://github.com/SSworup77/UBA-font-tester"
				/>
			</div>
		</div>
	);
};

export default Projects;
