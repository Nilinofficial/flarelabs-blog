import PostList from "./PostList";

const PostLists = () => {
  return (
    <>
      <PostList
        src="https://ik.imagekit.io/1ggubenni8/featured2.jpeg?updatedAt=1732365417956"
        title="A Study on Orchestration"
        author="Nilin Jacob"
        createdAt="12/12/2024"
      />
      <PostList
        src="https://ik.imagekit.io/1ggubenni8/postImg.jpeg?updatedAt=1732365417895"
        title="React Router Dom V7"
        author="Nilin Jacob"
        createdAt="12/12/2024"
      />
    </>
  );
};

export default PostLists;
