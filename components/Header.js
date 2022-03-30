import Image from "next/image";
import React from "react";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

function Header() {
  return (
    <div>
      <div className={"flex items-center"}>
        {/* Header Left */}
        <div className="flex items-center pl-3">
          <Image
            src="https://links.papareact.com/5me"
            width={40}
            height={40}
            layout="fixed"
            alt="fb logo"
          />
          <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
            <SearchIcon className="h-6 text-gray-600" />
            <input
              className="hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none 
            placeholder-gray-500 flex-shrink"
              type="text"
              placeholder="Search Facebook"
            />
          </div>
        </div>
        {/* Header Center */}
        <div className="flex justify-center flex-grow">
          <div className="flex space-x-6 md:space-x-2">
            <HeaderIcon active Icon={HomeIcon} />
            <HeaderIcon Icon={FlagIcon} />
            <HeaderIcon Icon={PlayIcon} />
            <HeaderIcon Icon={ShoppingCartIcon} />
            <HeaderIcon Icon={UserGroupIcon} />
          </div>
        </div>
        {/* Header Right */}
        <div className="flex items-center sm:space-x-2 justify-end pr-3">
          {/* User Picture */}
          <Image
            // onclick={signout}
            className="rounded-full cursor-pointer"
            src="https://res.cloudinary.com/dlsn5wk0c/image/upload/v1648670636/105617173_3207927545896002_3424517180928198453_n_lw7ugj.jpg"
            width="40"
            height="40"
            layout="fixed"
            alt="Profile Image"
          />
          <p className="whitespace-nowrap font-semibold pr-3">Bryan Dang</p>
          <ViewGridIcon
            className={
              "hidden xl:inline-flex p-2 h-10 w-10 bg-gray-200 rounded-full text-gray-70 cursor-pointer hover:bg-gray-300"
            }
          />
          <ChatIcon
            className={
              "hidden xl:inline-flex p-2 h-10 w-10 bg-gray-200 rounded-full text-gray-70 cursor-pointer hover:bg-gray-300"
            }
          />
          <BellIcon
            className={
              "hidden xl:inline-flex p-2 h-10 w-10 bg-gray-200 rounded-full text-gray-70 cursor-pointer hover:bg-gray-300"
            }
          />
          <ChevronDownIcon
            className={
              "hidden xl:inline-flex p-2 h-10 w-10 bg-gray-200 rounded-full text-gray-70 cursor-pointer hover:bg-gray-300"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
