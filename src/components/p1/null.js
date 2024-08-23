import React from 'react'

const EnhancedComponent = (OriginalComponent) => { 
	class NewComponent extends React.Component { 

		render() { 
			return <OriginalComponent name="HELLO BOSSS"/>
		} 
	} 
	
	return NewComponent 
} 

export default EnhancedComponent;

