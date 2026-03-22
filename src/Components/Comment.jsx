import React from "react";

const Comment = ({ data }) => {
	const { name, text } = data;
	return (
		<div className="flex gap-2 shadow-lg bg-gray-300 rounded-lg px-5 py-3 my-2">
			<img
				src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
				alt="user-icon"
				className="h-8"
			/>
			<div>
				<p className="font-semibold">{name}</p>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default Comment;
