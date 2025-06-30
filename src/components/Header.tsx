import React from 'react'



function Header() {
  return (
    <div>
    <header className="py-4 shadow-xl bg-white lg:bg-white">

        <div className="container flex items-center justify-between">
     
                <a href="">
                    <img src="https://yt3.googleusercontent.com/ytc/AIdro_kFTPHzj1k1yVZGYXVljclQ1pGVAGBE3U155-74OMIYEA=s900-c-k-c0x00ffffff-no-rj" className="h-20" />
                </a>

                <p className='container text-right font-freehand drop-shadow-sm text-2xl text-primary'>Sumagallı Kənd Tam Orta Məktəbi</p>               
           

        </div>

    </header>

         <nav className="bg-second hidden lg:block">
            <div className="container">
                <div className="flex">
                    <div className="px-8 py-4 bg-primary  font-semibold flex items-center cursor-pointer group relative">
                        <span className="text-white">
                            <i className="fa-solid fa-bars"></i>

                        </span>
                        <span className="ml-2 text-white ">Mərkəzimiz haqqında</span>
                           

                                 <div className="absolute left-0 top-full w-full bg-white shadow-xl py-3 opacity-0 
                                 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50
                                 divide-y divide-gray-500 divide-dashed">
                                 <a className="px-6 py-3 flex items-center hover:bg-gray-200 transition" href="#">
                                    <i className="fa-solid fa-folder-tree"></i>
                                   <span className="ml-6 text-gray-500 text-sm font-semibold">Struktur</span> 
                                 </a>

                                 <a className="px-6 py-3 flex items-center hover:bg-gray-200 transition" href="#">
                                    <i className="fa-solid fa-person-chalkboard"></i>
                                   <span className="ml-6 text-gray-500 text-sm font-semibold">Müəllimlərimiz</span> 
                                 </a>

                                 <a className="px-6 py-3 flex items-center hover:bg-gray-200 transition" href="#">
                                    <i className="fa-solid fa-handshake-simple"></i>
                                   <span className="ml-6 text-gray-500 text-sm font-semibold">Xidmətlərimiz</span> 
                                 </a>

                                 <a className="px-6 py-3 flex items-center hover:bg-gray-200 transition" href="#">
                                    <i className="fa-solid fa-building-columns"></i>
                                 <span className="ml-6 text-gray-500 text-sm font-semibold">Yüksək PT</span> 
                                 </a>

                                 <a className="px-6 py-3 flex items-center hover:bg-gray-200 transition" href="#">
                                    <i className="fa-solid fa-user-doctor"></i>
                                   <span className="ml-6 text-gray-500 text-sm font-semibold">İxtisaslar</span> 
                                 </a>

                                 <a className="px-6 py-3 flex items-center hover:bg-gray-200 transition" href="#">
                                    <i className="fa-solid fa-user-graduate"></i>
                                   <span className="ml-6 text-gray-500 text-sm font-semibold">Məzunlarımız</span> 
                                 </a>


                                 </div>

                     

                    </div>

                    <div className="flex items-center flex-grow pl-16 justify-between">
                        <div className="flex items-center space-x-7 text-base">
                        <a className="text-white font-semibold hover:text-gray-200 transition" href="/"> <i className="fa-solid fa-house"></i></a>
                            
                            <a className="text-white font-semibold hover:text-gray-200 transition" href="/news"> <i className="fa-solid fa-newspaper"></i>  Xəbərlər</a>
                            <a className="text-white font-semibold hover:text-gray-200 transition" href="education"> <i className="fa-solid fa-graduation-cap"></i> Təhsil</a>
                            <a className="text-white font-semibold hover:text-gray-200 transition" href="/carrier"><i className="fa-solid fa-briefcase"></i>  Karyera</a>
                            <a className="text-white font-semibold hover:text-gray-200 transition" href="/shop"> <i className="fa-solid fa-cart-shopping"></i> Vet Market</a>
                            <a className="text-white font-semibold hover:text-gray-200 transition" href="/art"> <i className="fa-solid fa-paintbrush"></i> Vet Art</a>
                            <a className="text-white font-semibold hover:text-gray-200 transition" href="/contact"> <i className="fa-solid fa-phone"></i> Əlaqə</a>
                            <a className="text-white font-semibold hover:text-gray-200 transition" href="/message"> <i className="fa-solid fa-envelope"></i> Direktora yaz</a>
                        </div>
                        
                    </div>



                </div>
            </div>

         </nav>
  

             <div className="lg:hidden flex z-40 fixed w-full border-t border-gray-900 shadow-xl bg-white py-3 bottom-0 justify-around items-start px-6">

                <a href="#" className="block text-center text-gray-950 hover:text-primary transition relative">
                    <div className="text-2xl" id="menuBar">
                        <i className="fa-solid fa-bars"></i> 
                    </div>

                    <div className="text-xs leading-3">Menu</div>
                </a>

                <a href="#" className="block text-center text-gray-950 hover:text-primary transition relative">
                    <div className="text-2xl">
                        <i className="fa-solid fa-magnifying-glass"></i>
                     </div>

                    <div className="text-xs leading-3">Search</div>
                </a>

                <a href="#" className="block text-center text-gray-950 hover:text-primary transition relative">
                    <div className="text-2xl">
                        <i className="fa-solid fa-bars-progress"></i>
                    </div>

                    <div className="text-xs leading-3">Category</div>
                </a>

                <a href="#" className="block text-center text-gray-950 hover:text-primary transition relative">
                    <span className="absolute -right-3 -top-1 w-5 h-5 rounded-lg flex items-center justify-center bg-primary text-white text-xs font-bold"> 3</span>
                    <div className="text-2xl">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>

                    <div className="text-xs leading-3">Cart</div>
                </a>

                

             </div>



                        <div className="fixed left-0 top-0 w-full h-full z-50 bg-black bg-opacity-30  shadow hidden" id="mobileMenu">
                            <div className="absolute left-0 top-0 w-72 h-full z-50 bg-white shadow-md">
                                <div className="text-gray-600 hover:text-primary text-lg absolute right-3 top-3 cursor-pointer" id="closeMenu">

                                    <i className="fa-solid fa-xmark"></i>

                                </div>

                                <h3 className="text-xl pt-6 pl-4 font-roboto text-gray-700 font-semibold"> Menu</h3>
                                <div>

                                    <a href="#" className="block px-4 py-4 font-medium transition hover:bg-primary hover:text-white">   <i className="fa-solid fa-home"></i> Home</a>
                                    <a href="#" className="block px-4 py-4 font-medium transition hover:bg-primary hover:text-white">   <i className="fa-solid fa-cart-shopping"></i> Shop</a>

                                    <a href="#" className="block px-4 py-4 font-medium transition hover:bg-primary hover:text-white">   <i className="fa-solid fa-address-card"></i> About</a>

                                    <a href="#" className="block px-4 py-4 font-medium transition hover:bg-primary hover:text-white">   <i className="fa-solid fa-phone"></i> Contact</a>
                                    <a href="#" className="block px-4 py-4 font-medium transition hover:bg-primary hover:text-white">   <i className="fa-solid fa-user"></i> Login</a>
                                    <a href="#" className="block px-4 py-4 font-medium transition hover:bg-primary hover:text-white">   <i className="fa-solid fa-user-plus"></i> Register</a>
                                </div>

                            </div>
                        </div>
                       </div>
  )
}

export default Header