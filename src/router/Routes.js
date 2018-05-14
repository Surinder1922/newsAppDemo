import {Router,Scene} from 'react-native-router-flux';

import React,{Component} from 'react'
import HomeScreen from '../components/homeview/HomeScreen';
import CatagoryScreen from '../components/catagoryview/CatagoryScreen';
import WelcomeScreen from '../components/welcomeview/WelcomeScreen';
//import { SearchBar } from 'react-native-elements';




export default class Routes extends Component
{
render()
{

    return (


        <Router >
        <Scene key="root" >
          
        <Scene  key="home"
                      
                     hideNavBar={true}
                      component={HomeScreen}
            />
           
              <Scene  key="catagory"
                      
                     hideNavBar={true}
                      component={CatagoryScreen}
                      
              />
              
              <Scene  key="welcome"
                     initial={true}
                      hideNavBar={true}
                       component={WelcomeScreen}
                       
               />
         
            
            </Scene>
       
      </Router>
    


    );
}
    
}