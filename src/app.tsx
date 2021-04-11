import * as React from 'react';

import Header from './components/header'
import MainSection from './components/main'
import GradientOne from './components/gradient1'
import SectionOne from './components/section1'
import GradientTwo from './components/gradient2'
import SectionTwo from './components/section2'
import Footer from './components/footer'

function App(){
    return(
    <div className='container'>
        <div className='headmain'>
            <Header />
            <MainSection />
        </div>
        <GradientOne />
        <SectionOne />
        <GradientTwo />
        <SectionTwo />
        <Footer />
    </div>
    )
}

export default App;