import React from "react";
import {View, Text, Dimensions, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import * as feedActions from '../../../redux/actions/feedActions';
import * as contentActions from '../../../redux/actions/contentActions';
import style from './style';
import { connect } from "react-redux";
import theme from '../../../styles/theme'
import {CustomCachedImage} from 'react-native-img-cache';
import Image from 'react-native-image-progress';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export class TrackerCart extends React.Component {
    constructor(args) {
        super(args);
        let { width } = Dimensions.get("window");
        this.state = {
            showSortableView:false,
            showList:true,
            backgroundColor:"red",
            index: 0,
            eventDetails:null,
        };
        this.screenWidth = Dimensions.get("window").width;
        this.screenHeight = Dimensions.get("window").height;
    }

    componentDidMount(){
        this.id = this.props.navigation.getParam("id",null);
        this.props.fetchDetails(this.id);
    }


    static getDerivedStateFromProps(nextProp, prevState) {
        return {
            eventDetails: nextProp.eventDetails !== prevState.eventDetails ? nextProp.eventDetails : prevState.eventDetails,
        }
    }
    render() {

        let eventDetails = null;
        if(this.state.eventDetails && this.state.eventDetails.length>0){
            eventDetails = this.state.eventDetails[0];
        }

        return(
            <SafeAreaView style={{alignItems:'center',width:this.screenWidth,flex:1}}>
                <ScrollView style={{height:this.screenHeight,width:this.screenWidth}}>
                    { eventDetails ?
                        <View style={{alignItems:'center'}}>

                            <CustomCachedImage
                                component={Image}
                                source={{ uri: eventDetails.imageUrl }}
                                imageStyle={{
                                }}
                                style={
                                    style.detailsImage
                                }>
                                <TouchableOpacity
                                    style={style.backButton}
                                    onPress={()=>{
                                        this.props.navigation.goBack();
                                    }
                                    }

                                >
                                    <MaterialCommunityIcons name={'arrow-left'} size={30} color={'#ffffff'}/>
                                </TouchableOpacity>
                                <View style={style.detailsPriceContainer}>
                                    <Text style={style.detailsPriceText}>{eventDetails.isPaid?"₹"+eventDetails.price:"Free"}</Text>

                                </View>
                            </CustomCachedImage>
                            <View style={style.detailsHeaderContainer}>
                                <Text style={style.detailsHeaderText}>{eventDetails.name}</Text>

                            </View>
                            <View style={style.detailsSubHeaderContainer}>
                                <Text style={style.detailsSubHeaderText}>{eventDetails.location}</Text>

                            </View>

                            <View style={style.detailsDescriptionContainer}>
                                <Text style={style.detailsSubHeaderText}>{"Placeholder for a paragraph of details"}</Text>

                            </View>
                            <View style={{width:this.screenWidth,alignItems:'center'}}>
                                <TouchableOpacity style={style.detailsCTAButton}
                                    onPress={()=>{
                                        this.props.addItemToTracker(eventDetails);
                                        this.props.navigation.navigate("Track");
                                    }
                                    }

                                >
                                    <Text style={style.detailsCTAButtonText}>{eventDetails.isPaid?"Buy Now":"Track"}</Text>
                                </TouchableOpacity>
                            </View>

                        </View>:
                        <View>
                            <Text>Something went wrong! please try again.</Text>
                        </View>
                    }
                </ScrollView>
            </SafeAreaView>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        eventDetails: state.feedReducer.eventDetails,
    };
};


const mapDispatchToProps = (dispatch) => {

    return {
        getDummyData:()=>{
        },
        fetchDetails:(id)=>{
            feedActions.fetchEventDetails(id,dispatch)
        },
        addItemToTracker:(item)=>{
            contentActions.addItemToTracker(item,dispatch)
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackerCart);


