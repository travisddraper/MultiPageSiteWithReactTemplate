//basic Bootstrap navbar structure
const Navbar = () => {
    //Must start a React function component name with a Capital letter.
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="press.html">Press</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
    //three anchor links, the last two point to respect HTML pages.
}

//basic Sidebar that renders the word Sidebar and uses some bootstrap 4 classes for styling
const Sidebar = () => {
    return (
        <div className="d-none d-md-block col-md-3">
            <div className="border border-primary py-4 px-3">
                Sidebar
            </div>
        </div>
    );
}

//basic Footer with copyright statement
const Footer = () => {
    return (
        <div className="border-top p-2">
            Template Demo Copyright 2019
        </div>
    );
}

//The Template component will be a top level component that uses all the other smaller components to compose the entire page
const Template = (props) => {
    //changed the parent <div> to <React.Fragment> to reduce unecessary DOM injections
    return (
        <React.Fragment>
            <Navbar />
            <div className="container py-4">
                <div className="row">
                    <div className="col-12 col-md-9">
                        {props.children}
                    </div>
                    <Sidebar />
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
    //Wouldn't need the parent-most <div> element in this component, if React didn't have a strict rule that all returned output from custom components MUST be wrapped by one parent element/component.
    //We replace it with the Fragment component.
}