import React from 'react';
import { Helmet } from 'react-helmet-async';
import picture from './image.jpg';
const About = () => {
    return (
        <div className="container-fluid ">
             <h1>
                <title>About - Eliot's law farm  </title>
            </h1>
            <div class="card " >
                <img src={picture} class="card-img-top mx-auto" alt="..." style={{ objectFit: 'cover', height: '500px',width:'700px' }} />
                <div class="card-body">
                    <h2 class="card-text">Mohammad Rahat Akand</h2>

                    <p class="card-text">Hi This is Mohammad Rahat Akand. 
                    I am currently a student who have just finished his 10th semester and onto his 11th semester. 
                    Till now I’m gained proficiency in C, C++, Java, Python, SQL, HTML and CSS and I can assure you that these skills would prove to be useful for wide spreading any IT company’s image. 
                    I am trying to developing in those language skills through self-taught. Besides this I am trying to develop different apps by using Flutter through cross platform even though I am trying by level best to make personal portfolio by Python’s framework Django.
                    <br/>
                    But currently I am doing this course for learning React, and also I really need a internship.  
                    </p>

                </div>
            </div>

        </div>
    );
};

export default About;