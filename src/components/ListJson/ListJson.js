import React, { Component } from 'react'
import ObjectInList from './ObjectInList'
import { RingLoader } from 'react-spinners'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add'
import TableJson from '../TableJson'
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

	remove = (id) => {
		this.props.removeFromList(id)
	}

	handleTitleChange = (event) => {
		this.setState({
			currentItem: {
				...this.state.currentItem,
				title: event.target.value
			}
		});
	}

	handleBodyChange = (event) => {
		this.setState({
			currentItem: {
				...this.state.currentItem,
				body: event.target.value
			}
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
			shouldUpdate: true,
			currentItem: {
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
			<div>
				<header>
					<div className="container">
						<span className="title"> Style Material Table </span>
						<RingLoader
							color={'#123abc'}
							loading={isFetching}
						/>
						{/* <Button variant="fab" color="primary" aria-label="Add">
							<AddIcon />
						</Button>
						<Button variant="fab" color="primary" aria-label="Add">
							<SearchIcon />
						</Button> */}
					</div>
				</header>
				<main>
					<section>
						<div className="container">
							<div >
								<TableJson data={defaultList} />
							</div>
						</div>
					</section>
					<section>
						<div className="container">
						</div>
					</section>
				</main>


				{/* { (this.state.shouldUpdate) &&
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
				} */}


				{/* <button className="buttonAdd" onClick={() => this.createNewItem()}>Add Item</button>
					<ul>
						{defaultList.map(item => (
							<div key={`${item.id}${item.title}`} >
								<ObjectInList title={item.title}/>
								<button onClick={() => this.remove(item.id)}> Remove Item </button>
								<button onClick={() => this.willUpdate(item)}> Update Item </button>
							</div>
						)
						)}
					</ul> */}
				{err}
			</div>
		)
	}
}
