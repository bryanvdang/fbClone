import React from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Bryan Dang",
    src: "https://res.cloudinary.com/dlsn5wk0c/image/upload/v1648670636/105617173_3207927545896002_3424517180928198453_n_lw7ugj.jpg",
    profile:
      "https://res.cloudinary.com/dlsn5wk0c/image/upload/v1648700099/17882986_195418367631479_4757060748612468736_n_vqdh7s.jpg",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
