const welcomData = {
  Develpoer: "Osama Elzero",
  Projects: 80,
  Earned: "$8500",
};

const targetData = [
  {
    title: "Money",
    stat: "$20,000",
    progress: "80%",
    icon: "fa-solid fa-dollar-sign fa-lg",
    color: "#0075ff",
  },
  {
    title: "Projects",
    stat: "24",
    progress: "55%",
    icon: "fa-solid fa-code fa-lg",
    color: "#f59e0b",
  },
  {
    title: "Team",
    stat: "12",
    progress: "75%",
    icon: "fa-solid fa-user fa-lg",
    color: "#22c55e",
  },
];

const TicketsData = [
  {
    icon: "fa-regular fa-rectangle-list fa-2x",
    stat: "2500",
    phase: "Total",
    color: "#f59e0b",
  },
  {
    icon: "fa-solid fa-spinner fa-2x",
    stat: "500",
    phase: "Pending",
    color: "#0075ff",
  },
  {
    icon: "fa-regular fa-circle-check fa-2x",
    stat: "1900",
    phase: "Closed",
    color: "#22c55e",
  },
  {
    icon: "fa-regular fa-rectangle-xmark fa-2x",
    stat: "100",
    phase: "Deleted",
    color: "#f44336",
  },
];
const newData = [
  {
    img: "./imgs/news-01.png",
    title: "Created SASS Section",
    content: "New SASS Examples & Tutorials",
    time: "03/23/2023",
  },
  {
    img: "./imgs/news-02.png",
    title: "Created SASS Section",
    content: "New SASS Examples & Tutorials",
    time: "03/15/2023",
  },
  {
    img: "./imgs/news-03.png",
    title: "Created SASS Section",
    content: "New SASS Examples & Tutorials",
    time: "03/20/2023",
  },
  {
    img: "./imgs/news-04.png",
    title: "Created SASS Section",
    content: "New SASS Examples & Tutorials",
    time: "01/01/2023",
  },
];

const tasksData = [
  {
    title: "Record One New Video",
    content: "Record Python Create Exe Project",
  },
  {
    title: "Write Article",
    content: "Write Low Level vs High Level Languages",
  },
  {
    title: "Finish Project",
    content: "Publish Academy Programming Project",
  },
  {
    title: "Attend The Meeting",
    content: "Attend The Project Business Analysis Meeting",
  },
  {
    title: "Finish Lesson",
    content: "Finish Teaching Flex Box",
  },
];
const searchData = [
  {
    keyword: "Programming",
    count: 220,
  },
  {
    keyword: "JavaScript",
    count: 180,
  },
  {
    keyword: "PHP",
    count: 160,
  },
  {
    keyword: "Code",
    count: 145,
  },
  {
    keyword: "Design",
    count: 110,
  },
  {
    keyword: "Logic",
    count: 95,
  },
];
const uploadData = [
  {
    fileName: "my-file.pdf",
    owner: "Elzero",
    size: "2.9mb",
    file: "./imgs/pdf.svg",
  },
  {
    fileName: "My-Video-File.avi",
    owner: "Admin",
    size: "4.9mb",
    file: "./imgs/avi.svg",
  },
  {
    fileName: "My-Psd-File.pdf",
    owner: "Osama",
    size: "4.5mb",
    file: "./imgs/psd.svg",
  },
  {
    fileName: "My-Zip-File.pdf",
    owner: "User",
    size: "8.9mb",
    file: "./imgs/zip.svg",
  },
  {
    fileName: "My-DLL-File.pdf",
    owner: "Admin",
    size: "4.9mb",
    file: "./imgs/dll.svg",
  },
  {
    fileName: "My-Eps-File.pdf",
    owner: "Designer",
    size: "8.9mb",
    file: "./imgs/eps.svg",
  },
];
const progressData = [
  {
    phase: "Got The Project",
    state: "completed",
  },
  {
    phase: "Started The Project",
    state: "completed",
  },
  {
    phase: "The Project About To Finish",
    state: "completed",
  },
  {
    phase: "Test The Project",
    state: "working on it",
  },
  {
    phase: "Finish The Project & Get Money",
    state: "pending",
  },
];
const remindersData = [
  {
    title: "Check My Tasks List",
    time: "28/09/2022 - 12:00am",
    color: "#0075ff",
  },
  {
    title: "Check My Projects",
    time: "26/10/2022 - 12:00am",
    color: "#22c55e",
  },
  {
    title: "Call All My Clients",
    time: "05/11/2022 - 12:00am",
    color: "#f59e0b",
  },
  {
    title: "Finish The Development Workshop",
    time: "20/12/2022 - 12:00am",
    color: "#f44336",
  },
];
const mediaData = [
  {
    icon: "fa-brands fa-twitter fa-2x",
    content: "90K Followers",
    btn: "Follow",
    color: "#1da1f2",
  },
  {
    icon: "fa-brands fa-facebook-f fa-2x",
    content: "2M Like",
    btn: "Like",
    color: "#1877f2",
  },
  {
    icon: "fa-brands fa-youtube fa-2x",
    content: "1M Subs",
    btn: "Subscribe",
    color: "#ff0000",
  },
  {
    icon: "fa-brands fa-linkedin fa-2x",
    content: "70K Followers",
    btn: "Follow",
    color: "#0a66c2",
  },
];
const projectsData = [
  {
    name: "Ministry Wikipedia",
    date: "10 May 2022",
    client: "Ministry",
    price: 5000,
    team: [
      "./imgs/team-01.png",
      "./imgs/team-02.png",
      "./imgs/team-03.png",
      "./imgs/team-05.png",
    ],
    status: "Pending",
  },
  {
    name: "Elzero Shopa",
    date: "12 Oct 2021",
    client: "Elzero Company",
    price: 1500,
    team: ["./imgs/team-01.png", "./imgs/team-02.png", "./imgs/team-05.png"],
    status: "In Progress",
  },
  {
    name: "Bouba App",
    date: "05 Sep 2021",
    client: "Bouba",
    price: 800,
    team: ["./imgs/team-02.png", "./imgs/team-03.png"],
    status: "Completed",
  },
  {
    name: "Mahmoud Website",
    date: "22 May 2021",
    client: "Mahmoud",
    price: 600,
    team: ["./imgs/team-01.png", "./imgs/team-02.png"],
    status: "Completed",
  },
  {
    name: "Sayed Website",
    date: "24 May 2021",
    client: "Sayed",
    price: 5000,
    team: ["./imgs/team-01.png", "./imgs/team-03.png"],
    status: "Rejected",
  },
  {
    name: "Arena Application",
    date: "01 Mar 2021",
    client: "Arena Company",
    price: 2600,
    team: [
      "./imgs/team-01.png",
      "./imgs/team-02.png",
      "./imgs/team-03.png",
      "./imgs/team-04.png",
    ],
    status: "Completed",
  },
];

export {
  welcomData,
  targetData,
  TicketsData,
  newData,
  tasksData,
  searchData,
  uploadData,
  progressData,
  remindersData,
  mediaData,
  projectsData,
};
