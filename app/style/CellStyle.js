import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CellStyle = {
    outerContainer: {
        padding: hp('1.5%'),
        backgroundColor: '#EDEDEE'
    },
    innerContainer: {
        flexDirection: 'row',
        borderColor: '#D4D4D4',
        height: hp('30%'),
        borderWidth: wp('1%'),
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        borderRadius: hp('1%')
    },
    innerMostContainer: {
        marginTop: hp('1%'),
        marginLeft: hp('2%'),
        marginRight: hp('2%'),
        flexDirection: 'row'
    },
    imageStyle: {
        width: hp('8%'),
        height: hp('8%'),
        borderRadius: hp('8%') / 2,
    },
    innerContainer2: {
        flex: 0.8,
        flexDirection: 'column'
    },
    innerContainer3: {
        flexDirection: 'column',
        overflow: 'hidden'
    },
    titleStyle: {
        fontSize: hp('2%'),
        color: '#bbbdc0',
        fontWeight: 'bold',
        marginLeft: hp('1%')
    },
    descStyle: {
        fontSize: hp('2%'),
        marginTop: hp('2%'),
        color: '#484848',
        marginLeft: hp('1%')
    },
    linkStyle: {
        fontSize: hp('1.6%'),
        marginTop: hp('5%'),
        color: '#484848',
        marginLeft: hp('1%')
    }
}

export default CellStyle;