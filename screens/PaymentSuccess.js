import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import a custom checkmark icon

const PaymentSuccess = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.goBack(); // Automatically go back to the previous screen after 3 seconds
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Icon name="check-circle" size={100} color="#0079FF" />
      <Text style={styles.message}>Your payment is successfully processed. Please check the transaction history for updates.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#0079FF',
  },
});

export default PaymentSuccess;
