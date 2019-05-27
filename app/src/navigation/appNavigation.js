import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../pages/login';
import AdminHome from '../pages/adminHome';
import UserHome from '../pages/userHome';

export default createAppContainer(createSwitchNavigator({
  AdminHome,
  
  Login,
 
  
  
  UserHome
}));