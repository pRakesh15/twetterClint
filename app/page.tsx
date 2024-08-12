import FeedCard from "@/components/FeedCard/FeedCard";
import React from "react";
import { BsSlashSquare } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { FaRegUser, FaXTwitter } from "react-icons/fa6";
import { GrHomeRounded, GrNotification } from "react-icons/gr";
import { HiUsers } from "react-icons/hi";
import {  IoSearchSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

interface TwitterSideBarButtion{
  title:string,
  icon:React.ReactNode
}

const sideBarmenueItem:TwitterSideBarButtion[]=[
    {
      title:'Home',
      icon:<GrHomeRounded />

    },
    {
      title:'Explore',
      icon:<IoSearchSharp />
    },
    {
      title:'Notifications',
      icon:<GrNotification />
    },
    {
      title:'Messages',
      icon:<MdEmail />
    },
    {
      title:'Grok',
      icon:<BsSlashSquare />
    },
    {
      title:'Communities',
      icon:<HiUsers />
    },
    {
      title:'Premium',
      icon: <FaXTwitter />
    },
    {
      title:'Profile',
      icon: <FaRegUser />
    },
    {
      title:'More',
      icon: <CgMoreO />
    },
]

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-32">
        <div className="col-span-2 pt-4 px-3 ">
          <div className="flex text-3xl hover:bg-zinc-900 p-2 h-fit w-fit rounded-full cursor-pointer transition-all">
          <FaXTwitter />
          </div>
          <div>
            <ul>
              {
                sideBarmenueItem.map((item)=>(
                  <li key={item.title} className="flex px-2 py-3 hover:bg-zinc-900 cursor-pointer rounded-3xl w-fit">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-xl px-3">{item.title}</span>
                  </li>
                ))
              }
            </ul>
            <button className="bg-[#1d9bf0] p-4 rounded-full w-full mt-2">Post</button>
          </div>
        </div>
        <div className="col-span-7 border-r-[.5px] border-l-[.5px] border-gray-700 ml-14">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        <div className="col-span-3"></div>

      </div>
    </div>
  );
}
