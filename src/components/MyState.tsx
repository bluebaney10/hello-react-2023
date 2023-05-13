import { useState } from 'react';

const defaulteUsers = [
    {
        id: 1,
        name: 'Blue',
    },
    {
        id: 2,
        name: 'Baney',
    },
];

export default function MyState() {
    const [users, setUsers] = useState(defaulteUsers);

    function handleClick() {
        const id = users.length + 1;
        const newUser = {
            id,
            name: `user #${id}`,
        };
        setUsers([...users, newUser]);
    }

    return (
        <div>
            {users.map((user) => {
                return (
                    <p key={user.id} onClick={handleClick}>
                        {user.name}
                    </p>
                );
            })}
        </div>
    );
}
