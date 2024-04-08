import { StyleSheet, Text, View, FlatList,TouchableOpacity,Image } from 'react-native'
import React,{useState, useEffect} from 'react'
import { Colors, Fontsizes } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { fetchNewProduct } from '../redux/actions/newProductAction';



const ListProductNew = () => {
  const navigation = useNavigation();
  const dispatch=useDispatch();
  const listNewProduct=useSelector(state=>state.newPro.productNew);
  
useEffect(()=>{
  dispatch(fetchNewProduct());
  console.log(listNewProduct);
},[dispatch])

  return (
    <View>
      <Text style={styles.title}>Danh sách sản phẩm mới</Text>
      <FlatList 
      
        data={listNewProduct}
        horizontal
        keyExtractor={(item)=>{return item.id}}
        renderItem={({item})=>{
            return(
                <View>
                  <TouchableOpacity style={styles.item} onPress={()=>{navigation.navigate('detail', {item})}}>
                    <Image style={styles.img} source={{uri:item.imgProduct}}/>
                    <Text style={styles.text_name}>{item.nameProduct}</Text>
                    <Text>{item.priceProduct} đ</Text>
                </TouchableOpacity>
                </View>
            )
        }}
      />
    </View>
  )
}

export default ListProductNew

const styles = StyleSheet.create({
  img:{
    width:130,
    height:165,
    borderRadius:7
},
item:{
    borderWidth:1,
    borderColor:'black',
    padding:10,
    margin:7,
    borderRadius:7,
    paddingHorizontal:27
},
text_name:{
    fontSize:Fontsizes.fs_20,
    marginTop:15
},
title:{
    marginTop:30,
    fontSize:Fontsizes.fs_24,
    fontWeight:'bold'
}
})