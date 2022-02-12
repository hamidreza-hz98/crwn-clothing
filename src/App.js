import React from "react";
import "./App.css";
import { connect } from "react-redux";
import setCurrentUser from './redux/user/userActions'
import HomePage from "./pages/HomePage/HomePage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage/SignInAndSignUpPage";
import { auth, createUserProfileDocument } from './firebase/firebase.utils'


class App extends React.Component{

  

  unsubscribedFromAuth=null;
componentDidMount(){
  const {setCurrentUser}=this.props
  this.unsubscribedFromAuth=auth.onAuthStateChanged(async userAuth=>{
    if (userAuth){
      const userRef=await createUserProfileDocument(userAuth)

      userRef.onSnapshot(snapshot=>{
        setCurrentUser({
            id:snapshot.id,
            ...snapshot.data()
          }
        )
      })
    }else{
      setCurrentUser(userAuth)
    }
  })
}

render(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

  
};

const mapDistpatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(null,mapDistpatchToProps)(App);
