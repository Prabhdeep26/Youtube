import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
	const [searchParam] = useSearchParams();
	const videoUrl = searchParam.get("v");

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(closeMenu());
	}, []);
	return (
		<div className="p-5 px-8">
			<div className="flex">
				<iframe
					width="880"
					height="480"
					src={"https://www.youtube.com/embed/" + videoUrl}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
				<div className="">
					<LiveChat />
				</div>
			</div>
			<CommentsContainer />
		</div>
	);
};

export default WatchPage;
