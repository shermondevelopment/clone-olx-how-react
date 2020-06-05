import React from 'react';
import { Switch } from 'react-router-dom';
import RouteHandler from './components/RouteHandler';
import Home from './pages/Home';
import About from './pages/About';
import NotExists from './pages/NotExists';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import AdPage from './pages/AdPage';
import AddAd from './pages/AddAd';
import Ads from './pages/Ads';
import MyCount from './pages/MyCount';

export default () => {
  return (
   <Switch>
     <RouteHandler exact path="/">
       <Home />
     </RouteHandler>
     <RouteHandler exact path="/about">
       <About />
     </RouteHandler>
     <RouteHandler exact path="/signin">
      <Signin />
     </RouteHandler>
     <RouteHandler exact path="/signup">
      <SignUp />
     </RouteHandler>
     <RouteHandler exact path="/ad/:id">
      <AdPage />
     </RouteHandler>
     <RouteHandler private exact path="/post-and-ad">
      <AddAd />
     </RouteHandler>
     <RouteHandler exact path="/ads">
      <Ads />
     </RouteHandler>
     <RouteHandler private exact path="/my-account">
      <MyCount />
     </RouteHandler>
     <RouteHandler>
       <NotExists />
     </RouteHandler>
   </Switch>
  );
}
