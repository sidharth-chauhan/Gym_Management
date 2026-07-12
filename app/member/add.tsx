import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  Platform,
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
const AddMember = () => {
  const [dob, setDob] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [memberName, setMemberName] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [memberPassword, setMemberPassword] = useState("");
  const [memberPhone, setMemberPhone] = useState("");
  const [memberTrainer, setMemberTrainer] = useState("");
  const [membermembership, setMemberMembership] = useState("");
  const [memberWeight, setMemberWeight] = useState("");
  const [memberDiet, setMemberDiet] = useState("");
  const [loading,setLoading]=useState(false)

  const [showTrainerDropdown, setShowTrainerDropdown] = useState(false);
  const [showMembershipDropdown, setShowMembershipDropdown] = useState(false);

  const [trainerId, setTrainerId] = useState("");
  const [membershipId, setMembershipId] = useState("");
  

  const [trainer,setTrainer]=useState([])
  const [membership,setMembership]=useState([])


  const handleAddMember=async()=>{
    setLoading(true)
    const token=await AsyncStorage.getItem("token")
    setLoading(true)
    try{
      const payload={
        name:memberName,
        email:memberEmail,
        password:memberPassword,
        phoneNumber:memberPhone,
        trainerId:trainerId,
        membershipId:membershipId,
        weight:memberWeight,
        diet:memberDiet,
        dob
      }
      console.log(payload)
      const response=await api.post(
        ROUTES.ADDMEMBER,
        payload,
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      )
      
      console.log("add member response:- ",response.data)
      router.replace("/(tabs)")

    }catch(error: any){
      console.log(error.response?.data);
    }finally{
      setLoading(false)
    }
  }




  const getTrainer=async()=>{
    const token=await AsyncStorage.getItem("token")
    setLoading(true)
    try{
      const responseTrainer=await api.get(
        ROUTES.GETTRAINER,
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      )
      
      setTrainer(responseTrainer.data.data)
      console.log("trainer:- ",responseTrainer.data.data)

      console.log(trainer)
      console.log(membership)
    }catch(error: any){
      console.log(error);
    }finally{
      setLoading(false)
      
    }
  }
  const getMemberbership=async()=>{
    setLoading(true)
    const token = await AsyncStorage.getItem("token")
    try{
      const responseMembership=await api.get(
        ROUTES.GETMEMBERSHIP,
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      )
      setMembership(responseMembership.data.data)
      

    }catch(error: any){
      console.log(error);
    }finally{
      
      setLoading(false)
    }
  }
  

  useEffect(()=>{
    getTrainer()
  },[])

  useEffect(()=>{
    getMemberbership()
  },[])

  useEffect(() => {
    console.log("Updated trainer:", trainer);
  }, [trainer]);

  useEffect(() => {
    console.log("Updated membership:", membership);
  }, [membership]);
  
  
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
            Add Member
          </Text>

          <View style={{ width: 42 }} />

        </View>

        {/* Form */}

        <View style={styles.formContainer}>

          <Text style={styles.sectionTitle}>
            Member Information
          </Text>

          {/* Name */}

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name</Text>

            <TextInput
              value={memberName}
              onChangeText={setMemberName}
              placeholder="Enter member name"
              style={styles.input}
            />
          </View>

          {/* Email */}

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>

            <TextInput
              value={memberEmail}
              onChangeText={setMemberEmail}
              placeholder="Enter email"
              keyboardType="email-address"
              style={styles.input}
            />
          </View>

          {/* Password */}

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>

            <TextInput
              value={memberPassword}
              onChangeText={setMemberPassword}
              placeholder="Enter password"
              secureTextEntry
              style={styles.input}
            />
          </View>

          {/* Phone */}

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone Number</Text>

            <TextInput
              value={memberPhone}
              onChangeText={setMemberPhone}
              placeholder="Enter phone number"
              keyboardType="phone-pad"
              style={styles.input}
            />
          </View>

          {/* Trainer */}

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Assign Trainer</Text>

            <Pressable 
              onPress={() => setShowTrainerDropdown(!showTrainerDropdown)}
              style={styles.dropdown}
            >


              <Text style={styles.dropdownText}>
                {memberTrainer || "Select Trainer"}
              </Text>

              <Ionicons
                name="chevron-down"
                size={20}
                color="#64748B"
              />

            </Pressable>
            {showTrainerDropdown && (

            <View style={styles.optionContainer}>

              <FlatList
                data={trainer}
                keyExtractor={(item) => item?.trainerId}
                renderItem={({ item }) => (

                  <Pressable
                    style={styles.option}
                    onPress={() => {

                      setMemberTrainer(item?.name);

                      setTrainerId(item?.trainerId);

                      setShowTrainerDropdown(false);

                    }}
                  >

                    <Text style={styles.optionText}>
                      {item?.name}
                    </Text>

                  </Pressable>

                )}
              />

            </View>

            )}
          </View>

          {/* Membership */}

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Membership</Text>

            <Pressable 
              onPress={()=>setShowMembershipDropdown(!showMembershipDropdown)}
              style={styles.dropdown}
            >

              <Text style={styles.dropdownText}>
                {membermembership || "Select Membership"}
              </Text>

              <Ionicons
                name="chevron-down"
                size={20}
                color="#64748B"
              />

            </Pressable>
          </View>
          { showMembershipDropdown && (
            <View style={styles.optionContainer}>
              <FlatList
                data={membership}
                keyExtractor={(item)=> item?.membershipId}
                renderItem={({item})=>(
                  <Pressable
                    style={styles.option}
                    onPress={()=>{
                      setMemberMembership(item?.planName)
                      setMembershipId(item?.membershipId)
                      setShowMembershipDropdown(false)
                      
                    }}
                  >
                    <Text style={styles.optionText}>
                      {item?.planName}
                    </Text>
                  </Pressable>
                )}
              />


            </View>

          )}

          {/* Weight */}

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Weight (kg)</Text>

            <TextInput
              value={memberWeight}
              onChangeText={setMemberWeight}
              placeholder="Enter weight"
              keyboardType="numeric"
              style={styles.input}
            />
          </View>

          {/* Diet */}

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Diet Plan</Text>

            <TextInput
              value={memberDiet}
              onChangeText={setMemberDiet}
              placeholder="Vegetarian / Non-Vegetarian"
              style={styles.input}
            />
          </View>

          {/* DOB */}

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Date of Birth</Text>
            {Platform.OS === "web" ? (
              <TextInput
                value={dob.toLocaleDateString()}
                onChangeText={(text) => {
                  const [day, month, year] = text.split("/").map(Number);
                  const newDate = new Date(year, month - 1, day);
                  if (!isNaN(newDate)) {
                    setDob(newDate);
                  }
                }}

                placeholder="DD/MM/YYYY"
                style={styles.input}
              />
            ) : (

              <Pressable 
                onPress={() => setShowDatePicker(true)}
                style={styles.dropdown}
              >

                <Text style={styles.dropdownText}>
                  Select Date
                </Text>

                <Ionicons
                  name="calendar-outline"
                  size={20}
                  color="#64748B"
                />

              </Pressable>
            )}
            {showDatePicker && (
              <DateTimePicker
                value={dob}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  setShowDatePicker(false);

                  if (selectedDate) {
                    setDob(selectedDate);
                  }
                }}
              />
            )}
          </View>

          {/* Button */}

          <Pressable 
            onPress={handleAddMember}
            style={styles.button}
          >

            <Text style={styles.buttonText}>
              Add Member
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
    alignItems: "center",
    justifyContent: "space-between",
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

  /* ================= DROPDOWN ================= */

  dropdown: {
    height: 55,

    backgroundColor: "#FFFFFF",

    borderRadius: 14,

    paddingHorizontal: 15,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    elevation: 2,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  dropdownText: {
    fontSize: 16,
    color: "#64748B",
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
  optionContainer: {
    marginTop: 6,

    backgroundColor: "#FFFFFF",

    borderRadius: 14,

    elevation: 3,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    overflow: "hidden",
  },

  option: {
    paddingVertical: 14,
    paddingHorizontal: 15,

    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  optionText: {
    fontSize: 16,
    color: "#1E293B",
  },
});

export default AddMember;