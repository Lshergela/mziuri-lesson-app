import { useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductCard from '../components/product-card';
import { styles } from '../styles/index.styles';

const PRODUCTS = [
  {
    id: 1,
    product_name: 'Iphone 15',
    amount: 1500,
    in_stock: true,
  },
  {
    id: 2,
    product_name: 'Iphone 16',
    amount: 2000,
    in_stock: false,
  },
  {
    id: 3,
    product_name: 'Samsung S25',
    amount: 1900,
    in_stock: true,
  },
  {
    id: 4,
    product_name: 'Lenovo 15',
    amount: 2500,
    in_stock: false,
  },
  {
    id: 5,
    product_name: 'Macbook Pro',
    amount: 3000,
    in_stock: true,
  },
];

export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Products</Text>
      <View style={styles.box1}>
        <FlatList
          data={PRODUCTS}
          renderItem={({ item }) => <ProductCard product={item} />}
          keyExtractor={(item) => item.id}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      </View>
      <View style={styles.box2}>
        <ScrollView style={{ backgroundColor: 'pink' }}>
          <Text style={{ fontSize: 30 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
