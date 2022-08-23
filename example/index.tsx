import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Spinner from 'finity-ui';
const App = () => {
  return (
    <>
      <Spinner size="xl" />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
