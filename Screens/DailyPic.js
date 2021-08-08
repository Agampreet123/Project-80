import * as React from 'react';
import {Text,View,StyleSheet, Alert, SafeAreaView, ImageBackground, TouchableOpacity,Platform,Image,Linking} from 'react-native';
import axios from 'axios';
export default class DailyPicScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      apod:{},
      
    }
}
  getApod=()=>{
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=3wGUycEfd5VISibZDUZlBm5W5mBIpekcV7jbGct0")
    .then(response=>{
      this.setState({
        apod:response.data,
        
      })
    })
    .catch(error=>{
      Alert.alert(error.message)
    })
  }
  render(){
    return(
      <View style={styles.container}>
<SafeAreaView style={styles.driodSafeArea}/>
<ImageBackground
source={require('../assets/stars.gif')} style={styles.bgImg}>
  <Text style={styles.routeText}>Astronomy picture of the day</Text>
  <Text style={styles.titleText}>{this.state.apod.Title}</Text>
  <TouchableOpacity style={styles.iconContainer} onPress={()=> Linking.openURL(this.state.apod.url).catch(err=>console.error("Couldun't Load Page",err))}>
  <View style={styles.iconContainer}>
    <Image source={require("../assets/play-video.png")} style={{width:50,height:50}}/>
  </View>
  </TouchableOpacity>
  <Text style={styles.explanationText}>{this.state.apod.explanation}</Text>
</ImageBackground>
      </View>
    )
  }
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    bgImg:{
        flex:1,
        resizeMode:'cover'
    },
    routeText:{
        fontSize:30,
        fontWeight:'bold',
        color:'purple',
        textAlign:'center',
    },
    titleText:{
        fontSize:15,
        fontWeight:'bold',
        color:'purple',
        textAlign:'center'
    },
    iconContainer:{
      alignSelf:'center',
      marginTop:100
    },
    explanationText:{
      fontSize:15,
      fontWeight:'bold',
      color:'white',
      textAlign:'center'
    }
})