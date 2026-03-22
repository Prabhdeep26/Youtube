import React from "react";
import Button from "./Button";

const list = [
	"All",
	"Games",
	"Cricket",
	"Standup Comedy",
	"Dramas",
	"News",
	"Virat Kohli",
	"Cooking",
	"Live",
	"Songs",
];

const ButtonList = () => {
	return (
		<div>
			{list.map((item) => (
				<Button key={item} name={item} />
			))}
		</div>
	);
};

export default ButtonList;
