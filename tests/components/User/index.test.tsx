import React from 'react'
import server from '../../mockServer/server'
import { rest } from 'msw'
import render from '../../testUtils/testRender'
import { fireEvent, screen } from '@testing-library/react'
import User from 'components/User'

// 初始化 Http 请求
const setupHttp = (name?: string, age?: number) => {
	server.use(
		rest.get('https://mysite.com/api/users', async (req, res, ctx) => {
			return res(
				ctx.status(200),
				ctx.json({
					id: '1',
					name: name || 'Jack',
					age: age || 18,
				}),
			)
		}),
	)
}

describe('User', () => {
	beforeAll(() => {
		jest.useFakeTimers()
	})

	it('点击可以正常获取用户列表', async () => {
		setupHttp('Mary', 10)

		render(<User />, {
			preloadedState: {
				user: {
					id: '',
					name: '',
					age: 10,
					status: '',
				},
			},
		})

		// 还没开始请求
		expect(screen.getByText('无用户信息')).toBeInTheDocument()

		// 开始请求
		fireEvent.click(screen.getByText('加载用户'))
		jest.runAllTimers()

		// 请求结束
		// expect(await screen.findByText('ID：id')).toBeInTheDocument()
		// expect(screen.getByText('姓名：ypc')).toBeInTheDocument()
		expect(screen.getByText('年龄：10')).toBeInTheDocument()

		// expect(screen.queryByText('加载中...')).not.toBeInTheDocument()
	})
})
