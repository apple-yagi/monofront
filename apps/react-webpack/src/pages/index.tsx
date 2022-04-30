import { todoState } from '@/states/todo';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';

const IndexPage = () => {
  const [todo, setTodo] = useRecoilState(todoState);

  return (
    <div>
      <h1>IndexPage</h1>
      <Link to='/about.html'>About</Link>
      <div style={{ marginTop: '50px' }}>
        <h3>Todo: {todo}</h3>
        <input type='text' onChange={(e) => setTodo(e.target.value)} />
      </div>
    </div>
  );
};

export default IndexPage;
