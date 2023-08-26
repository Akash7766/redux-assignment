import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const bookApi = createApi({
  reducerPath: "bookApi",
  tagTypes: ["books"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/book" }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/",
      providesTags: ["books"],
    }),
    createBook: builder.mutation({
      query: (newBook) => ({
        url: "/create-book",
        method: "POST",
        body: newBook,
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBooksQuery, useCreateBookMutation } = bookApi;
