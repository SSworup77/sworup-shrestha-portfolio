"use client";
import React, { useState } from "react";
import Container from "@/app/components/container";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const Navbar = () => {
	const navItems = [
		{ title: "Home", href: "/" },
		{ title: "About", href: "/about" },
		{ title: "Projects", href: "/projects" },
		{ title: "Contact", href: "/contact" },
		{ title: "Blog", href: "/blog" },
	];
	const [hovered, setHovered] = useState<number | null>(null);
	const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Scroll position:", latest);
    })
	return (
		<Container>
			<motion.nav className="flex items-center justify-between p-2">
				<Image
					src="/profile.jpg"
					height={100}
					width={100}
					alt="Profile"
					className="rounded-xl h-15 w-15"
				/>
				<div className="flex items-center gap-5">
					{navItems.map((item, idx) => (
						<Link
							className="relative px-2 py-1 text-sm"
							href={item.href}
							key={idx}
							onMouseEnter={() => setHovered(idx)}
							onMouseLeave={() => setHovered(null)}
						>
							{hovered === idx && (
								<motion.span
									layoutId="hovered-span"
									className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
								/>
							)}
							<span className="relative z-10">{item.title}</span>
						</Link>
					))}
				</div>
			</motion.nav>
		</Container>
	);
};

export default Navbar;
