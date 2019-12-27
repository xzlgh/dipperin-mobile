import React from 'react'
import {
  StyleSheet,
  StatusBar,
  View,
} from 'react-native'
import { configure } from 'mobx'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'mobx-react'
import Router from 'Router'
import i18n from 'I18n'
import RootStore from 'Store/root'

// Configure mobx
configure({
  enforceActions: 'observed'
})


const rootStore = new RootStore()

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider {...rootStore}>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="dark-content" />
          <View style={{ flex: 1 }}>
            <Router />
          </View>
        </View>
      </Provider>
    </I18nextProvider>
  )
}

const styles = StyleSheet.create({

})

export default App