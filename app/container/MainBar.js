import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading } from 'native-base';
import RedditPage from './RedditPage';
import GitPage from './GitPage';
import HeaderBarStyle from '../style/TabBarStyle';
import Images from '../../Utility/image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class MainBar extends Component {

    render = () => {
        return (
            <Container>
                <Header style={{ height: hp('10%') }}>
                    <Image
                        source={Images.icon3}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    />
                </Header>

                <Tabs
                    initialPage={0}
                    tabBarUnderlineStyle={HeaderBarStyle.tabBarUnderline}
                    locked={true}
                    tabBarPosition='bottom'
                    tabBarBackgroundColor='#ffffff'
                    tabContainerStyle={{ height: hp('10%') }}
                >
                    <Tab heading={
                        <TabHeading style={{ flexDirection: 'column' }}>
                            <Image source={Images.reddit6} />
                            <Text style={{ color: '#2868D4' }}>reddit</Text>
                        </TabHeading>
                    }
                        tabStyle={HeaderBarStyle.tabHeading}
                    >
                        <RedditPage />
                    </Tab>

                    <Tab heading={
                        <TabHeading style={{ flexDirection: 'column' }}>
                            <Image source={Images.git5} />
                            <Text style={{ color: '#2868D4' }}>Git</Text>
                        </TabHeading>
                    }
                        tabStyle={HeaderBarStyle.tabHeading}
                    >
                        <GitPage />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

export default MainBar;