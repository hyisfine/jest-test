import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchUser } from 'apis/user'

export const fetchUserThunk = createAsyncThunk('user/fetchUserThunk', async () => {
	await sleep()

	return 12345
})

const sleep = (ms: number = 3000) => {
	return new Promise(resolve => {
		setTimeout(resolve, ms)
	})
}
