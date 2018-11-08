import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class ListItem extends React.Component {

    render() {
        const { item } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => this.props.onItemPress(item)}>
                    <Image style={styles.tileImage} source={{ uri: item.tile_image }}/>
                </TouchableOpacity>
                <View style={styles.sectionTitleContainer}>
                    <Text style={styles.sectionTitle}>{item.section_name}</Text>
                </View>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <View style={styles.publisherRow}>
                    <TouchableOpacity 
                        style={styles.publisherRow} 
                        onPress={() => this.props.onPublisherPress(item.publisher)}>
                        <Image
                            style={styles.publisherImage}
                            source={{ uri: 'https://www.tribalist.io/img/publishers/' + item.publisher_img }}
                            borderRadius={5}
                        />
                        <Text style={styles.publisherName}>{item.publisher}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        justifyContent: 'flex-start',
    },
    tileImage: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flex: 1,
        height: 80,
        backgroundColor: 'grey'
    },
    sectionTitleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
        position:'absolute',
        top: 15,
        left: 15,
        width: 100,
        height: 30
    },
    sectionTitle: {
        fontFamily: 'avenir-next-bold',
        fontSize: 10,
        color: 'white'
    },
    itemTitle: {
        flex: 0.5,
        paddingTop: 5,
        fontFamily: 'avenir-next-bold',
        fontSize: 14
    },
    publisherRow: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 4,

    },
    publisherImage: {

        width: 25,
        height: 25,
        backgroundColor: 'grey'
    },
    publisherName: {
        paddingLeft: 4,
        fontFamily: 'avenir-next-bold',
        fontSize: 10
    }
})
