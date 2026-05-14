import React from 'react'
import Style from "./About.module.css";

const Contact = () => {
  return (
    <div className=' contact  vh-100 d-flex align-items-center justify-content-center'>
      <div className="container   ">
      <h2 className='w-100 text-center text-black fs-1 fw-bold text-uppercase'>conatct section</h2>
       <div className=" icons d-flex justify-content-center align-items-center mb-3">
                  <div className={`${Style.line} me-4 bg-black`}></div>
                  <i class="fa-solid fa-star "></i>
                  <div className={`${Style.line} ms-4 bg-black`}></div>
                </div>


   <div className='w-50 mx-auto mt-5 p-5'>
  <div className=" mb-3 ">
    <input type="name" className="form-control border-bottom" id="floatingInput" placeholder="userName" />
   
  </div>

   <div className=" mb-3 ">
    <input type="age" className="form-control border-bottom" id="floatingInput" placeholder="userAge" />
   
  </div>


   <div className=" mb-3 ">
    <input type="email" className="form-control border-bottom" id="floatingInput" placeholder="userEmail" />
   
  </div>


   <div className=" mb-3 ">
    <input type="password" className="form-control border-bottom" id="floatingInput" placeholder="userPassword" />
   
  </div>
  

  <div className="btn btn-group bg-success text-white">Send message</div>
</div>




      </div>
    
    </div>
  )
}

export default Contact
