import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Notes from './Listing/Notes';

function RouterPage() {
    return (
        <Router>
            <React.Fragment>
                <Route path="/" exact strict component={Notes} />
                <Route path="/notes" exact strict component={Notes} />
            </React.Fragment>
        </Router>
    )
}

export default RouterPage
