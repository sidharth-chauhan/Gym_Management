import { router } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../../api/api";
import ROUTES from "../../api/routes";

export default function Register() {

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [phoneNumber,setPhoneNumber]=useState("")
  const [gymName,setGymName]=useState("")
  const [address,setAddress]=useState("")
  const [gymType,setGymType]=useState("")

  const [loading,setLoading]=useState(false)
  const [error,setError]=useState("")

  const handleRegister=async()=>{
    
    if(!name || !email || !password || !phoneNumber || !gymName || !address || !gymType){
      setError("Please fill in all fields")
      return
    }
    

    setLoading(true)
    setError("")

    try{
      const payload={
        name,
        email,
        password,
        phoneNumber,
        gymName,
        address,
        gymType
      }
      const response=await api.post(
        ROUTES.REGISTER,
        payload
      )
      await router.push("/login")



    }catch (error: any) {
      console.log(error);
      console.log(error.code);
      console.log(error.message);
      console.log(error.response);

      setError(
          error.response?.data?.message ||
          "Something went wrong"
      );
    }finally{
      setLoading(false)
    }
  }

  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.main}>

          {/* Header */}

          <View style={styles.header}>
            <Text style={styles.title}>Create Account</Text>

            <Text style={styles.subtitle}>
              Register your gym to continue
            </Text>
          </View>

          {/* Form */}

          <View style={styles.form}>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Owner Name</Text>

              <TextInput
                onChangeText={setName}
                style={styles.input}
                placeholder="Enter your full name"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email Address</Text>

              <TextInput
                onChangeText={setEmail}
                style={styles.input}
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Phone Number</Text>

              <TextInput
                onChangeText={setPhoneNumber}
                style={styles.input}
                placeholder="Enter your phone number"
                keyboardType="phone-pad"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>

              <TextInput
                onChangeText={setPassword}
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Gym Name</Text>

              <TextInput
                onChangeText={setGymName}
                style={styles.input}
                placeholder="Enter gym name"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Gym Address</Text>

              <TextInput
                onChangeText={setAddress}
                style={[styles.input, styles.addressInput]}
                placeholder="Enter gym address"
                multiline
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Gym Type</Text>

              <View style={styles.gymTypeContainer}>
                <Pressable
                  onPress={() => setGymType("MALE")}
                  style={[
                    styles.option,
                    gymType === "MALE" && styles.selectedOption,
                  ]}
                >
                  <Text>Male</Text>
                </Pressable>

                <Pressable
                  onPress={() => setGymType("FEMALE")}
                  style={[
                    styles.option,
                    gymType === "FEMALE" && styles.selectedOption,
                  ]}
                >
                  <Text>Female</Text>
                </Pressable>

                <Pressable
                  onPress={() => setGymType("UNISEX")}
                  style={[
                    styles.option,
                    gymType === "UNISEX" && styles.selectedOption,
                  ]}
                >
                  <Text>Unisex</Text>
                </Pressable>
              </View>
            </View>

          </View>

          {/* Register Button */}

          <Pressable 
            disabled={loading}
            onPress={handleRegister}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              Register Gym
            </Text>
          </Pressable>

          {/* Footer */}

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Already have an account?
            </Text>

            <Pressable
              onPress={()=>{
                router.push("/(auth)/login")
              }}
            >
              <Text style={styles.loginText}> Login</Text>
            </Pressable>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 30,
  },

  main: {
    flex: 1,
  },

  header: {
    alignItems: "center",
    marginBottom: 35,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#2563EB",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
  },

  form: {
    gap: 18,
  },

  inputContainer: {
    gap: 8,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#374151",
  },

  input: {
    height: 55,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
  },

  addressInput: {
    height: 90,
    paddingTop: 14,
    textAlignVertical: "top",
  },

  dropdown: {
    height: 55,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 12,
    justifyContent: "center",
    paddingHorizontal: 16,
  },

  dropdownText: {
    color: "#6B7280",
    fontSize: 16,
  },

  button: {
    height: 55,
    backgroundColor: "#2563EB",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
  },

  footerText: {
    color: "#6B7280",
    fontSize: 15,
  },

  loginText: {
    color: "#2563EB",
    fontSize: 15,
    fontWeight: "700",
  },
  gymTypeContainer: {
    flexDirection: "row",
    gap: 10,
  },

  option: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  selectedOption: {
    backgroundColor: "#4F7CFF",
    borderColor: "#4F7CFF",
  },

});