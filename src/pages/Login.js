import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import styles from '../config/styles';
import { SocialIcon, Input, Icon } from 'react-native-elements';

export default class Login extends React.PureComponent {

    render() {
        return (
            <View style={styles.viewCard}>
                <View style={{flex:0.4, alignItems:'center', justifyContent:'center'}}>
                    <Icon
                        raised
                        name='info-circle'
                        type='font-awesome'
                        color='#f50'
                        size={30}
                        onPress={() => console.log('hello')} />
                </View>
                <View style={{ flex: 0.6, backgroundColor:'gray', borderWidth:2, borderTopStartRadius:30, borderTopEndRadius:30}}>
                    <SocialIcon
                        title='Entrar com Facebook'
                        button
                        type='facebook'
                    />
                    <SocialIcon
                        title='Entrar com Gmail       '
                        button
                        type='google'
                    />
                    <SocialIcon
                        title='Entrar com e-mail       '
                        button
                        type='envelope'
                    />
                
                <View style={{flex:1, alignItems:'center'}}>
                <Text>Não tem conta? Cadastre-se</Text>
                </View>

                </View>
                
            </View>
        );
    }
}