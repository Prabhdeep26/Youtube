import React from "react";
import Comment from "./Comment";
import CommentList from "./CommentList";

const commentData = [
	{
		name: "Akshay Saini",
		text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, vel?",
		replies: [
			{
				name: "Akshay Saini",
				text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, vel?",
				replies: [],
			},
			{
				name: "Akshay Saini",
				text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, vel?",
				replies: [],
			},
		],
	},
	{
		name: "Akshay Saini",
		text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, vel?",
		replies: [
			{
				name: "Akshay Saini",
				text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, vel?",
				replies: [
					{
						name: "Akshay Saini",
						text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, vel?",
						replies: [
							{
								name: "Akshay Saini",
								text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, vel?",
								replies: [
									{
										name: "Akshay Saini",
										text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, vel?",
										replies: [],
									},
								],
							},
							{
								name: "Akshay Saini",
								text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, vel?",
								replies: [],
							},
						],
					},
					{
						name: "Akshay Saini",
						text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, vel?",
						replies: [],
					},
				],
			},
			{
				name: "Akshay Saini",
				text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, vel?",
				replies: [],
			},
		],
	},
	{
		name: "Akshay Saini",
		text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, vel?",
		replies: [],
	},
	{
		name: "Akshay Saini",
		text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, vel?",
		replies: [
			{
				name: "Akshay Saini",
				text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, vel?",
				replies: [],
			},
			{
				name: "Akshay Saini",
				text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, vel?",
				replies: [],
			},
		],
	},
];

const CommentsContainer = () => {
	return (
		<div className="m-5 p-2 w-2/3">
			<h1 className="font-bold text-2xl">Comments:</h1>
			<CommentList comments={commentData} />
		</div>
	);
};

export default CommentsContainer;
