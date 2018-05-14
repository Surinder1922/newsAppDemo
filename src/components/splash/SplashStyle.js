
import React, { Component } from "react";
import { StyleSheet ,Dimensions} from "react-native";


export default{
  
Styles:StyleSheet.create({
   
    // logoText:{
    //     alignItems: 'center',
    //     alignSelf: 'center',
    //     fontSize: 20,
    //     color: '#ffffff',
    //     marginTop: 10,
   // },
    logoImageContainer:{
        
      
      alignItems:'center',
    
    marginTop:(Dimensions.get('window').height/100)*40,
    
    marginLeft:Dimensions.get('window').width/4,
    marginRight:Dimensions.get('window').width/4,
 
   height:Dimensions.get('window').height/4,
   width:Dimensions.get('window').width/2,
  
   
    },
    logoImage:
    {
      
      height:100,
       width:100
    },
    label:
    {
      color:'black',
      fontSize:25,
      marginTop: '60%'
    }
    
 })

};