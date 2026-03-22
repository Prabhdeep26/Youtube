import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_LIST_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice";

const SearchPage = () => {
	const [results, setResults] = useState(null);
	const dispatch = useDispatch();

	let [searchQuery] = useSearchParams();
	const getVideoSuggestions = async () => {
		const data = await fetch(
			YOUTUBE_SEARCH_LIST_API + "&q=" + searchQuery.get("q"),
		);
		const json = await data.json();
		setResults(json.items);
	};
	useEffect(() => {
		getVideoSuggestions();
		dispatch(openMenu());
	}, [searchQuery.get("q")]);

	if (results == null) return;
	return (
		<div className="w-full">
			{results.map((result) => (
				<Link to={"/watch?v=" + result?.id?.videoId}>
					<div className="grid grid-cols-12 bg-gray-300 w-[80%] mx-auto my-3 rounded-xl">
						<div className="col-span-5 px-4 py-2">
							<img
								src={result?.snippet?.thumbnails?.medium.url}
								className="w-full h-auto"
							/>
						</div>
						<div className="col-span-7">
							<h2 className="font-semibold my-3 text-xl">
								{result?.snippet?.title}
							</h2>
							<p className="flex gap-1">
								<img
									src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
									className="h-6"
									alt="user"
								/>
								{result?.snippet?.channelTitle}
							</p>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default SearchPage;
