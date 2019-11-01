import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { manager } from 'data';

const ViewContext = React.createContext([{}, () => {}]);

const ViewProvider = ({ ...props }) => {
  const [state, setState] = useState({ ...manager, });

  return <ViewContext.Provider value={[state, setState]}>{props.children}</ViewContext.Provider>;
};

ViewProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ViewContext, ViewProvider };
