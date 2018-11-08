import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from '../components/login';
import { authenticate } from '../reducers';

const mapStateToProps = state => {
    return {
        authenticating: state.sessionData.authenticating,
        user: state.sessionData.user,
        error: state.sessionData.error
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        authenticate
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
