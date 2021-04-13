import * as React from 'react';

function Home(){
    return(
    <div className='home-container'>

        <div className='home-main'>
            <h1>A team of schmendriks who just copy and paste their own templates forever.</h1>
            <button>Launch Project</button>
        </div>

        <div id='grad-one'>
            <h1>Our Services</h1>
        </div>

        <div id='section-one'>
            <div className='s1-child'>
                <img src='./images/img1.png' />
                <h5>Website Development</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci vel doloribus alias facilis molestias sapiente exercitationem eligendi assumenda saepe, explicabo similique illo expedita perspiciatis natus quas iste dolorem ducimus veritatis?</p>
            </div>
            <div className='s1-child'>
                <img src='./images/img2.png' />
                <h5>Social Media Marketing (SMM)</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente mollitia similique explicabo nihil iste quos dignissimos aliquid illum dolor voluptatum, nam, consectetur in vel vitae molestias, ab ullam animi assumenda?</p>
            </div>
            <div className='s1-child'>
                <img src='./images/img3.png' />
                <h5>Social Engine Optimization (SEO)</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quos velit inventore, eaque illo nemo assumenda quisquam, ratione corporis minima alias, saepe delectus molestiae! Molestiae error maiores soluta sint ex.</p>
            </div>
            <div className='s1-child'>
                <img src='./images/img4.png' />
                <h5>Chatbox Development</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime eum sit tempora, provident nam suscipit voluptas ut veritatis quaerat aperiam voluptatum, non ipsum dolore hic vero quidem aspernatur ullam mollitia.</p>
            </div>
        </div>

        <div id='grad-two'>
            <h1>Completed Projects</h1>
        </div>

        <div id='section-two'>
            <div className='s2-child'>
                <img src='./images/img1.png' />
                <h3>Website Development</h3>
                <button>View</button>
            </div>
            <div className='s2-child'>
                <img src='./images/img1.png' />
                <h3>Website Development</h3>
                <button>View</button>
            </div>
            <div className='s2-child'>
                <img src='./images/img1.png' />
                <h3>Website Development</h3>
                <button>View</button>
            </div>
            <div className='s2-child'>
                <img src='./images/img1.png' />
                <h3>Website Development</h3>
                <button>View</button>
            </div>
            <div className='s2-child'>
                <img src='./images/img1.png' />
                <h3>Website Development</h3>
                <button>View</button>
            </div>
            <div className='s2-child'>
                <img src='./images/img1.png' />
                <h3>Website Development</h3>
                <button>View</button>
            </div>        
        </div>
    </div>
    );
};

export default Home;