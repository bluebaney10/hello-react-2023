import styles from './MyComponent.module.css';
import './MyComponent.css';
import RenderList from './RenderList';
import ConditionRender from './ConditionRender';
import MyEvent from './MyEvent';
import MyProps from './MyProps';
import MyState from './MyState';
import MyObjectState from './MyObjectState';

function MyComponent() {
    const name = 'BB';
    const instyles = {
        fontSize: '1rem',
    };
    return (
        <div>
            <h1 style={instyles}>Blue Component</h1>
            <p className={styles['read-the-docs']}>read-the-docs With Module Font Color:Blue</p>
            <p className={styles.readTheDocs}>read-the-docs With Module Font Color:Red</p>
            <p className='read-the-docs'>read-the-docs With No Module Font Color:Pink</p>
            <p className='read-the-docs'>read-the-docs With No Font Color:Pink</p>
            <p>This is My Component !!!!</p>
            <p>Name: {name}</p>
            <p>Name: {2 + 2}</p>
            <p>{new Date().toISOString()}</p>
            <hr />
            <h2>Render List</h2>
            <RenderList />
            <hr />
            <h2>Condition Render</h2>
            <ConditionRender />
            <h2>Event</h2>
            <MyEvent />
            <h2>Props</h2>
            <MyProps title='my prop from myComponents' />
            <h2>State</h2>
            <MyState />
            <h2>State Object</h2>
            <MyObjectState />
        </div>
    );
}

export default MyComponent;
