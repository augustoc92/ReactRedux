// Dependencies:
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Components:
import FloatingActionButtons from './FloatingActionButtons'

// Actions:
import { getDefaultList } from '../../redux/modules/posts/actions'

const mapStateToProps = (state) => {
  return {
    defaultList: state.posts.defaultList
  }
}


const mapDispatchToProps = (dispatch) => ({
  getDefaultList: bindActionCreators(getDefaultList, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(FloatingActionButtons)

