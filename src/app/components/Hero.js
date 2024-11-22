'use client'
import Image from "next/image";

export default function Hero() {
 return (
   <section className="bg-gray-900 text-white py-16">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="text-center space-y-8">
         <h1 className="text-5xl md:text-6xl font-bold">
           Welcome to <span className="text-blue-400">TaskBust</span>
         </h1>
         
         <p className="text-xl text-gray-300 max-w-2xl mx-auto">
           Manage tasks effectively and earn money with ease!
         </p>

         <div className="flex flex-col md:flex-row gap-4 justify-center">
           <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
             Post Your Work
           </button>
           
           <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
             Do Work & Earn Money
           </button>
         </div>

         <div className="relative mt-12">
           <Image
             src="/Taskbust_hero.jpg"
             alt="TaskBust Hero"
             width={600}
             height={400}
             className="rounded-lg shadow-xl mx-auto"
             priority
           />
         </div>
       </div>
     </div>
   </section>
 );
}