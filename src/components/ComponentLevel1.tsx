import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { toggleTheme } from '../redux/slices/appSlice';

const ComponentLevel1 = () => {
  const theme = useSelector((state: RootState) => state.app.theme);
  const users = useSelector((state: RootState) => state.app.users);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Тема: {theme}</h1>
      <button onClick={() => dispatch(toggleTheme())}>Переключить тему</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentLevel1;