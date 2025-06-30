import React from 'react'

function Durum() {
  return (
    <div>
        <div className="container">

<div className="justify-center mx-auto grid md:grid-cols-4 lg:w-10/12 lg:gap-6 mt-3 ">

    <div className="border border-primary rounded-xl px-8 flex justify-center
     items-center transition lg:px-3 lg:py-6 gap-5 mb-2 ml-1 ">

        <i className="student"> 
         <img src="./img/01student.png" alt="" />
        </i>

        <div className="px-3 py-2 space-y-1">
        <h4 className=" capitalize text-2xl text-center text-primary font-bold" >400</h4>
        <h4 className="text-primary text-2xl lg:text-xl, font-bold">Tələbə</h4>
    </div>
    </div>

    <div className="border border-primary rounded-xl px-8 flex justify-center
     items-center transition lg:px-3 lg:py-6 gap-5 mb-2 ml-1 ">

        <i className="teacher">
        <img src="./img/02teacher.png" alt="" />
        </i>
        <div className="px-3 py-2 space-y-1">
        <h4 className=" capitalize text-2xl text-center text-primary font-bold" >100</h4>
        <h4 className="text-primary text-2xl lg:text-xl, font-bold">Müəllim</h4>
    </div>
    </div>

    <div className="border border-primary rounded-xl px-8 flex justify-center
     items-center transition lg:px-3 lg:py-6 gap-5 mb-2 ml-1">

     <i className="ixtisas">
     <img src="./img/03ixtisas.png" alt="" />
     </i>

        <div className="px-3 py-2 space-y-1">
        <h4 className=" capitalize text-2xl text-center text-primary font-bold" >18</h4>
        <h4 className="text-primary text-2xl lg:text-xl, font-bold">İxtisas</h4>
    </div>
    </div>

    <div className="border border-primary rounded-xl px-8 flex justify-center
     items-center transition lg:px-3 lg:py-6 gap-5 mb-2 ml-1">

     <i className="ytp">
     <img src="./img/04YTP.png" alt="" />
     </i>

        <div className="px-3 py-2 space-y-1">
        <h4 className=" capitalize text-2xl text-center text-primary font-bold" >3</h4>
        <h4 className="text-primary text-2xl lg:text-xl, font-bold">YTP</h4>
    </div>
    </div>


</div>



</div>
    </div>
  )
}

export default Durum