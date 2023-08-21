import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["post"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: (result = [], error, arg) => [
        "post",
        ...result.map(({ id }) => ({ type: "post", id })),
      ],
    }),
    getPost: (builder) => ({
      query: (postId) => `/posts/${postId}`,
      providesTags: (result, error, arg) => [{ type: "post", id: arg }],
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    getComments: builder.query({
      query: () => "/comments",
    }),
    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: "/posts",
        method: "POST",
        body: initialPost,
      }),
      invalidatesTags: ["post"],
    }),
    editPost: builder.mutation({
      query: (initialPost) => ({
        url: `/posts/${initialPost.id}`,
        method: "PATCH",
        body: initialPost,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "post", id: arg.id }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetUsersQuery,
  useGetCommentsQuery,
  useAddNewPostMutation,
  useEditPostMutation,
} = apiSlice;
