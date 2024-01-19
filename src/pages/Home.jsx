import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (


        <div className="container">
            <div className="col"> <div className="image"><Link to="/thirdpost"><img src="./img/Kalashnikov_AK_47.jpg" alt="" /></Link> </div>
                <div className="name">

                    <h1><Link className='perehod' to="/thirdpost" >AK-47</Link></h1>
                    <b className="price">$799</b>

                </div>
                <h6>250 Reviews</h6>
                <div className="opis-name">
                    <p className="opis">The AK-47, which stands for "Avtomat Kalashnikova 1947" (Russian: Автомат Калашникова 1947).</p>
                    </div>
                <div className="grafic">
                    <div className="year"><h3>1947</h3>
                    <p className="course">TheYear</p>
                    </div>
                    <div className="class-size">
                        <h3>1 cartridge 40 white</h3>

                        </div>
                    <div className="rabota">
                        <h3>FreeDelivery</h3>
                    </div>

                </div>
            </div>


            
            <div className="col">
                <div className="image"><Link to="/thirdpost"><img src="./img/bgd71bw1.jpg" alt="" /></Link></div> <div className="name">
                <h1><Link className='perehod' to="/thirdpost" >UMP-45</Link></h1>
                    <b className="price">$1199</b>
                    <br />
                </div><h6>222 Reviews</h6>
                <div className="opis-name"><p className="opis">The UMP 45, manufactured by Heckler & Koch (HK), is an automatic pistol or submachine gun (SMG) model. "UMP" stands for "Universal Machine Pistol".</p></div>
                <div className="grafic"><div className="year"><h3>1990</h3><p className="course">TheYear</p></div>
                    <div className="class-size"><h3>1 cartridge 35 white</h3>
                        </div>
                    <div className="rabota">
                        <h3>FreeDelivery</h3>
                    </div>

                </div>
            </div>
            <div className="col"> <div className="image"><Link to="/thirdpost"><img src="./img/scale_1200.jpg" alt="" /></Link></div> <div className="name">
            <h1><Link className='perehod' to="/thirdpost" >AwM</Link></h1>
                <b className="price">$999</b>
                <br />
            </div><h6>5 Reviews</h6>
                <div className="opis-name"><p className="opis">AWM stands for "Arctic Warfare Magnum." It is a precision bolt-action sniper rifle designed for extreme accuracy and long-range shooting.</p></div>
                <div className="grafic"><div className="year"><h3>1990</h3><p className="course">TheYear</p></div>
                    <div className="class-size"><h3>1 cartridge 15 white</h3>
                        </div>
                    <div className="rabota">
                        <h3>FreeDelivery</h3>
                    </div>

                </div>
            </div>
        </div>



    )
}

export default Home