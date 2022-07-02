const formatDuration = (duration?: number, ms = false) => {
	if (typeof duration !== 'number') return '--分钟'
	return `${ms ? Math.round(duration / 60) : duration}分钟`
}

export default formatDuration
