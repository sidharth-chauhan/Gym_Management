import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useState } from "react";
import {
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

const AddTrainer = () => {

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [experienceInMonth, setExperienceInMonth] = useState("");
  const [specialization, setSpecialization] = useState("");


  const handleTrainer=async()=>{
    setLoading(true)
    const token = await AsyncStorage.getItem("token")
    try{
      const payload={
        name,
        email,
        password,
        phoneNumber,
        experienceInMonth: Number(experienceInMonth),
        specialization
      }
      console.log("payload:- ",payload)
      const response=await api.post(
        ROUTES.AddTRAINER,
        payload,
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      )
      console.log("Trainer added successfully")
      console.log("response:- ",response.data.data)
      router.replace("/(tabs)/trainer")

    }catch (error: any) {
      console.log(error.response?.data);
    }finally{
      setLoading(false)
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Header */}

        <View style={styles.header}>

          <Pressable style={styles.backButton}>
            <Ionicons
              name="arrow-back"
              size={22}
              color="#2563EB"
            />
          </Pressable>

          <Text style={styles.headerTitle}>
            Add Trainer
          </Text>

          <View style={{ width: 42 }} />

        </View>

        {/* Form */}

        <View style={styles.formContainer}>

          <Text style={styles.sectionTitle}>
            Trainer Information
          </Text>

          {/* Name */}

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name</Text>

            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Enter trainer name"
              style={styles.input}
            />
          </View>

          {/* Email */}

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>

            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Enter email"
              keyboardType="email-address"
              style={styles.input}
            />
          </View>

          {/* Password */}

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>

            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Enter password"
              secureTextEntry
              style={styles.input}
            />
          </View>

          {/* Phone */}

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone Number</Text>

            <TextInput
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder="Enter ph no."
              keyboardType="phone-pad"
              style={styles.input}
            />
          </View>

          {/* Experience */}

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Experience (Months)</Text>

            <TextInput
              value={experienceInMonth}
              onChangeText={setExperienceInMonth}
              placeholder="Enter experience"
              keyboardType="numeric"
              style={styles.input}
            />
          </View>

          {/* Specialization */}

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Specialization</Text>

            <TextInput
              value={specialization}
              onChangeText={setSpecialization}
              placeholder="Weight Training"
              style={styles.input}
            />
          </View>

          {/* Button */}

          <Pressable 
            onPress={handleTrainer}
            style={styles.button}
          >

            <Text style={styles.buttonText}>
              Add Trainer
            </Text>

          </Pressable>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
};



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
    justifyContent: "space-between",
    alignItems: "center",
  },

  backButton: {
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

  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1E293B",
  },

  /* ================= FORM ================= */

  formContainer: {
    marginTop: 30,
    marginHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 25,
  },

  inputContainer: {
    marginBottom: 18,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 8,
  },

  input: {
    height: 55,

    backgroundColor: "#FFFFFF",

    borderRadius: 14,

    paddingHorizontal: 15,

    fontSize: 16,

    color: "#111827",

    elevation: 2,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  /* ================= BUTTON ================= */

  button: {
    marginTop: 35,

    height: 55,

    backgroundColor: "#2563EB",

    borderRadius: 14,

    justifyContent: "center",
    alignItems: "center",

    elevation: 3,

    shadowColor: "#2563EB",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});

export default AddTrainer;