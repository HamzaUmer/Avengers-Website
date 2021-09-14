import React from 'react';
import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about';
import AppFeature from '../components/home/feature';
import AppWork from '../components/home/work';
import AppFaq from '../components/home/Faq';
import AppPricing from '../components/home/pricing';
import AppContact from '../components/home/contact';

function AppHome() {
    return(
        <div className="main">
            <AppHero />
            <AppAbout />
            <AppFeature />
            <AppWork />
            <AppFaq />
            <AppPricing />
            <AppContact />
        </div>
    );
}

export default AppHome;