"use client";
import React, { useState } from "react";
import Container from "@/app/components/container";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const Navbar = () => {
	const navItems = [
		{ title: "Home", href: "/" },
		{ title: "Projects", href: "/projects" },
		{ title: "Contact", href: "/contact" },
		{ title: "Blog", href: "/blog" },
	];
	const [hovered, setHovered] = useState<number | null>(null);
	const { scrollY } = useScroll();
	const [scrolled, setscrolled] = useState<boolean>(false);
	useMotionValueEvent(scrollY, "change", (latest) => {
		if (latest > 20) {
			setscrolled(true);
		} else {
			setscrolled(false);
		}
	});
	return (
		<Container>
			<motion.nav
				animate={{
					boxShadow: scrolled ? "var(--shadow-aceternity)" : "none",
					width: scrolled ? "50%" : "100%",
					y: scrolled ? 10 : 0,
				}}
				transition={{
					duration: 0.3,
					ease: "easeInOut",
				}}
				className="flex fixed inset-x-0 top-0 max-w-4xl mx-auto items-center rounded-full justify-between p-2 z-10 backdrop-blur-sm bg-neutral/50"
			>
				<Image
					src="/profile.jpg"
					height={100}
					width={100}
					alt="Profile"
					className="rounded-full sm:h-12 sm:w-12 h-15 w-15 xs:h-7 xs:w-7"
				/>
				<div className="hidden md:flex items-center sm:flex">
					{navItems.map((item, idx) => (
						<Link
							className="relative px-4 py-1 text-sm"
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
