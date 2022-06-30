import { Link } from 'react-router-dom';
import { Button } from '@ui/Button';

const IndexPage = () => (
  <div>
    <h1>IndexPage</h1>
    <Link to='/about.html'>About</Link>
    <Button></Button>
  </div>
);

export default IndexPage;
