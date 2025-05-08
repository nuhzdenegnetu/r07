import {useSelector, useDispatch} from 'react-redux';
import {RootState, AppDispatch} from '../redux/store';
import {toggleTheme, fetchUsers} from '../redux/slices/appSlice';
import {useEffect} from 'react';

const ComponentLevel1 = () => {
    const theme = useSelector((state: RootState) => state.app.theme);
    const users = useSelector((state: RootState) => state.app.users);
    const status = useSelector((state: RootState) => state.app.status);
    const error = useSelector((state: RootState) => state.app.error);
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>
            <h1>Тема: {theme}</h1>
            <button onClick={() => dispatch(toggleTheme())}>Переключить тему</button>
            {status === 'pending' && <p>Загрузка пользователей...</p>}
            {status === 'rejected' && <p>Ошибка: {error}</p>}
            {status === 'fulfilled' && (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ComponentLevel1;