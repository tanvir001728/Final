import React, { Component } from "react";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./userDetails";
        }
        else{
          alert("wrong email or password");
          window.location.href = "./Login";
        }
      });
  }
  /*className="d-grid"*/
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="login-form" style={{"width":"30%"}}>
       <div class="container" style={{"backgroundColor":"skyblue","borderRadius":"2%","margin-left":"120%","margin-top":"20%"}}>
        <h3 style={{"color":"#4d4d4d","padding":"0.5em"}} >Med-API</h3>

        <div className="mb-3">
          <label style={{"float":"left","color":"#4d4d4d","padding":"0.5em"}}>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label style={{"float":"left","color":"#4d4d4d","padding":"0.5em"}}>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox" style={{"float":"left","margin-top":"0.9em"}}
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1" style={{"color":"#4d4d4d","padding":"0.5em","float":"left"}}>
              Remember me
            </label>
          </div>
        </div>

        <div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>

        </div>
      </form>
    );
  }
}
