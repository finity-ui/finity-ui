import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from 'finity-ui';
const App = () => {
  return (
    <div>
      <Button variant="secondary">Connect Wallet</Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
