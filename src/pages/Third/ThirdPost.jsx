import React from 'react'
import classes from './Third.module.css'

const ThirdPost = () => {

    return (
        <div>
            <div className={classes.img}><img src="./img/00.jpg" alt="" /></div>

            <div className={classes.designcontainer}>
                <div className={classes.container}>
                    <h1>WeaponStore</h1>
                    <div className={classes.profile}>
                        <img src="./img/default.jpg" alt="" />
                        <div className={classes.profile_name}>
                            <h2>M1steR.X</h2>
                        </div>
                        <div className={classes.photoshop}>
                            <h2>Weapon</h2>
                        </div>
                        <div className={classes.reviews}>
                            <h2>2500 Reviews</h2>
                        </div>

                       
                    </div>
                    <div className={classes.uxui}>
                        <img src="./img/2021-08-21.jpg" alt="" />
                        </div>
                </div>
                <div className={classes.second_container}>
                    <h1>Categories</h1>
                    <div className={classes.line}></div>

                    <div  className={classes.web_design}> <h3>Pistolets (9+1)</h3></div>
                    <div  className={classes.web_design}><h3 >AutomaticWeapon (33)</h3></div>
                    <div  className={classes.web_design}><h3 >Snipper (13)</h3></div>
                    
                    <div className={classes.browse}>
                        <h1>Browse by Teacher</h1>
                        <div className={classes.lini}></div>

                        <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore voluptates adipisci dignissimos minus doloremque. Sit tenetur at cum similique!</p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default ThirdPost