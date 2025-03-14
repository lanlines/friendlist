import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const friends = [
  {
    id: 1,
    name: 'Dezel Infante',
    role: 'CEO & Founder',
    profilePic: require('../assets/images/denzel.png'),
  },
  {
    id: 2,
    name: 'Adrianne Villarta',
    role: 'Chief Technology Officer',
    profilePic: require('../assets/images/villarts.png'),
  },
  {
    id: 3,
    name: 'Charls Arranchado',
    role: 'Chief Operating Officer',
    profilePic: require('../assets/images/charls.png'),
  },
  {
    id: 4,
    name: 'Adrian Medalla',
    role: 'Chief Financial Officer',
    profilePic: require('../assets/images/medalla.png'),
  },
  {
    id: 5,
    name: 'Ethelbert Nunez',
    role: 'Chief Marketing Officer',
    profilePic: require('../assets/images/ethel.png'),
  },
];

export default function Index() {
  const router = useRouter();
  
  const showProfile = (id: number) => {
    router.push(`/friend/${id}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Meet my Team</Text>
        </View>

        {/* friends list */}
        <View style={styles.listContainer}>
          {friends.map(friend => (
            <TouchableOpacity 
              key={friend.id} 
              style={styles.friendItem}
              onPress={() => showProfile(friend.id)}
            >
              <View style={styles.imageContainer}>
                <Image 
                  source={friend.profilePic} 
                  style={styles.profileImage} 
                />
              </View>
              <View style={styles.friendInfo}>
                <Text style={styles.friendName}>{friend.name}</Text>
                <Text style={styles.friendRole}>{friend.role}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#4a90e2',
    padding: 30,
    width: '100%',
    borderRadius: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  listContainer: {
    padding: 16,
  },
  friendItem: {
    padding: 56,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  imageContainer: {
    shadowColor: '#f0f0f0',
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginRight: 16,
  },
  profileImage: {
    width: 90,
    height: 140,
    borderRadius: 5,
    // borderWidth: 1,
    // borderColor: '#f0f0f0',
    // Left shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  friendInfo: {
    flex: 1,
  },
  friendName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  friendRole: {
    color: '#666',
    marginTop: 4,
  }
});