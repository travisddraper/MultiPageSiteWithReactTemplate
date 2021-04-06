//Using an App component to wrap everything
const App = () => {
    return (
        <Template>
            <h1>Main Content</h1>
        </Template>
        //The h1 element is  CHILD ELEMENT of Template, it will be passed to Template as PROPS.CHILDREN. Therefore, it will be rendered at the location where the code {props.children} exists.
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);