import {
    createAppContainer,
    createStackNavigator
} from 'react-navigation'
import Main from '../src/views/Main'

const AppNavigator = createStackNavigator(
    {
        Main
    },
    {
        initialRouteName: 'Main'
    }
)

export default createAppContainer(AppNavigator)