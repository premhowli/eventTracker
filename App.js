import React from 'react';
import {
    StatusBar,View
} from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'
import {persistor, store} from './store/store';
import theme from './src/styles/theme';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AppContent from './src/components/viewComponents/Home/AppContent';


const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[{ height : Platform.OS === 'ios' ? 44 : 44}, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);

class App extends React.Component {

    componentDidMount() {
    }
    componentWillUnmount() {
    }
    render(){
        return (

            <ReduxProvider store={store}>
                <PersistGate
                    loading={null}
                    persistor={persistor}
                >
                    <NavigationContainer>
                        {
                            Platform.OS === 'ios'?
                                <MyStatusBar backgroundColor={theme.colors.statusBarColor} barStyle="light-content" />
                                :
                                <StatusBar backgroundColor={theme.colors.statusBarColor}/>
                        }

                        <AppContent />
                    </NavigationContainer>
                </PersistGate>
            </ReduxProvider>
        );
    }
}
//AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
export default App;
