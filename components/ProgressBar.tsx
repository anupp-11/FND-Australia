import { Platform, ProgressBarAndroid, ProgressViewIOS, View, StyleSheet } from 'react-native';
import * as React from "react";
import { PRIMARY_COLOR } from '../constants/Colors';
import * as Progress from 'react-native-progress';

export default class AppProgressBar extends React.Component {

    render() {

        if (Platform.OS == "ios") {
            return (
                <View>
                    
                    <Progress.Bar indeterminate={true} />
                   
                </View>

            );
        } else {

            return (
                <View>
                    <ProgressBarAndroid style={styles.android} />
                </View>

            );
        }

    };

}
const styles = StyleSheet.create({

    ios: {
        color: PRIMARY_COLOR
    },
    android: {
        color: PRIMARY_COLOR
    }
});