import React from 'react';
import logo from '/logo.svg';
import Homestyle from './HomeStyle.module.css';

function Home() {
  const combinedClassName = [Homestyle.stroked, Homestyle.myfont].join(' '); //ใช้กับตัวอักษรที่ใช้ Stroke กับ font เหมือนกัน

  return (
    <div className={Homestyle.scroll}> {/*ปรับให้หน้า Home มี scroll bar ให้ทำโค้ดภายใน div นี้*/}
      <div className={Homestyle.villageImageOne}> {/*ใส่รูป*/}

        <div style={{position: 'absolute',top: '0%', left: '20%'}}> 
          <div className={Homestyle.myDiv} style={{textAlign: 'center'}}>
            <h1 className={combinedClassName} style={{ marginLeft: '-110%',color: 'white'}}>
              IT<br/>
              ADVENTURER<br/>
              GUILD
            </h1>
         </div>
        </div>

        <div className={Homestyle.myDiv} style={{position: 'absolute',top: '25%', right:'1%'}}>
          <h1 className={combinedClassName} style={{ marginLeft: '-7%',color: 'white'}}>Roll Your Dice</h1>
        </div>

      </div>
    </div>  
  );
}

export default Home;
