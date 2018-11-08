import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from '../components/signup';
import { registration } from '../reducers';

const mapStateToProps = state => {
    return {
        loading: state.sessionData.registerLoading,
        user: state.sessionData.registerUser,
        errors: state.sessionData.errors,
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        registration,
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
