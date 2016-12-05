import React ,{ Component } from 'react';
import { connect } from 'react-redux';


class Login_success extends Component{

  constructor(props){
      super(props);
  }

  render(){
    return(
      <div>
        <h1>You have Login_success</h1>
        <h1>this is you token: {this.props.user.token}</h1>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {user: state.user}
}

export default connect(mapStateToProps, null)(Login_success) ;
