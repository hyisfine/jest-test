import React, { CSSProperties } from 'react'
import { useSelector } from 'react-redux'
import { asyncIncrement, decrement, fetchCountThunk, increment } from 'store/counter/reducer'
import { useAppDispatch, useAppSelector } from 'store/index'

const style: CSSProperties = {
	fontSize: '32px',
	fontWeight: 'bold',
}

export const Counter = props => {
	const { counter } = useAppSelector()
	const dispatch = useAppDispatch()

	const onIncrement = () => {
		dispatch(increment(1))
	}
	const onDecrement = () => {
		dispatch(decrement(-1))
	}

	return (
		<div>
			<div style={style}>{counter.count}</div>
			<div>
				<button className='add' onClick={onIncrement}>
					增加
				</button>
			</div>
			<div>
				<button
					onClick={async () => {
						await dispatch(fetchCountThunk())
					}}
				>
					异步添加
				</button>
			</div>
			<div>
				<button onClick={onDecrement}>减少</button>
			</div>
		</div>
	)
}

export default Counter
