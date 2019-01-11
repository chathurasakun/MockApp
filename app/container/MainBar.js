import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Tab, Tabs } from 'native-base';
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
                        source={Images.icon1}
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
                    <Tab heading='Reddit'
                        tabStyle={HeaderBarStyle.tabHeading}
                        activeTabStyle={HeaderBarStyle.activeTabStyle}
                        textStyle={HeaderBarStyle.tabHeadingText}
                        activeTextStyle={HeaderBarStyle.activeTabHeadingText}
                    >
                        <RedditPage />
                    </Tab>

                    <Tab heading='Git'
                        tabStyle={HeaderBarStyle.tabHeading}
                        activeTabStyle={HeaderBarStyle.activeTabStyle}
                        textStyle={HeaderBarStyle.tabHeadingText}
                        activeTextStyle={HeaderBarStyle.activeTabHeadingText}
                    >
                        <GitPage />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

export default MainBar;