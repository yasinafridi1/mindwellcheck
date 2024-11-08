import * as Yup from "yup";

const stringValidation = (message = "Field is required") =>
  Yup.string().required(message);

const maxLengthError = (str, value) => {
  return `${str} must not exceed ${value} characters`;
};

const minLengthError = (str, value) => {
  return `${str} must be at least ${value} characters`;
};

const getCharacterValidationError = (str) => {
  return `Your password must have at least 1 ${str} `;
};

export const passwordSchema = Yup.object({
  password: stringValidation("Password is required")
    .min(6, minLengthError("Password", 6))
    .max(12, maxLengthError("Password", 12))
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase character"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase character")),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords not matched")
    .required("Confirm password is required"),
});

export const loginSchema = Yup.object({
  email: stringValidation().email().max(60, maxLengthError("Email", 60)),
  password: passwordSchema.fields.password,
});

export const signUpSchema = Yup.object({
  email: loginSchema.fields.email,
  fullName: stringValidation()
    .max(50, maxLengthError("Full name", 50))
    .min(4, minLengthError("Full name", 4)),
  password: passwordSchema.fields.password,
  confirmPassword: passwordSchema.fields.confirmPassword,
  // institute: Yup.string()
  //   .required('Institute is required'),
  gender: Yup.string()
    .oneOf(["Male", "Female"], "Gender must be either Male or Female")
    .required("Gender is required"),
  dateOfBirth: Yup.date()
    .required("Date of birth is required")
    .max(new Date(), "Date of birth cannot be in the future")
    .test("age", "Age must be greater than 10 years", function (value) {
      const today = new Date();
      const tenYearsAgo = new Date(today.setFullYear(today.getFullYear() - 10));

      // Check if the date is more recent than ten years ago
      return value <= tenYearsAgo;
    }),
});

export const socialMediaAddictionSchema = Yup.object({
  spendingTime: stringValidation(),
  useSocialMedia: stringValidation(),
  personalProblem: stringValidation(),
  socialSuccess: stringValidation(),
  trouble: stringValidation(),
  impaction: stringValidation(),
});

export const otherServeySchema = {
  loneLiness: Yup.object({
    inTune: stringValidation(),
    lackCompanionship: stringValidation(),
    feelLeftOut: stringValidation(),
    feelIsolated: stringValidation(),
    peopleToTurnTo: stringValidation(),
    peopleUnderstandYou: stringValidation(),
    feelShy: stringValidation(),
    aroundButNotWithYou: stringValidation(),
    peopleToTalkTo: stringValidation(),
    peopleToHelp: stringValidation(),
  }),
  lifeSatisfaction: Yup.object({
    lifeCloseToIdeal: stringValidation(),
    lifeConditionsExcellent: stringValidation(),
    lifeSatisfaction: stringValidation(),
    importantThingsInLife: stringValidation(),
    changeAlmostNothing: stringValidation(),
  }),
  mentalFatigue: Yup.object({
    feelMentallyFatigued: stringValidation(),
    struggleToFocus: stringValidation(),
    brainFeelsTired: stringValidation(),
    wornOutAfterMentalTasks: stringValidation(),
    cantThinkClearly: stringValidation(),
    needMoreTimeToThink: stringValidation(),
    makingMoreMistakes: stringValidation(),
  }),
  anxiety: Yup.object({
    feelingNervous: stringValidation(),
    unableToControlWorrying: stringValidation(),
    worryingTooMuch: stringValidation(),
    troubleRelaxing: stringValidation(),
    restlessness: stringValidation(),
    easilyAnnoyed: stringValidation(),
    feelingAfraid: stringValidation(),
  }),
  selfEsteem: Yup.object({
    satisfiedWithMyself: stringValidation(),
    thinkImNoGood: stringValidation(),
    haveGoodQualities: stringValidation(),
    ableToDoAsOthers: stringValidation(),
    notMuchToBeProudOf: stringValidation(),
    feelUselessAtTimes: stringValidation(),
    feelWorthAsOthers: stringValidation(),
    wishForMoreRespect: stringValidation(),
    feelLikeAFailure: stringValidation(),
    positiveAttitudeTowardsMyself: stringValidation(),
  }),
  depression: Yup.object({
    littleInterestInActivities: stringValidation(),
    feelingDown: stringValidation(),
    sleepIssues: stringValidation(),
    feelingTired: stringValidation(),
    appetiteChanges: stringValidation(),
    feelingBadAboutSelf: stringValidation(),
    troubleConcentrating: stringValidation(),
    movementChanges: stringValidation(),
    thoughtsOfSelfHarm: stringValidation(),
  }),
};
