import React, { Component } from "react";
import DataTable from "./DataTable";
import Login from "../Login";
export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }

  componentDidMount() {
    fetch("/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {


        console.log(data, "userData");
        this.setState({ userData: data.data });
      });
  }



  //Name<h1>{this.state.userData.name}</h1>
  render() {
    return (
      <div>

        {this.state.userData.email ? <DataTable/>:<Login/>}
      

      </div>
    );
  }
}
