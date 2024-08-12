import Image from 'next/image'
import React from 'react'
import { BiBarChart, BiMessageRounded, BiRepost } from 'react-icons/bi'
import { FaRegBookmark, FaRegHeart } from 'react-icons/fa6'


const FeedCard: React.FC = () => {
  return (
    <div className='border-t border-gray-600 p-5 hover:bg-zinc-900 transition-all cursor-pointer'>
      <div className='grid grid-cols-12'>
        <div className='col-span-1'>
          <Image alt='use-img' src={"https://avatars.githubusercontent.com/u/142331648?v=4"}
            height={40}
            width={40}
            className='rounded-full' />
        </div>
        <div className='col-span-11'>
          <h3 className='font-semibold'>  Rakesh pradhan</h3>
          <p className='text-base'>
            It fills us all with immense pride that our esteemed President, Smt. Droupadi Murmu Ji, has been bestowed with "The Champion of the Order of Fiji," Fiji's highest civilian honor, by President Ratu Wiliame Maivalili Katonivere.

            This prestigious recognition highlights the enduring
          </p>
          <div className='flex justify-between pt-3 pb-2'>
            <div className="flex text-xl hover:bg-[#2d3b44] p-1 h-fit w-fit rounded-full cursor-pointer transition-all"> <BiMessageRounded className='hover:text-[#1d9bf0]' /> </div>
            <div className="flex text-2xl hover:bg-[#31443b] p-1 h-fit w-fit rounded-full cursor-pointer transition-all"> <BiRepost className='hover:text-[#34C67F]' /></div>
            <div className="flex text-xl hover:bg-[#775c69] p-1 h-fit w-fit rounded-full cursor-pointer transition-all"> <FaRegHeart className='hover:text-[#D80065]' /></div>
            <div className="flex text-xl hover:bg-[#2d3b44] p-1 h-fit w-fit rounded-full cursor-pointer transition-all"> <BiBarChart className='hover:text-[#1d9bf0]' /></div>
            <div className="flex text-xl hover:bg-[#2d3b44] p-1 h-fit w-fit rounded-full cursor-pointer transition-all"> <FaRegBookmark className='hover:text-[#1d9bf0]' /></div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default FeedCard
