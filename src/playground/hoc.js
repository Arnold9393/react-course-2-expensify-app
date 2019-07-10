// Higher ORder Component (HOC) - A component (HOC) that renders another component
// to reuse code
// render hijacking
// prop manipulation
// abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p><b><i>This is private info!</i></b></p> }
            <WrappedComponent {...props}/>
        </div>
    )
};

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));
