import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';

import {DrawerItems} from 'react-navigation-drawer'
import firebase from 'firebase';





export default class customSidebarMenu extends Component{
    render(){
        return(
            <View style ={{flex:1}}>
                <View style ={styles.drawerItemsContainer}>
<DrawerItems {...this.props}/>
                </View>
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate('WelcomeScreen')
                    firebase.auth().signOut()
                }}>
                    <Text> Logout</Text>
                    </TouchableOpacity>

                </View>
        );
    }
}


var styles = StyleSheet.create({
    container : {
      flex:1
    },
    drawerItemsContainer:{
      flex:0.8
    },
    logOutContainer : {
      flex:0.2,
      justifyContent:'flex-end',
      paddingBottom:30
    },
    logOutButton : {
      height:30,
      width:'100%',
      justifyContent:'center',
      padding:10
    },
    logOutText:{
      fontSize: 30,
      fontWeight:'bold'
    }
  })