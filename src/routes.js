import React, { useReducer } from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screen/Home/index';
import SignIn from './screen/SignIn/index';
import SideBar from './screen/SideBar/index';
import Benefit from './screen/Benefit/index';
import MyInsurance from './screen/Insurance/MyInsurance/index';
import Insurance from './screen/Insurance/Insurance/index';
import DetailInsurance from './screen/Insurance/Insurance/Detail';
import Basket from './screen/Insurance/Basket/index';
import Salary from './screen/Salary/SalaryList/index';
import DetailSalary from './screen/Salary/DetailSalary/index';
import SuccessConfirmation from './screen/Confirmation/Success';
import FailedConfirmation from './screen/Confirmation/Failed';
import VerificationNumber from './screen/Register/Verification';
import RegisterForm from './screen/Register/Form';
import MyProfile from './screen/Profile/MyProfile';
import EditProfile from './screen/Profile/EditProfile';
import EditIdCard from './screen/Profile/EditIdCard';
import ImagePreviewProfile from './screen/Profile/ImagePreview/ProfilePicture';
import imagePreviewIdCard from './screen/Profile/ImagePreview/IdCard';
import BadgeComponents from './components/Bagde';
import TransactionList from './screen/TransactionList';
import { createDrawerNavigator } from 'react-navigation-drawer';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerShown: false,
      },
    },
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        headerShown: false,
      },
    },
    SideBar: {
      screen: SideBar,
      navigationOptions: {
        headerShown: false,
      },
    },
    Benefit: {
      screen: Benefit,
      navigationOptions: {
        headerTitle: 'Benefits Untuk Kamu',
        headerTitleStyle: { alignSelf: 'center' },
        headerRight: () => (
          <View style={{ display: 'none' }}>
            <Text></Text>
          </View>
        )
      },
    },
    MyInsurance: {
      screen: MyInsurance,
      navigationOptions: {
        headerTitle: 'Katalog Asuransi Saya',
        headerTitleStyle: { alignSelf: 'center' },
        headerRight: () => (
          <View style={{ display: 'none' }}>
            <Text></Text>
          </View>
        )
      },
    },
    DetailInsurance: {
      screen: DetailInsurance,
      navigationOptions:({navigation}) => ({
        headerTitle: 'Detail Asuransi',
        headerTitleStyle: { textAlign: 'center' },
        headerRight: () => (
          <View>
            <TouchableOpacity style={{ textAlign: 'center', marginRight: 30 }} onPress={() => navigation.navigate('Basket')}>
              <View style={{ flexDirection: 'row', width: 19, height: 26 }}>
                <Image
                  style={{ width: 19, height: 26 }}
                  source={require('./assets/icon/shopping_bag.png')}
                />
                <BadgeComponents />
              </View>
            </TouchableOpacity>
          </View>
        ),
        animationEnabled: false,
      }),
    },
    Basket: {
      screen: Basket,
      navigationOptions: {
        headerTitle: 'Detail Pembelian Asuransi',
        headerTitleStyle: { alignSelf: 'center' },
        headerRight: () => (
          <View style={{ display: 'none' }}>
            <Text></Text>
          </View>
        )
      },
    },
    TransactionList: {
      screen: TransactionList,
      navigationOptions: {
        headerTitle: 'Daftar Transaksi',
        headerTitleStyle: { alignSelf: 'center' },
        headerRight: () => (
          <View style={{ display: 'none' }}>
            <Text></Text>
          </View>
        )
      },
    },
    Insurance: {
      screen: Insurance,
      navigationOptions:({navigation}) => ({
        headerTitle: 'Asuransi',
        headerTitleStyle: { textAlign: 'center' },
        headerRight: () => (
          <View style={{ flex: 1, flexDirection: 'row', width: 100, marginTop: 15 }}>
            <TouchableOpacity style={{ textAlign: 'center', marginRight: 30 }} onPress={() => navigation.navigate('Basket')}>
              <View style={{ flexDirection: 'row', width: 19, height: 26 }}>
                <Image
                  style={{ width: 19, height: 26 }}
                  source={require('./assets/icon/shopping_bag.png')}
                />
                <BadgeComponents />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('TransactionList')}>
              <Image
                style={{ width: 19, height: 26  }}
                source={require('./assets/icon/clipboard.png')}
              />
            </TouchableOpacity>
          </View>
        ),
        animationEnabled: false,
      }),
    },
    Salary: {
      screen: Salary,
      navigationOptions: {
        headerTitle: 'Slip Gaji Saya',
        headerTitleStyle: { alignSelf: 'center' },
        headerRight: () => (
          <View style={{ display: 'none' }}>
            <Text></Text>
          </View>
        )
      },
    },
    DetailSalary: {
      screen: DetailSalary,
      navigationOptions:({ navigation }) => ({
        headerTitle: () => (
          <View style={{ alignSelf: 'center' }}>
            <Text style={{ textAlign: 'center', color: '#000000', fontSize: 16, fontWeight: 'bold' }}>Detail Slip Gaji</Text>
            <Text style={{ textAlign: 'center', color: '#000000', fontSize: 16, fontWeight: 'bold' }}>Periode { navigation.state.params.slip.periode }</Text>
          </View>
        ),
        headerTitleStyle: { alignSelf: 'center' },
        headerRight: () => (
          <View style={{ display: 'none' }}>
            <Text></Text>
          </View>
        )
      }),
    },
    SuccessConfirmation: {
      screen: SuccessConfirmation,
      navigationOptions: {
        headerShown: false,
      },
    },
    FailedConfirmation: {
      screen: FailedConfirmation,
      navigationOptions: {
        headerShown: false,
      },
    },
    VerificationNumber: {
      screen: VerificationNumber,
      navigationOptions: {
        headerTitle: 'Verifikasi',
        headerTitleStyle: { color: '#ffffff', alignSelf: 'center' },
        headerStyle: { backgroundColor: '#159146' },
        headerTintColor: '#ffffff',
        headerRight: () => (
          <View style={{ display: 'none' }}>
            <Text></Text>
          </View>
        )
      },
    },
    RegisterForm: {
      screen: RegisterForm,
      navigationOptions: {
        headerShown: false,
      },
    },
    MyProfile: {
      screen: MyProfile,
      navigationOptions: {
        headerTitle: 'Akun Saya',
        headerTitleStyle: { alignSelf: 'center' },
        headerRight: () => (
          <View style={{ display: 'none' }}>
            <Text></Text>
          </View>
        )
      },
    },
    EditProfile: {
      screen: EditProfile,
      navigationOptions: {
        headerTitle: 'Ubah Data Diri',
        headerTitleStyle: { alignSelf: 'center' },
        headerRight: () => (
          <View style={{ display: 'none' }}>
            <Text></Text>
          </View>
        )
      },
    },
    ImagePreviewProfile: {
      screen: ImagePreviewProfile,
      navigationOptions: {
        headerTitle: 'Pilih Gambar',
        headerTitleStyle: { alignSelf: 'center' },
        headerRight: () => (
          <View style={{ display: 'none' }}>
            <Text></Text>
          </View>
        )
      },
    },
    imagePreviewIdCard: {
      screen: imagePreviewIdCard,
      navigationOptions: {
        headerTitle: 'Pilih Gambar',
        headerTitleStyle: { alignSelf: 'center' },
        headerRight: () => (
          <View style={{ display: 'none' }}>
            <Text></Text>
          </View>
        )
      },
    },
    EditIdCard: {
      screen: EditIdCard,
      navigationOptions: {
        headerTitle: 'Ubah Upload ID',
        headerTitleStyle: { alignSelf: 'center' },
        headerRight: () => (
          <View style={{ display: 'none' }}>
            <Text></Text>
          </View>
        )
      },
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: props => <SideBar {...props} />,
    drawerBackgroundColor: 'none',
  },
);

const Drawer = createDrawerNavigator({
  AppNavigator: {
    name: 'AppNavigator',
    screen: AppNavigator,
  },
},
{
  contentComponent: props => <SideBar {...props} />,
  drawerBackgroundColor: 'none',
});

export default createAppContainer(Drawer);
