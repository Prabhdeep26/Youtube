import React from "react";
import Head from "./Components/Head";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";
import Demo from "./Components/Demo";
import SearchPage from "./Components/SearchPage";

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Body />,
		children: [
			{
				path: "/",
				element: <MainContainer />,
			},
			{
				path: "/watch",
				element: <WatchPage />,
			},
			{
				path: "/search",
				element: <SearchPage />,

			},
		],
	},
]);

const App = () => {
	return (
		<Provider store={store}>
			<div>
				
				<RouterProvider router={appRouter} >
					
				</RouterProvider>
				{/**
				 * Head
				 * Body
				 * 	Sidebar
				 * 		MenuItems
				 * 	MainContainer
				 * 		ButtonsList
				 * 		VideoContainer
				 * 			VideoCard
				 *
				 */}
			</div>
		</Provider>
	);
};

export default App;
