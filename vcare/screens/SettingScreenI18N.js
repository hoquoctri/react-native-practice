import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';

class SettingScreenI18N extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
            <Text>This is Setting screen</Text>
        </View>
    }
}

export default SettingScreenI18N;