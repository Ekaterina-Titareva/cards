import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchData = createAsyncThunk(
    'doggos',
    async (url, { rejectWithValue }) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
    }
);

export default fetchData;