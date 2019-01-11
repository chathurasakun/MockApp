import React, { Component } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { Container, View } from 'native-base';
import { getAll } from '../../serverMethods/backendMethods';
import Cell from '../component/Cell';

class GitPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            responseData: []
        }
    }

    componentDidMount = () => {
        return getAll('https://github-trending-api.now.sh/repositories?language=javascript')
            .then((responseJson) => {
                this.setState({
                    isFetching: false,
                    responseData: responseJson
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
                        <Cell title={item.name} picUrl={item.thumbnail} link={item.url} desc={item.description} />
                    }
                    ListFooterComponent={() => {
                        return (<View style={{ borderTopColor: '#78909C', borderTopWidth: 1 }} />)
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

export default GitPage;