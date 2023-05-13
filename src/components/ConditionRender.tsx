export default function ConditionRender() {
    const isLoggedIn = true;
    let content = "";

    if (isLoggedIn) {
        content = <h4>Hello You member</h4>;
    } else {
        content = <p>Please Login</p>;
    }

    isLoggedIn ? <h4>Hello You member</h4> : <p>Please Login</p>;

    return (
        <div>
            <h3>Condition</h3>
            {content}
            <h3>Ternary Operator</h3>
            {isLoggedIn ? <h4>Hello You member</h4> : <p>Please Login</p>}
            <h3>Logical AND &&</h3>
            {isLoggedIn && <h4>Hello You member</h4>}
        </div>
    );
}
