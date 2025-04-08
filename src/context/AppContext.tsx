import { createContext, useState, ReactNode } from 'react';

type User = {
    id: number;
    name: string;
};

type AppContextType = {
    users: User[];
    theme: 'light' | 'dark';
    toggleTheme: () => void;
};

export const AppContext = createContext<AppContextType>({
    users: [],
    theme: 'light',
    toggleTheme: () => {},
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [users] = useState<User[]>([
        { id: 1, name: 'Іван' },
        { id: 2, name: 'Олена' },
    ]);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <AppContext.Provider value={{ users, theme, toggleTheme }}>
            {children}
        </AppContext.Provider>
    );
};
export default AppProvider;