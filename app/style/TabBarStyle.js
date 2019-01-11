import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const TabBarStyle = {
    header: {
        backgroundColor: "white",
        flexDirection: 'row'
    },
    icon: {
        color: "black",
    },
    titleHeader: {
        color: 'black'
    },
    tabBarUnderline: {
        borderBottomWidth: 0,
        backgroundColor: '#E0E0E0',
        height: 2
    },
    tabHeading: {
        backgroundColor: 'white'
    },
    tabStyle: {
        backgroundColor: 'white'
    },
    activeTabStyle: {
        backgroundColor: '#007CC4'
    },
    tabHeadingText: {
        fontSize: hp('2.5%'),
        color: 'rgba(0,0,0,0.38)',
    },
    activeTabHeadingText: {
        fontSize: hp('2.5%'),
        color: 'white',
    }
}

export default TabBarStyle;