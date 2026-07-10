import { Ionicons } from "@expo/vector-icons";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >

        {/* ================= HEADER ================= */}

        <View style={styles.header}>
          <Pressable style={styles.iconButton}>
            <Ionicons name="menu" size={26} color="#1E3A8A" />
          </Pressable>

          <Text style={styles.headerTitle}>Dashboard</Text>

          <Pressable style={styles.iconButton}>
            <Ionicons
              name="notifications-outline"
              size={24}
              color="#1E3A8A"
            />
          </Pressable>
        </View>

        {/* ================= WELCOME ================= */}

        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeText}>Welcome Back 👋</Text>

          <Text style={styles.gymName}>
            Sidharth Fitness Club
          </Text>

          <Text style={styles.subtitle}>
            Here's today's overview of your gym.
          </Text>
        </View>

        {/* ================= OVERVIEW ================= */}

        <Text style={styles.sectionTitle}>
          Overview
        </Text>

        <View style={styles.cardRow}>

          <View style={styles.statCard}>
            <View style={styles.iconCircle}>
              <Ionicons
                name="people"
                size={24}
                color="#2563EB"
              />
            </View>

            <Text style={styles.statNumber}>120</Text>

            <Text style={styles.statLabel}>
              Members
            </Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.iconCircle}>
              <Ionicons
                name="barbell"
                size={24}
                color="#2563EB"
              />
            </View>

            <Text style={styles.statNumber}>8</Text>

            <Text style={styles.statLabel}>
              Trainers
            </Text>
          </View>

        </View>

        <View style={styles.cardRow}>

          <View style={styles.statCard}>
            <View style={styles.iconCircle}>
              <Ionicons
                name="card"
                size={24}
                color="#2563EB"
              />
            </View>

            <Text style={styles.statNumber}>4</Text>

            <Text style={styles.statLabel}>
              Memberships
            </Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.iconCircle}>
              <Ionicons
                name="cash"
                size={24}
                color="#2563EB"
              />
            </View>

            <Text style={styles.statNumber}>
              ₹45K
            </Text>

            <Text style={styles.statLabel}>
              Revenue
            </Text>
          </View>

        </View>

        {/* ================= REVENUE ================= */}

        <Text style={styles.sectionTitle}>
          Monthly Revenue
        </Text>

        <View style={styles.revenueCard}>

          <View>
            <Text style={styles.revenueLabel}>
              Total Revenue
            </Text>

            <Text style={styles.revenueAmount}>
              ₹45,000
            </Text>
          </View>

          <View style={styles.growthBadge}>
            <Ionicons
              name="trending-up"
              size={18}
              color="#16A34A"
            />

            <Text style={styles.growthText}>
              +12%
            </Text>
          </View>

        </View>

        {/* ======= PART 2 STARTS FROM HERE ======= */}

      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;

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

  /* ================= WELCOME ================= */

  welcomeCard: {
    backgroundColor: "#2563EB",

    marginHorizontal: 20,
    marginTop: 25,

    borderRadius: 20,

    paddingVertical: 22,
    paddingHorizontal: 20,
  },

  welcomeText: {
    color: "#DBEAFE",
    fontSize: 16,
    marginBottom: 8,
  },

  gymName: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "700",
  },

  subtitle: {
    color: "#DBEAFE",
    marginTop: 10,
    fontSize: 15,
    lineHeight: 22,
  },

  /* ================= TITLES ================= */

  sectionTitle: {
    marginHorizontal: 20,
    marginTop: 28,
    marginBottom: 16,

    fontSize: 21,
    fontWeight: "700",

    color: "#1E293B",
  },

  /* ================= OVERVIEW ================= */

  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginHorizontal: 20,
    marginBottom: 16,
  },

  statCard: {
    backgroundColor: "#FFFFFF",

    width: "48%",

    borderRadius: 18,

    paddingVertical: 22,

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

  iconCircle: {
    width: 55,
    height: 55,

    borderRadius: 28,

    backgroundColor: "#EFF6FF",

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 15,
  },

  statNumber: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111827",
  },

  statLabel: {
    marginTop: 6,
    fontSize: 15,
    color: "#6B7280",
  },

  /* ================= REVENUE ================= */

  revenueCard: {
    backgroundColor: "#FFFFFF",

    marginHorizontal: 20,

    borderRadius: 18,

    padding: 22,

    flexDirection: "row",
    justifyContent: "space-between",
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

  revenueLabel: {
    color: "#6B7280",
    fontSize: 15,
  },

  revenueAmount: {
    marginTop: 6,

    fontSize: 30,
    fontWeight: "700",

    color: "#111827",
  },

  growthBadge: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#DCFCE7",

    paddingHorizontal: 12,
    paddingVertical: 8,

    borderRadius: 20,
  },

  growthText: {
    marginLeft: 5,

    color: "#16A34A",

    fontWeight: "700",
  },
});