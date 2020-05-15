import {Dimensions, StyleSheet} from "react-native";
import theme from '../../../styles/theme';

this.screenWidth = Dimensions.get("window").width;
this.screenHeight = Dimensions.get("window").height;

export default styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    cardContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
        height:this.screenHeight*theme.heights.titleHeightPercentage,
        width:this.screenWidth*0.95,
        borderRadius:5,
        elevation:5,
        backgroundColor:theme.colors.tileColor
    },
    AppBarContainer:{
        height:50,
        backgroundColor:theme.colors.statusBarColor,
        justifyContent:'center',
        paddingHorizontal:10
    },


});
