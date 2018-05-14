import React,{Component} from 'react';


import SplashScreen from './SplashScreen';
import App from '../../../App';
import Routes from '../../router/Routes';

var SPLASH_TIMER='4000';
export default class SplashLogic extends Component {

    state={
        splashReady:false
    }
    componentDidMount () {
        setTimeout(() => {
          this.setState({ splashReady: true })
        }, 3000)
      }
    render() {
      
        if(this.state.splashReady==false)
        {
           return <SplashScreen/>;
        }
        else{
            return <Routes/>
        }
    //  return this.props.children;
    }
  }
  