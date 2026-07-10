import { Ionicons } from "@expo/vector-icons";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

const Trainer = () => {
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
            Trainers
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
            placeholder="Search Trainers"
            placeholderTextColor="#94A3B8"
            style={styles.searchInput}
          />

        </View>

        {/* Trainer Card */}

        <Pressable style={styles.trainerCard}>

          <View style={styles.avatar}>
            <Ionicons
              name="barbell"
              size={28}
              color="#2563EB"
            />
          </View>

          <View style={styles.trainerInfo}>

            <Text style={styles.trainerName}>
              Rahul Sharma
            </Text>

            <Text style={styles.detail}>
              Experience : 5 Years
            </Text>

            <Text style={styles.detail}>
              Specialization : Weight Loss
            </Text>

            <Text style={styles.detail}>
              9876543210
            </Text>

          </View>

          <View style={styles.rightSection}>

            <Text style={styles.memberCount}>
              12 Members
            </Text>

            <Ionicons
              name="chevron-forward"
              size={22}
              color="#94A3B8"
            />

          </View>

        </Pressable>

        {/* Copy this card 3-4 times */}

      </ScrollView>
    </SafeAreaView>
  );
};

export default Trainer;

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

height:55,

paddingHorizontal:15,

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

trainerCard:{
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

trainerInfo:{
flex:1,

marginLeft:15
},

trainerName:{
fontSize:18,

fontWeight:"700",

color:"#111827"
},

detail:{
marginTop:4,

fontSize:14,

color:"#6B7280"
},

rightSection:{
justifyContent:"space-between",

alignItems:"center",

height:70
},

memberCount:{
fontWeight:"700",

fontSize:13,

color:"#2563EB"
}

});