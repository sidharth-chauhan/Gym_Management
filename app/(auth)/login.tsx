import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";



export default function Login(){
  return(
    <View>
      <Text>Login pleasse</Text>
      <View>
        <Pressable
          onPress={()=>{
            router.replace("/(tabs)")

          }}
        >
          <Text>Login</Text>
        </Pressable>
      </View>
    </View>
  )
}