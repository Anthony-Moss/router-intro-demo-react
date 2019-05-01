import React from 'react';
import { Redirect } from 'react-router-dom';
// import { ReactComponent } from '*.svg';

import {
    Link,

} from 'react-router-dom'
// function PageNotFound(props) {
//     return (
//         <div>
//             <h1>Nope, nothing here.</h1>
//             <Redirect to="/" />
//         </div>
//     )
// }

class PageNotFound extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showRedirect: false
        }
    }

    componentDidMount() {
        setTimeout(() =>{
            this.setState({
                showRedirect: true
            });
        }, 1000)
    }

    render() {
        return (
            <div>
                <h1>Nope.</h1>
                <Link to="/">
                Click here to go home or you will be redirected in 2 seconds.
                </Link>
                { this.state.showRedirect ? <Redirect to="/" /> : null }
            </div>
        )
    }
}



export default PageNotFound;