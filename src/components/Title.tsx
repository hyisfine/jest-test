import { Row, Col } from 'antd'
import React, { CSSProperties, FC } from 'react'

interface Props {
	type: 'large' | 'small'
	title: string
}

// large 样式
const largeStyle: CSSProperties = {
	fontSize: '2em',
	color: 'red',
}

// small 样式
const smallStyle: CSSProperties = {
	fontSize: '0.5em',
	color: 'green',
	fontWeight: 'bold',
}

// 样式 Mapper
const styleMapper: Record<'small' | 'large', CSSProperties> = {
	small: smallStyle,
	large: largeStyle,
}

const Title: FC<Props> = props => {
	const { title, type } = props
	return (
		<Row style={styleMapper[type]}>
			<Col>第一个 Col</Col>
			<Col>
				<div>{title}</div>
			</Col>
		</Row>
	)
}

export default Title
