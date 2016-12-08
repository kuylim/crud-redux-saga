/**
 * Created by acer on 11/21/2016.
 */
import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { USER_TOKEN } from './user_signin';
import { Link } from 'react-router';
import actions from '../actions';

class UserEdit extends Component{

    constructor(props)
    {
        super(props);

        this.state = {
              first_name: '',
              last_name: '',
              password: '',
              email: '',
              address: '',
              country: '',
              state: '',
              city: '',
              zip: '',
              mobile: '',
              confirm_email: true,
              active: true,
              role: 1,
         }

         this.props.edit_request({
             data: {
               id: this.props.params.id,
               key: USER_TOKEN,
             },
         });

         this.onInputChange = this.onInputChange.bind(this);
         this.updateUser = this.updateUser.bind(this);
    }

    onInputChange(event){
        this.setState({[event.target.name] : event.target.value})
    }


    componentWillReceiveProps (data){
      this.setState({
        first_name : data.user.first_name,
        last_name : data.user.last_name,
        password : data.user.password,
        email : data.user.email,
        address : data.user.address,
        country : data.user.country,
        state : data.user.state,
        city : data.user.city,
        zip : data.user.zip,
        mobile : data.user.mobile,
        confirm_email : data.user.confirm_email,
        active : data.user.active,
        role : data.user.role,
      });
      console.log("componentWillUpdate", data);
    }

    updateUser(event){
      this.props.do_edit({
          data: {
            id: this.props.params.id,
            key: USER_TOKEN,
            user: this.state,
          },
      });
    }

    render()
    {
        return(
          <div>
              <form className="form-group">
                      <div>
                          Firstname:
                          <input
                            className="form-control" type="text"
                            placeholder = "firstname"
                            value={this.state.first_name}
                            name="first_name"
                            onChange={this.onInputChange}
                          />
                      </div>
                      <div>
                          Lastname:
                          <input
                            className="form-control" type="text"
                            placeholder = "lastname"
                            value={this.state.last_name}
                            name="last_name"
                            onChange={this.onInputChange}
                          />
                      </div>
                      <div>
                          Email:
                          <input
                             className="form-control" type="email"
                             placeholder = "email"
                             value={this.state.email}
                             name="email"
                             onChange={this.onInputChange}
                           />
                      </div>
                      <div>
                          Mobile:
                          <input
                            className="form-control" type="text"
                            placeholder = "mobile"
                            value={this.state.mobile}
                            name="mobile"
                            onChange={this.onInputChange}
                          />
                      </div>

                      <br/>

                      <div>
                          <Link to={'/translator'}>
                            <button className="btn btn-warning" onClick={this.updateUser}>Update</button>
                          </Link>
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
  edit_request: (data) => dispatch(actions.findOneUser(data)),
  do_edit: (data) => dispatch(actions.updateRequest(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
