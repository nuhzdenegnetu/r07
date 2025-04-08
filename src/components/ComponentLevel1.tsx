import ComponentLevel2 from './ComponentLevel2';

const ComponentLevel1 = () => {
    return (
        <div>
            <h2>Рівень 1</h2>
            <ComponentLevel2 />
        </div>
    );
};

export default ComponentLevel1;
