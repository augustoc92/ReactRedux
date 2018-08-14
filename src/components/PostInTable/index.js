// Dependencies:
import { reduxForm } from 'redux-form'

// Components:
import PostInTable from './PostInTable'

const onSubmit = (values, dispatch, props) => {
    props.updateItemFromList({
      ...props.updatingItem,
      ...values
    })
    values.body = "";
    values.title = "";
    props.setUpdatingItem(null);
}

const formConfig = {
  form: 'editPost',
  onSubmit,
  enableReinitialize: true
}

export default reduxForm(formConfig)(PostInTable)

