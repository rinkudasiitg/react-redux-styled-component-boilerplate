import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import {injectGlobal} from 'styled-components'

injectGlobal`
    *,
    *::after,
    *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    body {
      box-sizing: border-box;
      font-family: "Lato", sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.7;
      color: #333333;
      padding: 0;
    }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
