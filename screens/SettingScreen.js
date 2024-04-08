import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomEditText from '../components/CustomEditText';
import { Colors,Fontsizes } from '../constants';

const SettingScreen = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const doLogout = () => {
        Alert.alert('Thông báo', 'Bạn có chắc chắn muốn đăng xuất không?', [

            {
                text: 'Không',

            },
            {
                text: 'Có',
                onPress: () => { navigation.navigate('login') }
            },
        ])
    }

    const doChangePass = () => {
        setModalVisible(true)
    }
    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Thông tin cá nhân</Text>
                <View style={styles.infoItem}>
                    <Text>Họ và tên: Đỗ Tuấn Thành</Text>
                    <Text>Mã sinh viên: PH34899</Text>
                    <Text>Lớp: MD18306</Text>
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Thông tin điện thoại di động</Text>
                <View style={styles.infoItem}>
                    <Text>Loại điện thoại: iPhone 12</Text>
                    <Text>Cấu hình: CPU Quad-core, RAM 4GB, Bộ nhớ trong 128GB</Text>
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Cài đặt riêng</Text>
                <TouchableOpacity style={styles.settingItem} onPress={() => {

                }}>
                    <Text>Đổi chủ đề</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingItem} onPress={() => { doLogout() }}>
                    <Text>Đăng xuất</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingItem} onPress={() => doChangePass()}>
                    <Text>Đổi mật khẩu</Text>
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={{fontSize:30, fontWeight:'bold', marginBottom:23}}>Đổi mật khẩu</Text>
                            <CustomEditText placeholder='Mật khẩu cũ' />
                            <CustomEditText placeholder='Mật khẩu mới' />
                            <CustomEditText placeholder='Nhập lại mật khẩu mới' />
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.text_btn}>Xác nhận</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    infoItem: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
    },
    settingItem: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 22,
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    btn: {
        backgroundColor: Colors.blue,
        borderRadius: 7,
        paddingVertical: 10,
        paddingHorizontal: 50,
        marginTop: 12
    
      },
      text_btn: {
        color: Colors.white,
        alignItems: 'center',
        fontSize: Fontsizes.fs_16
      }
});


export default SettingScreen;
