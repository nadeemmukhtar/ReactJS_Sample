import React from 'react';
import { Text, View, Image, FlatList, TouchableOpacity   } from 'react-native';
import { styles } from '../features/home/components/styles';


export default class TopTribeMembers extends React.Component {

    constructor(props) {
        super(props);
    }

    gotoTribeMembers = () =>{

      const api_token = "";
      this.props.onTribePress(api_token);
    }
    render() {

        const { members, navigation } = this.props;
        if (members) {
            const more = { username: "more", profile_image: "" }
            members.push(more)
        }

        return(

            <View>
              <View style={{flex: 1, padding: 3}}>
                      <Text style={styles.topTribeTitle}> Top Tribe Members</Text>
              </View>

              <View style={ styles.topTribeView }>
                    <Text style={styles.topTribeText}>
                           Check out insprining lists from follow tribe members, celebs, influencers
                           and brands you trust. Discover new movies to watch, books to read, resturants
                           to check out and more.
                    </Text>
              </View>

              <View style={ styles.topTribeFlex }>
                  <FlatList
                      style={ styles.flatList }
                      scrollEnabled={true}
                      horizontal={true}
                      data={members}
                      keyExtractor={(item, index) => index.toString()}
                      numColumns={1}
                      renderItem={this._renderItem}
                  />
              </View>
            </View>

        );
    }

    _renderItem = (item, index) => {
        if(item.item.username=="more"){
          return (
            <TouchableOpacity onPress={this.gotoTribeMembers}>
              <View style={{ paddingRight: 12 }}>
                <View style={{ flex: 1, alignItems: 'center'}}>
                     <Text style={ styles.textCircle}>More</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        } else {
          return (

            <View style={{ paddingRight: 12 }}>
              <TouchableOpacity style={{ flex: 1}}
                onPress={() => this.props.onPublisherPress(item.item.username)}>
                   <Image
                       style={ styles.circleImage}
                       source= {{uri: item.item.profile_image }}
                   />
              </TouchableOpacity>
              <Text numberOfLines={1} style={ styles.topTribeUser}>  @{item.item.username} </Text>
            </View>
          )
        }
      }

}
