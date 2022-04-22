import './styles/reset.css';
import { render } from 'react-dom';
import { IndexPage } from './pages';

const App = () => <IndexPage />;

render(<App />, document.getElementById('root'));
