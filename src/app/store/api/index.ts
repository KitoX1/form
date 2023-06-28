import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { type FormDataTypeApi } from '../types';

export const rootAPISlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'anyapi' // TO DO: сделать API-заглушку
  }),
  endpoints: (builder) => ({
    postFormData: builder.mutation<void, FormDataTypeApi>({
      query: (data) => ({
        url: '/frontend',
        method: 'POST',
        body: data
      })
    })
  })
});

export const { usePostFormDataMutation } = rootAPISlice;
