import { configureStore } from '@reduxjs/toolkit'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { reducer } from 'store/index'
import React from 'react'

const testRender = (ui: React.ReactElement, { preloadedState }) => {
	const store = configureStore({ reducer, preloadedState })
	const Wrapper = ({ children }) => {
		return <Provider store={store}>{children}</Provider>
	}
	return render(ui, { wrapper: Wrapper })
}

export default testRender
