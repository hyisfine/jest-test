import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
	count: 0,
}

export const fetchCountThunk = createAsyncThunk('counter/fetchCountThunk', async () => {
	await sleep()
	return { count: 5 }
})

const sleep = (ms: number = 3000) => {
	return new Promise(resolve => {
		setTimeout(resolve, ms)
	})
}

export const counterSlice = createSlice({
	name: 'conter',
	initialState,
	reducers: {
		increment(state, { payload }) {
			state.count += payload ?? 1
		},
		decrement(state, { payload }) {
			state.count -= payload ?? 1
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchCountThunk.fulfilled, (state, action) => {
			state.count = action.payload.count
		})
	},
})
export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer

export const asyncIncrement = payload => async dispatch => {
	await sleep()
	dispatch(increment(payload))
}
