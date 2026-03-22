import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<div className="shadow-lg px-5 py-4 text-lg">
			<ul className="w-36">
				<Link to={"/"}>
					<li>
						<i className="ri-home-4-line mr-2"></i>Home
					</li>
				</Link>
				<li className="cursor-pointer">
					<i className="ri-history-line mr-2"></i>History
				</li>
				<li className="cursor-pointer">
					<i className="ri-time-line mr-2"></i>Watch Later
				</li>
				<li className="cursor-pointer">
					<i className="ri-thumb-up-line mr-2"></i>Liked Videos
				</li>
				<li className="cursor-pointer">
					<i className="ri-download-line mr-2"></i> Downloads
				</li>
				<li className="cursor-pointer">
					<i className="ri-movie-line mr-2"></i> Your Videos
				</li>
			</ul>
			<h1 className="font-bold pt-2">Subscription</h1>
			<ul>
				<li className="cursor-pointer">
					<i className="ri-music-line mr-2"></i>Music
				</li>
				<li className="cursor-pointer">
					<i className="ri-shopping-bag-4-line mr-2"></i>Shopping
				</li>
				<li className="cursor-pointer">
					<i className="ri-broadcast-line mr-2"></i>Live
				</li>
				<li className="cursor-pointer">
					<i className="ri-film-line mr-2"></i>Movies
				</li>
			</ul>
			<h1 className="font-bold pt-5">Watch Later</h1>
			<ul>
				<li className="cursor-pointer">
					<i className="ri-music-line mr-2"></i>Music
				</li>
				<li className="cursor-pointer">
					<i className="ri-shopping-bag-4-line mr-2"></i>Shopping
				</li>
				<li className="cursor-pointer">
					<i className="ri-broadcast-line mr-2"></i>Live
				</li>
				<li className="cursor-pointer">
					<i className="ri-film-line mr-2"></i>Movies
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
