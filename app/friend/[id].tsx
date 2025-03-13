import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

// This is the same friends data used in index.tsx
// In a real app, you might want to move this to a shared file
const friends = [
  {
    id: 1,
    name: 'Dezel Infante',
    role: 'CEO & Founder',
    bio: 'From Consolacion, A dedecated developer who owns the company.',
    profilePic: require('../../assets/images/denzel.png'),
  },
  {
    id: 2,
    name: 'Adrianne Villarta',
    role: 'Chief Technology Officer',
    bio: 'From Talisay, A tech expert who leads the development team.',
    profilePic: require('../../assets/images/villarts.png'),
  },
  {
    id: 3,
    name: 'Charls Arranchado',
    role: 'Chief Operating Officer',
    bio: 'From Liloan, A master of operations who keeps the company running smoothly.',
    profilePic: require('../../assets/images/charls.png'),
  },
  {
    id: 4,
    name: 'Adrian Medalla',
    role: 'Chief Financial Officer',
    bio: 'From Alumnos, A finance expert who keeps the company in the black.',  
    profilePic: require('../../assets/images/medalla.png'),
  },
  {
    id: 5,
    name: 'Ethelbert Nunez',
    role: 'Chief Marketing Officer',
    bio: 'From Pasil, A marketing guru who gets the word out about the company.',
    profilePic: require('../../assets/images/ethel.png'),
  }
];

export default function FriendProfile() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  
  // Find the friend with the matching ID
  const friend = friends.find(f => f.id === Number(id));
  
  if (!friend) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Friend not found</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>Go Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity 
        style={styles.backButtonContainer}
        onPress={() => router.back()}
      >
        <Text style={styles.backButton}>← Back</Text>
      </TouchableOpacity>
      
      <View style={styles.profileContainer}>
        <View style={styles.avatarPlaceholder}>
          <Image 
            source={friend.profilePic} 
            style={styles.avatarPic} 
            />
        </View>
        
        <Text style={styles.name}>{friend.name}</Text>
        <Text style={styles.role}>{friend.role}</Text>
        
        <View style={styles.infoSection}>
          <Text style={styles.bioHeading}>Bio</Text>
          <Text style={styles.bio}>{friend.bio}</Text>
        </View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    backButtonContainer: {
        padding: 16,
    },
    backButton: {
        color: '#4a90e2',
        fontSize: 16,
        fontWeight: '600',
    },
    profileContainer: {
        alignItems: 'center',
        padding: 20,
    },
    avatarPlaceholder: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#4a90e2',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        overflow: 'hidden', // Ensure the image is clipped to the placeholder's shape
    },
    avatarPic: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // Ensure the image covers the entire placeholder
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    role: {
        fontSize: 18,
        color: '#666',
        marginBottom: 20,
    },
    infoSection: {
        width: '100%',
        marginBottom: 20,
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    bioHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    bio: {
        fontSize: 16,
        lineHeight: 24,
    },
    contactHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    contactInfo: {
        fontSize: 16,
        marginBottom: 4,
    }
});