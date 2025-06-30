import React from 'react'

function Footer() {
  return (
    <div>
      


<footer className="bg-second pt-16 pb-12 border-t border-primary">
  <div className="container">
     <div className="xl:grid xl:grid-cols-3 xl:gap-8">
         <div className="space-y-8 xl:col-span-1">
             <img src="img/loqo-white.png" className="w-auto h-auto" alt="Youtube Efe Görkem Ümit" />
             <p className="text-white text-sm font-poppins" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, reprehenderit.</p>

             <div className="flex space-x-5">
                 <a href="#" className="text-white text-sm font-poppins hover:text-gray-400">
                     <i className="fa-brands fa-facebook"></i>

                 </a>

                 <a href="#" className="text-white text-sm font-poppins hover:text-gray-400">
                     <i className="fa-brands fa-twitter"></i>

                 </a>

                 <a href="#" className="text-white text-sm font-poppins hover:text-gray-400">
                     <i className="fa-brands fa-instagram"></i>

                 </a>

                 <a href="#" className="text-white text-sm font-poppins hover:text-gray-400">
                     <i className="fa-brands fa-tiktok"></i>

                 </a>

                 <a href="#" className="text-white text-sm font-poppins hover:text-gray-400">
                     <i className="fa-brands fa-youtube"></i>

                 </a>


             </div>
         </div>

      <div className="mt-2 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
         <div className="md:grid md:grid-cols-2 md:gap-8">
             <div>
                 <h3 className="text-xl text-white font-semibold uppercase tracking-wide mt-10 lg:mt-0 "> Əlaqə</h3>
                 <div className="mt-4 space-y-4">
                     <a href="#" className="text-white hover:text-gray-300 font-semibold block"><i className="fa-solid fa-phone"><br /> <br /> (020) 285 30 89</i></a>
                     <a href="#" className="text-white hover:text-gray-300 font-semibold block"><i className="fa-solid fa-envelope"></i> <br /> info.ismayilli@vet.edu.az</a>
                    
                 

                 </div>


             </div>

           


         </div>

         <div className="md:grid md:grid-cols-2 md:gap-8">
             <div>
                 <h3 className="text-xl text-white font-semibold uppercase tracking-wide mt-10 lg:mt-0"> Ünvan</h3>
                 <div className="mt-4 space-y-4">
                     <a href="#" className="text-white hover:text-gray-300 font-semibold block">
                     <i className="fa-solid fa-location-dot"></i> <br />
                        İsmayıllı Dövlət Peşə Təhsil Mərkəzi, Ismayıllı, Azerbaijan, Az 3100</a>
                     
                 

                 </div>


             </div>

             <div>
                


             </div>


         </div>




      </div>
    

        
          

     </div>
     
  </div>
</footer>


          <div className="bg-second py-5 mb-16 lg:mb-0 ">
             <div className="container flex items-center justify-between">
                 <p className="text-amber-50 font-semibold">© İsmayıllı Dövlət Peşə Təhsil Mərkəzi</p>

                 <div>
                     <img src='img/Asset-color-white.png' className="w-auto h-auto " />
                 </div>



             </div>
          </div>



    </div>
  )
}

export default Footer