import React from 'react';
import Layout from '../../hoc/Layout/Layout';
import MainFormContainer from '../MainFormContainer/MainFormContainer';

class App extends React.Component{

    render(){
        return(
            <Layout>
                <MainFormContainer />
            </Layout>
        )
    }
}

export default App;