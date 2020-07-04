
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import firebase from 'firebase'

class App extends React.Component{
  constructor(){
    super()
    
  }
 componentWillMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyBHLEIVdl1TJmkKIUnMd0wK2btfEhHaPno",
      authDomain: "crud-f498f.firebaseapp.com",
      databaseURL: "https://crud-f498f.firebaseio.com",
      projectId: "crud-f498f",
      storageBucket: "crud-f498f.appspot.com",
      messagingSenderId: "394266961959",
      appId: "1:394266961959:web:2d2d31747736abe76fc602"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    
 //view users   
    firebase.database().ref('users').on('value',(data)=>{
      console.log(data.toJSON)
    })
// update and insert 
    // setTimeout(()=>{
    //   firebase.database().ref('users/002').set({
    //     name:'sadun',
    //     age: 23
    //   }).then(()=>{
    //     console.log('Inserted')
    //   }).catch((error)=>{
    //     console.log('error')
    //   });
    // },5000);

//update
    // firebase.database().ref('users/002').update({
    //   name:'lahiru'
    // });

 //delete
    firebase.database.ref('users/003/name').remove();


  }
  render(){

    return (
      <View style={ {alignItems:'center',height:'100%',justifyContent:'center'}}>
          <Text style={{fontWeight:'bold',fontSize:18}}>
              Welcome to firebase app
          </Text>
      </View>
    )
  }
}


export default App;
