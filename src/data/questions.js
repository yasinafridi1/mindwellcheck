const socialOptions = [
  {
    label: "Please choose an option",
    value: "",
    disabled: true,
  },
  {
    label: "Very rarely",
    value: "1",
    disabled: false,
  },
  {
    label: "Rarely",
    value: "2",
    disabled: false,
  },
  {
    label: "Sometimes",
    value: "3",
    disabled: false,
  },
  {
    label: "Often",
    value: "4",
    disabled: false,
  },
  {
    label: "Very often",
    value: "5",
    disabled: false,
  },
];

const loneLinessOptions = [
  {
    label: "Please choose an option",
    value: "",
    disabled: true,
  },
  {
    label: "Never",
    value: "1",
    disabled: false,
  },
  {
    label: "Rarely",
    value: "2",
    disabled: false,
  },
  {
    label: "Sometimes",
    value: "3",
    disabled: false,
  },
  {
    label: "Often",
    value: "4",
    disabled: false,
  },
];

const selfEsteemOptions = [
  {
    label: "Please choose an option",
    value: "",
    disabled: true,
  },
  {
    label: "Strongly agree",
    value: "1",
    disabled: false,
  },
  {
    label: "Agree",
    value: "2",
    disabled: false,
  },
  {
    label: "Disagree",
    value: "3",
    disabled: false,
  },
  {
    label: "Strongly disagree",
    value: "4",
    disabled: false,
  },
];

const lifeSatisfactionOptions = [
  {
    label: "Please choose an option",
    value: "",
    disabled: true,
  },
  {
    label: "Strongly disagree",
    value: "1",
    disabled: false,
  },
  {
    label: "Disagree",
    value: "2",
    disabled: false,
  },
  {
    label: "Slightly disagree",
    value: "3",
    disabled: false,
  },
  {
    label: "Neither agree nor disagree",
    value: "4",
    disabled: false,
  },
  {
    label: "Slightly agree",
    value: "5",
    disabled: false,
  },
  {
    label: "Agree",
    value: "6",
    disabled: false,
  },
  {
    label: "Strongly agree",
    value: "7",
    disabled: false,
  },
];

const anxietyOptions = [
  {
    label: "Please choose an option",
    value: "",
    disabled: true,
  },
  {
    label: "Not at all",
    value: "0",
    disabled: false,
  },
  {
    label: "Several days",
    value: "1",
    disabled: false,
  },
  {
    label: "More than half the days",
    value: "2",
    disabled: false,
  },
  {
    label: "Nearly every day",
    value: "3",
    disabled: false,
  },
];

const mentalTirednessOptions = [
  {
    label: "Please choose an option",
    value: "",
    disabled: true,
  },
  {
    label: "Not at all",
    value: "1",
    disabled: false,
  },
  {
    label: "A little",
    value: "2",
    disabled: false,
  },
  {
    label: "Somewhat",
    value: "3",
    disabled: false,
  },
  {
    label: "Very much",
    value: "4",
    disabled: false,
  },
];

const depressionOptions = [
  {
    label: "Please choose an option",
    value: "",
    disabled: true,
  },
  {
    label: "Not at all",
    value: "0",
    disabled: false,
  },
  {
    label: "Several days",
    value: "1",
    disabled: false,
  },
  {
    label: "More than half the days",
    value: "2",
    disabled: false,
  },
  {
    label: "Nearly every day",
    value: "3",
    disabled: false,
  },
];

export const socialMedia = [
  {
    label:
      "You spend a lot of time thinking about social media or planning to use it.",
    name: "spendingTime",
    options: socialOptions,
  },
  {
    label: "You feel an urge to use social media more and more.",
    name: "useSocialMedia",
    options: socialOptions,
  },
  {
    label: "You use social media to forget about personal problems.",
    name: "personalProblem",
    options: socialOptions,
  },
  {
    label:
      "You have tried to cut down on the use of social media without success.",
    name: "socialSuccess",
    options: socialOptions,
  },
  {
    label:
      "You become restless or troubled if you are prohibited from using social media.",
    name: "trouble",
    options: socialOptions,
  },
  {
    label:
      "You use social media so much that it has negatively impacted your job/studies.",
    name: "impaction",
    options: socialOptions,
  },
];

export const otherServeyQuestions = {
  loneLiness: [
    {
      name: "inTune",
      label:
        "How often do you feel that you are in tune with the people around you?",
      options: loneLinessOptions,
    },
    {
      name: "lackCompanionship",
      label: "How often do you feel that you lack companionship?",
      options: loneLinessOptions,
    },
    {
      name: "feelLeftOut",
      label: "How often do you feel left out?",
      options: loneLinessOptions,
    },
    {
      name: "feelIsolated",
      label: "How often do you feel isolated from others?",
      options: loneLinessOptions,
    },
    {
      name: "peopleToTurnTo",
      label: "How often do you feel that there are people you can turn to?",
      options: loneLinessOptions,
    },
    {
      name: "peopleUnderstandYou",
      label:
        "How often do you feel that there are people who really understand you?",
      options: loneLinessOptions,
    },
    {
      name: "feelShy",
      label: "How often do you feel shy?",
      options: loneLinessOptions,
    },
    {
      name: "aroundButNotWithYou",
      label:
        "How often do you feel that people are around you but not with you?",
      options: loneLinessOptions,
    },
    {
      name: "peopleToTalkTo",
      label: "How often do you feel that there are people you can talk to?",
      options: loneLinessOptions,
    },
    {
      name: "peopleToHelp",
      label:
        "How often do you feel that there are people you can go to for help?",
      options: loneLinessOptions,
    },
  ],
  lifeSatisfaction: [
    {
      name: "lifeCloseToIdeal",
      label: "In most ways, my life is close to my ideal.",
      options: lifeSatisfactionOptions,
    },
    {
      name: "lifeConditionsExcellent",
      label: "The conditions of my life are excellent.",
      options: lifeSatisfactionOptions,
    },
    {
      name: "lifeSatisfaction",
      label: "I am satisfied with my life.",
      options: lifeSatisfactionOptions,
    },
    {
      name: "importantThingsInLife",
      label: "So far, I have gotten the important things I want in life.",
      options: lifeSatisfactionOptions,
    },
    {
      name: "changeAlmostNothing",
      label: "If I could live my life over, I would change almost nothing.",
      options: lifeSatisfactionOptions,
    },
  ],
  mentalFatigue: [
    {
      name: "feelMentallyFatigued",
      label: "I feel mentally fatigued.",
      options: mentalTirednessOptions,
    },
    {
      name: "struggleToFocus",
      label: "I struggle to keep my attention focused.",
      options: mentalTirednessOptions,
    },
    {
      name: "brainFeelsTired",
      label: "I feel like my brain is tired.",
      options: mentalTirednessOptions,
    },
    {
      name: "wornOutAfterMentalTasks",
      label: "I feel worn out after mentally demanding activities.",
      options: mentalTirednessOptions,
    },
    {
      name: "cantThinkClearly",
      label: "I feel like I can’t think clearly.",
      options: mentalTirednessOptions,
    },
    {
      name: "needMoreTimeToThink",
      label: "I feel that I need more time to think than usual.",
      options: mentalTirednessOptions,
    },
    {
      name: "makingMoreMistakes",
      label: "I feel like I make more mistakes than I normally would.",
      options: mentalTirednessOptions,
    },
  ],
  anxiety: [
    {
      name: "feelingNervous",
      label: "Feeling nervous, anxious, or on edge.",
      options: anxietyOptions,
    },
    {
      name: "unableToControlWorrying",
      label: "Not being able to stop or control worrying.",
      options: anxietyOptions,
    },
    {
      name: "worryingTooMuch",
      label: "Worrying too much about different things.",
      options: anxietyOptions,
    },
    {
      name: "troubleRelaxing",
      label: "Trouble relaxing.",
      options: anxietyOptions,
    },
    {
      name: "restlessness",
      label: "Being so restless that it's hard to sit still.",
      options: anxietyOptions,
    },
    {
      name: "easilyAnnoyed",
      label: "Becoming easily annoyed or irritable.",
      options: anxietyOptions,
    },
    {
      name: "feelingAfraid",
      label: "Feeling afraid as if something awful might happen.",
      options: anxietyOptions,
    },
  ],
  selfEsteem: [
    {
      name: "satisfiedWithMyself",
      label: "On the whole, I am satisfied with myself.",
      options: selfEsteemOptions,
    },
    {
      name: "thinkImNoGood",
      label: "At times, I think I am no good at all.",
      options: selfEsteemOptions,
    },
    {
      name: "haveGoodQualities",
      label: "I feel that I have a number of good qualities.",
      options: selfEsteemOptions,
    },
    {
      name: "ableToDoAsOthers",
      label: "I am able to do things as well as most other people.",
      options: selfEsteemOptions,
    },
    {
      name: "notMuchToBeProudOf",
      label: "I feel I do not have much to be proud of.",
      options: selfEsteemOptions,
    },
    {
      name: "feelUselessAtTimes",
      label: "I certainly feel useless at times.",
      options: selfEsteemOptions,
    },
    {
      name: "feelWorthAsOthers",
      label:
        "I feel that I’m a person of worth, at least on an equal plane with others.",
      options: selfEsteemOptions,
    },
    {
      name: "wishForMoreRespect",
      label: "I wish I could have more respect for myself.",
      options: selfEsteemOptions,
    },
    {
      name: "feelLikeAFailure",
      label: "All in all, I am inclined to feel that I am a failure.",
      options: selfEsteemOptions,
    },
    {
      name: "positiveAttitudeTowardsMyself",
      label: "I take a positive attitude toward myself.",
      options: selfEsteemOptions,
    },
  ],
  depression: [
    {
      name: "littleInterestInActivities",
      label: "Little interest or pleasure in doing things.",
      options: depressionOptions,
    },
    {
      name: "feelingDown",
      label: "Feeling down, depressed, or hopeless.",
      options: depressionOptions,
    },
    {
      name: "sleepIssues",
      label: "Trouble falling or staying asleep, or sleeping too much.",
      options: depressionOptions,
    },
    {
      name: "feelingTired",
      label: "Feeling tired or having little energy.",
      options: depressionOptions,
    },
    {
      name: "appetiteChanges",
      label: "Poor appetite or overeating.",
      options: depressionOptions,
    },
    {
      name: "feelingBadAboutSelf",
      label:
        "Feeling bad about yourself—or that you are a failure or have let yourself or your family down.",
      options: depressionOptions,
    },
    {
      name: "troubleConcentrating",
      label:
        "Trouble concentrating on things, such as reading the newspaper or watching television.",
      options: depressionOptions,
    },
    {
      name: "movementChanges",
      label:
        "Moving or speaking so slowly that other people could have noticed, or the opposite—being so fidgety or restless that you have been moving around a lot more than usual.",
      options: depressionOptions,
    },
    {
      name: "thoughtsOfSelfHarm",
      label:
        "Thoughts that you would be better off dead, or of hurting yourself in some way.",
      options: depressionOptions,
    },
  ],
};
