import Comment from "./Comment";

const CommentList = ({ comments }) => {
	return (
		<div>
			{comments.map((comment, idx) => (
				<div key={idx}>
					<Comment data={comment} />
					<div className="ml-10 border-l-2 border-l-black">
						<CommentList comments={comment.replies} />
					</div>
				</div>
			))}
		</div>
	);
};

export default CommentList;
