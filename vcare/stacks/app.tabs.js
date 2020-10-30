import React from 'react';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';

import HomeScreenI18N from '../screens/HomeScreenI18N';
import ContactScreenI18N from '../screens/ContactScreenI18N';
import SettingScreenI18N from '../screens/SettingScreenI18N';

const Tabbar = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreenI18N
        },
        Contact: {
            screen: ContactScreenI18N
        },
        Setting: {
            screen: SettingScreenI18N
        }
    }
);

const AppTabbar = createAppContainer(Tabbar);
export default AppTabbar;