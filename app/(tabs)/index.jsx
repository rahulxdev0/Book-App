import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
const { width } = Dimensions.get("window");

export default function HomeScreen() {
  // Static data
  const categories = [
    { id: 1, title: "Web Development", icon: "globe" },
    { id: 2, title: "Mobile Apps", icon: "phone-portrait" },
    { id: 3, title: "Data Science", icon: "stats-chart" },
    { id: 4, title: "Machine Learning", icon: "hardware-chip" },
  ];

  const features = [
    {
      id: 1,
      title: "Create Courses",
      text: "Build interactive coding lessons",
      icon: "create",
      fee: "5000",
    },
    {
      id: 2,
      title: "Host Workshops",
      text: "Live coding sessions with students",
      icon: "videocam",
      fee: "7500",
    },
    {
      id: 3,
      title: "Sell Content",
      text: "Share your expertise worldwide",
      icon: "cash",
    },
    {
      id: 4,
      title: "Track Progress",
      text: "Monitor student performance",
      icon: "analytics",
    },
  ];

  const subscriptions = [
    {
      id: 1,
      title: "Basic Plan",
      price: "999",
      features: [
        "Access to 5 courses",
        "Monthly live Q&A",
        "Community support",
      ],
      icon: "star-outline",
    },
    {
      id: 2,
      title: "Pro Plan",
      price: "1999",
      features: [
        "Unlimited courses",
        "Weekly live sessions",
        "Priority support",
      ],
      icon: "star",
    },
  ];

  const reviews = [
    {
      id: 1,
      text: "This platform transformed my coding skills!",
      name: "Rahul Kumar",
      course: "React Native Basics",
      avatar: require("../../assets/images/rahul.jpg"),
    },
    {
      id: 2,
      text: "The best way to learn modern web development",
      name: "Rahul Kumar",
      course: "Full Stack Development",
      avatar: require("../../assets/images/rahul.jpg"),
    },
    {
      id: 3,
      text: "Practical projects helped me land a job",
      name: "Rahul Kumar",
      course: "Python for Data Science",
      avatar: require("../../assets/images/rahul.jpg"),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <LinearGradient colors={["#6E3AFF", "#2A7FFF"]} style={styles.hero}>
        <Text style={styles.heroTitle}>Learn Coding Syntax the Right Way</Text>
        <Text style={styles.heroSubtitle}>
          Interactive courses with real-world projects and expert guidance
        </Text>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaText}>Explore Courses</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* Course Categories */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((cat) => (
            <TouchableOpacity key={cat.id} style={styles.categoryCard}>
              <Ionicons name={cat.icon} size={32} color="#6E3AFF" />
              <Text style={styles.categoryTitle}>{cat.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Become Syntax Expert */}
      <LinearGradient
        colors={["#F8F9FF", "#FFFFFF"]}
        style={styles.expertSection}
      >
        <View style={styles.expertContent}>
          <View>
            <Text style={styles.expertTitle}>Become a Syntax Expert</Text>
            <Text style={styles.expertText}>
              Create & sell your own courses/workshops. Earn certificates and
              revenue!
            </Text>
            <TouchableOpacity style={styles.expertButton}>
              <Text style={styles.expertButtonText}>Start Teaching</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require("../../assets/images/expert.png")}
            style={styles.expertImage}
          />
        </View>
      </LinearGradient>

      {/* Course Creation Features */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Create & Earn</Text>
        <View style={styles.featureGrid}>
          {features.map((feature) => (
            <View key={feature.id} style={styles.featureCard}>
              <Ionicons name={feature.icon} size={28} color="#6E3AFF" />
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureText}>{feature.text}</Text>
              {feature.fee && (
                <Text style={styles.feeBadge}>
                  Earn up to ₹{feature.fee}/course
                </Text>
              )}
            </View>
          ))}
        </View>
      </View>

      {/* Subscription Plans */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Subscription Plans</Text>
        <View style={styles.featureGrid}>
          {subscriptions.map((plan) => (
            <View key={plan.id} style={styles.subscriptionCard}>
              <Ionicons name={plan.icon} size={28} color="#6E3AFF" />
              <Text style={styles.featureTitle}>{plan.title}</Text>
              <Text style={styles.priceText}>₹{plan.price}/month</Text>
              {plan.features.map((feature, index) => (
                <Text key={index} style={styles.featureText}>
                  • {feature}
                </Text>
              ))}
              <TouchableOpacity style={styles.subscribeButton}>
                <Text style={styles.subscribeButtonText}>Subscribe Now</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>

      {/* Certificate Showcase */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Earn Your Certificate</Text>
        <View style={styles.certificateContainer}>
          <LinearGradient
            colors={["#FFFFFF", "#F8F9FF"]}
            style={styles.certificateCard}
          >
            <View style={styles.certificateHeader}>
              <Image
                source={require("../../assets/images/logo.png")}
                style={{ width: 200, height: 50 }}
                contentFit="contain"
              />
              <Ionicons name="school" size={24} color="#6E3AFF" />
            </View>
            <Text style={styles.certificateTitle}>
              Certificate of Completion
            </Text>
            <Text style={styles.certificateText}>
              Awarded upon successful completion of any course
            </Text>
            <View style={styles.certificateFooter}>
              <Text style={styles.certificateDetail}>Verified Credential</Text>
              <Text style={styles.certificateDetail}>
                Shareable on LinkedIn
              </Text>
            </View>
          </LinearGradient>
        </View>
      </View>

      {/* Student Reviews */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Student Experiences</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {reviews.map((review) => (
            <View key={review.id} style={styles.reviewCard}>
              <Text style={styles.reviewText}>"{review.text}"</Text>
              <View style={styles.reviewer}>
                <Image source={review.avatar} style={styles.avatar} />
                <View>
                  <Text style={styles.reviewName}>{review.name}</Text>
                  <Text style={styles.reviewCourse}>{review.course}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FF",
  },
  hero: {
    padding: 24,
    paddingTop: 48,
    paddingBottom: 64,
  },
  heroTitle: {
    fontSize: 32,
    color: "white",
    marginBottom: 16,
  },
  heroSubtitle: {
    fontSize: 18,
    color: "rgba(255,255,255,0.9)",
    marginBottom: 32,
  },
  ctaButton: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    alignSelf: "flex-start",
  },
  ctaText: {
    color: "#6E3AFF",
    fontSize: 16,
  },
  section: {
    padding: 24,
  },
  sectionTitle: {
    fontSize: 24,
    color: "#2D3748",
    marginBottom: 24,
  },
  categoryCard: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    marginRight: 16,
    width: 140,
    alignItems: "center",
    elevation: 2,
  },
  categoryTitle: {
    color: "#2D3748",
    marginTop: 12,
    textAlign: "center",
  },
  expertSection: {
    padding: 24,
    marginVertical: 24,
  },
  expertContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  expertTitle: {
    fontSize: 24,
    color: "#2D3748",
    marginBottom: 12,
  },
  expertText: {
    color: "#64748b",
    marginBottom: 24,
    maxWidth: 240,
  },
  expertButton: {
    backgroundColor: "#6E3AFF",
    borderRadius: 12,
    padding: 16,
    alignSelf: "flex-start",
  },
  expertButtonText: {
    color: "white",
  },
  expertImage: {
    width: 160,
    height: 150,
  },
  featureGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  featureCard: {
    width: width * 0.43,
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  subscriptionCard: {
    width: width * 0.43,
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  featureTitle: {
    color: "#2D3748",
    marginVertical: 12,
  },
  featureText: {
    color: "#64748b",
    fontSize: 14,
  },
  priceText: {
    color: "#6E3AFF",
    fontSize: 18,
    marginBottom: 12,
  },
  feeBadge: {
    backgroundColor: "#4CAF5020",
    color: "#4CAF50",
    padding: 8,
    borderRadius: 8,
    marginTop: 12,
    fontSize: 12,
  },
  subscribeButton: {
    backgroundColor: "#6E3AFF",
    borderRadius: 12,
    padding: 12,
    marginTop: 16,
    alignItems: "center",
  },
  subscribeButtonText: {
    color: "white",
    fontSize: 14,
  },
  certificateContainer: {
    alignItems: "center",
  },
  certificateCard: {
    width: width * 0.85,
    padding: 24,
    borderRadius: 16,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#6E3AFF",
  },
  certificateHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  certificateLogo: {
    fontSize: 24,
    color: "#6E3AFF",
    fontWeight: "bold",
  },
  certificateTitle: {
    fontSize: 20,
    color: "#2D3748",
    textAlign: "center",
    marginBottom: 12,
  },
  certificateText: {
    fontSize: 14,
    color: "#64748b",
    textAlign: "center",
    marginBottom: 16,
  },
  certificateFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  certificateDetail: {
    fontSize: 12,
    color: "#6E3AFF",
  },
  reviewCard: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    marginRight: 16,
    width: width * 0.8,
  },
  reviewText: {
    fontSize: 16,
    color: "#2D3748",
    marginBottom: 16,
  },
  reviewer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  reviewName: {
    color: "#2D3748",
  },
  reviewCourse: {
    color: "#64748b",
    fontSize: 12,
  },
});
