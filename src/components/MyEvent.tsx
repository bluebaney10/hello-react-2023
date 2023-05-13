export default function MyEvent() {
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
    function handleClick() {
        alert('click me');
    }
    function handleClickName(name: string) {
        alert('Hello ' + name);
    }

    /*     const button = document.getElementsByClassName("bt-click");
    button.addEventListener("click", () => {
        alert("Hello Event from eventlistener ");
    }); */

    return (
        <>
            <button onClick={handleClick}>Click me</button>
            <br></br>
            <button onClick={() => alert('inline')}>Click me arrow function</button>;
            <button className='bt-click'>Click me addEventListener</button>;
            {users.map((user) => {
                return (
                    <p key={user.id} onClick={() => handleClickName(user.name)}>
                        {user.name}
                    </p>
                );
            })}
        </>
    );
}
