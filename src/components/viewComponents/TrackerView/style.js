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
    detailsImage:{
        height:screenHeight*0.3,
        width:screenWidth,
    },
    backButton:{
        position:'absolute',
        top:10,
        left:10,
        width:30,
        height:30
    },
    detailsPriceContainer:{
        position:'absolute',
        right:0,
        bottom:0,
        height:40,
        backgroundColor:'#00000077',
        borderTopLeftRadius:10,
        justifyContent:'center',
        alignItems:'center',
        minWidth:100
    },
    detailsPriceText:{
        color:"#ffffff",
        fontSize:20,
        fontWeight:'bold'
    },
    detailsHeaderContainer:{
        width:"100%",
        minHeight:60,
        paddingHorizontal:10,
        alignItems:"flex-start",
        justifyContent:'flex-end'
    },
    detailsHeaderText:{
        fontWeight:'bold',
        fontSize:30
    },
    detailsSubHeaderContainer:{
        width:"100%",
        minHeight:30,
        paddingHorizontal:10,
        alignItems:"flex-start",
        justifyContent:'flex-start'
    },
    detailsSubHeaderText:{
        fontWeight:'bold',
        fontSize:10
    },
    detailsDescriptionContainer:{
        width:"100%",
        height:screenHeight*0.3,
        marginTop:10,
        justifyContent:'center',
        paddingHorizontal:10,
        alignItems:"center",


    },
    detailsCTAButton:{
        height:45,
        width:screenWidth*0.7,
        borderRadius:22.5,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:theme.colors.statusBarColor
    },
    detailsCTAButtonText:{
        fontSize:25,
        color:'#ffffff'
    },
    trackerListItemContainer:{
        height:230,
        marginHorizontal:10,
        display: "flex",
        flexDirection: "column",
        borderRadius:5,
        marginVertical:10,
        justifyContent:'space-between',
        alignItems: "center",
    },
    trackerListItemDeleteCTA:{
        position:'absolute',
        right:5,
        top:5,
        width:40,
        height:40,
        borderRadius:25,
        backgroundColor:'#000000aa',
        justifyContent:'center',
        alignItems:'center'
    },
    trackerListItemImage:{
        height:"100%",
        width:"100%",
        borderTopRightRadius:5
    },
    tackerListDraggableCTAContainer:{
        flex:1,
        borderBottomRightRadius:5,
        justifyContent:'center',
        width:40,
        alignItems:'center'
    },
    trackerListItemDetailsContainer:{
        flex:1,
        flexDirection:'row',
        borderBottomLeftRadius:5,
        justifyContent:'space-between'
    },
});
