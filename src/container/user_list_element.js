import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserListElement extends Component{

  constructor(props){
    super(props);
  }

  renderUsers(userData){

      const id = Object.values(userData._id);
      const firstname = userData.first_name;
      const lastname = userData.last_name;
      const email = userData.email;
      const phone = userData.mobile;

      return(
          <tr key = {userData.email}>
              <td>{firstname}</td>
              <td>{lastname}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>
                  <Link to={'edit/' + id}>
                      <input type="button" value={id}/>
                  </Link>
              </td>
              <td><a href="#" className="btn btn-danger">Remove</a></td>

          </tr>
      );
  }


  render(){
    if(this.props.user.token != null){
      return(
        <tr></tr>
      );
    }
    else if (true) {
      
    }(this.props.user.length != 0)
    {
      this.props.user.map(this.renderUsers);
    }

  }
}

function mapStateToProps(state){
  return {user: state.user}
}

export default connect(mapStateToProps,null)(UserListElement);
