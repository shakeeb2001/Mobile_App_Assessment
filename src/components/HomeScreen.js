import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { getAuth } from 'firebase/auth';

const HomeScreen = ({ onNavigateToCharacterList, onLogOut, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const auth = getAuth();
  const user = auth.currentUser;

  const handleLogOut = () => {
    Alert.alert(
      'Log out',
      'Do you want to log out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: onLogOut,
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game of Thrones Character</Text>
      <TouchableOpacity style={styles.button} onPress={onNavigateToCharacterList}>
        <Text style={styles.buttonText}>Characters List</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>User Details</Text>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.info}>{user?.displayName || 'N/A'}</Text>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.info}>{user?.email}</Text>
            <TouchableOpacity style={styles.modalButton} onPress={handleLogOut}>
              <Text style={styles.buttonText}>Log out</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ffcc00',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#2c2c2c',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#2c2c2c',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
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
  modalButton: {
    backgroundColor: '#ffcc00',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
});

export default HomeScreen;
