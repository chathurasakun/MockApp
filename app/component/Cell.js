import React, { Component } from 'react';
import { View, Text } from 'native-base';
import FastImage from 'react-native-fast-image';
import CellStyle from '../style/CellStyle'

class Cell extends Component {

    render = () => {
        return (
            (this.props.fromReddit) ?
                <View style={CellStyle.outerContainer}>
                    <View style={CellStyle.innerContainer}>
                        <View style={CellStyle.innerMostContainer}>
                            <View style={{ flex: 0.2 }}>
                                <FastImage style={CellStyle.imageStyle} source={{ uri: this.props.picUrl }} />
                            </View>
                            <View style={CellStyle.innerContainer2}>
                                <Text numberOfLines={4} style={CellStyle.titleStyle}>
                                    {this.props.title}
                                </Text>
                                <Text style={CellStyle.descStyle}>
                                    {this.props.desc}
                                </Text>
                                <Text style={CellStyle.linkStyle}>
                                    {this.props.link}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                :
                <View style={CellStyle.outerContainer}>
                    <View style={CellStyle.innerContainer}>
                        <View style={CellStyle.innerMostContainer}>
                            <View style={CellStyle.innerContainer3}>
                                <Text numberOfLines={4} style={CellStyle.titleStyle}>
                                    {this.props.title}
                                </Text>
                                <Text style={CellStyle.descStyle}>
                                    {this.props.desc}
                                </Text>
                                <Text style={CellStyle.linkStyle}>
                                    {this.props.link}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
        )
    }
}

export default Cell;