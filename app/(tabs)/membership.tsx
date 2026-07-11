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

const Membership = () => {
  const [loading,setLoading]=useState(false)
  const [membership,setMembership]=useState([])
  const handleMembership=async()=>{
    setLoading(true)
    try{
      const token =await AsyncStorage.getItem("token")
      const response=await api.get(
        ROUTES.GETMEMBERSHIP,
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      )
      console.log("membership:- ",response.data.data)
      setMembership(response.data.data)



    }catch (error) {
      console.log(error);
    }finally{
      setLoading(false)

    }
  }

  useEffect(()=>{
    handleMembership()
  },[])
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
            Memberships
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
            placeholder="Search Membership"
            placeholderTextColor="#94A3B8"
            style={styles.searchInput}
          />

        </View>

        {/* Membership Card */}
        <FlatList
          data={membership}
          keyExtractor={(item)=>item.membershipId}
          renderItem={({item})=>(
            <Pressable style={styles.planCard}>

              <View style={styles.planIcon}>

                <Ionicons
                  name="card"
                  size={30}
                  color="#2563EB"
                />

              </View>

              <View style={styles.planInfo}>

                <Text style={styles.planName}>
                  {item?.planName}
                </Text>

                <Text style={styles.planDetail}>
                  Duration : {item?.durationInMonth} months
                </Text>

                <Text style={styles.planDetail}>
                  Price : ₹{item?.price}
                </Text>

                <Text style={styles.planDetail}>
                  Active Members : {item?.membersCount}
                </Text>

              </View>

              <Ionicons
                name="chevron-forward"
                size={22}
                color="#94A3B8"
              />

            </Pressable>
          )}
        />

        {/* Copy this card 3-4 times */}

      </ScrollView>
    </SafeAreaView>
  );
};

export default Membership;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  /* ================= HEADER ================= */

  header: {
    marginTop: 15,
    marginHorizontal: 20,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1E293B",
  },

  iconButton: {
    width: 42,
    height: 42,

    borderRadius: 21,
    backgroundColor: "#FFFFFF",

    justifyContent: "center",
    alignItems: "center",

    elevation: 3,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  /* ================= SEARCH ================= */

  searchContainer: {
    marginHorizontal: 20,
    marginTop: 25,

    backgroundColor: "#FFFFFF",

    height: 55,
    borderRadius: 15,

    paddingHorizontal: 15,

    flexDirection: "row",
    alignItems: "center",

    elevation: 2,

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,

    fontSize: 16,
    color: "#111827",
  },

  /* ================= MEMBERSHIP CARD ================= */

  planCard: {
    marginHorizontal: 20,
    marginTop: 18,

    backgroundColor: "#FFFFFF",

    borderRadius: 18,

    padding: 18,

    flexDirection: "row",
    alignItems: "center",

    elevation: 3,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  planIcon: {
    width: 60,
    height: 60,

    borderRadius: 30,

    backgroundColor: "#EFF6FF",

    justifyContent: "center",
    alignItems: "center",
  },

  planInfo: {
    flex: 1,
    marginLeft: 16,
  },

  planName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  planDetail: {
    marginTop: 5,

    fontSize: 14,
    color: "#6B7280",
  },
});