import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const jobSlice = createSlice({
  name: "job",
  initialState: {
    loading: false,
    jobs: [],
    error: null,
  },
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setJobs: (state, { payload }) => {
      state.loading = false;
      state.jobs = payload;
      state.error = null;
    },
    setError: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const getJobs = () => async (dispatch) => {
  await dispatch(setLoading(true));
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/pt-job-posts/no-auth`
    );
    await dispatch(setJobs(response?.data?.length > 0 ? response.data : []));
  } catch (error) {
    await dispatch(setError(error.message));
  }
};

export const postJob = (data) => async (dispatch) => {
  await dispatch(setLoading(true));
  try {
    await axios.post(
      `${import.meta.env.VITE_BASE_URL}/pt-job-applies/no-auth`,
      data
    );
    await dispatch(setLoading(false));
    return true;
  } catch (error) {
    await dispatch(setError(error.message));
  }
};

export const { setLoading, setJobs, setError } = jobSlice.actions;
export default jobSlice.reducer;
