import React, { Component } from "react";

export default class Login extends Component {
  state = {
    first: "",
    last: "",
    username: "",
    pass: "",
    confirm: "",
  };
  handleChange = (evt) => {
    const fields = Object.assign({}, this.state);
    fields[evt.target.name] = evt.target.value;
    this.setState({ ...fields });
  };
  render() {
    return (
      <div className="flex justify-center">
        <div className="flex flex-col absolute top-[30%] shadow-lg border-[2px] rounded-lg p-5 w-[80%]">
          <span className="text-2xl ">Register</span>
          <div className="flex mt-3 ">
            <input
              className="border-[2px] rounded-lg w-full p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
              placeholder="first name"
              name="first"
              value={this.state.first}
              onChange={this.handleChange}
              required
            />
            <input
              className="border-[2px] rounded-lg w-full p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200 ml-3"
              placeholder="last name"
              name="last"
              value={this.state.last}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="flex mt-3">
            <input
              className="border-[2px] rounded-lg w-full p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
              placeholder="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="flex mt-3">
            <input
              className="border-[2px] rounded-lg w-full p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
              placeholder="password"
              name="pass"
              value={this.state.pass}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="flex mt-3">
            <input
              className="border-[2px] rounded-lg w-full p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
              placeholder="confirm password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
          </div>

          <input
            className="btn mt-7 hover:scale-[1.02]"
            type="button"
            value="Register"
          />
        </div>
      </div>
    );
  }
}
