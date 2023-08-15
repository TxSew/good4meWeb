import { configureStore } from "@reduxjs/toolkit";
import  cardSlice  from "./Card/CardReducer";

export const store = configureStore({
	reducer: {
		// counter: counterSlice,
		cart: cardSlice,
		// crud: ProductReducer,
	},
});
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

