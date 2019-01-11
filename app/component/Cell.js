import React, { Component } from 'react';
import { View, Text } from 'native-base';
import FastImage from 'react-native-fast-image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Cell extends Component {

    render = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    borderBottomColor: '#78909C',
                    borderTopColor: '#78909C',
                    height: hp('23%'),
                    borderTopWidth: 0.5,
                    backgroundColor: '#FFFFFF',
                    alignItems: 'stretch'
                }}
            >
                <View style={{ flex: 0.2 }}>
                    <FastImage
                        style={{
                            width: hp('8%'),
                            height: hp('8%'),
                            borderRadius: hp('8%') / 2,
                            marginLeft: hp('2%'),
                            marginTop: hp('1%')
                        }}
                        source={{ uri: this.props.picUrl }}
                    />
                </View>
                <View style={{ flex: 0.8, flexDirection: 'column' }}>
                    <Text style={{ fontSize: hp('2.5%'), color: '#bbbdc0', fontWeight: 'bold', marginTop: hp('1%') }}>{this.props.title}</Text>
                    <Text style={{ fontSize: hp('2%'), marginTop: hp('1%') }}>{this.props.desc}</Text>
                    <Text style={{ fontSize: hp('1.6%'), marginTop: hp('5%') }}>{this.props.link}</Text>
                </View>
            </View>
        )
    }
}

export default Cell;