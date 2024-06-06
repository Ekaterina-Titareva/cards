import { createSlice} from '@reduxjs/toolkit';
import fetchData from './fetchData';

const cardsSlice = createSlice({
name: 'cards',
initialState: {
    cards: [],
    favorites: [],
    data: [],
    loading: false,
    error: null
},
reducers: {
    cardAdded(state, action) {
    state.cards.push(action.payload);
    },
    cardDeleted: (state, action) => {
        const index = state.data.findIndex(card => card === action.payload);
        if (index !== -1) {
            // Удаляем карточку из массива
            state.data.splice(index, 1);
        }
    },
    toggleFavorites: (state, action) => {
        const isExist = state.favorites.some(card => card === action.payload);
        if (isExist) {
            state.favorites = state.favorites.filter(card => card !== action.payload);
        } else {
            state.favorites.push(action.payload);
        }
    },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchData.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchData.fulfilled, (state, action) => {
            state.data = action.payload.filter(item => item.includes('.jpg')).slice(0, 16);
            state.loading = false;
        })
        .addCase(fetchData.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        });
    },
})


export const { cardAdded, cardDeleted, toggleFavorites } = cardsSlice.actions;
export { cardsSlice };