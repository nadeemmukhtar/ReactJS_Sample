import { createStackNavigator } from 'react-navigation';
import Authentication from '../../authentication/containers/signins';
import ResetPassword from '../../authentication/components/resetPassword';
import SignUp from '../../authentication/containers/signups';

export default createStackNavigator({
    login: Authentication,
    resetPassword: ResetPassword,
    signUp: SignUp,
});
