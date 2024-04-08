import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Colors, Fontsizes } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { fetchHotProduct } from '../redux/actions/hotProductAction';

const ListProductViewed = () => {
   
    const navigation = useNavigation();
    const dispatch=useDispatch();
    const listProduct=useSelector(state=>state.hot.productHot);
    useEffect(()=>{
        dispatch(fetchHotProduct())
    },[dispatch])

    const renderList=()=>{
        return(
            <FlatList
            horizontal
            data={listProduct.filter(item => item.viewed === true)}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Image style={styles.img} source={{ uri: item.imgProduct }} />
                    <Text style={styles.text_name}>{item.nameProduct}</Text>
                    <Text>{item.priceProduct} đ</Text>
                </View>
            )}
            keyExtractor={item => item.id}
        />
        )
    }
    return (
        <View>
            <Text style={styles.title}>Danh sách sản phẩm đã xem</Text>
            {renderList()}
            
        </View>
    )
}

export default ListProductViewed

const styles = StyleSheet.create({
    img: {
        width: 130,
        height: 165,
        borderRadius: 7
    },
    item: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 7,
        borderRadius: 7,
        paddingHorizontal: 27
    },
    text_name: {
        fontSize: Fontsizes.fs_20,
        marginTop: 15
    },
    title: {
        marginTop: 30,
        fontSize: Fontsizes.fs_24,
        fontWeight: 'bold'
    }
})