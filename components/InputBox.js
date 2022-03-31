import Image from "next/image";
import React from "react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";

function InputBox() {
  const sendPost = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src="https://res.cloudinary.com/dlsn5wk0c/image/upload/v1648670636/105617173_3207927545896002_3424517180928198453_n_lw7ugj.jpg"
          width={40}
          height={40}
          layout="fixed"
          alt="profile image"
        />
        <form className="flex flex-1">
          <input
            type="text"
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            placeholder={`What's on your mind, Bryan?`}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
