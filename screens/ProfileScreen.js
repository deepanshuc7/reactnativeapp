import { useContext } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { logout } from "../services/AuthService";
import AuthContext from '../contexts/AuthContext';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const { user, setUser } = useContext(AuthContext);

  
  const handleAppSettings = () => {
    navigation.navigate('AppSettings');
  };

  const handleUserProfile = () => {
    navigation.navigate('UserProfile');
  };

  const handleChangePassword = () => {
    navigation.navigate('ChangePassword');
  };

  // const handleLogOut = () => {
  //   // Implement log out logic here, e.g., clear auth tokens
  //   Alert.alert('Log Out', 'Are you sure you want to log out?', [
  //     {
  //       text: 'Cancel',
  //       style: 'cancel',
  //     },
  //     {
  //       text: 'Log Out',
  //       onPress: () => {
  //         // Clear user data and navigate to login screen
  //         navigation.navigate('Login');
  //       },
  //     },
  //   ]);
  // };
  async function handleLogout() {
    await logout();
    setUser(null);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileInfo}>
        <Text style={styles.subtitle}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      <View style={styles.options}>
        <TouchableOpacity style={styles.option} onPress={handleAppSettings}>
          <Text style={styles.optionText}>App Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={handleUserProfile}>
          <Text style={styles.optionText}>User Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={handleChangePassword}>
          <Text style={styles.optionText}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={handleLogout}>
          <Text style={styles.optionText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: 'gray',
  },
  options: {
    marginTop: 20,
  },
  option: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  optionText: {
    fontSize: 18,
  },
});
