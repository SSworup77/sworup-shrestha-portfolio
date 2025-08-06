"use client";

import { cn } from "@/lib/utils";
import {
	ArrowRight,
	Code2,
	Copy,
	Github,
	Globe,
	Rocket,
	Zap,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import SmallButton from "./SmallButton";

export interface CardFlipProps {
	title?: string;
	subtitle?: string;
	description?: string;
	features?: string[];
	image?: string;
	githubLink?: string;
	liveLink?: string;
}

export default function CardFlip({
	title = "",
	subtitle = "",
	description = "",
	image = "",
	githubLink = "",
	liveLink = "",
}: CardFlipProps) {
	const [isFlipped, setIsFlipped] = useState(false);

	return (
		<div
			className="group relative h-[300px] w-full max-w-[300px] [perspective:2000px]"
			onMouseEnter={() => setIsFlipped(true)}
			onMouseLeave={() => setIsFlipped(false)}
		>
			<div
				className={cn(
					"relative h-full w-full",
					"[transform-style:preserve-3d]",
					"transition-all duration-700",
					isFlipped
						? "[transform:rotateY(180deg)]"
						: "[transform:rotateY(0deg)]"
				)}
			>
				{/* Front of card */}
				<div
					className={cn(
						"absolute inset-0 h-full w-full",
						"[transform:rotateY(0deg)] [backface-visibility:hidden]",
						"overflow-hidden rounded-2xl",
						"bg-gradient-to-br from-neutral via-neutral-50 to-neutral-200",
						"dark:from-zinc-900 dark:via-zinc-900/95 dark:to-zinc-800",
						"border border-slate-200 dark:border-zinc-800/50",
						"shadow-lg dark:shadow-xl",
						"transition-all duration-700",
						"group-hover:shadow-xl dark:group-hover:shadow-2xl",
						"group-hover:border-primary/20 dark:group-hover:border-primary/30",
						isFlipped ? "opacity-0" : "opacity-100"
					)}
				>
					{/* Background gradient effect */}
					<div className="from-primary/5 dark:from-primary/10 absolute inset-0 bg-gradient-to-br via-transparent to-blue-500/5 dark:to-blue-500/10" />

					{/* Animated code blocks */}
					<div className="absolute inset-0 flex items-center justify-center">
						<Image
							src={image}
							alt="Edusity Project"
							width={250}
							height={200}
							className="rounded-md pb-25"
						/>
					</div>

					{/* Bottom content */}
					<div className="absolute right-0 bottom-0 left-0 p-5">
						<div className="flex items-center justify-between gap-3">
							<div className="space-y-1.5">
								<h3 className="text-lg leading-snug font-semibold tracking-tight text-zinc-900 transition-all duration-500 ease-out group-hover:translate-y-[-4px] dark:text-white">
									{title}
								</h3>
								<p className="line-clamp-2 text-sm tracking-tight text-zinc-600 transition-all delay-[50ms] duration-500 ease-out group-hover:translate-y-[-4px] dark:text-zinc-300">
									{subtitle}
								</p>
							</div>
							<div className="group/icon relative">
								<div
									className={cn(
										"absolute inset-[-8px] rounded-lg transition-opacity duration-300",
										"from-primary/20 via-primary/10 bg-gradient-to-br to-transparent",
										"opacity-0 group-hover/icon:opacity-100"
									)}
								/>
								{/* <Zap className="text-primary relative z-10 h-5 w-5 transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:rotate-12" /> */}
							</div>
						</div>
					</div>
				</div>

				{/* Back of card */}
				<div
					className={cn(
						"absolute inset-0 h-full w-full",
						"[transform:rotateY(180deg)] [backface-visibility:hidden]",
						"rounded-2xl p-5",
						"bg-gradient-to-br from-white via-slate-50 to-slate-100",
						"dark:from-zinc-900 dark:via-zinc-900/95 dark:to-zinc-800",
						"border border-slate-200 dark:border-zinc-800",
						"shadow-lg dark:shadow-xl",
						"flex flex-col",
						"transition-all duration-700",
						"group-hover:shadow-xl dark:group-hover:shadow-2xl",
						"group-hover:border-primary/20 dark:group-hover:border-primary/30",
						!isFlipped ? "opacity-0" : "opacity-100"
					)}
				>
					{/* Background gradient */}
					<div className="from-primary/5 dark:from-primary/10 absolute inset-0 rounded-2xl bg-gradient-to-br via-transparent to-blue-500/5 dark:to-blue-500/10" />

					<div className="relative z-10 flex-1 space-y-5">
						<div className="space-y-2">
							<div className="mb-2 flex items-center gap-2">
								<div className="from-primary via-primary/90 to-primary/80 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br">
									<Code2 className="h-4 w-4 text-white" />
								</div>
								<h3 className="text-lg leading-snug font-semibold tracking-tight text-zinc-900 transition-all duration-500 ease-out group-hover:translate-y-[-2px] dark:text-white">
									{title}
								</h3>
							</div>
							<p className="text-sm tracking-tight text-zinc-600 transition-all duration-500 ease-out group-hover:translate-y-[-2px] dark:text-zinc-400 mt-4">
								{description}
							</p>
						</div>
					</div>

					<div className="relative z-10 mt-auto border-t border-slate-200 pt-4 dark:border-zinc-800">
						<div
							className={cn(
								"group/start relative",
								"flex items-center justify-between",
								"rounded-lg p-2.5",
								"transition-all duration-300",
								"dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-800",
								"dark:hover:from-primary/20 dark:hover:via-primary/10 dark:hover:to-transparent"
							)}
						>
							<div className="flex items-center gap-4 text-primary">
								<SmallButton
									href={githubLink}
									icon={Github}
									size={20}
									external={true}
								/>
								<SmallButton
									href={liveLink}
									icon={Globe}
									size={20}
									external={true}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				@keyframes slideIn {
					0% {
						transform: translateX(-100px);
						opacity: 0;
					}
					50% {
						transform: translateX(0);
						opacity: 0.8;
					}
					100% {
						transform: translateX(100px);
						opacity: 0;
					}
				}
			`}</style>
		</div>
	);
}
