/**
 * Created by KUYLIM on 11/11/2016.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import actions from '../actions';
import { selectors } from '../reducers';
import { browserHistory } from 'react-router';

class UserSignin extends Component{

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
         }
        this.onInputChange = this.onInputChange.bind(this);
        this.userSignin = this.userSignin.bind(this);
    }

    // user signin
    userSignin(event){
        event.preventDefault();
        if(this.state.email == '' || this.state.password == '')
        {
            alert("Please complete email and password");
        }
        else
        {
          this.props.singin({
              data: this.state,
          });
        }
    }

    // onInputchang
    onInputChange(event){
        this.setState({[event.target.name] : event.target.value})
    }

    componentWillReceiveProps(data){
      if(data.user.token!=null && data.user.role == 1){
        browserHistory.push('/user');
      }
      else if (data.user.token!=null && data.user.role == 2) {
        browserHistory.push('/translator');
      }
    }

    render(){
        return (
            <div>
                <h1>User Login</h1>
                <form onSubmit={this.userSignin} className="form-group" action="post">
                    <div>
                        Email:
                        <input
                            className="form-control"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.onInputChange}
                        />
                    </div>

                    <div>
                        Password:
                        <input
                            className="form-control"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.onInputChange}
                        />
                    </div>
                    <br/>
                    <div>
                        <button type="submit" className="btn btn-secondary">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
  return {user: state.user}
}

const mapDispatchToProps = (dispatch) =>({
  singin: (data) => dispatch(actions.siginRequest(data))
})

export default connect(mapStateToProps ,mapDispatchToProps)(UserSignin)
