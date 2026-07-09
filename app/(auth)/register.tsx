import { router } from "expo-router";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Register() {
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
                style={styles.input}
                placeholder="Enter your full name"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email Address</Text>

              <TextInput
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
                style={styles.input}
                placeholder="Enter your phone number"
                keyboardType="phone-pad"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>

              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Gym Name</Text>

              <TextInput
                style={styles.input}
                placeholder="Enter gym name"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Gym Address</Text>

              <TextInput
                style={[styles.input, styles.addressInput]}
                placeholder="Enter gym address"
                multiline
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Gym Type</Text>

              <Pressable style={styles.dropdown}>
                <Text style={styles.dropdownText}>
                  Select Gym Type
                </Text>
              </Pressable>
            </View>

          </View>

          {/* Register Button */}

          <Pressable style={styles.button}>
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

});