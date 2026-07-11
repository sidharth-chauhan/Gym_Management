import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

import api from "../../api/api";
import ROUTES from "../../api/routes";

const Member = () => {

  const [member,setMember]=useState([])
  const [loading,setLoading]=useState(false)

  const handleMember=async()=>{
    setLoading(true)
    const token=await AsyncStorage.getItem("token")
    try{
      const dataMember=await api.get(
        ROUTES.MEMBER,
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      )
      
      setMember(dataMember.data.data)
      console.log("member:- ",member)
    }catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    handleMember()
  })







  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >

        {/* Header */}

        <View style={styles.header}>

          <Pressable style={styles.iconButton}>
            <Ionicons
              name="arrow-back"
              size={22}
              color="#2563EB"
            />
          </Pressable>

          <Text style={styles.headerTitle}>
            Members
          </Text>

          <Pressable style={styles.iconButton}>
            <Ionicons
              name="add"
              size={28}
              color="#2563EB"
            />
          </Pressable>

        </View>

        {/* Search */}

        <View style={styles.searchContainer}>

          <Ionicons
            name="search"
            size={20}
            color="#94A3B8"
          />

          <TextInput
            placeholder="Search Members"
            placeholderTextColor="#94A3B8"
            style={styles.searchInput}
          />

        </View>

        {/* Member */}
        <FlatList
          data={member}
          keyExtractor={(item)=>item.memberId}
          renderItem={({item})=>(
            <Pressable style={styles.memberCard}>

              <View style={styles.avatar}>
                <Ionicons
                  name="person"
                  size={28}
                  color="#2563EB"
                />
              </View>

              <View style={styles.memberInfo}>

                <Text style={styles.memberName}>
                  {item?.name}
                </Text>

                <Text style={styles.memberDetail}>
                  {item?.membershipPlanName}
                </Text>

                <Text style={styles.memberDetail}>
                  Trainer : {item?.trainerIdName}
                </Text>

                <Text style={styles.memberDetail}>
                  Phone no: {item?.phoneNumber}
                </Text>

              </View>

              <View style={styles.rightSection}>

                <Text style={styles.active}>
                  ACTIVE
                </Text>

                <Ionicons
                  name="chevron-forward"
                  size={22}
                  color="#94A3B8"
                />

              </View>

            </Pressable>
          )}
        />

        {/* Copy this card 3-4 times for now */}

      </ScrollView>
    </SafeAreaView>
  );
};

export default Member;
const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#F8FAFC"
},

header:{
marginHorizontal:20,
marginTop:15,

flexDirection:"row",
alignItems:"center",
justifyContent:"space-between"
},

headerTitle:{
fontSize:24,
fontWeight:"700",
color:"#1E293B"
},

iconButton:{
width:42,
height:42,
borderRadius:21,

backgroundColor:"#FFF",

justifyContent:"center",
alignItems:"center",

elevation:3
},

searchContainer:{
marginHorizontal:20,
marginTop:25,

backgroundColor:"#FFF",

paddingHorizontal:15,
height:55,

borderRadius:15,

flexDirection:"row",
alignItems:"center",

elevation:2
},

searchInput:{
marginLeft:10,
flex:1,
fontSize:16,
color:"#111827"
},

memberCard:{
marginHorizontal:20,
marginTop:18,

backgroundColor:"#FFF",

borderRadius:18,

padding:18,

flexDirection:"row",

alignItems:"center",

elevation:2
},

avatar:{
width:60,
height:60,

borderRadius:30,

backgroundColor:"#EFF6FF",

justifyContent:"center",
alignItems:"center"
},

memberInfo:{
flex:1,
marginLeft:15
},

memberName:{
fontSize:18,
fontWeight:"700",
color:"#111827"
},

memberDetail:{
marginTop:4,
fontSize:14,
color:"#6B7280"
},

rightSection:{
alignItems:"center",
justifyContent:"space-between",

height:70
},

active:{
color:"#16A34A",
fontWeight:"700",
fontSize:13
}

});