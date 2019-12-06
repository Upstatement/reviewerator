import React from 'react';
import { ViewProvider, Layout } from 'components';

const App = () => {
  return (
    <div>
      <ViewProvider>
        <Layout />
      </ViewProvider>
    </div>
  );
};

export default App;
