import React, {Component} from 'react';

// export default class NewIdeaButton extends Component {
// 	// constructor(props) {
// 	// 	super(props);
// 	// }
// 	render() {
// 		return(
// 			<button className='createNew' type='submit' onClick={this.props.addNew}>New Idea</button>
// 		);
// 	}
// }
// Stateless header
const NewIdeaButton = (props) => {
		return(
			<button className='createNew' type='submit' onClick={props.addNew}>New Idea</button>
		);

}
export default NewIdeaButton;