import React from 'react'
import Title from 'components/Title'
import AuthButton from 'components/AuthButton'
import Counter from 'components/Counter'
import User from 'components/User'

const App = () => {
	return (
		<div>
			{/*...*/}
			<section>
				{/* <User /> */}
				<Counter></Counter>
				<User />
			</section>
		</div>
	)
}
export default App
