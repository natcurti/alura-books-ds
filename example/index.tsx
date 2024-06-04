import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AbButtonComponent } from '../.';

const App = () => {
  return (
    <div>
      <AbButtonComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
