import { useContext } from 'react';
import { SafeAreaView, View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import AuthContext from '../contexts/AuthContext';
import Card from '../components/Card';
// import { useTheme } from '../contexts/ThemeContext';
// import { lightTheme, darkTheme } from '../styles/themes';

export default function HomeScreen() {
  const { user, setUser } = useContext(AuthContext);
  // const { isDarkTheme } = useTheme();
  // const theme = isDarkTheme ? darkTheme : lightTheme;

  const cards = [
    {
      id: '1',
      title: 'Steps',
      description: '43 minutes',
      
    },
    {
      id: '2',
      title: 'Steps',
      description: 'This is a description for the second card.',
     
    },
    {
      id: '3',
      title: 'Heart Rate and Temperature',
      description: 'This is a description for the third card.',
      
    },
    {
      id: '4',
      title: 'Reminders for today',
      description: 'This is a description for the third card.',
     
    },
   
  ];

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'top', alignItems: 'center' , margin: 8}}>
      <Text>Welcome home, {user.name}</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {cards.map(card => (
          <View key={card.id} style={styles.cardWrapper}>
          <Card
            title={card.title}
            description={card.description}
            onPress={() => {
              console.log('Card pressed:', card.title);
            }}
          />
        </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // paddingHorizontal: 8,
    // alignContent: 'center',
    // alignItems: 'center'
    
  },
  scrollContainer: {
    // padding: 8,
    paddingVertical: 8,
    paddingHorizontal: 8,
    // width: "100%",
    // paddingVertical: 8
    // alignContent: 'center',
    // alignItems: 'center'
  },
  cardWrapper: {
    marginBottom: 16, 
  },
});

