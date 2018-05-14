import React,{Component} from 'react';
import {Image,View,Text} from 'react-native';
import HomeStyle from './HomeStyle';
import AllUrl from '../../urls/AllUrl';
import AllPaths from '../../paths/AllPaths';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HomeScreen extends Component {
    render() {
 //   alert(this.props.url)
      return (
        <View style={HomeStyle.Styles.container}>

        <View style={HomeStyle.Styles.imageContainer}>
        <Image source={{uri:this.props.url}} resizeMode='contain' style={HomeStyle.Styles.imageContainer} />
        </View>

        <View style={HomeStyle.Styles.HeadLineContainer}>
        <Text style={HomeStyle.Styles.HeadlineText}> {this.props.title}</Text>
        </View>
        
        <View style={HomeStyle.Styles.DescreptionContainer}>
        <Text style={HomeStyle.Styles.DescreptionText}>{this.props.desc}</Text>
        </View>
        
            </View>
        
      );
    }
  }
  