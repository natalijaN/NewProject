import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/project/CreateProject';
import ProjectDetails from './components/project/ProjectDetails'
import Listing from './components/project/Listing';
import AboutUs from './components/AboutUs/AboutUs'
import Interests from './components/Interests/Interests'
import InterestDetail from './components/Interests/InterestDetail'
import Advices from './components/Advices/Advices'
import AdviceDetail from './components/Advices/AdviceDetail';
import Breeds from './components/Breeds/Breeds'
import BreedDetail from './components/Breeds/BreedDetail';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard}></Route>
            <Route path='/projects' component={Listing}></Route>
            <Route path='/project/:id' component={ProjectDetails}></Route>
            <Route path='/signin' component={SignIn}></Route>
            <Route path='/signup' component={SignUp}></Route>
            <Route path='/create' component={CreateProject}></Route>
            <Route path='/aboutus' component={AboutUs}></Route>
            <Route path='/interests' component={Interests}></Route>
            <Route path='/interest/:id' component={InterestDetail}></Route>
            <Route path='/advices' component={Advices}></Route>
            <Route path='/advice/:id' component={AdviceDetail}></Route>
            <Route path='/breeds' component={Breeds}></Route>
            <Route path='/breed/:id' component={BreedDetail}></Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App



