

export const navLinks = [
    {
      title: "Home",
      href: "/", 
    },
    {
      title: "Features",
      href: "/#features", 
    },
    {
      title: "Use Case",
      href: "/#use_case", 
    },
    {
      title: "Pricing",
      href: "/#pricing", 
    },
    {
      title: "Blogs",
      href: "/blogs", 
    },
   
  ]
  
export const avatars = [
    {
      imageUrl: "https://avatars.githubusercontent.com/u/16860528",
      profileUrl: "https://github.com/dillionverma",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/20110627",
      profileUrl: "https://github.com/tomonarifeehan",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/106103625",
      profileUrl: "https://github.com/BankkRoll",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/59228569",
      profileUrl: "https://github.com/safethecode",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/59442788",
      profileUrl: "https://github.com/sanjay-mali",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/89768406",
      profileUrl: "https://github.com/itsarghyadas",
    },
  ];

export const userNum = '100,000'

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/assets/icons/harvard.svg",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/assets/icons/mit.svg",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/assets/icons/upenn.svg",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/assets/icons/michigan.svg",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/assets/icons/cornel.svg",
  },
  
];

export const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

export const logos = [
  {
    name: "Study Table",
    img: "https://i.pinimg.com/736x/c8/ab/ab/c8abab3f9313415364428ca5e9473010.jpg",
  },
  {
    name: "Flashcard",
    img: "https://i.pinimg.com/736x/9c/20/80/9c2080dc11183e587f24e697067d3caf.jpg",
  },
  {
    name: "Podcast",
    img: "https://i.pinimg.com/736x/23/07/ab/2307ab89760cce73c0a2d0ab0e531b9b.jpg",
  },
  {
    name: "Mindmaps",
    img: "https://i.pinimg.com/736x/38/75/08/38750813f2aef1df10e7610bb161a90f.jpg",
  },
  {
    name: "Group of Students",
    img: "https://i.pinimg.com/736x/35/35/f5/3535f5a8e58850700c5af7e1b187c579.jpg",
  },
  {
    name: "Study",
    img: "https://i.pinimg.com/736x/57/ea/ac/57eaacf02b2dba3da42f497995c721ba.jpg",
  },
];

export const featureLinks = [
  {
    name:'Flashcard',
    img: '/assets/icons/flash.png',
    url:'/'
  },
  {
    name: 'Mindmaps',
    img: '/assets/icons/mind.png',
    url:'/'
  },
  {
    name: 'Mock Exams',
    img: '/assets/icons/exam.png',
    url:'/',
    msg: 'Comming Soon...'
  },
  {
    name: 'Podcast',
    img: '/assets/icons/podcast.png',
    url:'/',
    msg: 'Comming Soon...'
  },
]

export const plans = [
  {
    _id: 1,
    name: "Free",
    desc:'Start your journey with essential tools, absolutely free!',
    icon: "/assets/icons/free-plan.svg",
    price: 0,
    inclusions: [
      {
        label: "1 Space",
        isIncluded: true,
      },
      {
        label: "10 Flashcards",
        isIncluded: true,
      },
      {
        label: "7 Mindmaps",
        isIncluded: false,
      },
      {
        label: "10 Questions",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 2,
    name: "Pro Package",
    desc:'Level up with enhanced features and more flexibility',
    icon: "/assets/icons/free-plan.svg",
    price: 5,
    inclusions: [
      {
        label: "4 Spaces",
        isIncluded: true,
      },
      {
        label: "Daily limited Flashcard",
        isIncluded: true,
      },
      {
        label: "Daily Limited Mindmaps",
        isIncluded: true,
      },
      {
        label: "Daily Limited Questions",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 3,
    name: "Premium Package",
    desc:'Unlock unlimited possibilities and go all-in with our ultimate plan!',
    icon: "/assets/icons/free-plan.svg",
    price: 10,
    inclusions: [
      {
        label: "Unlimited Spaces",
        isIncluded: true,
      },
      {
        label: "Unlimited Flashcards",
        isIncluded: true,
      },
      {
        label: "Unlimited Mindmaps",
        isIncluded: true,
      },
      {
        label: "Unlimited Questions",
        isIncluded: true,
      },
    ],
  },
];

export const review = [
  {
    _id:1,
    name: "Nasim Uddin",
    occupation: "Indiehacker, Independent",
    img:'https://avatar.vercel.sh/jack',
    review: "I wish I had this when I was in school! The flashcard generator has made studying for exams so much easier. I can quickly create custom flashcards for any subject, and the mindmap tool helps me visualize complex topics. Highly recommend!"
  },
  {
    _id:2,
    name: "Sarah Lee",
    occupation: "Student, University",
    img:'https://avatar.vercel.sh/jill',
    review: "This tool is a game-changer for my study sessions. The flashcards are easy to create, and I love how I can organize everything with the mindmap feature. It’s helped me stay organized and improve my retention!"
  },
  {
    _id:3,
    name: "James Anderson",
    occupation: "Teacher, High School",
    img:'https://avatar.vercel.sh/jill',
    review: "As a teacher, I use this tool to create interactive study materials for my students. The flashcard generator is fantastic for quizzes, and the mindmap tool helps students better understand the relationships between concepts. Very effective for classroom use."
  },
  {
    _id:4,
    name: "Emily Davis",
    occupation: "Freelance Writer",
    img:'https://avatar.vercel.sh/jill',
    review: "I’ve been using this tool to organize my research and ideas for writing projects. The mindmap feature is perfect for brainstorming, and the flashcards help me memorize important points. It's a must-have for anyone who needs to stay organized!"
  },
  {
    _id:5,
    name: "Mark Thompson",
    occupation: "Software Engineer",
    img:'https://avatar.vercel.sh/jill',
    review: "Fantastic tool for learning and memorizing technical concepts! I use the flashcards to test myself on coding languages and algorithms, and the mindmap feature helps me visualize complex systems. It’s become a key part of my study routine."
  }
]

export const footer = [
  {
    _id:1,
    label:'Terms and Conditions',
    route: '/terms-conditions',
  },
  {
    _id:2,
    label:'Privacy and Policy',
    route: '/privacy-policy',
  },
  {
    _id:1,
    label:'Affilate',
    route: '/terms-conditions',
  },

]