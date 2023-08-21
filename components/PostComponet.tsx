"use client";
import {
  useGetPostsQuery,
  useAddNewPostMutation,
  useEditPostMutation,
} from "@/lib/apiSlice";

const PostComponet = () => {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();

  const [addNewPost] = useAddNewPostMutation();
  const [editPost] = useEditPostMutation();

  const addPost = async () => {
    await addNewPost({
      title: "Test",
      author: "Amar",
    }).unwrap();
  };

  const handleEdit = async () => {
    await editPost({
      id: 4,
      title: "Updated Post new",
      author: "Amar update",
    }).unwrap();
  };
  return (
    <div className="bg-white shadow-lg w-full h-auto p-16">
      <h2 className="text-center font-bold">Listing Posts</h2>
      <h4 className="text-left font-serif mt-4">
        current status of request &nbsp;
        {isLoading && "loading"}
        {isSuccess && "successed"}
        {isError && "Error"}
      </h4>

      <div className="bg-gray shadow-lg w-96 p-12">
        {posts &&
          posts.map((post: any) => (
            <div key={post.id} className="border-blue-500 p-4">
              <h2>{post.title}</h2>
              <h4>{post.author}</h4>
            </div>
          ))}
      </div>
      <button className="bg-black p-4 text-white" onClick={addPost}>
        Add New Post
      </button>
      <button className="bg-black p-4 text-white" onClick={handleEdit}>
        Update Post
      </button>
    </div>
  );
};

export default PostComponet;
