import { FaHeart } from 'react-icons/fa';




const AppFooter = () => {

    return (
        <footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div>
      
                    <p className="max-w-xs mt-4 text-sm text-gray-600">
                    dibuat dengan <FaHeart size={20}/> bantuan express, react, dan tailwind
                    </p>
                    <div className="flex mt-8 space-x-6 text-gray-600">

                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <a className="hover:opacity-75 cursor-pointer" href="/"> About </a>
                  
                    </div>
                    <div>
                        <a className="hover:opacity-75 cursor-pointer" href="/"> Projects </a>
                    
                    </div>
                    <div>
                        <a className="hover:opacity-75 cursor-pointer" href="/"> About Me </a>
                  
                    </div>
                    <div>
                    <a className="hover:opacity-75 cursor-pointer" href="/"> Contact </a>
                 
                    </div>
                </div>
                </div>
                <p className="mt-8 text-xs text-gray-800">
                © 2022 Lintang Birda Saputra
                </p>
            </div>
            </footer>
    )
}




export default AppFooter;

