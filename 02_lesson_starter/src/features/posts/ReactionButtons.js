import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😲",
  heart: "❤",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => (
    <button
      key={name}
      type="button"
      className="reactionButton"
      onClick={() => {
        dispatch(reactionAdded({ postId: post.id, reaction: name }));
      }}
    >
      {emoji} {post.reactions[name]}
    </button>
  ));
  return <>{reactionButtons}</>;
};

export default ReactionButtons;
