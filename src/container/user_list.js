import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { Button, Glyphicon } from 'react-bootstrap';
import UserListElement from './user_list_element';
import { USER_TOKEN } from './user_signin';
import { saveState, loadState } from '../localstorage/local_storage';

class UserList extends Component{

    constructor(props){
        super(props);

        if(loadState() != null){
            this.props.load_user({
                data: {
                  key: loadState(),
                },
            });
        }
    }

  /*  editData(event){
        this.props.fetchOneUser(event.target.value, USER_TOKEN)
    }*/

    render(){
        return(
            <di>
                <center><h1>User List</h1></center>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <UserListElement/>
                </table>
            </di>
        );
    }
}


const mapDispatchToProps = (dispatch) =>({
  load_user: (data) => dispatch(actions.fetchUsers(data))
})

export default connect(null,mapDispatchToProps)(UserList);
