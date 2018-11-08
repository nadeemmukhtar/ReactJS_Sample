import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from '../components/home';

import { fetchTrendingLists, fetchSections, fetchTopTribeMembers, fetchResults } from '../../home/reducers';

const mapStateToProps = state => {
    return {
        trendingLists: state.homeData.trendingLists,
        loadingTrendingLists: state.homeData.loadingTrendingLists,
        sections: state.homeData.sections,
        loadingSections: state.homeData.loadingSections,
        loadingMemberLists: state.homeData.loadingMemberLists,
        members:  state.homeData.members,
        showSearching: state.homeData.showSearching,
        resultsList: state.homeData.resultsList,
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchTrendingLists,
        fetchSections,
        fetchTopTribeMembers,
        fetchResults,
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
