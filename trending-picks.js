import React from 'react';
import { Text, View, Image, FlatList, TouchableOpacity, ImageBackground } from 'react-native';


export default class TrendingPick extends React.Component {

    constructor(props) {
        super(props);

    }



    render() {

        const { loading, lists } = this.props;
          return(
             <View style={{ flex: 1, marginBottom: 5, marginTop: -50, paddingTop: 10}}>

                  <FlatList
                     style={{flex: 1,
                       flexGrow: 1,
                       padding: 4,
                       paddingBottom: 10,
                       }}
                       contentInset={{ right: 16 }}
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
          return (
                <View style={{ marginBottom: 5, paddingLeft: 2,  width: 120, marginRight: 8}}>
                  <TouchableOpacity>
                        <ImageBackground
                          resizeMode="cover"
                          source={{ uri: item.item.poster_art}}
                          imageStyle={{ borderRadius: 10 }}
                          style={{flex: 1, width: '100%', height: 150, borderRadius: 10}}>

                        </ImageBackground>
                  </TouchableOpacity>
                </View>
          )
      }

}
