import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, Image } from 'react-native';
import { Button, Container, Content, ListItem, CheckBox, Body } from 'native-base';
import { Overlay } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from "react-native-raw-bottom-sheet";
import styles from './style';
import Card from '../../../components/Insurance/Insurance/index';
import Recomended from '../../../components/Insurance/RecomendedCard/index';
import { Badge } from 'react-native-elements';
import { connect } from 'react-redux';

class Insurance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            health: true,
            modalVisible: false,
            list: [],
            doubleClaim: false,
            doubleClaim: false,
            noCheckHealth: false,
            checkBoxColor: '#c8c8c8',
            checkBoxColorActive: '#159146',
            healthList: [],
            lifeList: [],
            errorFilter: '',
            position: 0,
            buttonFilter: true,
            statusBar: true,
            filterCount: 0
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.scrollView.scrollTo({x: 0, y: this.state.position, animated: true})
        }, 5000);
        this.getList(this.state.health);
    }

    _onLayout = ({ nativeEvent }) => {
        this.setState({ buttonFilter: nativeEvent.contentOffset.y ? Math.sign(nativeEvent.contentOffset.y): 0 >  Math.sign(nativeEvent.layoutMeasurement.height) ? false : true });
    };

    getList = (val) => {
        this.setState({ list: val ? this.props.insuranceList.health : this.props.insuranceList.life, health: val, noCash: false, noCheckHealth: false, doubleClaim: false })
    }

    getAction = (val, type) => {
        if (type === 'basket') {
            let data = this.props.users;
            // if (data.basket.length === 0) {
            //     data.basket.push(val);
            //     this.props.onTodoClick(data);
            //     this.props.navigation.push('Insurance');
            //     this.setModalVisible(true);
            // } else {
            //     Alert.alert("Failed", "Hanya dapat menambahkan 1 items untuk 1 kali transaksi");
            // }
            data.basket.push(val);
                this.props.onTodoClick(data);
                this.props.navigation.push('Insurance');
                this.setModalVisible(true);
        } else {
            this.props.navigation.navigate('DetailInsurance', { data: val });
        }
    }

    backToList = () => {
        this.setModalVisible(false);
        this.props.navigation.push('Insurance');
    }

    goToBasket = () => {
        this.setModalVisible(false);
        this.props.navigation.navigate('Basket');
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    removeFilter(val) {
        var count = this.state.filterCount;
        if (val === 'doubleClaim') {
            count = count - 1;
            this.setState(
                { doubleClaim: !this.state.doubleClaim },
                () => {                       
                    this.filterSearch();
                }
            );
        }
        if (val === 'noCash') {
            count = count - 1;
            this.setState(
                { noCash: !this.state.noCash },
                () => {
                    this.filterSearch();
                }
            );
        }
        if (val === 'noCheckHealth') {
            count = count - 1;
            this.setState(
                { noCheckHealth: !this.state.noCheckHealth },
                () => {
                    this.filterSearch();
                }
            );
        }
        this.setState({ filterCount: count });
    }
    
    filterSearch = () => {
        var data = this.state.health ? this.props.insuranceList.health : this.props.insuranceList.life;
        if (this.state.noCash || this.state.doubleClaim || this.state.noCheckHealth) {
            if (this.state.doubleClaim) {
                data = data.filter(e => e.doubleClaim);
            }
            if (this.state.noCash) {
                data = data.filter(e => e.noCash);
            }
            if (this.state.noCheckHealth) {
                data = data.filter(e => e.noCheckHealth);
            }
            this.setState({ errorFilter: '', list: data });
            this.RBSheet.close();
        } else {
            this.setState({
                errorFilter: 'Setidaknya pilih 1 filter produk diatas, untuk membatalkan penggunaan filter kamu bisa  geser pilhan filter kebawah',
                list: data
            })
        }
    }
    
    render() {
        return (
            <Container>
                <Content contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
                    <ScrollView showsVerticalScrollIndicator={false} ref={(ref) => this.scrollView = ref} onScroll={this._onLayout}>
                        <View style={styles.InsurancePage}>
                            {this.state.statusBar ?
                                <View style={styles.profileStatus}>
                                    <View style={styles.leftContent}>
                                        <Text style={styles.textTitle}>Dana Asuransiku</Text>
                                    </View>
                                    <View style={styles.rightContent}>
                                        <Text>Tersedia</Text>
                                        <Text style={styles.textPrice}>Rp 10,000,000 / tahun</Text>
                                    </View>
                                </View>
                            : <View></View>}
                            <Recomended insuranceRecomended={this.props.insuranceRecomended} />
                        </View>
                        <View style={styles.boxList}>
                            <View>
                                <Text style={styles.InsurancePakacge}>Temukan Paket Asuransi Terbaik</Text>
                                <View style={styles.InsuranceType}>
                                    <View style={styles.buttonSpace}>
                                        <TouchableOpacity style={!this.state.health ? styles.buttonTypeActive : styles.buttonType} onPress={() => this.getList(false)}>
                                            <Text style={!this.state.health ? styles.textTypeActive: styles.textType}>Jiwa</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flex: 0.1 }}></View>
                                    <View style={styles.buttonSpace}>
                                        <TouchableOpacity style={this.state.health ? styles.buttonTypeActive : styles.buttonType}>
                                            <Text style={this.state.health ? styles.textTypeActive: styles.textType} onPress={() => this.getList(true)}>Kesehatan</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                                    {this.state.noCash ?
                                        <TouchableOpacity onPress={() => this.removeFilter('noCash')}>
                                            <View style={styles.filterStatus}>
                                                <Text style={styles.textFilterStatus}>Tanpa Uang Tunai</Text>
                                                <Text style={styles.closeStatus}>X</Text>
                                            </View>
                                        </TouchableOpacity>
                                    : <View></View>
                                    }
                                    {this.state.doubleClaim ?
                                        <TouchableOpacity onPress={() => this.removeFilter('doubleClaim')}>
                                            <View style={styles.filterStatus}>
                                                <Text style={styles.textFilterStatus}>Double Klaim</Text>
                                            <Text style={styles.closeStatus}>X</Text>
                                        </View>
                                        </TouchableOpacity>
                                        : <View></View>
                                    }
                                    {this.state.noCheckHealth ?
                                        <TouchableOpacity onPress={() => this.removeFilter('noCheckHealth')}>
                                            <View style={styles.filterStatus}>
                                                <Text style={styles.textFilterStatus}>Tanpa Pemeriksaan Kesehatan</Text>
                                                <Text style={styles.closeStatus}>X</Text>
                                            </View>
                                        </TouchableOpacity>
                                    : <View></View>
                                    }
                                </ScrollView>
                            </View>
                            <Card insuranceList={this.state.list} onChange={this.getAction} />
                        </View>
                        <View>
                            <Overlay isVisible={this.state.modalVisible} overlayStyle={{ backgroundColor: 'transparent' }}>
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <Image
                                            style={{ width: 48, height: 56, marginBottom: 20, alignSelf: 'center' }}
                                            source={require('../../../assets/icon/shop_icon.png')}
                                        />
                                        <Text style={{ color: '#333333', fontSize: 18, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' }}>Tambah Produk Sukses </Text>
                                            <Text style={styles.modalText}>Kamu telah berhasil menambahkan produk ke keranjang</Text>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Button onPress={() => this.backToList()} style={styles.btnModalList}>
                                                <Text style={styles.textModalList}>+ Product Lainnya</Text>
                                            </Button>
                                            <Button onPress={() => this.goToBasket()} style={styles.btnModalBasket}>
                                                <Text style={styles.textModalBasket}>Cek Keranjang</Text>
                                            </Button>
                                        </View>
                                    </View>
                                </View>
                            </Overlay>
                        </View>
                    </ScrollView>
                    {this.state.buttonFilter ?
                        <TouchableOpacity activeOpacity={1} onPress={() => this.RBSheet.open()} style={styles.buttonFilter}>
                            <Image
                                style={{ width: 40, height: 40 }}
                                source={require('../../../assets/icon/filter.png')}
                            />
                            <Text style={styles.textFilter}>Filter</Text>
                            {this.state.filterCount > 0 ? 
                                <Badge
                                    value={this.state.filterCount}
                                    status="error"
                                    containerStyle={{ marginLeft: -7, alignSelf: 'center' }}
                                />
                                :
                                <View></View>}
                        </TouchableOpacity>
                    : <View></View>}
                    <RBSheet
                        ref={ref => {
                            this.RBSheet = ref;
                        }}
                        height={350}
                        closeOnDragDown={true}
                        customStyles={{
                            container: {
                                backgroundColor: '#ffffff',
                                borderTopLeftRadius: 40,
                                borderTopRightRadius: 40,
                            },
                            wrapper: {
                                backgroundColor: 'rgba(52, 52, 52, 0.8)',
                            },
                            draggableIcon: {
                                backgroundColor: '#B8B8B8',
                                width: 80
                            }
                        }}
                    >
                        <View style={{ paddingVertical: 10, paddingHorizontal: 30, alignContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#333333', fontSize: 20 }}>Filter Produk Asuransi</Text>
                            <View style={{ width: '100%', marginVertical: 20 }}>
                                <ListItem
                                    style={{
                                        borderBottomWidth: 0,
                                    }}
                                    onPress={() => this.setState({ noCash: !this.state.noCash, filterCount: !this.state.noCash ? this.state.filterCount + 1 : this.state.filterCount -1 })}
                                >
                                    <CheckBox checked={true} color={this.state.noCash ? this.state.checkBoxColorActive: this.state.checkBoxColor} />
                                    <Body>
                                        <Text style={{ marginLeft: 10 }}>Tanpa uang tunai</Text>
                                    </Body>
                                </ListItem>
                                <ListItem
                                    style={{
                                        borderBottomWidth: 0,
                                    }}
                                    onPress={() => this.setState({ doubleClaim: !this.state.doubleClaim, filterCount: !this.state.doubleClaim ? this.state.filterCount + 1 : this.state.filterCount -1 })}
                                >
                                    <CheckBox checked={true} color={this.state.doubleClaim ? this.state.checkBoxColorActive: this.state.checkBoxColor} />
                                    <Body>
                                        <Text style={{ marginLeft: 10 }}>Double klaim</Text>
                                    </Body>
                                </ListItem>
                                <ListItem
                                    style={{
                                        borderBottomWidth: 0,
                                    }}
                                    onPress={() => this.setState({ noCheckHealth: !this.state.noCheckHealth, filterCount: !this.state.noCheckHealth ? this.state.filterCount + 1 : this.state.filterCount -1 })}
                                >
                                    <CheckBox checked={true} color={this.state.noCheckHealth ? this.state.checkBoxColorActive: this.state.checkBoxColor} />
                                    <Body>
                                        <Text style={{ marginLeft: 10 }}>Tanpa pemeriksaan kesehatan</Text>
                                    </Body>
                                </ListItem>
                                <Text style={{ color: '#f37a73', fontSize: 12 }}>{this.state.errorFilter}</Text>
                            </View>
                            <View style={styles.btnForm}>
                                <TouchableOpacity onPress={() => this.filterSearch()} activeOpacity={0.8}>
                                    <LinearGradient colors={['#159146', '#159146']} style={styles.btnSignIn}>
                                        <Text style={styles.btnName}>Terapkan</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </RBSheet>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        insuranceList: state.insurance,
        insuranceRecomended: state.insuranceRecomended,
        users: state.user
    };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (user) => {
      dispatch({ type: 'SET_USER', input: user });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Insurance);