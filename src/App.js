import React, { Fragment } from 'react';

import Title from './components/title/title';
import TODO from './components/main/main';

const App = () => (
  <Fragment>
    <Title title="todo" />
    <TODO />
  </Fragment>
);

export default App;
