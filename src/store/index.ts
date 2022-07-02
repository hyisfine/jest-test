import counterReducer from './counter/reducer'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import userReducer from './user/reducer'

export const reducer = combineReducers({
	counter: counterReducer,
	user: userReducer,
})

const store = configureStore({
	reducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: () => RootState = () => useSelector((state: RootState) => state)
export const useAppSelector2: TypedUseSelectorHook<RootState> = useSelector

export default store
