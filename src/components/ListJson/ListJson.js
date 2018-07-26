import React, { Component } from 'react'
import ObjectInList from './ObjectInList'
import { RingLoader } from 'react-spinners' 
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import FloatingActionButtons from '../Icon'
import './styles.css'

export default class ListJson extends Component {
	constructor(props) {
		super(props)
		this.state = { 
			currentItem: {},
			shouldUpdate: false,
		}
	}

	componentDidMount = () => {
		this.props.getDefaultList();
	}

	createNewItem = () => {
		this.props.addItemToList();
	}

	remove = (id) => {
		this.props.removeFromList(id)
	}

	handleTitleChange = (event) => {
		this.setState({
			 currentItem: { 
				...this.state.currentItem,
				title: event.target.value }
			});
	}

	handleBodyChange = (event) => {
		this.setState({ 
			currentItem: { 
				...this.state.currentItem,
				body: event.target.value}
		});
	}
	
	handleSubmit = (event) => {
		this.Update()
		alert('Title has been changed')
		event.preventDefault();
	}
	
	Update() {
		this.props.updateItemFromList(this.state.currentItem)
		this.setState({
			currentItem: {},
			shouldUpdate: false
		})
	}

	willUpdate(item) {
		console.log(this.state)
		this.setState({
			shouldUpdate : true,
			currentItem : {
				title: item.title,
				id: item.id,
				body: item.body,
				userId: item.userId
			}
		})
	}

	render() {
		const {
			errorMsg,
			defaultList,
			isFetching
		} = this.props
		const {
			currentItem
		} = this.state
		const err = errorMsg && <span>{errorMsg}</span>
		return (
			<div className="container">
				<RingLoader
					color={'#123abc'} 
					loading={isFetching} 
				/>	
				{ (this.state.shouldUpdate) &&
					<form onSubmit={this.handleSubmit}>
						<label>
							Title
							<input type="text" value={currentItem.title} onChange={this.handleTitleChange} />
						</label>
						<label>
							Body:
							<input type="text" value={currentItem.body} onChange={this.handleBodyChange} />
						</label>
							<input type="submit" value="Submit" />
					</form>
				}
				<div>
				<Button variant="fab" color="primary" aria-label="Add">
					<AddIcon />
				</Button>
				<FloatingActionButtons data={defaultList}/>
				<button className="buttonAdd" onClick={() => this.createNewItem()}>Add Item</button>
					<ul>
						{defaultList.map(item => (
							<div key={`${item.id}${item.title}`} >
								<ObjectInList title={item.title}/>
								<button onClick={() => this.remove(item.id)}> Remove Item </button>
								<button onClick={() => this.willUpdate(item)}> Update Item </button>
							</div>
						)
						)}
					</ul>
				</div>
				{err}
			</div>
		)
	}
}
