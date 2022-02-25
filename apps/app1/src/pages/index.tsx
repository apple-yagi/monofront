import ReactDOM from 'react-dom';
import { css } from '@emotion/react';

const App = () => (
  <h1
    css={css`
      text-align: center;
      color: red;
    `}
  >
    Hello World
  </h1>
);

ReactDOM.render(<App />, document.getElementById('root'));
