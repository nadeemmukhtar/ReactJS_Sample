import React from 'react';
import { Text, View, Image, FlatList, TouchableOpacity   } from 'react-native';
import { styles } from '../features/users/components/styles';


export default class UserList extends React.Component {

    constructor(props) {
        super(props);
    }

    gotoTribeMembers = () =>{
      const api_token = "";
      this.props.onTribePress(api_token);
    }
    render() {

        const { users, navigation } = this.props;
        if(users.length > 0){
              return(
                      <View>
                            <FlatList
                                style={{ padding: 2}}
                                data={users}
                                keyExtractor={(item, index) => index.toString()}
                                numColumns={2}
                                renderItem={this._renderItem}
                            />
                      </View>
                  );
          } else {
              return(
                  <View>
                      <Text style= { styles.userName }>  No Record Found </Text>
                  </View>
              )
          }
    }

    _renderItem = (item, index) => {
          return (
              <View style={ styles.container } >
                    <TouchableOpacity
                     style={ styles.touchAbleImage }
                      onPress={() => console.log('kashif is heres')}>
                         <Image
                             resizeMode = 'cover'
                             style={ styles.circleImage}
                             source= {{uri: item.item.profile_image }}
                         />
                    </TouchableOpacity>

                    <View>
                      <Text numberOfLines={1} style={ styles.userName }> {item.item.username} </Text>
                    </View>

                    <TouchableOpacity
                        style={ styles.fellowButton } onPress={this.login}>
                        <Text style={{ fontFamily: 'avenir-next-bold', fontSize: 16, color: 'white' }}>Follow</Text>
                    </TouchableOpacity>
              </View>
          )
      }
}
