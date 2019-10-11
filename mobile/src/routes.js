import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from '../src/pages/Login';
import List from '../src/pages/List';
import Book from '../src/pages/Book';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        List,
        Book
    })
);

export default Routes;