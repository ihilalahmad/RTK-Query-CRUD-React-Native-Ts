import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AnimalModel } from "../models/Animal.model";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3006/" }),
  tagTypes: ["AnimalModel"],
  endpoints: (builder) => ({
    getProducts: builder.query<AnimalModel, void>({
      query: () => "animals",
      providesTags: ["AnimalModel"],
    }),
    addAnimal: builder.mutation<void, AnimalModel>({
      query: (animal) => ({
        url: "animals",
        method: "POST",
        body: animal,
      }),
      invalidatesTags: ["AnimalModel"],
    }),
    updateAnimal: builder.mutation<void, AnimalModel>({
      query: ({ id, ...rest }) => ({
        url: `animals/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["AnimalModel"],
    }),
    deleteAnimal: builder.mutation<void, string>({
      query: (id) => ({
        url: `animals/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["AnimalModel"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddAnimalMutation,
  useUpdateAnimalMutation,
  useDeleteAnimalMutation,
} = productsApi;
