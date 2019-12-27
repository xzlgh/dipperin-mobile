import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { walletStack, discoveryStack, meStack, initWalletStack } from './config'
import { getTabNavigationOptions } from './utils'

const walletTabs = createBottomTabNavigator({
  wallet: walletStack,
  discovery: discoveryStack,
  me: meStack,
},
{
  defaultNavigationOptions: navigateInfo => getTabNavigationOptions(navigateInfo)
}
)

const switchNavigator = createSwitchNavigator({
  init: initWalletStack,
  wallet: walletTabs
})

export default createAppContainer(switchNavigator)