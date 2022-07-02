import 'jest-location-mock'
// jest.spyOn(console, 'log').mockReturnValue()
// jest.spyOn(console, 'info').mockReturnValue()
// jest.spyOn(console, 'warn').mockReturnValue()
// jest.spyOn(console, 'error').mockReturnValue()
Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: jest.fn().mockImplementation(query => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(), // deprecated
		removeListener: jest.fn(), // deprecated
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	})),
})
import '@testing-library/jest-dom'
import server from './mockServer/server'

beforeAll(() => {
	server.listen()
})

afterEach(() => {
	server.resetHandlers()
})

afterAll(() => {
	server.close()
})
