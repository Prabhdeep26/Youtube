import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, generateRandomStrings } from "../utils/helper";

const LiveChat = () => {
	const [liveMessage, setLiveMessage] = useState("");
	const dispatch = useDispatch();

	const sendMsgHandler = () => {
		if (liveMessage !== "")
			dispatch(
				addMessage({
					name: "You",
					message: liveMessage,
				}),
			);
		setLiveMessage("");
	};

	const chatMessages = useSelector((store) => store.chat.messages);
	useEffect(() => {
		const i = setInterval(() => {
			// api polling

			dispatch(
				addMessage({
					name: generateRandomNames(),
					message: generateRandomStrings(),
				}),
			);
		}, 1000);

		return () => {
			clearInterval(i);
		};
	}, []);

	return (
		<>
			<div className="ml-10 p-2 border w-98 h-110 bg-slate-100 rounded-lg overflow-y-auto flex flex-col-reverse">
				{chatMessages &&
					chatMessages.map((chat, idx) => (
						<ChatMessage
							key={idx}
							name={chat.name}
							message={chat.message}
						/>
					))}
			</div>

			<form
				onSubmit={(e) => e.preventDefault()}
				className="ml-10 p-2 border w-98 rounded-lg"
			>
				<input
					className="w-4/5 focus:outline-0 px-2"
					type="text"
					placeholder="Enter your message"
					value={liveMessage}
					onChange={(e) => {
						setLiveMessage(e.target.value);
					}}
				/>
				<button
					className="px-2 mx-2 py-1 bg-red-500 text-white rounded-lg"
					onClick={sendMsgHandler}
				>
					Send
				</button>
			</form>
		</>
	);
};

export default LiveChat;
