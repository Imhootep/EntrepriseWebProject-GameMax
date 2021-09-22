// import './styles.css';
import React from "react";
import AuthService from "../service/auth-service";


const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }
    

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }


    handleLogin(e) {
        e.preventDefault();

        AuthService.login(this.state.username, this.state.password).then(
            (data) => {
                console.log(data);
              this.props.history.push("/home");
            //   window.location.reload();
            },
            error => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
    
              this.setState({
                loading: false,
                message: resMessage
              });
              console.log(resMessage);
            }
        );

    }

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <h2>Login</h2>
                    <form onSubmit={this.handleLogin.bind(this)}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                value={this.state.username}
                                onChange={this.onChangeUsername.bind(this)}
                                validations={[required]}
                            />
                        </div>
                        <div className="form-group">
                            <br />
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChangePassword.bind(this)}
                                validations={[required]}
                            />
                        </div>
                        <div className="form-group">
                            <br />
                            <button 
                                type="submit" 
                                className="btn btn-primary btn-block"
                            >Sign Up</button>
                        </div>
                    </form>

            </div>
        </div>
        )
    }
}