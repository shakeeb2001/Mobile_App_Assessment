import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Voice from '@react-native-voice/voice';

const VoiceToText = () => {
  const [started, setStarted] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = (e) => {
    setStarted(true);
    console.log('onSpeechStart: ', e);
  };

  const onSpeechEnd = (e) => {
    setStarted(false);
    console.log('onSpeechEnd: ', e);
  };

  const onSpeechResults = (e) => {
    console.log('onSpeechResults: ', e);
    setResults(e.value);
  };

  const startRecording = async () => {
    try {
      await Voice.start('en-US');
      setStarted(true);
    } catch (e) {
      console.error(e);
    }
  };

  const stopRecording = async () => {
    try {
      await Voice.stop();
      setStarted(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={started ? stopRecording : startRecording}
      >
        <Text style={styles.buttonText}>{started ? 'Stop Recording' : 'Start Recording'}</Text>
      </TouchableOpacity>
      <Text style={styles.transcription}>{results.join(' ')}</Text>
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
  transcription: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default VoiceToText;
