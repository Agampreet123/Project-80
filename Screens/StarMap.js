import * as React from 'react';
import {Text,View,StyleSheet,TextInput, ImageBackground} from 'react-native';
import {WebView} from 'react-native-webview';
export default class StarMapScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      latitude:'',
      longitude:''
    }
   
}
    
  render(){
    return(
      
      <View style={styles.container}>
          <ImageBackground
      source={require('../assets/stars.gif')}
      style={styles.bgImg}>
<View style={styles.titleBar}>
                        <Text style={styles.titleText}>Star Map</Text>
                    </View>
                    
     <TextInput
     style={{height:40,borderColor:'gray',borderWidth:1}}
     placeholder="Enter your Latitude"
     placeholderTextColor="#ffff#000000"
     onChangeText={(text)=>{
       this.setState({
         latitude:text
       })
      }}/>
      <TextInput
     style={{height:40,borderColor:'gray',borderWidth:1}}
     placeholder="Enter your Longitude"
     placeholderTextColor="#ffff#000000"
     onChangeText={(text)=>{
       this.setState({
         longitude:text
       })
      }}/>
      <WebView
      scalesPageToFit={true}
      source={{uri:'virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'}}
      style={{marginTop:20,marginBottom:20}}
      />
      </ImageBackground>

      
      </View>
    )
    }
}
const styles= StyleSheet.create({
  container:{
    flex:1
  },
  titleBar: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center"
},
})