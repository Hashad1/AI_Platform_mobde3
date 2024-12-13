import React from 'react';
import { NavigationContainer } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from './store';
import RootNavigator from './navigation/RootNavigator';
import { NetworkProvider } from './contexts/NetworkContext';
import { ErrorBoundary } from './components/ErrorBoundary';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <NetworkProvider>
            <NavigationContainer>
              <RootNavigator />
            </NavigationContainer>
          </NetworkProvider>
        </QueryClientProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;