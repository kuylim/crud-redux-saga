import React ,{ Component } from 'react';
import { connect } from 'react-redux';


class Translator_login_success extends Component{

  constructor(props){
      super(props);
  }

  render(){
    return(
      <div>
        <h1>You have login as Translator</h1>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {user: state.user}
}

export default connect(mapStateToProps, null)(Translator_login_success) ;
