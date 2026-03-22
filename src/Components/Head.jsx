import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Head = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const navigate = useNavigate();

	const searchCache = useSelector((store) => store.search);

	const dispatch = useDispatch();
	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	};

	const getSearchSuggestions = async () => {
		const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
		const json = await data.json();
		setSuggestions(json[1]);
		dispatch(cacheResults({ [searchQuery]: json[1] }));
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (searchCache[searchQuery]) {
				setSuggestions(searchCache[searchQuery]);
			} else {
				getSearchSuggestions();
			}
		}, 200);

		return () => {
			clearTimeout(timer);
		};
	}, [searchQuery]);

	return (
		<div className="py-3 px-6 grid grid-flow-col w-full shadow-lg">
			<div className="flex col-span-1 gap-4 pt-2">
				<i
					className="ri-menu-line text-2xl cursor-pointer"
					onClick={toggleMenuHandler}
				></i>
				<Link to="/">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
						className="h-6"
						alt="logo"
					/>
				</Link>
			</div>
			<div className="col-span-10 relative">
				<div>
					<form
						className="flex items-center justify-center"
						onSubmit={(e) => {
							e.preventDefault();
							if (searchQuery.trim()) {
								navigate("/search?q=" + searchQuery);
							}
						}}
					>
						<input
							type="text"
							className="border border-gray-400 w-1/2 py-2 px-3 rounded-l-full"
							placeholder="Search"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							onFocus={() => setShowSuggestions(true)}
							onBlur={() =>
								setTimeout(() => setShowSuggestions(false), 500)
							}
						/>
						<button
							type="submit"
							className="border border-gray-400 bg-gray-200 rounded-r-full p-1 px-3"
						>
							<i className="ri-search-line text-2xl"></i>
						</button>
					</form>
				</div>
				{showSuggestions && (
					<div className="absolute left-53 mx-4 px-1 w-125 bg-white rounded-lg shadow-lg">
						<ul>
							{suggestions.map((s) => (
								<Link to={"/search?q=" + s} key={s}>
									<li className="px-4 py-2 shadow-lg">
										<i className="ri-history-line"></i> {s}
									</li>
								</Link>
							))}
						</ul>
					</div>
				)}
			</div>
			<div className="col-span-1">
				<img
					src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
					className="h-8"
					alt="user"
				/>
			</div>
		</div>
	);
};

export default Head;
