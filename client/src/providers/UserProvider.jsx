/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component, createContext } from "react";
import { auth, generateUserDocument } from "../utils/firebase";


export const UserContext = createContext({ user: null });
class UserProvider extends Component {
  state = {
    user: null
  };

  componentDidMount = async () => {
    auth.onAuthStateChanged(async userAuth => {
      const user = await generateUserDocument(userAuth);
      this.setState({ user });
    });
  };
 
  render() {

    const { user } = this.state;
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;