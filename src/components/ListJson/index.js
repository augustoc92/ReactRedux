// Dependencies:
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Components:
import ListJson from './ListJson'

// Actions:
import { getDefaultList, removeFromList,
   updateItemFromList, addItemToList } from '../../redux/modules/posts/actions'

const mapStateToProps = (state) => {
  return {
    defaultList: state.posts.defaultList,
    isFetching: state.posts.isFetching,
    errorMsg: state.posts.errorMsg
  }
}


const mapDispatchToProps = (dispatch) => ({
  getDefaultList: bindActionCreators(getDefaultList, dispatch),
  removeFromList: bindActionCreators(removeFromList, dispatch),
  updateItemFromList: bindActionCreators(updateItemFromList, dispatch),
  addItemToList: bindActionCreators(addItemToList, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ListJson)
