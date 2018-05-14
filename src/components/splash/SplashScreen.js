import React,{Component} from 'react';
import {Image,View,Text} from 'react-native';

import AllPaths from '../../paths/AllPaths';
import SplashStyle from './SplashStyle';
export default class SplashScreen extends Component {
    render() {
      
      return (
        <View style={SplashStyle.Styles.logoImageContainer}>
        <Image source={AllPaths.IMAGES_PATH.logoPath}  
        style={SplashStyle.Styles.logoImage}
        />

        
          </View>
        
      );
    }
  }
  