import React from "react";

const VideoCard = ({ info }) => {
	const { snippet, statistics } = info;
	const { viewCount } = statistics;
	const { title, thumbnails, channelTitle } = snippet;
	return (
		<div className="w-70 p-2 m-2 shadow-2xl bg-white rounded-lg">
			<img
				src={thumbnails.medium.url}
				alt="thumbnail"
				className="rounded-lg"
			/>
			<ul>
				<li className="font-semibold">{title}</li>
				<li className="text-sm">{channelTitle}</li>
				<li className="text-sm">{viewCount} views</li>
			</ul>
		</div>
	);
};

export default VideoCard;
