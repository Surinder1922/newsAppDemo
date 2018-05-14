
import React, { Component } from "react";
import { StyleSheet ,Dimensions} from "react-native";


export default{
  
Styles:StyleSheet.create({
   
    container:{
        
     
      backgroundColor:'white',
    

flex:1
  
   
    },
    headerSection:
    {
        width:Dimensions.get('window').width,
        marginTop:'1%'
    },
    gridviewContainer:
    {
     marginTop:'2%' ,
     flex:1  
    },
    catNameLabel:
    {
        
        fontSize:14,
        fontWeight:'bold',
        color:'black',
        bottom:0,
        position:'absolute',
        marginStart:'2%',
        
    },
    catImageStyle:
    {
        height:180,
        width:100,
      

       
    },
    catStyle:
    {
        backgroundColor:'transparent',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:2,
        borderColor:'blue',
        borderWidth:1,
        shadowColor: 'blue',
        shadowOffset: {width: 0, height: 6},
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 1
    }
    
 })

};