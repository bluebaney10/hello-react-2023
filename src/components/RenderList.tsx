const names = ['John Doe', 'Chuck Norris', 'Jane Doe', 'Foo Bar', 'Alice Bob'];

const users = [
    {
        id: 1,
        name: 'Blue',
    },
    {
        id: 2,
        name: 'Baney',
    },
];

export default function RenderList() {
    return (
        <div>
            {names.map((name, index) => {
                return <p key={index}>{name}</p>;
            })}

            {users.map((user) => {
                return <p key={user.id}>{user.name}</p>;
            })}
        </div>
    );
}
