import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

const OTPScreen = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const navigation = useNavigation(); // Get the navigation object

  const handleInputChange = (value, index) => {
    const otpArray = [...otp];
    otpArray[index] = value;
    setOtp(otpArray);

    // Automatically focus on the next input if value is entered
    if (value && index < otp.length - 1) {
      const nextInput = `otpInput${index + 1}`;
      this[nextInput]?.focus();
    }
  };

  const handleSubmit = () => {
    console.log("OTP Submitted:", otp.join(""));

    // Navigate to SelectVendorScreen after submission
    navigation.navigate("Select");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backText}>{"<"}</Text>
      </TouchableOpacity>
      <Image
        style={styles.logo}
        source={{ uri: "https://via.placeholder.com/100" }}
      />
      <Text style={styles.title}>Daily Drop</Text>
      <Text style={styles.subTitle}>Enter OTP</Text>
      <Text style={styles.infoText}>Enter Code sent to anki****.com</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
            value={digit}
            onChangeText={(value) => handleInputChange(value, index)}
            ref={(ref) => (this[`otpInput${index}`] = ref)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.link}>Re-send Code</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.link}>Click Here to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  backText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  logo: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  subTitle: {
    fontSize: 18,
    color: "#000",
    marginTop: 10,
  },
  infoText: {
    fontSize: 14,
    color: "#666",
    marginVertical: 10,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 18,
  },
  submitButton: {
    width: "80%",
    backgroundColor: "#00b894",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
    marginTop: 20,
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    color: "#00b894",
    marginTop: 10,
    fontSize: 14,
  },
});

export default OTPScreen;
