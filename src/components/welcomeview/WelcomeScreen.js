import React,{Component} from 'react';
import {Image,View,Text,TouchableOpacity} from 'react-native';
import WelcomeStyle from './WelcomeStyle';


import { Actions } from 'react-native-router-flux';
import AllConsts from '../../constants/AllConsts';
import AllPaths from '../../paths/AllPaths';

export default class WelcomeScreen extends Component {

  onPressContinue=()=>
  {
    Actions.catagory();
  }
    render() {
      
      return (
          <View style={WelcomeStyle.Styles.wrapper}>
         <Text style={WelcomeStyle.Styles.aboutuslabel}>About us.</Text>
        <View style={WelcomeStyle.Styles.logoImageContainer}>
        <Image source={AllPaths.IMAGES_PATH.logoPath} style={WelcomeStyle.Styles.logoImage}/>
        </View>
        <Text  style={WelcomeStyle.Styles.appname}>Inshort.</Text>
        <Text style={WelcomeStyle.Styles.aboutus}>{AllConsts.ABOUT_US}</Text>
       <View style={WelcomeStyle.Styles.customButtonContainer}>
        <TouchableOpacity style={WelcomeStyle.Styles.customButton} onPress={this.onPressContinue}>

        <Text style={{color:'white'}}>CONTINUE</Text>

        </TouchableOpacity>
        </View>
        </View>
      );
    }
  }
  