export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#testimonials" },
  { name: "Work Experience", link: "#workExperience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "About Me",
    description: "I'm a Data Scientist with a strong foundation in machine learning, NLP, and predictive analytics. My journey began with a degree in Electronics and Telecommunication Engineering, followed by hands-on experience at Infosys, where I built predictive models for fraud detection and streamlined claims processing. After earning my Master's in Data Science from New Jersey Institute of Technology, I joined Tango Analytics and then PNC Financial Services, where I applied advanced modeling techniques to drive customer insights and efficiency. Skilled in Python, SQL, Machine Learning, Natural Language Processing, Gen AI and cloud platforms, I'm passionate about solving real-world challenges and creating business impact through data.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] p-6",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "./img201.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Interests",
    description: "Artificial Intelligence, Big Data, Algorithms, Neural Networks, Sentimentality, Dataography, Image Processing",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "./chess1.jpg",
    spareImg: "./grid.svg",
  },
  {
    id: 4,
    title: "Soft Skills.",
    description: "Communication, Critical Thinking, Collaboration, Adaptabilty, Business Acumen, Curiosity",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "./grid.svg",
    spareImg: "",
  },

  {
    id: 5,
    title: "My Tech Stack",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "./techstack.jpg",
    spareImg: "",
  },
  {
    id: 6,
    title: "Reach out to me with opportunities",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Book Recommendation System",
    des: "Explore the top 10 recommended books based on search criteria.",
    img: "./books.jpg",
    iconLists: ["./python.svg", "./nlp.svg", "./heroku.svg", "./jupyter.svg","./sklearn.svg"],
    link: "https://github.com/shubhampandkar/shubhampandkar/tree/main/Personal%20Programming%20Projects/Book-Recommendation-System",
  },
  {
    id: 2,
    title: "Quora Question Pair",
    des: "Predicting if questions posted on quora has similar exxsting question pair.",
    img: "./quora.svg",
    iconLists: ["./python.svg", "./nlp.svg", "./jupyter.svg"],
    link: "https://github.com/shubhampandkar/shubhampandkar/tree/main/Personal%20Programming%20Projects/Quora_Question_pair",
  },
  {
    id: 3,
    title: "Heart Disease Prediction",
    des: "Identifying if a person will have a heart disease in 10 years based on health information.",
    img: "./img2k99.jpg",
    iconLists: ["./python.svg", "./jupyter.svg", "./sklearn.svg", "./Streamlit.svg"],
    link: "https://github.com/shubhampandkar/shubhampandkar/tree/main/Personal%20Programming%20Projects/Heart%20Disease%20Detection",
  },
  {
    id: 4,
    title: "Calibrating Credibility of COVID-19 Tweets",
    des: "Tableau Dashboard with senttment analysis on how COVID tweets are distributed.",
    img: "./tweets.jpg",
    iconLists: ["./python.svg", "./tableau.svg", "./viz.svg"],
    link: "https://public.tableau.com/app/profile/shubham.rajan.pandkar/viz/Covid19TweetsCredibility-2/Other",
  },
];

export const testimonials = [
  {
    quote:
      "",
    name: "New Jersey Institute of Technology",
    title: "Master of Science in Data Science - Computational track",
  },
  {
    quote:
      "",
    name: "Savitribai Phule Pune University",
    title: "Electronics and Telecommunications Engineering",
  },
  {
    quote:
      "",
    name: "RedHat",
    title: "Redhat Certified System Administrator",
  },
  {
    quote:
      "",
    name: "John Hopkins University",
    title: "Data Scientist's Toolbox",
  },
  {
    quote:
      "",
    name: "IBM",
    title: "Data Visualization and Dashboards",
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Data Scientist - PNC Financial Services",
    desc: [
      "Designed SARIMAX-based seasonal forecasting model, with Teradata using PySpark, to predict customer complaints, reducing root cause investigation time by 40%.",
      "Improved customer support efficiency by 20% using TF-IDF vectorization and cosine similarity clustering, categorizing unstructured customer feedback for more effective issue prioritization.",
      "Conducted deep-dive analyses into customer engagement patterns via complex SQL queries, uncovering actionable insights that informed strategies for reducing unnecessary support inquiries by over 6000 monthly interactions.",
      "Optimized text pre-processing for call transcripts by designing NLTK-based regular expression function, cutting preprocessing time by 30%.",
      "Presented detailed reports on consumer behavior analysis findings to executive teams, outlining the top three contributing factors to increased customer complaints and recommending actionable strategies for improvement with proven success in driving a 5% increase in overall customer satisfaction rates."
    ],
    className: "md:col-span-2",
    thumbnail: "./exp1.svg",
  },
  {
    id: 2,
    title: "Software Engineer ML Intern - Tango Analytics",
    desc: ["Constructed state-of-the-art R-CNN model for space planning, achieving over 90% accuracy in automating segmentation of layout elements, resulting in 50% reduction in manual analysis time.",
    "Implemented disaggregate and macro forecasting techniques, achieving 20% reduction in stock outs and 15% increase in sales by optimizing inventory levels and enhancing marketing strategies across store locations.",
    "Devised a new business process to resolve custom data analysis and conversion requests for standardizing data quality checks, increasing efficiency by 40%.", 
    "Collaborated with cross-functional teams to test and validate the statistical model's effectiveness, resulting in a 20% reduction in false positives during site selection processes."],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "./exp2.svg",
  },
  {
    id: 3,
    title: "Senior Systems Engineer - Infosys",
    desc: ["Developed predictive model using combination of anomaly detection and classification techniques, achieving 25% reduction in false positives for audit triggers and enhancing fraud detection accuracy for high-risk claims.", 
    "Teamed and engineered routing algorithm, integrating with existing systems to expedite approvals by 30%, benefiting members.",
    "Built an ETL platform for automatic text extraction from adjudication and accuracy reports, removing manual intervention.","Proposed and implemented Tableau dashboards for real-time insights on claims processing, member satisfaction, and network performance, improving operational visibility for leadership."],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "./infosys.svg",
  },
  
];

export interface SocialMediaLink {
  id: number;
  url: string;
  img: string; // Path to the icon image
  altText: string; // Alt text for the image for accessibility
}
export const socialMedia: SocialMediaLink[] = [
  {
    id: 1,
    img: "./git.svg",
    url: "https://github.com/shubhampandkar",
    altText: "GitHub",
  },
  {
    id: 2,
    img: "./tableau.svg",
    url: "https://public.tableau.com/app/profile/shubham.rajan.pandkar/vizzes",
    altText: "Tableau",
  },
  {
    id: 3,
    img: "./link.svg",
    url: "https://www.linkedin.com/in/shubhampandkar/",
    altText: "LinkedIn",
  },
];
