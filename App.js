// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, AppRegistry } from 'react-native';
// import SignInScreen from './src/components/SignInScreen';
// import SignUpScreen from './src/components/SignUpScreen';
// import HomeScreen from './src/components/HomeScreen';
// import CharacterListScreen from './src/components/CharacterListScreen';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';

// const auth = getAuth();

// const App = () => {
//   const [currentScreen, setCurrentScreen] = useState('SignIn');
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//         setCurrentScreen('Home');
//       } else {
//         setUser(null);
//         setCurrentScreen('SignIn');
//       }
//     });

//     return unsubscribe;
//   }, []);

//   const handleLogOut = () => {
//     auth.signOut().then(() => {
//       setCurrentScreen('SignIn');
//     }).catch((error) => {
//       console.error('Sign Out Error:', error);
//     });
//   };

//   const renderScreen = () => {
//     switch (currentScreen) {
//       case 'SignIn':
//         return <SignInScreen onSignIn={() => setCurrentScreen('Home')} onNavigateToSignUp={() => setCurrentScreen('SignUp')} />;
//       case 'SignUp':
//         return <SignUpScreen onSignUp={() => setCurrentScreen('SignIn')} onNavigateToSignIn={() => setCurrentScreen('SignIn')} />;
//       case 'Home':
//         return <HomeScreen onNavigateToCharacterList={() => setCurrentScreen('CharacterList')} onLogOut={handleLogOut} />;
//       case 'CharacterList':
//         return <CharacterListScreen navigation={{ goBack: () => setCurrentScreen('Home') }} />;
//       default:
//         return <SignInScreen onSignIn={() => setCurrentScreen('Home')} onNavigateToSignUp={() => setCurrentScreen('SignUp')} />;
//     }
//   };

//   return <View style={styles.container}>{renderScreen()}</View>;
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// // Register the main component
// AppRegistry.registerComponent('main', () => App);

// export default App;


// import React, { useState, useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import SignInScreen from './src/components/SignInScreen';
// import SignUpScreen from './src/components/SignUpScreen';
// import HomeScreen from './src/components/HomeScreen';
// import CharacterListScreen from './src/components/CharacterListScreen';
// import CharacterDetailScreen from './src/components/CharacterDetailScreen';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';

// const auth = getAuth();
// const Stack = createStackNavigator();

// const App = () => {
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState(null);

//   // Handle user state changes
//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, onAuthStateChanged);
//     return () => unsubscribe(); // Cleanup subscription on unmount
//   }, []);

//   if (initializing) return null;

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {user ? (
//           <>
//             <Stack.Screen 
//               name="Home" 
//               component={HomeScreen} 
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen 
//               name="CharacterList" 
//               component={CharacterListScreen} 
//               options={{
//                 title: 'Character List',
//                 headerStyle: { backgroundColor: '#2c2c2c' },
//                 headerTintColor: '#fff',
//                 headerTitleStyle: { fontWeight: 'bold' },
//               }}
//             />
//             <Stack.Screen 
//               name="CharacterDetail" 
//               component={CharacterDetailScreen} 
//               options={{
//                 title: 'Character Detail',
//                 headerStyle: { backgroundColor: '#2c2c2c' },
//                 headerTintColor: '#fff',
//                 headerTitleStyle: { fontWeight: 'bold' },
//               }}
//             />
//           </>
//         ) : (
//           <>
//             <Stack.Screen 
//               name="SignIn" 
//               component={SignInScreen} 
//               options={{ title: 'Sign In', headerShown: false }} 
//             />
//             <Stack.Screen 
//               name="SignUp" 
//               component={SignUpScreen} 
//               options={{ title: 'Sign Up', headerShown: false }} 
//             />
//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, AppRegistry } from 'react-native';
// import SignInScreen from './src/components/SignInScreen';
// import SignUpScreen from './src/components/SignUpScreen';
// import HomeScreen from './src/components/HomeScreen';
// import CharacterListScreen from './src/components/CharacterListScreen';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';

// const auth = getAuth();

// const App = () => {
//   const [currentScreen, setCurrentScreen] = useState('SignIn');
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//         setCurrentScreen('Home');
//       } else {
//         setUser(null);
//         setCurrentScreen('SignIn');
//       }
//     });

//     return unsubscribe;
//   }, []);

//   const handleLogOut = () => {
//     auth.signOut().then(() => {
//       setCurrentScreen('SignIn');
//     }).catch((error) => {
//       console.error('Sign Out Error:', error);
//     });
//   };

//   const renderScreen = () => {
//     switch (currentScreen) {
//       case 'SignIn':
//         return <SignInScreen onSignIn={() => setCurrentScreen('Home')} onNavigateToSignUp={() => setCurrentScreen('SignUp')} />;
//       case 'SignUp':
//         return <SignUpScreen onSignUp={() => setCurrentScreen('SignIn')} onNavigateToSignIn={() => setCurrentScreen('SignIn')} />;
//       case 'Home':
//         return <HomeScreen onNavigateToCharacterList={() => setCurrentScreen('CharacterList')} onLogOut={handleLogOut} />;
//       case 'CharacterList':
//         return <CharacterListScreen onNavigateBack={() => setCurrentScreen('Home')} />;
//       default:
//         return <SignInScreen onSignIn={() => setCurrentScreen('Home')} onNavigateToSignUp={() => setCurrentScreen('SignUp')} />;
//     }
//   };

//   return <View style={styles.container}>{renderScreen()}</View>;
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// // Register the main component
// AppRegistry.registerComponent('main', () => App);

// export default App;

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, AppRegistry } from 'react-native';
import SignInScreen from './src/components/SignInScreen';
import SignUpScreen from './src/components/SignUpScreen';
import HomeScreen from './src/components/HomeScreen';
import CharacterListScreen from './src/components/CharacterListScreen';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth();

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('SignIn');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setCurrentScreen('Home');
      } else {
        setUser(null);
        setCurrentScreen('SignIn');
      }
    });

    return unsubscribe;
  }, []);

  const handleLogOut = () => {
    auth.signOut().then(() => {
      setCurrentScreen('SignIn');
    }).catch((error) => {
      console.error('Sign Out Error:', error);
    });
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'SignIn':
        return <SignInScreen onSignIn={() => setCurrentScreen('Home')} onNavigateToSignUp={() => setCurrentScreen('SignUp')} />;
      case 'SignUp':
        return <SignUpScreen onSignUp={() => setCurrentScreen('SignIn')} onNavigateToSignIn={() => setCurrentScreen('SignIn')} />;
      case 'Home':
        return <HomeScreen onNavigateToCharacterList={() => setCurrentScreen('CharacterList')} onLogOut={handleLogOut} />;
      case 'CharacterList':
        return <CharacterListScreen onNavigateBack={() => setCurrentScreen('Home')} />;
      default:
        return <SignInScreen onSignIn={() => setCurrentScreen('Home')} onNavigateToSignUp={() => setCurrentScreen('SignUp')} />;
    }
  };

  return <View style={styles.container}>{renderScreen()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// Register the main component
AppRegistry.registerComponent('main', () => App);

export default App;
