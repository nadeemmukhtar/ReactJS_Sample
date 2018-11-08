import React from 'react';
import { ActivityIndicator, Image ,View, TextInput, Text, Button, ScrollView, FlatList } from 'react-native';
import Sections from '../../../components/sections';
import Lists from '../../../components/lists';
import TopTribeMembers from '../../../components/top-tribe-members';

export default class Home extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <Image   style={{ flex: 1 , width: 180, height: 40}}  resizeMode="contain"  source={require('../../../../assets/logo.png')}/>
        ),
    });

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.navigation.addListener('willFocus', (payload) => {
            const api_token = "1540216062c24efcdabe67c7d30ab235038a59aca67faaaf4515187b7cc5518a43d9c4";
            const { fetchSections, fetchTrendingLists, fetchTopTribeMembers } = this.props;
            fetchSections();
            fetchTrendingLists();
            fetchTopTribeMembers(api_token);
        })
    }

    render() {

        const { navigation } = this.props;
        const { trendingLists, loadingTrendingLists } = this.props;
        const { sections, loadingSections } = this.props;
        const { resultsList, showSearching} = this.props;
        const { members, loadingMemberLists } = this.props;

        const subLists =   this._divideList(trendingLists);
        const list1 = subLists.list1;
        const list2 = subLists.list2;

        if (loadingTrendingLists || loadingSections || loadingMemberLists) {
            return (
                <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color="#33d6fd"/>
                </View>
            )
        }
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                {this._renderSearchBox()}
                <ScrollView>
                    <View>
                        <Sections
                            loading={loadingSections}
                            sections={sections}
                            navigation= { navigation }
                            onPublisherPress={(publisher) => navigation.navigate({ routeName: 'sections', params: { id: publisher }, key: 'sections' })}
                        />
                    </View>
                    <View style={{ marginTop: -40}}>
                        <Text style={{ paddingLeft: 15 }}>TRENDING LISTS</Text>
                    </View>
                    { this._renderList(list1, loadingTrendingLists, navigation) }
                    { this._renderTopTribeMembers(members, navigation) }
                    { this._renderList(list2, loadingTrendingLists, navigation) }
                </ScrollView>
            </View>
        )
    }

    _renderSearchBox = () => {
        return (
            <TextInput
              onChangeText={this.onSearchChange.bind(this)}
                style={{
                    backgroundColor: '#dddddd',
                    height: 40,
                    borderRadius: 6,
                    marginTop: 10,
                    marginBottom: 10,
                    marginRight: 10,
                    marginLeft: 10
                }}
                placeholder='      Search'
                underlineColorAndroid='rgba(0,0,0,0)'
            />
        );
    }

    _renderList(trendingLists, loadingTrendingLists, navigation) {
        return (
            <View>
                <Lists
                    style = {{ paddingBottom: 200 }}
                    loading={loadingTrendingLists}
                    lists={trendingLists}
                    onItemPress={(item) => navigation.navigate({ routeName: 'listInfo', params: { item: item }})}
                    onPublisherPress={(publisher) => navigation.navigate({ routeName: 'profile', params: { username: publisher }, key: 'y' })}
                />
            </View>
        )
    }

    _renderTopTribeMembers(members, navigation) {
        return(
            <View
                style={{
                    backgroundColor: '#33d6fd',
                    paddingTop: 10,
                    paddingBottom: 10
                }}>
                <TopTribeMembers
                    members={members}
                    navigation = { navigation }
                    onPublisherPress={(publisher) => navigation.navigate({ routeName: 'profile', params: { username: publisher }, key: 'y' })}
                    onTribePress = {(tribemember) => navigation.navigate({ routeName: 'tribe', key: 'cx'})}
                    style={{ marginBottom: 10, marginTop: 10}}
                />
            </View>
        );
    }

    onSearchChange(text) {
        //call the action creator for the email
        this.props.fetchResults(text);
    }

    _divideList = (lists) => {

        const length =  lists.length ;
        const list2 = [];
        const list1 = [];

        if (lists && length <= 2) {
            list1.push(lists);
        }
        else {
            var l1 = length / 2;
            const mod = length % 2;
            if (mod) {
                l1 = (length - 1) / 2;
            }
            var l2 = length - l1;

            for (var i=0; i<l1; i++) {
                list1.push(lists[i])
            }
            for (var i=l1; i<length; i++) {
                list2.push(lists[i])
            }
        }
        return { list1, list2 };
    }

}
