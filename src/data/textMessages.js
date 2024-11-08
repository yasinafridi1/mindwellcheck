import {
  BsHandThumbsUpFill,
  BsEmojiFrownFill,
  BsEmojiExpressionlessFill,
  BsEmojiSmileFill,
  BsEmojiHeartEyesFill,
} from "react-icons/bs";
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
  additionalServey: [],
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
    { name: "loneLiness", label: "Loneliness" },
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
    { name: "loneLiness", label: "Loneliness" },
    { name: "lifeSatisfaction", label: "Life Satisfaction" },
    { name: "anxiety", label: "Anxiety" },
    { name: "depression", label: "Depression" },
    { name: "selfEsteem", label: "Self-esteem" },
    { name: "mentalFatigue", label: "Mental Fatigue" },
  ],
});

const lowLonelinessData = (buttonClick) => ({
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
  additionalServey: [],
});

const moderateLonelinessData = (buttonClick) => ({
  icon: <BsHandThumbsUpFill />,
  data: [
    {
      header: "Almost There!",
      description:
        "You’re doing well, but could feel even more connected! Sometimes you might feel a little lonely, but small changes can help bring you closer to others. While you feel connected at times, there might be moments where you crave deeper or more regular connection.",
    },
  ],
  tips: [
    "- Plan Regular Meetups: Set up coffee chats or catch-ups with friends or family in person.",
    "- Try a Community Activity: Local classes or hobby groups can introduce you to new people with shared interests.",
    "- Enjoy Nature: Spending time outdoors, especially with others, can help reduce feelings of isolation.",
  ],
  buttons: [
    {
      text: "Close",
      onClick: buttonClick,
    },
  ],
  additionalServey: [],
});

const highLonelinessData = (buttonClick) => ({
  icon: <BsHandThumbsUpFill />,
  data: [
    {
      header: "You’re Not Alone",
      description:
        "You’re not alone in feeling this way.It’s natural to feel lonely sometimes—taking small steps toward connection can help. Feeling isolated can be challenging, but reaching out or even getting involved in a new environment can help over time.",
    },
  ],
  tips: [
    "- Spend Time in the Community:  Consider joining a class, club, or volunteer group—small engagements add up.",
    "- Reach Out to Someone You Trust: Talking with a family member, friend, or counselor can provide relief and understanding.",
    "- Focus on Self-Care: Taking walks, reading, or enjoying a favorite hobby can help you feel more grounded and connected to yourself.",
  ],
  buttons: [
    {
      text: "Close",
      onClick: buttonClick,
    },
  ],
  additionalServey: [],
});

const lowMentalFatigueData = (buttonClick) => ({
  icon: <BsHandThumbsUpFill />,
  data: [
    {
      header: "Feeling Energized!",
      description:
        "You're feeling mentally refreshed and energized! This score indicates that you have low mental fatigue, which is great for productivity and well-being.",
    },
  ],
  tips: [
    "- Keep Engaging in Activities: Continue to engage in hobbies and activities that stimulate your mind.",
    "- Practice Mindfulness: Consider mindfulness exercises or meditation to maintain your mental clarity.",
  ],
  buttons: [
    {
      text: "Close",
      onClick: buttonClick,
    },
  ],
  additionalServey: [],
});

const moderateMentalFatigueData = (buttonClick) => ({
  icon: <BsHandThumbsUpFill />,
  data: [
    {
      header: "Taking it in Stride",
      description:
        "It's common to feel a bit mentally tired, and recognizing this is an important step.This score suggests you might be feeling moderately fatigued. It's a good time to take a breather!",
    },
  ],
  tips: [
    "- Take Regular Breaks: Schedule short breaks during your tasks to recharge your mind",
    "- Stay Hydrated and Nourished: Ensure you're eating well and drinking enough water to support cognitive function.",
  ],
  buttons: [
    {
      text: "Close",
      onClick: buttonClick,
    },
  ],
  additionalServey: [],
});

const highMentalFatigueData = (buttonClick) => ({
  icon: <BsHandThumbsUpFill />,
  data: [
    {
      header: "Feeling Drained?",
      description:
        "This level of fatigue can be overwhelming, and it's essential to address it.A high score indicates significant mental fatigue, which might affect your daily life and productivity.",
    },
  ],
  tips: [
    "- Prioritize Rest:Make sure to get enough sleep and allow yourself time to relax.",
    "- Engage in Relaxing Activities: Consider activities like walking in nature, reading, or gentle yoga to help unwind your mind.",
  ],
  buttons: [
    {
      text: "Close",
      onClick: buttonClick,
    },
  ],
  additionalServey: [],
});

const lifeSatisfactionData = (buttonClick, score) => {
  if (score <= 9) {
    return {
      icon: <BsEmojiFrownFill />,
      data: [
        {
          header: "Extremely Dissatisfied",
          description:
            "It seems like you’re feeling pretty low about life right now.Your score indicates that you might be experiencing a lot of dissatisfaction. Recognizing this is the first step to change!",
        },
      ],
      tips: [
        "- Set Small Goals: Start with tiny, achievable goals each day to help build a sense of accomplishment.",
        "- Reach Out for Support:Talking to someone you trust can help you process your feelings.",
      ],
      buttons: [
        {
          text: "Close",
          onClick: buttonClick,
        },
      ],
      additionalServey: [],
    };
  } else if (score > 9 && score <= 14) {
    return {
      icon: <BsEmojiFrownFill />,
      data: [
        {
          header: "Dissatisfied ",
          description:
            "Feeling dissatisfied is common, and it’s okay to seek out what brings you joy. This score shows that you might be missing certain aspects of fulfillment. Identifying these areas can help spark change!",
        },
      ],
      tips: [
        "- Reflect on What You Value: Consider what truly matters to you and make plans to pursue those interests.",
        "- Engage in New Experiences:Trying new activities or hobbies can introduce fresh perspectives and satisfaction.",
      ],
      buttons: [
        {
          text: "Close",
          onClick: buttonClick,
        },
      ],
      additionalServey: [],
    };
  } else if (score > 14 && score <= 19) {
    return {
      icon: <BsEmojiExpressionlessFill />,
      data: [
        {
          header: "Slightly Dissatisfied ",
          description:
            "You’re experiencing some ups and downs in life satisfaction. This score indicates that while things aren’t terrible, there’s room for growth and joy in your life.",
        },
      ],
      tips: [
        "- Focus on Gratitude: Start a gratitude journal—write down a few things you appreciate each day.",
        "- Reconnect with Hobbies: Spend time doing what you love to uplift your mood and sense of satisfaction.",
      ],
      buttons: [
        {
          text: "Close",
          onClick: buttonClick,
        },
      ],
      additionalServey: [],
    };
  } else if (score > 19 && score <= 24) {
    return {
      icon: <BsEmojiExpressionlessFill />,
      data: [
        {
          header: "Neutral",
          description:
            "Feeling neutral is okay—sometimes, life can be a balance of highs and lows. This score reflects a balance between satisfaction and dissatisfaction. You have the opportunity to explore what could elevate your happiness.",
        },
      ],
      tips: [
        "- Set Personal Goals: Think about what you want to achieve and take steps toward those aspirations.",
        "- Engage Socially: Spending time with friends or meeting new people can add depth to your experiences.",
      ],
      buttons: [
        {
          text: "Close",
          onClick: buttonClick,
        },
      ],
      additionalServey: [],
    };
  } else if (score > 24 && score <= 29) {
    return {
      icon: <BsEmojiSmileFill />,
      data: [
        {
          header: "Satisfied ",
          description:
            "You’re doing quite well when it comes to life satisfaction. This score indicates that you have a solid sense of contentment. Recognizing what makes you happy is essential.",
        },
      ],
      tips: [
        "- Continue Pursuing Joy: Keep doing the activities and connecting with the people that bring you happiness.",
        "- Help Others: Volunteering or supporting friends can amplify your satisfaction and create fulfilling connections.",
      ],
      buttons: [
        {
          text: "Close",
          onClick: buttonClick,
        },
      ],
      additionalServey: [],
    };
  } else {
    return {
      icon: <BsEmojiHeartEyesFill />,
      data: [
        {
          header: "Extremely Satisfied",
          description:
            "Fantastic! You’re feeling extremely satisfied with your life. You seem to have a great sense of fulfillment. Keep nurturing the aspects of life that bring you joy.",
        },
      ],
      tips: [
        "- Share Your Happiness: Share your positive experiences and insights with others—your perspective can inspire!",
        "- Explore New Adventures: Seek new opportunities and challenges that can further enrich your life.",
      ],
      buttons: [
        {
          text: "Close",
          onClick: buttonClick,
        },
      ],
      additionalServey: [],
    };
  }
};

const loneLiness = (onClick, score) => {
  if (score <= 19) {
    return lowLonelinessData(onClick);
  } else if (score > 19 && score <= 29) {
    return moderateLonelinessData(onClick);
  } else {
    return highLonelinessData(onClick);
  }
};

const mentalFatigue = (onClick, score) => {
  if (score <= 19) {
    return lowMentalFatigueData(onClick);
  } else if (score > 19 && score <= 29) {
    return moderateMentalFatigueData(onClick);
  } else {
    return highMentalFatigueData(onClick);
  }
};

const depressionData = (buttonClick, score) => {
  if (score <= 4) {
    return {
      icon: <BsEmojiHeartEyesFill />,
      data: [
        {
          header: "Minimal Depression",
          description:
            "That’s great to hear! It seems like you’re feeling relatively good overall. This score indicates minimal depressive symptoms. You’re in a good place, but it’s always important to stay aware of your feelings. ",
        },
      ],
      tips: [
        "- Stay Connected: Continue nurturing your relationships and engaging in activities you enjoy.",
        "- Practice Self-Care: Take time for yourself through hobbies, exercise, or relaxation techniques.",
      ],
      buttons: [
        {
          text: "Close",
          onClick: buttonClick,
        },
      ],
      additionalServey: [],
    };
  } else if (score > 4 && score <= 9) {
    return {
      icon: <BsEmojiExpressionlessFill />,
      data: [
        {
          header: "Mild Depression",
          description:
            "It’s understandable to feel this way sometimes, and acknowledging it is a positive step. This score suggests mild depressive symptoms. You might be feeling a bit off, but there’s hope for improvement.",
        },
      ],
      tips: [
        "- Talk It Out: Share your feelings with someone you trust; it can help lighten your emotional load.",
        "- Engage in Activities: Spend time doing things you love to help lift your mood.",
      ],
      buttons: [
        {
          text: "Close",
          onClick: buttonClick,
        },
      ],
      additionalServey: [],
    };
  } else if (score > 9 && score <= 14) {
    return {
      icon: <BsEmojiExpressionlessFill />,
      data: [
        {
          header: "Moderate Depression ",
          description:
            "It’s okay to feel this way, and recognizing it is the first step toward feeling better. This score indicates moderate depressive symptoms. It’s important to take this seriously and seek support.",
        },
      ],
      tips: [
        "- Reach Out for Help:Consider talking to a mental health professional who can guide you through this.",
        "- Establish a Routine: Having a daily structure can help create a sense of normalcy.",
      ],
      buttons: [
        {
          text: "Close",
          onClick: buttonClick,
        },
      ],
      additionalServey: [],
    };
  } else if (score > 14 && score <= 19) {
    return {
      icon: <BsEmojiFrownFill />,
      data: [
        {
          header: "Moderately Severe Depression ",
          description:
            "This is a serious feeling, and it’s good that you’re acknowledging it. This score reflects moderately severe depressive symptoms. It’s crucial to prioritize your mental health right now.",
        },
      ],
      tips: [
        "-Seek Professional Help: Please consider reaching out to a therapist or counselor for support.",
        "- Build a Support Network: Surround yourself with friends or family who can provide emotional support.",
      ],
      buttons: [
        {
          text: "Close",
          onClick: buttonClick,
        },
      ],
      additionalServey: [],
    };
  } else {
    return {
      icon: <BsEmojiFrownFill />,
      data: [
        {
          header: "Severe Depression ",
          description:
            "I’m really sorry to hear that you’re feeling this way. It’s important to take these feelings seriously. This score indicates severe depressive symptoms. It’s vital to seek professional help immediately.",
        },
      ],
      tips: [
        "- Contact a Mental Health Professional: Don’t hesitate to reach out for help. You don’t have to go through this alone.",
        "- Crisis Support:  If you’re in crisis or feeling unsafe, please contact a crisis hotline or emergency services.",
      ],
      buttons: [
        {
          text: "Close",
          onClick: buttonClick,
        },
      ],
      additionalServey: [],
    };
  }
};
const anxietyData = (buttonClick, score) => {
  if (score <= 4) {
    return {
      icon: <BsEmojiHeartEyesFill />,
      data: [
        {
          header: "Minimal Anxiety ",
          description:
            "Great news! You’re in a low-anxiety zone!. This score indicates minimal anxiety. It’s wonderful to see you in a calm and composed state.",
        },
      ],
      tips: [
        "- Keep Stressors in Check: Continue practicing healthy habits that promote relaxation.",
        "- Stay Active: Engage in physical activities to maintain your stress-free mindset.",
      ],
      buttons: [
        {
          text: "Close",
          onClick: buttonClick,
        },
      ],
      additionalServey: [],
    };
  } else if (score > 4 && score <= 9) {
    return {
      icon: <BsEmojiExpressionlessFill />,
      data: [
        {
          header: "Mild Anxiety",
          description:
            "It’s okay to feel a little anxious sometimes; you’re not alone. This score suggests mild anxiety, which is quite common. Recognizing it is the first step towards feeling better.",
        },
      ],
      tips: [
        "- Practice Relaxation Techniques: Deep breathing or meditation can help ease your mind.",
        "- Stay Connected: Talk to friends or family about how you’re feeling; support can make a difference.",
      ],
      buttons: [
        {
          text: "Close",
          onClick: buttonClick,
        },
      ],
      additionalServey: [],
    };
  } else if (score > 9 && score <= 14) {
    return {
      icon: <BsEmojiExpressionlessFill />,
      data: [
        {
          header: "Moderate Anxiety",
          description:
            "It's important to take your feelings seriously. This score indicates moderate anxiety, which may be affecting your daily activities. Acknowledging this is crucial for your well-being.",
        },
      ],
      tips: [
        "- Set Aside 'Worry Time': Allocate specific times to address your worries, then focus on other activities.",
        "- Engage in Soothing Activities: Try activities like reading, art, or listening to music to help reduce anxiety.",
      ],
      buttons: [
        {
          text: "Close",
          onClick: buttonClick,
        },
      ],
      additionalServey: [],
    };
  } else {
    return {
      icon: <BsEmojiFrownFill />,
      data: [
        {
          header: "Severe Anxiety",
          description:
            "This level of anxiety can be quite challenging, and it's important to prioritize your mental health. A high score indicates significant anxiety symptoms that might require attention. It’s okay to seek help",
        },
      ],
      tips: [
        "- Consider Professional Guidance: Talking to a therapist or counselor can provide valuable support.",
        "- Practice Self-Care: Make time for activities that promote relaxation and well-being.",
      ],
      buttons: [
        {
          text: "Close",
          onClick: buttonClick,
        },
      ],
      additionalServey: [],
    };
  }
};
const lifeEsteemData = (buttonClick, score) => {
  if (score <= 15) {
    return {
      icon: <BsEmojiFrownFill />,
      data: [
        {
          header: "Very Low Self-Esteem ",
          description:
            "It’s tough to feel this way, but recognizing it is the first step toward change. This score indicates very low self-esteem. It’s important to remember that your worth is not defined by your thoughts.",
        },
      ],
      tips: [
        "- Practice Positive Affirmations: Challenge negative thoughts with positive statements about yourself.",
        "- Set Small Goals: Achieving small tasks can boost your confidence over time.",
      ],
      buttons: [
        {
          text: "Close",
          onClick: buttonClick,
        },
      ],
      additionalServey: [],
    };
  } else if (score > 15 && score <= 25) {
    return {
      icon: <BsEmojiFrownFill />,
      data: [
        {
          header: "Low Self-Esteem",
          description:
            "Recognizing this is important, and it’s great that you’re seeking to understand yourself better. This score suggests low self-esteem. It’s common to feel this way, but there are ways to improve your self-view.",
        },
      ],
      tips: [
        "- Surround Yourself with Positivity: Spend time with people who uplift and support you.",
        "- Focus on Your Strengths: Write down things you like about yourself or achievements you’re proud of.",
      ],
      buttons: [
        {
          text: "Close",
          onClick: buttonClick,
        },
      ],
      additionalServey: [],
    };
  } else if (score > 25 && score <= 36) {
    return {
      icon: <BsEmojiExpressionlessFill />,
      data: [
        {
          header: "Moderate Self-Esteem ",
          description:
            "It’s great to see you feeling somewhat positive about yourself. This score indicates moderate self-esteem. You recognize your worth but might still have room for growth.",
        },
      ],
      tips: [
        "- Embrace Your Achievements: Celebrate your successes, no matter how small.",
        "- Challenge Negative Self-Talk: Work on replacing critical thoughts with more balanced ones.",
      ],
      buttons: [
        {
          text: "Close",
          onClick: buttonClick,
        },
      ],
      additionalServey: [],
    };
  } else {
    return {
      icon: <BsEmojiHeartEyesFill />,
      data: [
        {
          header: "Extremely Satisfied",
          description:
            "Fantastic! You’re feeling extremely satisfied with your life. You seem to have a great sense of fulfillment. Keep nurturing the aspects of life that bring you joy.",
        },
      ],
      tips: [
        "- Share Your Happiness: Share your positive experiences and insights with others—your perspective can inspire!",
        "- Explore New Adventures: Seek new opportunities and challenges that can further enrich your life.",
      ],
      buttons: [
        {
          text: "Close",
          onClick: buttonClick,
        },
      ],
      additionalServey: [],
    };
  }
};

export const getData = (buttonClick, serveyType, score) => {
  switch (serveyType) {
    case "loneLiness":
      return loneLiness(buttonClick, score);
    case "mentalFatigue":
      return mentalFatigue(buttonClick, score);
    case "lifeSatisfaction":
      return lifeSatisfactionData(buttonClick, score);
    case "lifeEsteem":
      return lifeEsteemData(buttonClick, score);
    case "depression":
      return depressionData(buttonClick, score);
    default:
      return anxietyData(buttonClick, score);
  }
};
