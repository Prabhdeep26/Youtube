import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";
import WatchPage from "./WatchPage";
import { Outlet } from "react-router-dom";
import Head from "./Head";

const Body = () => {
	const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
	return (
		<>
			<Head />
			<div className="flex">
				{isMenuOpen && <Sidebar />}
				<Outlet />
			</div>
		</>
	);
};

export default Body;
