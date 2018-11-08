import { createStackNavigator } from 'react-navigation';
import Home from '../containers/home';
import Profile from '../../profile/containers/profile';
import TribeMember from '../../tribe-members/containers/members';
import Section from '../../sections/containers/sections';
import Category from '../../categories/containers/categories';
import SubCategory from '../../sub-categories/containers/subcategories';
import ListInfoNavigator from '../../list-info/components';

export default createStackNavigator({
    home: Home,
    profile: {
        screen: Profile,
        key: 'x'
    },
    tribe: {
      screen: TribeMember,
      key: 'cr'
    },
    sections: {
      screen: Section,
      key: 'sections'
    },
    category: {
      screen: Category,
      key: 'category'
    },
    subcategories:{
       screen: SubCategory,
       key: "subCategory"
    },
    listInfo: {
        screen: ListInfoNavigator, 
    }
})
