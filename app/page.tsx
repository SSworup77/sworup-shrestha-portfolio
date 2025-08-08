import Image from "next/image";
import Container from "./components/container";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Footer from "./components/footer/Footer";

export default function Home() {
	return (
		<div className="flex min-h-screen items-start justify-start ">
			<Container className="min-h-screen p-4 md:p-10">
				<h1 className="font-bold tracking-tight text-2xl md:text-4xl sm:text-3xl md:mt-14 sm:mt-15 xs:mt-30 text-primary">
					Hello there!
				</h1>
				<p className="text-secondary text-sm md:text-base pt-4 max-w-xl">
					I am Sworup, an eager learner, passionate problem solver who loves to
					build things with code. I love working on various projects, from
					simple websites to complex applications that challenge my skills and
					creativity.
				</p>
				<p className="text-secondary text-sm md:text-base pt-4 max-w-xl">
					When I am not coding, you can find me exploring new technologies,
					reading books, or painting.
				</p>
				<TechStack />
				<Projects />
				<Footer/>
			</Container>
		</div>
	);
}
