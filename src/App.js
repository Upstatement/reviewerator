import React from 'react';
import { ViewProvider, Layout } from 'components';

const App = () => {
  return (
    <main>
      <ViewProvider>
        <Layout />
      </ViewProvider>
    </main>
  );
};

export default App;
