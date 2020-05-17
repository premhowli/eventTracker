import React, { Component } from "react";
import {Dimensions, FlatList, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { connect } from "react-redux";
import * as contentActions from '../../../redux/actions/contentActions';
import style from './styles';
import * as feedActions from '../../../redux/actions/feedActions';
import {CustomCachedImage} from 'react-native-img-cache';
import Image from 'react-native-image-progress';





class CellContainer extends React.Component {
    constructor(args) {
        super(args);
    }
    render() {
        return <View {...this.props}>
            {this.props.children}
        </View>;
    }
}


class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showList:true,
            allEvent:null,
            index: 0,
        };

        this.screenWidth = Dimensions.get("window").width;
        this.screenHeight = Dimensions.get("window").height;

    }

    static getDerivedStateFromProps(nextProp, prevState) {
        return {
            allEvent: nextProp.allEvent !== prevState.allEvent ? nextProp.allEvent : prevState.allEvent,
            viewType: nextProp.viewType !== prevState.viewType ? nextProp.viewType : prevState.viewType
        }

    }

    _renderRows = ({item, index, separators})=>{
        console.log("<<<< = "+this.state.viewType);
        const data = this.state.allEvent;
        if(this.state.showList){
            return(
                <CellContainer>
                    <TouchableOpacity  style={style.listCardContainer}
                                       onPress={()=>{
                                           this.props.navigation.navigate('Cart',{
                                               id : item.id

                                           })
                                       }}
                    >
                        <View style={style.listViewCardImageContainer}>
                            <CustomCachedImage
                                component={Image}
                                source={{ uri: item.imageUrl }}
                                // indicator={}
                                imageStyle={{
                                    borderRadius:5
                                }}
                                style={
                                    style.listViewCardImage
                                }/>
                        </View>
                        <View style={style.listViewCardDetailsContainer}>
                            <View style={style.listViewCardDetailsContainerView}>
                                <View style={{flex:3}}>
                                <Text style={{color:'#000068',fontSize:20,fontWeight: 'bold'}}>
                                    {item.name}
                                </Text>
                                <Text style={{color:'#323028'}}>
                                    {item.location}
                                </Text>
                                </View>
                                <View style={style.listViewCardDetailsPriceContainer}>
                                    <Text style={style.listViewCardDetailsPriceText}>
                                        {item.isPaid?"₹"+item.price:"Free"}
                                        </Text>
                                </View>
                            </View>
                        </View>

                    </TouchableOpacity>
                </CellContainer>
            )
        }
        else{
            if(index%2!=0){
                return;
            }
            else{
            return(
                <CellContainer>
                    <View style={{width:this.screenWidth,flexDirection:'row',justifyContent:(data[index] && data[index+1])?'space-around':'center'}}>
                        {
                            data[index]?
                                <TouchableOpacity style={style.gridTile}

                                                  onPress={()=>{
                                                      this.props.navigation.navigate('Cart',{
                                                          id : data[index].id

                                                      })
                                                  }}
                                >


                                    <CustomCachedImage
                                        component={Image}
                                        source={{ uri: data[index].imageUrl }}
                                        // indicator={}
                                        imageStyle={{
                                            borderRadius:5
                                        }}
                                        style={
                                            style.gridTileImage
                                        }>
                                        <View style={style.gridTileImageChild}>
                                        <Text style={style.gridTileImageChildName}>
                                            {data[index].name}
                                        </Text>
                                        </View>
                                    </CustomCachedImage>

                                </TouchableOpacity>
                                :
                                <View/>

                        }
                        {
                            data[index+1] ?
                                <TouchableOpacity style={style.gridTile}

                                                  onPress={()=>{
                                                      this.props.navigation.navigate('Cart',{
                                                          id : data[index+1].id

                                                      })
                                                  }}
                                >


                                    <CustomCachedImage
                                        component={Image}
                                        source={{ uri: data[index+1].imageUrl }}
                                        // indicator={}
                                        imageStyle={{
                                            borderRadius:5
                                        }}
                                        style={
                                           style.gridTileImage
                                        }>
                                        <View style={style.gridTileImageChild}>
                                            <Text style={style.gridTileImageChildName}>
                                                {data[index+1].name}
                                            </Text>
                                        </View>
                                    </CustomCachedImage>

                                </TouchableOpacity>
                                :
                                <View/>

                        }


                    </View>

                </CellContainer>
            )}
        }
    };

    _changeViewState = () => {
        //unnecessary code to global state. just kept for demonstration.
        if(this.state.showList){
            this.props.changeViewType("grid");
        }
        else{
            this.props.changeViewType("list");
        }
        this.setState((prevState)=>{
            return {
                showList: !prevState.showList
            }
        },()=>{
            console.log("<<<< 2 = "+this.state.showList);
        })
    }

    render(){
        return(
            <SafeAreaView style={{flex:1}}>

                <View style={style.AppBarContainer}>
                    <View style={style.AppBarContainerView}>
                        <Text style={{fontWeight:"bold"}}>BeeCash</Text>
                        <View style={{alignItems:'center'}}>
                            {
                                this.state.showList && this.state.showList ?
                                    <TouchableOpacity
                                        onPress={()=>{
                                            this._changeViewState();
                                        }}>
                                        <Entypo name="grid" size={32}></Entypo>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity
                                        onPress={()=>{
                                            this._changeViewState();
                                        }
                                        }
                                    >
                                        <Entypo name="list" size={32}/>
                                    </TouchableOpacity>
                            }


                        </View>

                    </View>

                </View>
                <View style={{height:this.screenHeight-50}}>
                    {
                        this.state.allEvent?
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                type = {this.state.showList}
                                style={style.eventsContainer}
                                contentContainerStyle={style.eventsContainerContent}
                                data={this.state.allEvent}
                                renderItem={this._renderRows}
                            />
                            :
                            <View>
                                <Text>
                                    No events available right now!!
                                </Text>
                            </View>
                    }
                </View>
            </SafeAreaView>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        content:state.contentReducer.allContent,
        allEvent:state.feedReducer.allEvent,
        viewType : state.feedReducer.viewType,
    };
};


const mapDispatchToProps = (dispatch) => {

    return {
        getDummyData:()=>{

        },
        changeViewType:(type)=>{
            contentActions.changeViewType(type,dispatch);
        },
        getAllEvent:()=>{
            feedActions.getAllEvent(dispatch);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
