import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Fontsizes } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { addHotProductApi, fetchHotProduct, updateHotProductApi } from '../redux/actions/hotProductAction';


const ListProductHot = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const listHotProduct = useSelector(state => state.hot.productHot);

    useEffect(() => {
        dispatch(fetchHotProduct());
        console.log(listHotProduct);
    }, [dispatch])

    const handlePress = (item) => {
        const updateItem = { ...item, viewed: !item.viewed };
        dispatch(updateHotProductApi(updateItem));
        navigation.navigate('detail', { item });
    }


    return (
        <View>
            <Text style={styles.title}>Danh sách sản phẩm hot</Text>
            <FlatList
                data={listHotProduct}
                horizontal
                keyExtractor={(item) => { return item.id }}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
                                <Image style={styles.img} source={{ uri: item.imgProduct }} />
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

export default ListProductHot;

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
});
