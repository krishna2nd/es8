import React, {Component} from 'react';

import ReactDOM from 'react-dom';
import style from '../css/style.css'

class App extends Component {
    render() {
        return (
            <div>
                <h1 className={style.className} >React Test </h1>
            </div>
        );
    }
}

ReactDOM.render(<App/> , document.getElementById('root'));