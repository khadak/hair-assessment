import { QuestionType, OptionType } from "@/types/type";

export const gender: OptionType[] = [
  { label: "Male", icons: ["/images/male.png"] },
  { label: "Female", icons: ["/images/female.png"] },
  { label: "Other", icons: ["/images/others.png"] }
]

export const hairHealthQuestions: QuestionType [] = [
    {
      question: 'Which image best describes your hair loss?',
      name: 'hairLossStage',
      options: [
        {
          label: "Stage-1",
          icons: ["/images/stage_1.webp", "/images/stage_1_2.webp"]
        },
        {
          label: "Stage-2",
          icons: ["/images/stage_2.webp", "/images/stage_2_2.webp"]
        },
        {
          label: "Stage-3",
          icons: ["/images/stage_3.webp", "/images/stage_3_3.webp"]
        },
        {
          label: "Stage-4",
          icons: ["/images/stage_4.webp", "/images/stage_4_4.webp"]
        },
        {
          label: "Stage-5",
          icons: ["/images/stage_5.webp", "/images/stage_5_5.webp"]
        },
        {
          label: "Stage-6",
          icons: ["/images/stage_6.webp", "/images/stage_6_6.webp"]
        },
        {
          label: "Coin Size Patch",
          icons: ["https://form.traya.health/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage_m_1.ff250276.png&w=256&q=75", "https://form.traya.health/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage_m_2.de2c8ef4.png&w=256&q=75"]
        },
        {
          label: "Heavy Hair Fall",
          icons: ["https://form.traya.health/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage_m_1.8b39fc22.png&w=256&q=75", "https://form.traya.health/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage_m_2.373b7ef8.png&w=256&q=75"]
        }
        
      ]
    },
    {
      question: 'Do you have dandruff?',
      name: 'dandruff',
      options: [
        { label: 'No', 
          icons: [] 
        },
        { 
          label: 'Yes, mild that comes and goes', 
          icons: [] 
        },
        { 
          label: 'Yes, heavy dandruff that sticks to the scalp',
          icons: []

        },
        { 
          label: 'I have Psoriasis', 
          icons: [] 
        },
        { 
          label: 'I have Seborrheic Dermatitis', 
          icons: []
        },
      ]
     
    },
    {
      question: 'How often do you shampoo your hair?',
      name: 'shampooFrequency',
      options: [
        {
          label: 'Daily',
          icons: []
        },
        {
          label: 'Every alternate day',
          icons: []
        },
        {
          label: 'Twice a week',
          icons: []
        },
        {
          label: 'Once a week',
          icons: []
        },
        {
         label: 'Rarely',
         icons: []
        }
    
      ],
     
    },
];

export const internalHealthQuestions = [
  {
    question: 'How well do you sleep?',
    name: 'sleepQuality',
    options: [
      {
        label: 'Very peacefully for 6 to 8 hours',
        icon: '/icons/sleep1.svg',
      },
      {
        label: 'Disturbed sleep, I wake up at least one time during the night',
        icon: '/icons/sleep2.svg',
      },
      {
        label: 'Have difficulty falling asleep',
        icon: '/icons/sleep3.svg',
      },
    ],
  },
  {
    question: 'How stressed are you?',
    name: 'stressLevel',
    options: [
      {
        label: 'None',
        icon: '/icons/stress1.svg',
      },
      {
        label: 'Low',
        icon: '/icons/stress2.svg',
      },
      {
        label: 'Moderate(work, family etc)',
        icon: '/icons/stress3.svg',
      },
      {
        label: 'High (Loss of close one, separation, home, illness)',
        icon: '/icons/stress4.svg',
      },
    ],
  },
  {
    question: 'Do you feel constipated? (कब्ज)',
    name: 'constipation',
    options: [
      {
        label: 'No/Rarely',
        icon: '/icons/constipation1.svg',
      },
      {
        label: 'Yes',
        icon: '/icons/constipation2.svg',
      },
      {
        label: 'Unsatisfactory bowel movements',
        icon: '/icons/constipation3.svg',
      },
      {
        label: 'Suffering from IBS (irritable bowel syndrome) /dysentery',
        icon: '/icons/constipation4.svg',
      },
    ],
  },
];
