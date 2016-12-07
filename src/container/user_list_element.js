import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import actions from '../actions';
import { USER_TOKEN } from './user_signin';

class UserListElement extends Component{
  constructor(props){
    super(props);

    this.state = {
        users: [],
     }
  }

  componentWillReceiveProps (data){
    this.setState({
      users: data.user,
    });
    console.log("componentWillUpdate", data);
  }

   updateUser(event){
    alert("click work");
  }


  renderUsers(userData){

      const id = Object.values(userData._id);
      const firstname = userData.first_name;
      const lastname = userData.last_name;
      const email = userData.email;
      const phone = userData.mobile;

      return(
          <tr key = {id}>
              <td>{firstname}</td>
              <td>{lastname}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>
                <Link to={'edit/' + id}>
                    <input type="button" value="Edit" className="btn btn-warning"/>
                </Link>
              </td>
              <td>
                <a href="#" className="btn btn-danger">Remove</a>
              </td>
          </tr>
      );
  }

  render(){
      return(
        <tbody>
          {this.state.users.map(this.renderUsers)}
        </tbody>
      );
    }
}

function mapStateToProps(state){
  return {user: state.user}
}

const mapDispatchToProps = (dispatch) =>({
  edit_user: (data) => dispatch(actions.findOneUser(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(UserListElement);
