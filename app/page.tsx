import Image from "next/image";
import Container from "./components/container";

export default function Home() {
	return (
		<div className="flex min-h-screen items-start justify-start">
			<Container>
				<h1 className="font-bold tracking-tight text-2xl md:text-4xl">Hello There!</h1>
				<p>
					I am a eager learning passionate problem solver who loves to build
					things with code. I am currently learning Next.js and exploring its
					capabilities.
				</p>
			</Container>
		</div>
	);
}
