import React from 'react';
import { Link } from 'react-router-dom';

const BodyEng = () => {
  const user = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : null

  return (
    <div className=''>
      <img className="wave" style={{
        zIndex: "999"
      }} src="img/wave.png" alt='ss' />
      <div className='bg-dark'>
        <div href='#malumot' className="container">
          <div className="img">
            <img style={{
              zIndex: "999"
            }} src="img/bg.svg" alt='sss' />
          </div>
          <div className="login-content">
            <form action="">
              <h2 id='ranglar' className="title text-white">Recording Voice</h2>{/* Matn  text  */}
              {
                user ?
                  <button type="button" className="btn w-100 text-white py-3 pulse px-2">
                    <span style={{
                      paddingRight: "50px",
                      paddingLeft: "50px"
                    }}>Recording</span>
                  </button>
                  :
                  <Link to={"/regis"} className="btn w-100 text-white py-3 pulse">
                    <span style={{
                      paddingRight: "30px",
                      paddingLeft: "30px"
                    }}>Recording</span>
                  </Link>
              }
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BodyEng;