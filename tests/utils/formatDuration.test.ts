import formatDuration from 'utils/formatDuration'

describe('func', () => {
	it('格式化分支', () => {
		expect(formatDuration()).toBe('--分钟')
		expect(formatDuration(1)).toBe('1分钟')
		expect(formatDuration(61, true)).toBe('1分钟')
	})
})
