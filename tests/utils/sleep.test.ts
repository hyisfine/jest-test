import sleep from 'utils/sleep'

describe('sleep', () => {
	beforeAll(() => {
		jest.useFakeTimers()
	})

	it('可以睡眠 1000ms', async () => {
		const callback = jest.fn()

		const act = async () => {
			await sleep(1000)
			callback()
		}

		let promise = act()
		// callback 还未调用
		expect(callback).not.toBeCalled()
		// 清算 Jest Message Queue 的回调，其中会执行 setTimeout 里的 resolve 函数
		jest.runAllTimers()

		// 执行 callback 内容
		await promise

		// callback 已调用
		expect(callback).toBeCalled()
		expect(callback).toHaveBeenCalledTimes(1)
	})
})
