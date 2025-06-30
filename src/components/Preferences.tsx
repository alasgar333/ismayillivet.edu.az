import React from 'react'

function Preferences() {
  return (
    <div>

<div className="container pb-16 pt-8">
    <div className="grid-cols-2 mb-6">
      <span className="text-3xl md:text-4xl font-medium   font-bold mb-6 text-primary">Nə üçün İsmayıllı Dövlət <br></br>Peşə Təhsil Mərkəzi?</span>
      <span className="text-xl float-right text-primary font-bold"><a href="#" className="">digər imkanlar <i className='fa-solid fa-angles-right'></i> </a></span>
</div>
<div className="grid lg:grid-cols-3 sm:grid-cols-3 gap-3">


    <div className="overflow-hidden relative group rounded-xl">
        <img src="img/ustunluk/yataqxana.jpg" className="w-full"/>
        <a href="#" className="absolute inset-0 flex items-center justify-center text-xl
         text-white font-roboto font-medium bg-black bg-opacity-60 hover:bg-opacity-40 transition">Yataqxana</a>


    </div>

    <div className="overflow-hidden relative group rounded-xl">
        <img src="img/ustunluk/emalatxana.jpg" className="w-full"/>
        <a href="#" className="absolute inset-0 flex items-center justify-center text-xl
         text-white font-roboto font-medium bg-black bg-opacity-60 hover:bg-opacity-40 transition">Emalatxana</a>


    </div>
  
    <div className="overflow-hidden relative group rounded-xl">
        <img src="img/ustunluk/teqaud.jpg" className="w-full"/>
        <a href="#" className="absolute inset-0 flex items-center justify-center text-xl
         text-white font-roboto font-medium bg-black bg-opacity-60 hover:bg-opacity-40 transition">Təqaüd</a>


    </div>
    
    <div className="overflow-hidden relative group rounded-xl">
        <img src="img/ustunluk/kitabxana.jpg" className="w-full"/>
        <a href="#" className="absolute inset-0 flex items-center justify-center text-xl
         text-white font-roboto font-medium bg-black bg-opacity-60 hover:bg-opacity-40 transition">Kitabxana</a>


    </div>
   
    <div className="overflow-hidden relative group rounded-xl">
        <img src="img/ustunluk/labaratoriya.jpg" className="w-full"/>
        <a href="#" className="absolute inset-0 flex items-center justify-center text-xl
         text-white font-roboto font-medium bg-black bg-opacity-60 hover:bg-opacity-40 transition">İT Labaratoriya</a>


    </div>
  
    <div className="overflow-hidden relative group rounded-xl">
        <img src="img/ustunluk/klublar.jpg" className="w-full"/>
        <a href="#" className="absolute inset-0 flex items-center justify-center text-xl
         text-white font-roboto font-medium bg-black bg-opacity-60 hover:bg-opacity-40 transition">Tələbə Klubları</a>


    </div>

   

</div>

</div>
    </div>
  )
}

export default Preferences