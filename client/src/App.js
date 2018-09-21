import React, { Component } from 'react';
import {Route, Link, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import SignUpLogin from './components/SignUpLogIn'
import axios from 'axios'
import {clearAuthTokens, saveAuthTokens, setAxiosDefaults, userIsLoggedIn} from "./util/SessionHeaderUtil";
import Profile from './components/profile/Profile';


class App extends Component {
  state = {
    userName: "",
    signedIn: false,
    skills: [],
    pageVisiting: "profile"
  }

  async componentWillMount() {
    try {
      const signedIn = userIsLoggedIn()

      let skills = []
      let userName = ""
      if (signedIn) {
          setAxiosDefaults()
          skills = await this.getSkills()
          userName = await this.getUserName()
      }

      this.setState({
          skills,
          signedIn,
          userName
      })
      } catch(error) {
          console.log(error)
      }
  }
  

  signUp = async (email,password, password_confirmation) => {
    try {
      const payload = {
        email:email,
        password: password,
        password_confirmation: password_confirmation
      }
      const response = await axios.post('/auth', payload)
      saveAuthTokens(response.headers)

      await axios.post('/auth', payload)

      this.setState({ signedIn: true})

    } catch(error){
        console.log(error)
    }
  }

  signIn = async (email,password) =>{
    try {
      const payload = {
        email,
        password
      }
      const response = await axios.post('/auth/sign_in', payload)
      saveAuthTokens(response.headers)
      await axios.post('/auth/sign_in',payload)


      this.setState({signedIn: true})
    } catch (error){
      console.log(error)
    }
  }

  signOut = async (event) => {
    try {
        event.preventDefault()
        
        await axios.delete('/auth/sign_out')

        clearAuthTokens();

        this.setState({signedIn: false})
    } catch(error) {
        console.log(error)
    }
  }

  getSkills = async () =>{
    try {
      const response = await axios.get('/skills')
      return response.data
    } catch (error) {
        console.log(error)
        return []
    }
  }

  getUserName = async() =>{
    try {
      const response = await axios.get('/users/name')
      return response.data
    } catch (error) {
        console.log(error)
        return []
    }
  }

  SkillsNavigation = (props) =>{
    const isSignedIn = this.state.signedIn
    if (isSignedIn) {
      return <button onClick={this.redirectToSkills}>Skills</button>
    }
    else{
      return null
    }
  }

  redirectToSkills = () =>{
    this.setState({
      pageVisiting: "skills"
    })
  }
  render() {

    const SignUpLogInComponent = () =>(
      <SignUpLogin
        signUp={this.signUp}
        signIn={this.signIn}
      />
    )

    const ProfilePageComponent = () =>(
      <Profile
        skills={this.state.skills}
        userName={this.state.userName}
      />
    )
    
    return (
      <Router>
          <div>
            <button onClick={this.signOut}>Sign Out</button>
            <this.SkillsNavigation/>
              <Switch>
                <Route exact path="/signUp" render = {SignUpLogInComponent}/>
                <Route exact path="/profilePage" render = {ProfilePageComponent}/>
              </Switch>
              {this.state.signedIn ? null: <Redirect  to="/signUp"/>}
              {this.state.signedIn & this.state.pageVisiting === "profile" ? <Redirect to="/profilePage"/> : <Redirect  to="/signUp"/>}
              {this.state.signedIn & this.state.pageVisiting === "skills" ? <Redirect to="/skillsPage"/> : <Redirect  to="/signUp"/>}
          </div>
      </Router>
    );
  }
}

export default App;
