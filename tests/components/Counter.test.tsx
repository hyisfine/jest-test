import Counter from 'components/Counter'
import testRender from '../testUtils/testRender'
import React from 'react'
import { fireEvent, screen } from '@testing-library/react'

describe('Counter', () => {
	beforeAll(() => {
		jest.useFakeTimers()
	})

	it('用户点击增加', async () => {
		const { baseElement } = testRender(<Counter></Counter>, {
			preloadedState: {
				counter: { count: 0 },
			},
		})
		// expect(baseElement).toMatchSnapshot()
		expect(screen.getByText('0')).toBeInTheDocument()
		fireEvent.click(await screen.getByText('异步添加'))
		jest.runAllTimers()
		expect(await screen.findByText('5')).toBeInTheDocument()
		expect(screen.getByText('异步添加')).toBeInTheDocument()
	})
})
