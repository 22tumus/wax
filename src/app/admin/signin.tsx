import { View ,Text,StyleSheet} from "react-native";


export default function Signin(){
   return <View style ={styles.container}>
    <Text style={styles.containerText}>
      hi people
    </Text>
   </View>
}


const styles = StyleSheet.create({
   container:{
    width:"100%",
    backgroundColor:"blue",
    flex:1,
    padding: 20,
   },
   containerText:{
    color:"#ffffff",
    fontSize:20,
    textAlign:"center"
   }
})