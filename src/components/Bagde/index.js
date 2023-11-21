import React from 'react';
import { View } from 'react-native';
import { Badge } from 'react-native-elements';
import { connect } from 'react-redux';

class BadgeComponents extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <View>
                {this.props.users.basket.length > 0 ?
                    <Badge
                        value={this.props.users.basket.length}
                        status="error"
                        containerStyle={{ top: -4, marginLeft: -7 }}
                    />
                    : <View></View>}
            </View >
        );
    }
}


const mapStateToProps = (state) => {
    return { users: state.user };
}

export default connect(mapStateToProps)(BadgeComponents);