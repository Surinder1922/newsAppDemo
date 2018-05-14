
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
    container:{
        
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
      alignItems:'center',
      backgroundColor:'transparent',
    
//     marginTop:(Dimensions.get('window').height/100)*20,
    
//     marginLeft:Dimensions.get('window').width/4,
//     marginRight:Dimensions.get('window').width/4,
 
//    height:Dimensions.get('window').height/4,
//    width:Dimensions.get('window').width/2,
flex:1
  
   
    },
    imageContainer:
    {
        
        height:Dimensions.get("window").height*0.40,
        width:Dimensions.get('window').width,
        backgroundColor:"transparent",
        marginTop:0,
        marginLeft:'0.2%',
        //marginRight:'0.2%'
        alignSelf:'stretch'
    },
    HeadLineContainer:
    {
        
        marginTop: '1%',
        padding:'2%',
       justifyContent:'flex-start'
    
    },
    DescreptionContainer:{
        
        marginTop: '1%',
        padding:'2%',
       justifyContent:'flex-start'
    },
    HeadlineText:{

        textAlign:'left',
        fontSize:15,
         color:'black',
         
        
    },
    DescreptionText:{

        lineHeight: 20,
        fontSize:14,
         color:'grey',
        
    }
    
 })

};