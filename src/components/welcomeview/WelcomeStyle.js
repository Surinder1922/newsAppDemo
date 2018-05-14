
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
   aboutus:{
       marginTop:'2%',
    marginLeft:Dimensions.get('window').width*0.02,
    marginRight:Dimensions.get('window').width*0.02,
    textAlign:'justify'
   },
   aboutuslabel:
   {
    color:'black',
    fontSize:20,
    marginLeft:Dimensions.get('window').width*0.20,
    marginRight:Dimensions.get('window').width*0.20,
    textAlign:'center'
   },
   appname:
   {
        fontSize:30,
        marginLeft:Dimensions.get('window').width*0.20,
        marginRight:Dimensions.get('window').width*0.20,
        textAlign:'center',
        color:'black'
   },
   wrapper:{

    flex:1
   },
    logoImageContainer:{
        
      
    alignItems:'center',
    marginTop:'2%',
    
    marginLeft:Dimensions.get('window').width/4,
    marginRight:Dimensions.get('window').width/4,
 
   
  
   
    },
    logoImage:
    {
      
      height:50,
       width:50
    },
    
    customButton:
    {
            width:Dimensions.get('window').width,
            height:40,
            backgroundColor:'#f44336',
            alignItems:'center',
            justifyContent:'center',
            

           },
           customButtonContainer:
    {
           // marginTop:'25%'
           position: 'absolute',
           bottom:0,

           }
           
           
        
 })

};