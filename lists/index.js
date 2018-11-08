import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ListItem from './list-item';

export default class ListsComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { loading, lists } = this.props;
        if (loading) {
            return (
                <View style={{backgroundColor: 'white', alignItems: 'center',justifyContent: 'center' }}>
                    <Text>Loading ...</Text>
                </View>
            );
        }
        return (
            <FlatList
                style={{ backgroundColor: 'white'}}
                contentInset={{ bottom: 100 }}
                scrollEnabled={false}
                data={lists}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this._renderItem}
            />
        );
    }

    _renderItem = (item, index) => {
        return (
            <ListItem
                item={item.item}
                onItemPress={(item) => this.props.onItemPress(item)}
                onPublisherPress={(publisher) => this.props.onPublisherPress(publisher)}
            />
        );
    }
}
