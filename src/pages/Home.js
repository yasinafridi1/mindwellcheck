import React, { useState } from "react";
import Card from "../components/Cards/Card";
import Question from "../components/Typography/question";
import Paragraph from "../components/Typography/Paragraph";
import { effectsOfSocialMedia } from "../data/factors";
import SocialMediaModal from "../components/Modal/SocialMediaModal";
import ButtonPrimary from "../components/Button/ButtonPrimary";
import { useSelector } from "react-redux";
import TextModal from "../components/Modal/TextModal";
import { MdTipsAndUpdates } from "react-icons/md";
import FlexBox from "../components/wrapper/FlexBox";
import MessageHeader from "../components/Typography/MessageHeader";
import IconModal from "../components/Modal/IconModal";
import {
  highRiskSMAData,
  lowRiskSMAData,
  moderateRiskSMAData,
} from "../data/textMessages";
import { RiCalendarScheduleFill } from "react-icons/ri";

const Home = () => {
  const dashboardData = useSelector((state) => state.dashboard.data);
  const [open, setOpen] = useState(true);
  const [textModal, setTextModal] = useState(false);
  const [messageModal, setMessageModal] = useState(false);
  const [tipsModal, setTipsModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [otherFactorsModal, setOtherFactorsModal] = useState({
    status: false,
    data: [],
  });

  const [lastStep, setLastStep] = useState(false);
  function openSMAModal() {
    if (dashboardData.canSubmitNewSurvey) {
      setOpen(true);
    } else {
      setTextModal(!textModal);
    }
  }

  function closeSMAModal(data) {
    if (data?.lastServeyFactor) {
      if (data.lastServeyFactor <= 11) {
        setModalContent(() => {
          return lowRiskSMAData(closeTipModal);
        });
      } else if (data.lastServeyFactor > 11 && data.lastServeyFactor <= 17) {
        setModalContent(() => {
          return moderateRiskSMAData(openAdditionalServeyFactors);
        });
      } else {
        setModalContent(() => {
          return highRiskSMAData(openAdditionalServeyFactors);
        });
      }
      setMessageModal(true);
    }
    setOpen(false);
  }

  function closeMessageModal() {
    setMessageModal(false);
    setTipsModal(true);
  }

  function closeTipModal() {
    setTipsModal(false);
  }

  function openAdditionalServeyFactors() {
    closeTipModal();
    setOtherFactorsModal({
      status: true,
      data: [],
    });
  }

  return (
    <>
      {open && <SocialMediaModal open={open} onClick={closeSMAModal} />}
      {textModal && (
        <TextModal
          onClose={() => {
            setTextModal(false);
          }}
          open={textModal}
        />
      )}
      {messageModal && (
        <IconModal open={messageModal} icon={modalContent?.icon}>
          <FlexBox>
            {modalContent?.data.map((item, index) => (
              <MessageHeader
                key={index}
                header={item?.header}
                description={item?.description}
              />
            ))}
          </FlexBox>
          <div className="w-full flex justify-end items-start mt-4">
            <ButtonPrimary onclick={closeMessageModal} text="Next" />
          </div>
        </IconModal>
      )}

      {tipsModal && (
        <IconModal open={tipsModal} icon={<MdTipsAndUpdates />}>
          <FlexBox>
            <MessageHeader header="Tips to Stay Balanced" />
            {modalContent?.tips?.map((item, index) => (
              <MessageHeader key={index} description={item} />
            ))}
          </FlexBox>
          <div className="w-full flex justify-end items-start mt-4">
            {modalContent?.buttons.map((item, index) => (
              <ButtonPrimary
                key={index}
                onclick={item.onClick}
                text={item.text}
              />
            ))}
          </div>
        </IconModal>
      )}

      {otherFactorsModal.status && (
        <IconModal
          open={otherFactorsModal.status}
          icon={<RiCalendarScheduleFill />}
        >
          <FlexBox>
            <MessageHeader header={"One Last Step!"} />
          </FlexBox>
          <FlexBox customClassses={"!items-start"}>
            <h1 className="text-base mt-2">
              Base on your social media addiction factor, we have suggested you
              to take below servey. Do you want to take the servey ?
            </h1>
          </FlexBox>
          <div className="w-full flex justify-end items-start mt-4">
            <ButtonPrimary
              onclick={() => {
                setOtherFactorsModal({ status: false, data: [] });
              }}
              text="Close"
            />
          </div>
        </IconModal>
      )}

      <section className="!overflow-auto">
        <h1 className="poppin-700 text-xl text-gray-700">Dashboard</h1>
        <div className="flex w-full justify-start items-start gap-8 flex-wrap mt-4 pr-4">
          <Card
            header="Total Servey"
            value={dashboardData?.totalServey}
            customClass={"bg-emerald-800"}
          />
          <Card
            header="Latest Addiction Factor"
            value={dashboardData?.lastServeyFactor}
            customClass={"bg-yellow-800"}
          />
          {/* <Card
            header="Average Addiction Factor"
            value={dashboardData?.averageResultFactor}
            customClass={"bg-pink-900"}
          /> */}
        </div>
        <div className="mt-6 flex justify-center items-center mr-5">
          <button
            onClick={openSMAModal}
            className="w-full px-16 bg-[--primary] rounded-md py-3 text-white poppin-600 text-xl border-2 border-[--primary] hover:bg-white hover:text-[--primary] duration-500 transition-all ease-in-out"
          >
            Want to check your social media addiction?
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

          <div className="w-full flex justify-end items-start">
            <ButtonPrimary
              type="button"
              onclick={openSMAModal}
              text="Check SMA"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
