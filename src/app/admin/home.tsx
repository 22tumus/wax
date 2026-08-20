import { StyleSheet, View,Text, TouchableOpacity, ScrollView } from "react-native";
import React, {useEffect,useState}  from "react";
import { router } from "expo-router";

import { MaterialIcons } from '@expo/vector-icons'; 

type IconName = React.ComponentProps<typeof MaterialIcons>['name'];

interface AppIconProps {
  name: IconName;
  size?: number;
  color?: string;
}

export const AppIcon: React.FC<AppIconProps> = ({ name, size = 24, color = '#000' }) => {
  return <MaterialIcons name={name} size={size} color={color} />;
};



export default function Home(){

    const [colorIndex, setColorIndex] = useState(0);
       const discoColors = ['#FF006E', '#FB5607', '#FFBE0B', '#8338EC', '#3A86FF', '#06FFA5'];
       
       useEffect(() => {
         const interval = setInterval(() => {
           setColorIndex(prev => (prev + 1) % discoColors.length);
         }, 1000);
         return () => clearInterval(interval);
       }, []);

    return <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.containerText}>#1 Hotspot Billing System & ISP Automation Platform</Text>
        <Text style ={styles.subText}>Tumusiime is the most advanced Hotspot and ISP Automation Platform, built to manage, automate, and grow any network.</Text>
        
       <TouchableOpacity style={[styles.SigninButton,{backgroundColor:discoColors[colorIndex]}]}onPress={() => router.push('/admin/signin')}>
          <Text style={styles.SigningText}>Start for free</Text>
       </TouchableOpacity>
       <View style ={styles.thunderContainer}>
          <AppIcon name="flash-on" size={20} color="#FFD700" />
          <Text>Network Tools</Text>
       </View>
       <Text style ={styles.containerText}>Powerful Network Management Tools</Text>
       <Text style ={styles.subText}>Automate your ISP operations with intelligent billing, real-time monitoring, and seamless network control designed for scalability.</Text>
    </ScrollView>
}



const styles = StyleSheet.create({
  container:{
    width:"100%",
    backgroundColor:"blue",
    flex:1,
    padding: 20,
  },
  content: {
    paddingBottom: 40,
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
    fontSize:40,
    textAlign:"center",
    
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
  gap: 6,
  elevation: 5,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3, 
   marginTop:20
  },
  SigningText:{
   color: '#ffffff',
  fontSize: 14,
  fontWeight: 'bold',
  },
  subText:{
    color:"#ffffff",
    fontSize:20,
    textAlign:"center",
     marginTop:30,
  },
  thunderContainer:{
    backgroundColor:"green",
   paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 18,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  marginTop:20,
  gap:6,
  flexDirection:"row"
  }
})