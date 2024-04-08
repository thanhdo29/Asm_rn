import { Image, StyleSheet, Text, View, StatusBar, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon1 from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import { addFavouriteProductApi } from '../redux/actions/favouriteProductAction';

const DetailProductScreen = ({route}) => {

  const { id, nameProduct, priceProduct, imgProduct, describeProduct, quantity, companyProduct } = route.params.item;
  const listFavourite=useSelector(state=>state.favourite.productFavourite);
  const dispatch=useDispatch();

  const doFavourite=()=>{{
    dispatch(addFavouriteProductApi({
      "id":id,
      "nameProduct":nameProduct,
      "imgProduct":imgProduct,
      "describeProduct":describeProduct,
      "quantity":quantity,
      "companyProduct":companyProduct
    }))
  }}

  

  return (
    <ScrollView style={styles.container}>
      <StatusBar translucent={true} backgroundColor='transparent' />
      <TouchableOpacity style={styles.iconContainer} onPress={() => doFavourite()}>
        <Icon1 name={'heart'} size={30} color={'red'} />
      </TouchableOpacity>
      <Image style={styles.img} source={{ uri: imgProduct }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{nameProduct}</Text>
        <Text style={styles.price}>{priceProduct} đ</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Mô tả:</Text>
          <Text style={styles.text}>{describeProduct}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Số lượng:</Text>
          <Text style={styles.text}>{quantity}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Hãng:</Text>
          <Text style={styles.text}>{companyProduct}</Text>
        </View>

        

       

        {/* <FlatList
          data={dataViewed}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.viewedItemContainer}>
              <Image style={styles.viewedItemImage} source={{ uri: item.imgProduct }} />
              <Text style={styles.viewedItemName}>{item.nameProduct}</Text>
            </View>
          )}
          horizontal
        /> */}
      </View>
    </ScrollView>
  )
}

export default DetailProductScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    height: 620,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 20,
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
    width: 100,
  },
  text: {
    flex: 1,
    fontSize: 16,
  },
  iconContainer: {
    position: 'absolute',
    top: 35,
    right: 10,
    zIndex: 1,
  },
  viewedItemContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  viewedItemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  viewedItemName: {
    textAlign: 'center',
  },
  commentContainer: {
    marginHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 50
  },
  commentText: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  comment: {
    fontSize: 16,
  }
})