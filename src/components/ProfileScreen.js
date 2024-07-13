import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getAuth } from 'firebase/auth';
import { NativeModules } from 'react-native';

const { BatteryModule } = NativeModules;

const ProfileScreen = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [batteryLevel, setBatteryLevel] = useState(null);

  useEffect(() => {
    BatteryModule.getBatteryLevel()
      .then(level => setBatteryLevel(level))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.info}>{user?.displayName || 'N/A'}</Text>
      <Text style={styles.label}>Email:</Text>
      <Text style={styles.info}>{user?.email}</Text>
      <Text style={styles.label}>Battery Level:</Text>
      <Text style={styles.info}>{batteryLevel !== null ? `${batteryLevel * 100}%` : 'N/A'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#2c2c2c',
  },
  label: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    color: '#ffcc00',
    marginBottom: 20,
  },
});

export default ProfileScreen;
