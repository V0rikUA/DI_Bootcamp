import { useDispatch } from "react-redux";
import { addReaction } from "./postsSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButton = ({ post }) => {
  const dispatch = useDispatch();
  const renderReactions = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        className="reactionButton"
        onClick={() => dispatch(addReaction({ id: post.id, name }))}
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <div>{renderReactions}</div>;
};

export default ReactionButton;
