import React from 'react';
import { Text, View, Image, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../features/home/components/styles';


export default class SwiperList extends React.Component {

    constructor(props) {
        super(props);

    }



    render() {

        const { loading, lists} = this.props;

          return(
             <View style={{ flex: 1, marginBottom: 10, marginTop: -50}}>
                  <FlatList
                     style={{flex: 1,
                       flexGrow: 1,
                       paddingBottom: 10,
                       paddingRight: 30,
                       paddingLeft: 5}}
                       contentInset={{ right: 32 }}
                       scrollEnabled={true}
                       horizontal={true}
                       data={lists}
                       keyExtractor={(item, index) => index.toString()}
                       renderItem={this._renderItem}
                  />
            </View>
          );
    }

    _renderItem = (item, index) => {
          var  category = "";
          var  subcategory = "";
            if(this.props.category){
               category = this.props.category;
               subcategory = item.item.category;
            } else {
              category = item.item.category
            }

          return (
                <View style={{ marginBottom: 5, paddingLeft: 1,  width: 120, marginRight: 8}}>
                  <TouchableOpacity
                      onPress={() => this.props.onPress(this.props.section_id, category, subcategory, item.item.tile_image)}>
                        <ImageBackground
                          resizeMode="cover"
                          source={{ uri: item.item.tile_image}}
                          imageStyle={{ borderRadius: 10 }}
                          style={{flex: 1, width: '100%', height: 70, borderRadius: 10}}>
                            <View style={{backgroundColor: "rgba(0,0,0,0.50)",
                            borderRadius: 10, height: '100%', alignItems: 'center',   justifyContent:'center'}}>
                              <Text style={{
                                          color: "#fff",
                                          paddingLeft: 10,
                                          paddingRight: 10,}}> {item.item.category} </Text>
                            </View>
                        </ImageBackground>
                  </TouchableOpacity>
                </View>
          )
      }

}
