import { StyleSheet, View,Text, TouchableOpacity } from "react-native";
import React, {useEffect,useState}  from "react";
import { router } from "expo-router";

export default function Home(){

    const [colorIndex, setColorIndex] = useState(0);
       const discoColors = ['#FF006E', '#FB5607', '#FFBE0B', '#8338EC', '#3A86FF', '#06FFA5'];
       
       useEffect(() => {
         const interval = setInterval(() => {
           setColorIndex(prev => (prev + 1) % discoColors.length);
         }, 1000);
         return () => clearInterval(interval);
       }, []);

    return <View style ={styles.container}>
      <Text style={styles.containerText}>The best way to sell your digital products</Text>
        <View style={styles.profileRow}>
            <View style={styles.avatar}>
                <Text style={styles.avatarText}>S</Text>
            </View>
            <View style={styles.profileInfo}>
                <Text style={styles.containerText}>Sadas</Text>
                <Text style={styles.roleText}>Admin</Text>
            </View>
        </View>
       <TouchableOpacity style={[styles.SigninButton,{backgroundColor:discoColors[colorIndex]}]}onPress={() => router.push('/admin/signin')}>
          <Text style={styles.SigningText}>Signin</Text>
       </TouchableOpacity>
       
    </View>
}



const styles = StyleSheet.create({
  container:{
    width:"100%",
    backgroundColor:"blue",
    flex:1,
    padding: 20,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#1a73e8',
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileInfo: {
    marginLeft: 12,
  },
  containerText:{
    color:"#ffffff",
    fontSize:20,
    textAlign:"center"
  },
  roleText: {
    color: '#dfe9ff',
    fontSize: 14,
    marginTop: 4,
  },
  SigninButton:{
   width: 120,
  paddingVertical: 8,
  paddingHorizontal: 12,
  borderRadius: 18,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  elevation: 5,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3, 
  },
  SigningText:{
   color: '#ffffff',
  fontSize: 14,
  fontWeight: 'bold',
  }
})