import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { USER_TOKEN } from './user_signin';
import { Link } from 'react-router';
import actions from '../actions';
import { browserHistory } from 'react-router';

class UserDelete extends Component{
  constructor(props){
    super(props);

    this.doDelete = this.doDelete.bind(this);
    this.doCancel = this.doCancel.bind(this);
  }

  doDelete(event){
    this.props.do_delete({
        data: {
          id: this.props.params.id,
          key: USER_TOKEN,
        },
    });
    alert("Delete User success");
    browserHistory.push('/translator');
  }

  doCancel(event){
    browserHistory.push('/translator');
  }

  render(){
    return(
      <div>
        <h2>Are you sure to delete this user?</h2>
        <button className="btn btn-danger" onClick={this.doDelete}>Yes</button>
        <button className="btn btn-success" onClick={this.doCancel}>No</button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {user: state.user}
}

const mapDispatchToProps = (dispatch) =>({
  do_delete: (data) => dispatch(actions.deleteRequest(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserDelete);
