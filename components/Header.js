import React from 'react'
import { Header as NBHeader, Body, Title } from 'native-base'

const Header = () => {
	return (
		<NBHeader style={{ backgroundColor: '#5859f2' }}>
			<Body>
				<Title style={{ color: '#ffffff' }}>Header</Title>
			</Body>
		</NBHeader>
	)
}

export default Header
