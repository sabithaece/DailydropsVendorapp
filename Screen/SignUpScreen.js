import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const navigation = useNavigation(); // Use the navigation hook

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <View style={styles.logo} />
        <Text style={styles.title}>Daily Drop</Text>
      </View>

      {/* Buttons */}
      <TouchableOpacity
        style={styles.emailButton}
        onPress={() => navigation.navigate("Register")} // Correct navigation call
      >
        <Text style={styles.buttonText}>Sign Up Using Email</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text> 

      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.buttonText}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
            }}
            style={styles.icon}
          />
          Login Using Google
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.facebookButton}>
        <Text style={styles.buttonText}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
            }}
            style={styles.icon}
          />
          Login Using Facebook
        </Text>
      </TouchableOpacity>

      {/* Link to Login */}
      <TouchableOpacity>
        <Text style={styles.loginLink}>Click Here to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: "#9dd694",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  emailButton: {
    backgroundColor: "#9dd694",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  googleButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  facebookButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginBottom: 25,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  orText: {
    fontSize: 16,
    marginBottom: 50,
    paddingTop: 30,
    color: "#999",
  },
  loginLink: {
    color: "#00A95C",
    textDecorationLine: "underline",
    fontSize: 16,
    paddingTop: 90,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default SignUpScreen;
