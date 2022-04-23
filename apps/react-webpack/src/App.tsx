import './styles/reset.css';
import { render } from 'react-dom';
import { Router } from '@/router/Router';

const App = () => <Router />;

render(<App />, document.getElementById('root'));
