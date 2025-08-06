import { LucideIcon } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

interface SmallButtonProps {
	href: string;
	icon: LucideIcon;
	size?: number;
	label?: string;
	variant?: "primary" | "ghost";
	className?: string;
	external?: boolean;
}
const SmallButton: FC<SmallButtonProps> = ({
	href,
	icon: Icon,
	size = 20,
	label = "",
	variant = "primary",
	className = "",
	external = false,
}) => {
	const buttonClasses =
		variant === "primary"
			? "flex items-center justify-center bg-gradient-to-br from-neutral-100 via-slate-100 to-slate-100 hover:from-neutral-300 hover:via-slate-200 hover:to-slate-300 dark:from-neutral-800 dark:via-neutral-800 dark:to-neutral-800 dark:hover:from-neutral-700 dark:hover:via-neutral-700 dark:hover:to-neutral-700 rounded-lg p-2 transition-colors duration-500 ease-out"
			: "hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg p-2 transition-colors";

	const combinedClasses = `${buttonClasses} ${className}`;
	if (external) {
		return (
			<button className={combinedClasses}>
				<a target="_blank" rel="noopener noreferrer" href={href}>
					<Icon size={size} className="text-primary" />
					<p>{label}</p>
				</a>
			</button>
		);
	} else {
		return (
			<button className={combinedClasses}>
				<Link href={href} className="inline-flex items-center justify-center">
					<Icon size={size} />
				</Link>
			</button>
		);
	}
};

export default SmallButton;
