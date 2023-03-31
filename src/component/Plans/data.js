const Features = [
  "Access All Text Lessons",
  "Access All Videos Lessons",
  "Appear On Leaderboard",
  "Browse Content Without Ads",
  "Access All Assignments",
  "Get Daily Prizes",
  "Earn Certificate",
  "1 GB Space For Hosting Files",
  "Access Badge System",
];

const plansData = [
  {
    type: "Free",
    price: 0,
    color: "#22c55e",
    allowedF: {
      "Access All Text Lessons": true,
      "Access All Videos Lessons": true,
      "Appear On Leaderboard": true,
      "Browse Content Without Ads": false,
      "Access All Assignments": false,
      "Get Daily Prizes": false,
      "Earn Certificate": false,
      "1 GB Space For Hosting Files": false,
      "Access Badge System": false,
    },
  },
  {
    type: "Basic",
    price: 7.99,
    color: "#0075ff",
    allowedF: {
      "Access All Text Lessons": true,
      "Access All Videos Lessons": true,
      "Appear On Leaderboard": true,
      "Browse Content Without Ads": true,
      "Access All Assignments": true,
      "Get Daily Prizes": true,
      "Earn Certificate": true,
      "1 GB Space For Hosting Files": false,
      "Access Badge System": false,
    },
  },
  {
    type: "Basic",
    price: 19.99,
    color: "#f59e0b",
    allowedF: {
      "Access All Text Lessons": true,
      "Access All Videos Lessons": true,
      "Appear On Leaderboard": true,
      "Browse Content Without Ads": true,
      "Access All Assignments": true,
      "Get Daily Prizes": true,
      "Earn Certificate": true,
      "1 GB Space For Hosting Files": true,
      "Access Badge System": true,
    },
  },
];

export { plansData, Features };
