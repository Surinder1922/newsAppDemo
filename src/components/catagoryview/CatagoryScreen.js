import React,{Component} from 'react';
import {Image,View,Text,TextInput,ImageBackground,TouchableOpacity} from 'react-native';
import CatagoryStyle from './CatagoryStyle';
import AllPaths from '../../paths/AllPaths';
import {SearchBar} from 'react-native-elements'
import GridView from 'react-native-super-grid'
import getCatagory from "../../web/Api";
import { Actions } from 'react-native-router-flux';
export default class CatagoryScreen extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      catagories:[],
      catagoriesName:'',
      items:[]
    }

  }

  onItemClick=(name,imgUrl,description,title)=>
  {
   Actions.home({catname:name,url:imgUrl,desc:description,title:title});
  }

  componentWillMount()
  {
    getCatagory().then((res)=>{
     // alert(res.articles[0].source.name)
    this.setState({
        catagories: res.articles,
        //catagoriesName:res.articles[0].title
    })
    

  })
  
  }

  onSearchData=(text)=>
  {
    const filteredData=this.items.filter(function(item){
  //     const itemData = item.catname.toUpperCase()
  //     const textData = text.toUpperCase()
  //     return itemData.indexOf(textData) > -1
  // })
  // this.setState({
  //   items: filteredData
   })
  
  }

    render() {
      //alert(this.props.id)
      //console.log("articals"+this.state.catagories)
      return (
        <View style={CatagoryStyle.Styles.container}>
              {/* <TextInput 
        placeholder='Serach'
        icon={AllPaths.IMAGES_PATH.searchIcon}
        
        />  */}

<SearchBar
  showLoading
  platform="android"
  searchIcon
  lightTheme
  cancelIcon={{ type: 'font-awesome', name: 'chevron-left' }}
  placeholder='Search'
  
  onChangeText={(text)=>this.onSearchData(text)}
  />
       
        <View style={CatagoryStyle.Styles.gridviewContainer}> 
        <GridView 
  //       itemDimension={100}
  // items={[{catname: 'IPL',catImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOL57yp7idq27Rj0YRDZMKHKMEY-Cnp_QEXhvB-qwfG1a_zwBT',catId:1},
  // {catname: 'POLITICAL',catImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzwfJQnkU9likvE5eIIQ5Dpw5ctbQ4ZmNqDJVqHFnWsAYB58-z',catId:1},
  // {catname: 'SPORTS',catImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJC1fJ39mQuBi2h2nX_9Pb9opYIavkIT4OGM07q96O13a3PT3s',catId:1},
  // {catname: 'TECHNOLOGY',catImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs9VMjd4GEVQpVC96IRbBgGHiegkvq3GFfgYjs0EHOLL23wqBz',catId:1},
  // {catname: 'ENTERTAINMENT',catImage:'https://tes.com.pk/wp-content/uploads/2015/11/E-Entertainment-Logo-962x1024.jpg',catId:1},
  // {catname: 'STARTUP',catImage:'http://s3-ap-south-1.amazonaws.com/startupuploads/wp-content/uploads/2017/11/01031046/startup-1018514_960_720.png',catId:1}
  // ]}


  items={this.state.catagories}

  renderItem={items => (
  <View style={CatagoryStyle.Styles.catStyle}>
  <TouchableOpacity onPress={()=>this.onItemClick(items.source.name,items.urlToImage,items.description,items.title)}>
  <ImageBackground resizeMode='cover' style={CatagoryStyle.Styles.catImageStyle} source={{uri:items.urlToImage}} >
  <Text style={CatagoryStyle.Styles.catNameLabel}>{items.source.name}</Text>
     </ImageBackground>
     </TouchableOpacity>
      </View>
  )


}
          />
     
</View>
          </View>
        
      );
    }
  }
  