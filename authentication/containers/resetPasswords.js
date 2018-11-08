import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from '../components/resetPassword';


const mapStateToProps = state => {
    return {
        trending: state.sessionData.resetpassword,
        loading: state.sessionData.loading
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({

    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
