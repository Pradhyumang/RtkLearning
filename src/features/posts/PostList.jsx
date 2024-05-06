import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";

const PostList = () => {
  const posts = useSelector(selectAllPosts);
  const renderPosts = posts.map((post) => (
    <div
      key={post.id}
      style={{
        border: "2px solid darkseagreen",
        margin: "5px",
        padding: "5px",
      }}
    >
      <h2>{post.title}</h2>
      <hr />
      <h5>{post.content}</h5>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date} />
      </p>
      <ReactionButton post={post} />
    </div>
  ));
  return (
    <div>
      <h1>Posts</h1>
      {renderPosts}
    </div>
  );
};

export default PostList;
