import { useEffect, useRef } from 'react'

const usePrevious = <T>(value: T, defaultValue?) => {
	const ref = useRef<T>(defaultValue)

	useEffect(() => {
		ref.current = value
	}, [value])
	return ref.current
}

export default usePrevious
