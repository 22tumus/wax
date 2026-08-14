import {View,Text,StyleSheet,TextInput,TouchableOpacity,ScrollView}from "react-native"
import React, { useEffect, useState } from 'react';
import { router } from 'expo-router';
import { useVideoPlayer, VideoView } from "expo-video";

interface AppBarProps {
  title: string;
  onMenuPress?: () => void;
  onProfilePress?: () => void;
}

export default function myApp({ title, onMenuPress, onProfilePress }: AppBarProps){
   const [text, setText] = useState('');
   const [colorIndex, setColorIndex] = useState(0);
   const discoColors = ['#FF006E', '#FB5607', '#FFBE0B', '#8338EC', '#3A86FF', '#06FFA5'];
   
   useEffect(() => {
     const interval = setInterval(() => {
       setColorIndex(prev => (prev + 1) % discoColors.length);
     }, 1000);
     return () => clearInterval(interval);
   }, []);

   const player = useVideoPlayer(
  require("../../assets/intro.mp4"),
  (player) => {
    player.loop = true;
    // Browsers, including those on Windows, allow autoplay only when muted.
    // The native controls still let the user enable sound.
    player.muted = true;
  }
);

  // On web, the VideoView must mount before the browser can receive play().
  useEffect(() => {
    player.play();
  }, [player]);

  const enableSound = () => {
    player.muted = false;
    player.volume = 1;
    player.play();
  };

  const disableSound = () => {
    player.muted = true;
  };

  const playVideo = () => {
    player.play();
  };

  const pauseVideo = () => {
    player.pause();
  };

   return <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.appBarContainer}>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={onMenuPress}
        accessibilityLabel="Home"
        accessibilityRole="button"
      >
        <Text style={styles.iconText}>⌂</Text>
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={styles.appBarTitle} numberOfLines={10}>
          {title || 'sadas wifi'}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.iconButton}
        onPress={onProfilePress}
        accessibilityLabel="Profile"
        accessibilityRole="button"
      >
        <Text style={styles.iconText}>👤</Text>
      </TouchableOpacity>
    </View>
        <View style ={styles.containerIntro}>
        <Text style ={styles.title}>
         Connect to wifi
        </Text>
        <Text>Please enter your credentials to access the internet.</Text>

        <Text style={styles.label}>Enter voucher code:</Text>

        <TextInput
        style={styles.input}
        placeholder="Enter voucher code"
        placeholderTextColor="#888"
        value={text}
        onChangeText={(newText) => setText(newText)} // Updates the state
      />
      </View>
      <TouchableOpacity
  style={styles.loginButton}
  onPress={() => router.push('/admin/home')}>
     <Text style={styles.loginButtonText}>Login</Text>
       </TouchableOpacity>
       <View style={styles.videoContainer}>
  <VideoView
    style={styles.video}
    player={player}
    nativeControls
    contentFit="cover"
    playsInline
  />
</View>
      <View style={styles.videoControls}>
        <TouchableOpacity style={styles.videoControlButton} onPress={playVideo} accessibilityLabel="Play video">
          <Text style={styles.videoControlText}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.videoControlButton} onPress={pauseVideo} accessibilityLabel="Pause video">
          <Text style={styles.videoControlText}>Pause</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.videoControlButton} onPress={enableSound} accessibilityLabel="Turn on video sound">
          <Text style={styles.videoControlText}>Sound on</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.videoControlButton} onPress={disableSound} accessibilityLabel="Turn off video sound">
          <Text style={styles.videoControlText}>Sound off</Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.loginButton}>
        <Text style ={styles.headingText}>Select package and pay with Mobile money
          </Text></View>
          <View style={styles.mobileMoneyContainer}>
            <View style={styles.row}>
              <Text style={styles.labelA}>Daily</Text>
              <TouchableOpacity style={[styles.payButton, { backgroundColor: discoColors[colorIndex] }]}>
                <Text style={styles.payButtonText}>pay</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <Text style={styles.labelA}>shs1000</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.labelA}>Weekly</Text>
              <TouchableOpacity style={[styles.payButton, { backgroundColor: discoColors[colorIndex] }]}>
                <Text style={styles.payButtonText}>pay</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <Text style={styles.labelA}>shs15000</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.labelA}>Monthly</Text>
              <TouchableOpacity style={[styles.payButton, { backgroundColor: discoColors[colorIndex] }]}>
                <Text style={styles.payButtonText}>pay</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <Text style={styles.labelA}>shs 20000</Text>
            </View>
          </View>
          <View style ={styles.contactContainer}>
              <Text style={styles.contactText}>
                Contact Information
              </Text>
             <Text style={styles.contactText}>If you need assistance, please contact our support team:

             </Text>
             <Text style={styles.contactText}>Email: tumusiimesadas84@gmail.com
             </Text>
             <Text style={styles.contactText}>Phone: +256768047655
             </Text>
             <Text style={styles.contactText}>Whatsapp: +256768047655
             </Text>
            </View>  
   </ScrollView>

}

const styles = StyleSheet.create({
   container:{
    flex:1,
      backgroundColor:"blue",
      color:"red",
  

   },
   content: {
     padding: 20,
     paddingBottom: 40,
   },
   title:{
     color:"red",
     fontSize:20,
   },
   label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
   appBarContainer: {
    height: 56,                      // Standard mobile app bar height
    flexDirection: 'row',            // Aligns buttons and title side-by-side
    alignItems: 'center',            // Centers items vertically
    justifyContent: 'space-between', // Spaced out: Left, Center, Right
    backgroundColor: '#1a73e8',      // App bar background color
    paddingHorizontal: 10,
    // Drop shadow for web and mobile layout depth
    boxShadow: '0px 2px 3.84px rgba(0, 0, 0, 0.15)',
  },
   titleContainer: {
    flex: 1,                         // Forces title box to claim middle space
    marginHorizontal: 16,
  },
  appBarTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:"center"
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',        // Centers icon inside button box
    alignItems: 'center',
    borderRadius: 20,
  },
  iconText: {
    color: '#ffffff',
    fontSize: 20,
  },
  containerIntro:{
    backgroundColor:"white",
    width:"100%",
      padding:20,
      color:"red",
      alignItems:"center"

   },
  loginButton: {
  width: "100%",
  backgroundColor: "#1a73e8",
  paddingVertical: 14,
  borderRadius: 8,
  marginTop: 16,
  alignItems: "center",
},

loginButtonText: {
  color: "white",
  fontSize: 16,
  fontWeight: "bold",
},
videoContainer: {
  width: "100%",
  height: 200,
  borderRadius: 12,
  overflow: "hidden",
  marginTop: 24,
  marginBottom: 20,
},

video: {
  flex: 1,
},
videoControls: {
  flexDirection: "row",
  flexWrap: "wrap",
  gap: 8,
  justifyContent: "center",
  marginTop: 12,
},
videoControlButton: {
  backgroundColor: "#ffffff",
  borderRadius: 8,
  paddingHorizontal: 16,
  paddingVertical: 10,
},
videoControlText: {
  color: "#1a73e8",
  fontSize: 16,
  fontWeight: "600",
},
headingText:{
   color: "white",
  fontSize: 16,
  fontWeight: "bold",
  padding:10,
},
mobileMoneyContainer:{
 width: "100%",
  backgroundColor: "#1a73e8",
  marginTop: 16,
  marginBottom: 8,
  paddingHorizontal: 16,
  paddingVertical: 12,
  borderRadius:20,
  gap: 12,
  flexDirection: 'column',
},
mobileMoneyText:{
   color: "white",
  fontSize: 16,
  fontWeight: "bold",
  padding:10,
  
},
row: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: 8,
  borderBottomWidth: 1,
  borderBottomColor: 'rgba(255, 255, 255, 0.3)',
},
labelA: {
  fontSize: 16,
  fontWeight: '600',
  color: '#ffffff',
},
value: {
  fontSize: 16,
  fontWeight: '600',
  color: '#ffffff',
},
payButton: {
  paddingHorizontal: 30,
  paddingVertical: 10,
  borderRadius: 20,
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 5,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3,
},
payButtonText: {
  color: '#ffffff',
  fontSize: 14,
  fontWeight: 'bold',
},
contactContainer:{
 borderRadius:20,
 width:"100%",
 marginTop: 8,
 gap:12,
 justifyContent:"center",
 alignItems:"center",
 backgroundColor: "#1a73e8",
 flexDirection: 'column',
 paddingHorizontal: 16,
  paddingVertical: 12,
},
contactText:{
  color:"#ffffff",
  fontSize:14,
  fontWeight:"bold",
  fontStyle:"italic"
}
})
