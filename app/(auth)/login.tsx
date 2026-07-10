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
  View,
} from "react-native";
import api from "../../api/api";
import ROUTES from "../../api/routes";

export default function Login() {

  const [email, setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  
  
  const handleLogin=async()=>{
    if(!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    setLoading(true)
    setError("")
    
    try{
      
      const payload={
        email,
        password
      }
      const response=await api.post(
        ROUTES.LOGIN,
        payload
      )
      const token=response.data.token
      await AsyncStorage.setItem("token", token)
      
      router.replace("/(tabs)")

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

          {/* ---------- Header ---------- */}

          <View style={styles.header}>
            <Text style={styles.title}>Gym Management</Text>

            <Text style={styles.subtitle}>
              Manage your gym efficiently
            </Text>
          </View>

          {/* ---------- Form ---------- */}

          <View style={styles.form}>

            {/* Email */}

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email Address</Text>

              <TextInput
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            {/* Password */}

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>

              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>

          </View>

          {/* ---------- Forgot Password ---------- */}

          <View style={styles.forgotContainer}>
            <Pressable>
              <Text style={styles.forgotText}>
                Forgot Password?
              </Text>
            </Pressable>
          </View>
          {!!error && (
            <Text style={styles.error}>
              {error}
            </Text>
          )}

          {/* ---------- Login Button ---------- */}

          <Pressable 
            disabled={loading}
            onPress={handleLogin}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              {loading ? "Loading..." : "Login"}
            </Text>
          </Pressable>

          {/* ---------- Footer ---------- */}

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Don't have an account?
            </Text>

            <Pressable
              onPress={() => {
                router.push("/(auth)/register");
              }}
            >
              <Text style={styles.signUpText}>
                {" "}Sign Up
              </Text>
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
    justifyContent: "center",
  },

  header: {
    alignItems: "center",
    marginBottom: 45,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
  },

  form: {
    gap: 20,
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

  forgotContainer: {
    alignItems: "flex-end",
    marginTop: 15,
    marginBottom: 30,
  },

  forgotText: {
    color: "#4F7CFF",
    fontWeight: "600",
  },

  button: {
    height: 55,
    backgroundColor: "#4F7CFF",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },

  footerText: {
    color: "#6B7280",
    fontSize: 15,
  },

  signUpText: {
    color: "#4F7CFF",
    fontWeight: "700",
    fontSize: 15,
  },
  error: {
    color: "red",
    fontSize: 14,
    marginTop: 8,
  },

});