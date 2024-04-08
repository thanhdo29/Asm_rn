import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFavouriteProductApi, deleteFavouriteProductApi, updateFavouriteProductApi, fetchFavouriteProduct } from '../redux/actions/favouriteProductAction'
import { FlatList } from 'react-native-gesture-handler'

const FavouriteScreen = () => {
  const dispatch = useDispatch();
  const listFavouriteProduct = useSelector(state => state.favourite.productFavourite);

  useEffect(() => {
    dispatch(fetchFavouriteProduct());
    console.log(listFavouriteProduct);
  }, [dispatch])

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem} >
      <Image style={styles.productImage} source={{ uri: item.imgProduct }} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.nameProduct}</Text>
        <Text style={styles.productPrice}>{item.priceProduct} đ</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách sản phẩm yêu thích</Text>
      <FlatList
        data={listFavouriteProduct}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
      />
    </View>
  )
}

export default FavouriteScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productList: {
    paddingBottom: 20,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
  },
})
