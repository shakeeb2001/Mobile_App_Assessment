import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CharacterListScreen = ({ navigation, onNavigateBack }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://thronesapi.com/api/v2/Characters')
      .then(response => response.json())
      .then(data => {
        setCharacters(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const renderCharacter = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.characterContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <Text style={styles.characterName}>{item.fullName}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onNavigateBack} style={styles.button}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
      {loading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        <FlatList
          data={characters}
          renderItem={renderCharacter}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2c2c2c',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'left',
    color: '#ffcc00',
  },
  loadingText: {
    color: '#fff',
    textAlign: 'center',
  },
  characterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  characterName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  characterTitle: {
    color: '#ccc',
  },
  button: {
    marginBottom: 20,
    padding: 10,
    
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffcc00',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CharacterListScreen;
