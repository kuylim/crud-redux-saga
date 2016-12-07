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
    }


  /*  loadUserDetail(event){
        this.props.fetchOneUser(this.props.params.id,USER_TOKEN);
    }*/

    componentWillMount() {
      this.props.edit_user({
          data: {
            id: this.props.params.id,
            key: USER_TOKEN,
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
                          <input  className="form-control" type="text" placeholder = "firstname"/>
                      </div>
                      <div>
                          Lastname:
                          <input  className="form-control" type="text" placeholder = "lastname"/>
                      </div>
                      <div>
                          Email:
                          <input  className="form-control" type="email" placeholder = "email"/>
                      </div>
                      <div>
                          Mobile:
                          <input  className="form-control" type="text" placeholder = "mobile"/>
                      </div>

                      <br/>

                      <div>
                          <Link to={'/translator'}>
                            <button className="btn btn-warning">Update</button>
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
  edit_user: (data) => dispatch(actions.findOneUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
