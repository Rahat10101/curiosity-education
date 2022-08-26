import React from 'react';
import { Helmet } from 'react-helmet-async';
import Services from '../../Components/Services/Services';

import Slider from '../../Components/Slider/Slider';
import VideoCard from '../../Components/VideoCard/VideoCard';


const Home = () => {
    return (
        <div>
            <h1>
                <title> Home - Curiosity Education</title>
            </h1>
            <Slider></Slider>
            <Services></Services>
            <VideoCard></VideoCard>

        </div>
    );
};

export default Home;    