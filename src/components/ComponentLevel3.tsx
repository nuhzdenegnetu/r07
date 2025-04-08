import  { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ComponentLevel3 = () => {
    const { users, theme, toggleTheme } = useContext(AppContext);

    return (
        <div>
            <h4>Рівень 3</h4>
            <p>Тема: {theme}</p>
            <button onClick={toggleTheme}>Змінити тему</button>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ComponentLevel3;
