import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { Content, Text, List, ListItem } from "native-base";
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import styles from './style';

class SideBar extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
          routes: [
            {
              name: "Home",
              icon: require('./../../assets/icon/home.png'),
              link: 'Home'
            },
            {
              name: "Benefit",
              icon: require('./../../assets/icon/category.png'),
              link: 'Benefit'
            },
            {
              name: "Slip Gaji",
              icon: require('./../../assets/icon/quote.png'),
              link: 'Salary'
            },
            {
              name: "Settings",
              icon: require('./../../assets/icon/settings.png'),
              link: 'MyProfile'
            }]
        };
    }

  getAction = (data) => {
    if (data === 'Home') {
      this.props.navigation.navigate(data);
    } else {
      if (this.props.users.isSignIn) {
        this.props.navigation.navigate(data);
      } else {
        alert('You must login first');
      }
    }
    this.props.navigation.closeDrawer();
  }

  render() {
    return (
      <LinearGradient colors={['#176F2F', '#159146']} style={styles.content}>
        <Content>
          <View style={styles.sidebar}>
            <View style={styles.profile}>
              <View style={styles.headSideBar}>
                <Image
                  source={require('./../../assets/img/profile_user.png')}
                  style={styles.imgProfile}
                />
              </View>
              <TouchableOpacity
                activeOpacity={1}
                style={{ borderRightWidth: 3, borderRightColor: '#B4D349', height: 80, paddingHorizontal: 30 }}
                onPress={() => this.props.navigation.closeDrawer()}
              >
                <Text numberOfLines={1} style={styles.nameTitle}>{this.props.users.name ? this.props.users.name : 'Nama Kamu'}</Text>
                <Text numberOfLines={1} style={styles.nameEmail}>{this.props.users.email ? this.props.users.email : 'Email kantor kamu'}</Text>
              </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 20 }}>
              {this.state.routes.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => this.getAction(item.link)}
                    style={{ flex: 1, flexDirection: 'row', padding: 15 }}
                    key={index}
                  >
                    <Image
                      source={item.icon}
                      style={{ width: 20, height: 20, marginRight: 20 }}
                    />
                    <Text style={styles.menuList}>{item.name}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            </View>
        </Content>
      </LinearGradient>
    );
  }
}

const mapStateToProps = (state) => {
    return { users: state.user };
}

export default connect(mapStateToProps)(SideBar);