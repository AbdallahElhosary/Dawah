import React from 'react';
import Hero from '../components/Hero/Hero';
import Roads from '../components/Roads/Roads';
import Top from '../components/Top/Top';
import Articles from '../components/Articles/Articles';

function HomePage() {
    return (
        <div className="">
            <Hero />

                {/* Search Input */}
                
            {/* lectures  */}
            <Top />
                
                {/* New News */}
            <Roads />
            
            {/* Articles */}
            <Articles />
            </div>


        
    );
}

export default HomePage;

