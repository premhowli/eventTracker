import {Dimensions, StyleSheet} from "react-native";
import theme from '../../../styles/theme';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    listCardContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
        height:screenHeight*theme.heights.titleHeightPercentage,
        width:screenWidth*0.95,
        borderRadius:5,
        elevation:5,
        backgroundColor:theme.colors.tileColor
    },
    listViewCardImageContainer:{
        flex:3,
        backgroundColor:theme.colors.statusBarColor,
        borderTopRightRadius:5,
        borderTopLeftRadius:5
    },
    listViewCardImage:{
        height:screenHeight*theme.heights.titleHeightPercentage*(3/5),
        width:screenWidth*0.95,
        borderTopRightRadius:5
    },
    listViewCardDetailsContainer:{
        flex:2,
        width:'100%',
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
    },
    listViewCardDetailsContainerView:{
        padding:10,
        height:"100%",
        flexDirection:'row',
    },
    listViewCardDetailsPriceContainer:{
        position:'absolute',
        right:10,
        height:'100%',
        justifyContent:'center',
        alignItems:'flex-end',
    },
    listViewCardDetailsPriceText:{
        fontWeight:'bold',
        color:'#000068',
        fontSize:20
    },
    AppBarContainer:{
        height:50,
        backgroundColor:theme.colors.statusBarColor,
        justifyContent:'center',
        paddingHorizontal:10
    },
    AppBarContainerView:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:'center'
    },
    eventsContainer:{
        marginTop:10,
        backgroundColor:theme.colors.backgroundColor,
        width:screenWidth
    },
    eventsContainerContent:{
        alignItems:'center',
        paddingBottom:screenHeight*0.15
    },
    gridTile:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
        height:screenHeight*0.3,
        width:screenWidth*0.45,
        borderRadius:5,
        elevation:5,
        backgroundColor:theme.colors.tileColor
    },
    gridTileImageChild:{
        flex:1,
        backgroundColor:"#00000077",
        borderRadius:5,
        padding:10,
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    gridTileImageChildName:{
        color:'#ffffff',
        fontSize:20,
        fontWeight:'bold'
    },
    gridTileImage: {
        height:"100%",width:"100%",
        borderTopRightRadius:5
    }


});
