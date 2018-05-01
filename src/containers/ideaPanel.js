import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Transition from 'react-transition-group/Transition'; 
import NewIdeaButton from '../components/newIdeaButton';
import SortIdeas from '../components/sortIdeas';
import IdeaList from '../containers/ideaList';
import SaveButton from '../components/saveButton';

export default class IdeaPanel extends Component {
	constructor() {
		super();
		this.state = {
			entries: [],
			hasListUpdated: false,
			nextUpdate: true
		}
		this.addNew = this.addNew.bind(this);
		this.clearIdea = this.clearIdea.bind(this);
		this.changeInField = this.changeInField.bind(this);
		this.sortByAlphabet = this.sortByAlphabet.bind(this);
		this.sortByDate = this.sortByDate.bind(this);
	}
	addNew(e) {
		let entries = [...this.state.entries]; // spread operator , copy of state before changing it because of performance reasons
		// let ideaArray = this.state.entries;
		
		entries.push({
			title: '',
			desc: '',
			key: Date.now()
		})

		this.setState({
			entries,
			hasListUpdated: true
		})

		setTimeout(()=>{
			this.setState({
				hasListUpdated: false
			})
		}, 500);

	}
	clearIdea(key) {
		let entries = [...this.state.entries];
		entries.filter(function(item){
			return (item.key !== key);
		})

		this.setState({
			entries,
			hasListUpdated: true
		})

		setTimeout(() => {
			this.setState({
				hasListUpdated: false
			})
		}, 500);
	}
	changeInField(ideaArray) {
		this.setState({
			entries: ideaArray,
			hasListUpdated: true
		})

		setTimeout(() =>{
			this.setState({
				hasListUpdated: false
			})
		}, 500);
	}
	sortByAlphabet() {
		let entries = [...this.state.entries];
		entries.sort(function(a, b) {
			let ideaA = a.title.toLowerCase(),
				ideaB = b.title.toLowerCase();

			if(ideaA < ideaB) {
				return -1
			}
			if(ideaA > ideaB) {
				return 1
			}
			return 0;
		})
		this.setState({
			entries
		})
	}
	sortByDate() {
		let arr = this.state.entries;
		arr.sort(function(a, b) {
			let ideaA = a.key,
				ideaB = b.key;

			if(ideaA < ideaB) {
				return -1
			}
			if(ideaA > ideaB) {
				return 1
			}
			return 0;
		})
		this.setState({
			entries: arr
		})
	}
		
	render() {
		return(
			<div className='ideaPanel'>
				<div className='ideaPanelHeader'>
					<NewIdeaButton addNew={this.addNew} />
					<SortIdeas sortByAlphabet={this.sortByAlphabet} sortByDate={this.sortByDate} />
					{ this.state.hasListUpdated && <SaveButton /> }
				</div>
				<IdeaList entries={this.state.entries} clearIdea={this.clearIdea} changeInField={this.changeInField} />
			</div>
		);
	}
}