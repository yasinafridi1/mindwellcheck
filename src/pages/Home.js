import React, { useState } from "react";
import Card from "../components/Cards/Card";
import Question from "../components/Typography/question";
import Paragraph from "../components/Typography/Paragraph";
import { effectsOfSocialMedia } from "../data/factors";
import Modal from "../components/Modal/Modal";
import SocialMediaModal from "../components/Modal/SocialMediaModal";

const Home = () => {
  const [open, setOpen] = useState(true);
  function handleModal() {
    setOpen(!open);
  }
  return (
    <>
      {open && <SocialMediaModal open={open} onClick={handleModal} />}
      <section className="!overflow-auto">
        <h1 className="poppin-700 text-xl text-gray-700">Dashboard</h1>
        <div className="flex w-full justify-start items-start gap-8 flex-wrap mt-4 pr-4">
          <Card
            header="Total Servey"
            value="8"
            customClass={"bg-emerald-800"}
          />
          <Card
            header="Latest Addiction Factor"
            value="8"
            customClass={"bg-yellow-800"}
          />
          <Card
            header="Average Addiction Factor"
            value="8"
            customClass={"bg-pink-900"}
          />
        </div>
        <div className="mt-6">
          <button className="poppin-600 text-lg text-[--primary-dark] hover:text-[--primary]">
            Want to check your social media addiction?{" "}
          </button>
        </div>
        <div className="mt-4 bg-white p-8 mr-5">
          <Question text="What is social media addiction?" />
          <Paragraph text="Whether you use social media to connect with friends and loved ones, watch videos, or simply “kill time,” the popularity of this pastime has increased significantly over the last decade. This is especially the case in children and teenagers, as well as young to middle-aged adults." />
          <Paragraph text="So, how does a seemingly harmless hobby turn into an “addiction”?" />
          <Paragraph
            customClass={"mb-5"}
            text="Like other types of behavioral addictions, using social media can influence your brain in harmful ways. You may use social media compulsively and excessively. You can become so accustomed to scrolling through posts, images, and videos that it interferes with other areas of your life. Not everyone who uses social media will develop an addiction. Since this activity is becoming more accessible to more people, though, more people may develop an addiction to social media at some point in their lives."
          />

          <Question text="Why is social media so addicting?" />
          <Paragraph text="While social media can seem like mindless and relaxing fun, it actually has a significant effect on your brain. Whenever you log on to your favorite apps, dopamine signals in your brain increase. These neurotransmitters are associated with pleasure. When you experience more dopamine after using social media, your brain identifies this activity as a rewarding one that you ought to repeat. Such a reaction may be more felt whenever you make a post of your own and gain positive feedback." />
          <Paragraph
            customClass="mb-5"
            text="The positive feelings experienced during social media use are only temporary. The way your brain engages in this positive reinforcement is also seen in other addictions. Thus, as the feel-good dopamine wears off, you’ll go back to the source (in this case, social media) for more. In some cases, social media can be a welcome distraction if you’re isolated due to work or an illness. The more you engage, the more your brain will tell you that this is an activity that can help reduce loneliness (which may not necessarily be the case, actually)."
          />

          <Question text="What are the downsides of social media addiction?" />
          <Paragraph text="Engaging in social media once in a while is unlikely to be harmful. However, there are negative effects to consider when overusing social media." />
          <Paragraph text="Some possible downsides of social media include:" />
          <ul className="ml-7 list-disc">
            {effectsOfSocialMedia.map((item, index) => {
              return (
                <li key={index} className="text-gray-700 text-base">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
