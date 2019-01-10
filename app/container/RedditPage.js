import React, { Component } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { Container, View } from 'native-base';
import { getAll } from '../../serverMethods/backendMethods';
import Cell from '../component/Cell';

class Reddit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            responseData: []
        }
    }

    componentDidMount = () => {
        return getAll('https://www.reddit.com/top.json')
            .then((responseJson) => {
                this.setState({
                    isFetching: false,
                    responseData: responseJson.data.children
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render = () => {
        return (
            <Container>
                <FlatList
                    data={this.state.responseData}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) =>
                        <Cell title={item.data.title} picUrl={item.data.thumbnail} link={item.data.url} desc={item.data.description} />
                    }
                    ListFooterComponent={() => {
                        return (<View style={{ borderTopColor: 'grey', borderTopWidth: 1 }} />)
                    }}
                />

                {(this.state.isFetching) ?
                    <ActivityIndicator
                        style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        animating size='large'
                        color='#00ff00'
                    />
                    :
                    null
                }
            </Container>
        );
    }
}

export default Reddit;
