import { Formik } from 'formik';
import { useState } from 'react';
import {
  FlatList,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as z from 'zod';
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

const ProductValidation = z.object({
  productName: z.string('Product Name is Required'),
  price: z.number('Price is Required'),
  inStock: z.boolean('In Stock is Required'),
});

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
      <View style={styles.box1}>
        <Formik
          initialValues={{
            productName: '',
            price: 0,
            inStock: false,
          }}
          onSubmit={(values) => console.log(values)}
        >
          {({
            handleChange,
            values,
            errors,
            handleSubmit,
            touched,
            handleBlur,
            setFieldValue,
          }) => (
            <View
              style={{
                width: '100%',
                flex: 1,
                paddingHorizontal: 10,
                justifyContent: 'center',
              }}
            >
              <TextInput
                placeholder="Product Name"
                style={{
                  borderColor: 'black',
                  borderWidth: 1,
                  borderRadius: 8,
                  marginBottom: 8,
                }}
                value={values.productName}
                onChangeText={(text) => setFieldValue('productName', text)}
              />
              {errors.productName && (
                <Text style={{ color: 'red' }}>{errors.productName}</Text>
              )}

              <TextInput
                placeholder="Product Price"
                style={{
                  borderColor: 'black',
                  borderWidth: 1,
                  borderRadius: 8,
                  marginBottom: 8,
                }}
                keyboardType="number-pad"
                value={values.price}
                onChangeText={(text) => setFieldValue('price', Number(text))}
              />
              {errors.price && (
                <Text style={{ color: 'red' }}>{errors.price}</Text>
              )}

              <View
                style={{
                  marginVertical: 8,
                  alignItems: 'flex-start',
                }}
              >
                <Text>Product In Stock</Text>
                <Switch
                  value={values.inStock}
                  onValueChange={(value) => setFieldValue('inStock', value)}
                />
                {errors.inStock && (
                  <Text style={{ color: 'red' }}>{errors.inStock}</Text>
                )}
              </View>

              <TouchableOpacity
                activeOpacity={0.65}
                style={{
                  width: '100%',
                  backgroundColor: 'green',
                  padding: 8,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={handleSubmit}
              >
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 600 }}>
                  Create Product
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
      <Text style={styles.text}>Products</Text>
      <View style={styles.box2}>
        <FlatList
          data={PRODUCTS}
          renderItem={({ item }) => <ProductCard product={item} />}
          keyExtractor={(item) => item.id}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      </View>
    </SafeAreaView>
  );
}
