import React, {Fragment} from 'react';
import {Grid} from 'semantic-ui-react';
import Header from './components/Header/Header';
import Gadget from './components/Gadget/Gadget';
import Widget from './components/Widget/Widget';
import './App.css'

function App() {
    return (
        <Fragment>
            <Header/>
            <Grid className='grid' >
                <Grid.Column floated='left' width='8'>
                    <div className='card-container'>
                        <Gadget />
                    </div>
                </Grid.Column>
                <Grid.Column floated='right' width='8'>
                    <div className='card-container'>
                        <Widget/>
                    </div>
                </Grid.Column>
            </Grid>
        </Fragment>
    );
}

export default App;
