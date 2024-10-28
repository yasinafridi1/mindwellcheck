import { BsHandThumbsUpFill } from "react-icons/bs";
import { MdError, MdWarning } from "react-icons/md";

export const lowRiskSMAData = (buttonNextClick) => ({
  icon: <BsHandThumbsUpFill />,
  data: [
    {
      header: "Great job!",
      description:
        "You're using social media in a healthy way.You're balancing your online and offline life well. Social media is just one part of your day, and you’re making time for other things too.",
    },
  ],
  tips: [
    "- Keep Doing What You Love:  Spend time on hobbies, with friends, or outdoors—these moments can make your day even better!",
    "- Quick Check:  Think about a recent fun memory that didn’t involve a screen—these are the moments that make life richer!",
  ],
  buttons: [
    {
      text: "Close",
      onClick: buttonNextClick,
    },
  ],
  otherFactors: [],
});

export const moderateRiskSMAData = (buttonNextClick) => ({
  icon: <MdWarning />,
  data: [
    {
      header: "Use with Caution",
      description:
        "You’re on the right track, but there’s room to improve! Cutting back a little could make your day even better.",
    },
    {
      description:
        "You're a regular on social media, and a small change in screen time might give you more time to enjoy other things you love!",
    },
  ],
  tips: [
    "- Set a Small Goal:  Try using social media a little less each day—just 10 minutes less to start!",
    "- Switch Up Your Time:  Swap some screen time for an activity you enjoy—like a walk, a call with a friend, or reading.",
    "- Notice the Good Stuff:  Find something you enjoy offline every day, even if it’s something small.",
  ],
  buttons: [
    {
      text: "Next",
      onClick: buttonNextClick,
    },
  ],
  additionalServey: [
    { name: "loneliness", label: "Loneliness" },
    { name: "mentalFatigue", label: "Mental Fatigue" },
  ],
});

export const highRiskSMAData = (buttonNextClick) => ({
  icon: <MdError />,
  data: [
    {
      header: "Heads up! ",
      description: "Social media might be taking up a big part of your time.",
    },
    {
      description:
        "Using social media this much might leave less time for other things you enjoy or need to do. Cutting back a bit could help you feel more in control and find more time for other activities.",
    },
  ],
  tips: [
    "- Start Small:  Today, try reducing screen time by just 5 or 10 minutes and see how it feels.",
    "- Check Your Triggers: Notice what makes you want to open social media. Is it boredom, stress, or something else?",
    "- Do One Fun Offline Thing:  Try something you enjoy offline today—even a small activity like listening to a favorite song or taking a walk can feel refreshing.",
  ],
  buttons: [
    {
      text: "Next",
      onClick: buttonNextClick,
    },
  ],
  additionalServey: [
    { name: "loneliness", label: "Loneliness" },
    { name: "lifeSatisfaction", label: "Life Satisfaction" },
    { name: "anxiety", label: "Anxiety" },
    { name: "depression", label: "Depression" },
    { name: "selfEsteem", label: "Self-esteem" },
    { name: "mentalFatigue", label: "Mental Fatigue" },
  ],
});

export const lowLonelinessData = (buttonClick) => ({
  icon: <BsHandThumbsUpFill />,
  data: [
    {
      header: "Well Connected!",
      description:
        "Your support system is strong, and it shows. Great job staying connected! Feeling connected is a key part of well-being. Your current connections seem to keep loneliness low, which is fantastic.",
    },
  ],
  tips: [
    "- Stay Present with Loved Ones:  Keep spending quality time with family or friends in person—those face-to-face moments are meaningful.",
    "- Practice Self-Care:  Simple activities like journaling or going for a walk can help you feel centered and connected to yourself.",
  ],
  buttons: [
    {
      text: "Close",
      onClick: buttonClick,
    },
  ],
  otherFactors: [],
});

// export const moderateLonelinessData = (buttonClick) => ({
//   icon: <BsHandThumbsUpFill />,
//   data: [
//     {
//       header: "Well Connected!",
//       description:
//         "Your support system is strong, and it shows. Great job staying connected! Feeling connected is a key part of well-being. Your current connections seem to keep loneliness low, which is fantastic.",
//     },
//   ],
//   tips: [
//     "- Stay Present with Loved Ones:  Keep spending quality time with family or friends in person—those face-to-face moments are meaningful.",
//     "- Practice Self-Care:  Simple activities like journaling or going for a walk can help you feel centered and connected to yourself.",
//   ],
//   buttons: [
//     {
//       text: "Close",
//       onClick: buttonClick,
//     },
//   ],
//   otherFactors: [],
// });
