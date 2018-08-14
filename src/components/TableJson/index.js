// Dependencies:
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm } from 'redux-form'
import { reset } from 'redux-form';

// Components:
import TableJson from './TableJson'

// Actions:
import { getDefaultList, removeFromList, setUpdatingItem, updateItemFromList } from '../../redux/modules/posts/actions'

const mapStateToProps = (state) => {


  return {
    defaultList: state.posts.defaultList,
    updatingItem: state.posts.updatingItem,
    initialValues:{
      title: state.posts.updatingItem.title || "",
      body: state.posts.updatingItem.body || ""
    }
  }
}


const mapDispatchToProps = (dispatch) => bindActionCreators({
  removeFromList,
  getDefaultList,
  updateItemFromList,
  setUpdatingItem,
  reset,
}, dispatch)



export default connect(mapStateToProps, mapDispatchToProps)(TableJson)

