import React from "react";

const Button = ({ name }) => {
	return (
		<button className="py-1.5 px-4 m-2 bg-gray-300 rounded-lg cursor-pointer">
			{name}
		</button>
	);
};

export default Button;
