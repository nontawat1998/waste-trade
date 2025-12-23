"use client";

// import { api } from "@/lib/trpc/react";
// import { Button } from "@/components/ui/button";

export default function ClientPage() {
  const product = [
    {
      name: "Waste 1",
      picture: "/avatars/image 5.png",
      code: "wa-102-220",
      price: 5200,
      unit: "kg",
      sale: 10,
    },
    {
      name: "Waste 2",
      picture: "/avatars/image 6.png",
      code: "wa-102-220",
      price: 1000,
      unit: "kg",
      sale: 20,
    },
    {
      name: "Waste 3",
      picture: "/avatars/image 7.png",
      code: "wa-102-220",
      price: 6400,
      unit: "kg",
      sale: 0,
    },
    {
      name: "Waste 4",
      picture: "/avatars/image 8.png",
      code: "wa-102-220",
      price: 6010,
      unit: "kg",
      sale: 0,
    },
    {
      name: "Waste 1",
      picture: "/avatars/image 5.png",
      code: "wa-102-220",
      price: 5200,
      unit: "kg",
      sale: 10,
    },
    {
      name: "Waste 2",
      picture: "/avatars/image 6.png",
      code: "wa-102-220",
      price: 1000,
      unit: "kg",
      sale: 20,
    },
    {
      name: "Waste 3",
      picture: "/avatars/image 7.png",
      code: "wa-102-220",
      price: 6400,
      unit: "kg",
      sale: 0,
    },
    {
      name: "Waste 4",
      picture: "/avatars/image 8.png",
      code: "wa-102-220",
      price: 6010,
      unit: "kg",
      sale: 0,
    },
  ];
  return (
    <div>
      
      <div className="flex flex-col gap-4 px-8 pt-[2vh] pb-[2vh] sm:mx-8 sm:px-6 md:mx-8 lg:mx-16 lg:px-8">
        <CardContents />
      </div>
    </div>
  );
}

function CardContents() {
  const product = [
    {
      name: "Waste 1",
      picture: "/avatars/image 5.png",
      code: "wa-102-220",
      price: 5200,
      unit: "kg",
      sale: 10,
    },
    {
      name: "Waste 2",
      picture: "/avatars/image 6.png",
      code: "wa-102-220",
      price: 1000,
      unit: "kg",
      sale: 20,
    },
    {
      name: "Waste 3",
      picture: "/avatars/image 7.png",
      code: "wa-102-220",
      price: 6400,
      unit: "kg",
      sale: 0,
    },
    {
      name: "Waste 4",
      picture: "/avatars/image 8.png",
      code: "wa-102-220",
      price: 6010,
      unit: "kg",
      sale: 0,
    },
  ];
  return (
    <div className=" flex items-center justify-center p-4 md:p-8">
      
      <div className="bg-white w-full max-w-6xl rounded-[30px] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        
        <div className="relative flex items-center justify-center p-8 bg-white">
            <img 
              src="/avatars/login.png" 
              alt="Waste Trade Illustration" 
              className="w-full h-auto object-contain max-h-[500px]"
            />
        </div>

        <div className="flex flex-col justify-center p-8 md:p-16 lg:pr-24">
          
          <div className="mb-12 text-center">
           <img 
              src="/avatars/logo.svg" 
              alt="Waste Trade Illustration" 
              className="w-full h-auto object-contain max-h-[500px]"
            />
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[#639F44] font-semibold text-sm ml-1">
                Username
              </label>
              <input 
                type="text" 
                placeholder="Username" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#639F44]/50 placeholder-gray-300"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[#639F44] font-semibold text-sm ml-1">
                Password
              </label>
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#639F44]/50 placeholder-gray-300"
              />
            </div>

            <div className="flex items-start gap-3 mt-6">
              <div className="flex items-center h-5">
                <input 
                  id="dummy-text" 
                  type="radio" 
                  checked 
                  readOnly
                  className="w-4 h-4 text-[#639F44] border-gray-300 focus:ring-[#639F44]"
                />
              </div>
              <label htmlFor="dummy-text" className="text-xs text-gray-500 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </label>
            </div>

            <div className="pt-4">
              <button 
                type="button"
                className="w-full bg-[#639F44] hover:bg-[#4a802d] text-white font-semibold py-3.5 rounded-xl shadow-lg transition duration-300 ease-in-out transform active:scale-[0.98]"
              >
                Login
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}
