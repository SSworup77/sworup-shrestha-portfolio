import React from "react";

const Container = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={`max-w-5xl w-full mx-auto bg-white dark:bg-black ${className}`}>
			{children}
		</div>
	);
};

export default Container;
