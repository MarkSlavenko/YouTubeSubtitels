import React from 'react';
import './App.css';
import {Header} from "./components/header";
import {Content} from "./containers/content";
import {Footer} from "./components/footer";

export class App extends React.Component {
    render()
    {
        return (
            <React.Fragment>
                <Header/>
                <Content/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default App;
