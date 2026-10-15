import { ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/index.styles';

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Hello</Text>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={{ flex: 0.3 }}>
          <ScrollView style={{ backgroundColor: 'pink' }}>
            <Text style={{ fontSize: 30 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
