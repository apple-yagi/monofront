import './styles/reset.css';
import { render } from 'react-dom';
import { Router } from '@/router/Router';
import { RecoilRoot } from 'recoil';

const App = () => (
  <RecoilRoot>
    <h1>テスト</h1>
    <Router />
  </RecoilRoot>
);

render(<App />, document.getElementById('root'));
