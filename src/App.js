import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage/SignInAndSignUpPage";
import { auth } from './firebase/firebase.utils'


class App extends React.Component{

  constructor(){
    super();

    this.state={
      currentUser:null
    }
  }

componentDidMount(){
  auth.onAuthStateChanged(user=>{
    this.setState({currentUser:user})
  })
}

render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

  
};

export default App;
