import { StyleSheet, Text, Image, View , SafeAreaView} from 'react-native'
import React, { useEffect } from 'react'
import { responsiveWidth , responsiveHeight} from 'react-native-responsive-dimensions'
import {useNavigation} from '@react-navigation/native';
const Splash = () => {
    const navigation = useNavigation()
    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate("Login")
            
            
        }, 2000);
    })
    return (
        <View style={styles.container}>
         
         <Image source={require("../images/logo.png")} style={styles.logo} />
        </View>
      ) 
    }
    
    
    export default Splash
    
    const styles = StyleSheet.create({
      container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#ff3044"
      },
      logo:{
        width:responsiveWidth(70)
        , height:responsiveHeight(70),
        objectFit:"contain",
       
    
    
      }
    })