export type DayEntry = {
  day: string;
  date: string;
  time: string;
  accomplishments: string[];
};

export type JournalPost = {
  slug: string;
  week: number;
  title: string;
  theme: string;
  dateRange: string;
  totalHours: string;
  excerpt: string;
  tags: string[];
  highlights: { label: string; value: string }[];
  days: DayEntry[];
};

export const intern = {
  name: "Ritchelene E. Briones",
  position: "Full-Stack Web Developer Trainee",
  company: "Raicom LLC",
  office: "Kairos Coffee, 2nd Floor",
  school: "North Eastern Mindanao State University",
  coordinator: "Virgilio F. Tuga Jr., MSCS (CAR)",
  requiredHours: 324,
};

export const posts: JournalPost[] = [
  {
    slug: "week-1",
    week: 1,
    title: "First Steps in HTML",
    theme: "HTML & the Semantic Web",
    dateRange: "June 22 – 27, 2026",
    totalHours: "47 hours",
    excerpt:
      "My first week began with an interview and orientation, then dove straight into the building blocks of the web — HTML structure, SEO semantics, multimedia, and my first hands-on projects on freeCodeCamp.",
    tags: ["HTML", "SEO", "Semantic Web", "Git & GitHub", "freeCodeCamp"],
    highlights: [
      { label: "Focus", value: "HTML Foundations" },
      { label: "Projects", value: "8+ practice pages" },
      { label: "Tools", value: "Git Bash · GitHub" },
    ],
    days: [
      {
        day: "Monday",
        date: "June 22, 2026",
        time: "8:00 AM – 5:00 PM",
        accomplishments: [
          "Attended my initial job interview and a comprehensive orientation where our team went over our specific roles, tasks, and what is expected of us during the internship.",
        ],
      },
      {
        day: "Tuesday",
        date: "June 23, 2026",
        time: "8:00 AM – 5:00 PM",
        accomplishments: [
          "Started coding tasks on freeCodeCamp.org to reinforce my understanding of core HTML.",
          "Completed a variety of hands-on exercises including a typing test, learning basic HTML layout architectures, and setting up standard HTML boilerplates.",
          "Built functional structural pages — a Curriculum Outline, a Cat Photo Page, a Recipe Page, and a Bookstore site.",
          "Practiced debugging front-end structural layout issues by finding and fixing coding errors on a Camperbots profile page and a pet adoption page.",
          "Studied how the semantic structure of HTML directly impacts Search Engine Optimization (SEO).",
          "Learned the roles of meta descriptions, header tags, and Open Graph tags — how they affect search rankings and how pages look when shared on social media.",
          "Applied these SEO concepts by building a responsive Travel Agency web page.",
        ],
      },
      {
        day: "Wednesday",
        date: "June 24, 2026",
        time: "8:00 AM – 5:00 PM",
        accomplishments: [
          "Integrated HTML audio and video elements, coding a working music player and a video player with standard playback controls.",
          "Explored media optimization best practices for handling images and understanding different image licenses.",
          "Learned what SVGs are and when to use them over standard images, then built a custom heart icon from scratch.",
          "Worked with the <iframe> element, studied \"replaced elements,\" and embedded external videos to build a video display and a clean video compilation page.",
          "Mastered document navigation and URL path syntax — absolute vs. relative paths, slashes, single dots, and double dots.",
          "Reviewed hypertext link states and why they matter for UX, then completed a basic HTML core review and assessment quiz.",
        ],
      },
      {
        day: "Thursday",
        date: "June 25, 2026",
        time: "8:00 AM – 5:00 PM",
        accomplishments: [
          "Explored the structural importance of Semantic HTML — why a solid document hierarchy matters for accessibility and how it differs from outdated presentational HTML.",
          "Studied nuanced semantic elements, learning when to use <strong> or <em> over stylized text, and used description lists to lay out major web browsers.",
          "Learned to properly use text and time semantic elements — block quotes, inline quotes, abbreviations, physical addresses, and standardized dates/times.",
          "Applied these skills to build a structured informational page called \"Quincy's Job Tips.\"",
          "Reported on-site for a practical, hands-on technical training session.",
        ],
      },
      {
        day: "Friday",
        date: "June 26, 2026",
        time: "8:00 AM – 5:00 PM",
        accomplishments: [
          "Learned to navigate Git Bash and connect with GitHub, successfully updating our project website directly through commands in the bash terminal.",
          "Participated in a technical discussion on internet protocols — how IP addresses function and the differences between IPv4 and IPv6 networks.",
          "Worked with specialized semantic elements, representing computer code blocks, mathematical equations, and chemical formulas using native HTML tags.",
          "Built two distinct layout projects: a structured Cat Blog page and an Event Hub.",
        ],
      },
      {
        day: "Saturday",
        date: "June 27, 2026",
        time: "8:00 AM – 5:00 PM",
        accomplishments: [
          "Studied the unique use-cases for specialized text treatments like the <u>, <s>, and <ruby> elements.",
          "Completed a comprehensive review and quiz covering Semantic HTML and web accessibility standards.",
          "Wrapped up the week's training by designing a standard-compliant user survey form and learning to organize data cleanly using HTML tables.",
        ],
      },
    ],
  },
  {
    slug: "week-2",
    week: 2,
    title: "Enter, CSS",
    theme: "CSS Fundamentals",
    dateRange: "June 29 – July 4, 2026",
    totalHours: "47 hours",
    excerpt:
      "From structure to style. This week I learned how CSS rules are written, how the cascade and specificity decide winners, and I shipped my first personal portfolio — committing it live to GitHub.",
    tags: ["CSS", "Specificity", "Box Model", "Portfolio", "Git & GitHub"],
    highlights: [
      { label: "Focus", value: "CSS Fundamentals" },
      { label: "Projects", value: "Café Menu · Business Card · Portfolio" },
      { label: "Milestone", value: "First live GitHub push" },
    ],
    days: [
      {
        day: "Monday",
        date: "June 29, 2026",
        time: "8:00 AM – 5:00 PM",
        accomplishments: [
          "Started the week learning what CSS is and its overall role on the web.",
          "Studied the basic anatomy of a CSS rule, the purpose of the meta viewport element, and how default browser styles apply to HTML.",
          "Covered the differences between inline, internal, and external CSS — and when to use each approach — then looked into how element width and height work.",
        ],
      },
      {
        day: "Tuesday",
        date: "June 30, 2026",
        time: "8:00 AM – 5:00 PM",
        accomplishments: [
          "Focused on layout structure and spacing — the different types of CSS combinators and the core differences between inline and block-level elements.",
          "Studied how inline-block works compared to regular inline or block elements, and went through how margins and padding function.",
          "Put the styling basics into practice by designing a Café Menu layout.",
        ],
      },
      {
        day: "Wednesday",
        date: "July 1, 2026",
        time: "8:00 AM – 5:00 PM",
        accomplishments: [
          "Practiced practical layout implementation by designing a professional Business Card project.",
          "Shifted focus toward CSS logical rules, diving into CSS Specificity.",
          "Studied how specificity changes between inline, internal, and external styles, and how the universal selector and basic type selectors carry different weights.",
        ],
      },
      {
        day: "Thursday",
        date: "July 2, 2026",
        time: "8:00 AM – 5:00 PM",
        accomplishments: [
          "Continued breaking down selector hierarchy — the specificity rules for class selectors and ID selectors.",
          "Covered how the !important keyword overrides styles, along with its proper use cases and best practices.",
          "Spent time mapping out selector weights to better understand how conflicting styles resolve.",
        ],
      },
      {
        day: "Friday",
        date: "July 3, 2026",
        time: "9:00 AM – 5:00 PM",
        accomplishments: [
          "Reported on-site to present the personal profile portfolio I built using HTML and CSS.",
          "Used Git Bash to commit and push the project files directly to GitHub.",
          "Spent the remainder of the day continuing with the regular freeCodeCamp training modules.",
        ],
      },
      {
        day: "Saturday",
        date: "July 4, 2026",
        time: "9:00 AM – 5:00 PM",
        accomplishments: [
          "Wrapped up the foundational modules by studying how the cascade algorithm and style inheritance work at a high level.",
          "Completed a comprehensive CSS Fundamentals Review to lock in everything learned throughout the week.",
          "Successfully closed out the block by passing the CSS Fundamentals Quiz.",
        ],
      },
    ],
  },
  {
    slug: "week-4",
    week: 4,
    title: "Styling With Intent",
    theme: "Advanced CSS & Responsive Design",
    dateRange: "July 6 – 11, 2026",
    totalHours: "47 hours",
    excerpt:
      "Pseudo-classes, Flexbox, Grid, animations, and responsive layouts. This was a week of building — Colored Markers, a Ferris Wheel, a City Skyline, and a dozen more projects that turned CSS theory into muscle memory.",
    tags: ["Flexbox", "CSS Grid", "Responsive Design", "Animations", "Accessibility"],
    highlights: [
      { label: "Focus", value: "Advanced & Responsive CSS" },
      { label: "Projects", value: "20+ hands-on builds" },
      { label: "Progress", value: "132h 54m remaining of 324h" },
    ],
    days: [
      {
        day: "Monday",
        date: "July 6, 2026",
        time: "8:00 AM – 5:00 PM",
        accomplishments: [
          "Continued learning advanced CSS styling by working with links, lists, backgrounds, and borders.",
          "Designed a Styled To-Do List and a Blog Post Card to apply these concepts.",
          "Completed the CSS Backgrounds and Borders Review and passed the corresponding quiz.",
        ],
      },
      {
        day: "Tuesday",
        date: "July 7, 2026",
        time: "8:00 AM – 5:00 PM",
        accomplishments: [
          "Studied CSS pseudo-classes and pseudo-elements to enhance webpage interactivity and styling.",
          "Built a Greeting Card, designed a Tourist Traveler Conference Form, and created a Job Application Form.",
          "Completed the review exercises and passed the CSS Pseudo-Classes Quiz.",
        ],
      },
      {
        day: "Wednesday",
        date: "July 8, 2026",
        time: "8:00 AM – 5:00 PM",
        accomplishments: [
          "Focused on User Interface Design fundamentals — user-centered design principles, common design tools, and design fundamentals.",
          "Learned about relative and absolute CSS units and applied the concepts by creating an Event Flyer page.",
          "Successfully completed the Design Fundamentals and CSS Units reviews and quizzes.",
        ],
      },
      {
        day: "Thursday",
        date: "July 9, 2026",
        time: "8:00 AM – 5:00 PM",
        accomplishments: [
          "Studied CSS colors, styling forms, the CSS box model, transforms, overflow, filters, Flexbox, and typography.",
          "Built Colored Markers, a Registration Form, a Contact Form, a Game Settings Panel, a Feature Selection Page, a Confidential Email Page, a Flexbox Photo Gallery, Pricing Plans Layout, Playing Cards, and a Nutritional Label.",
          "Finished the corresponding reviews and quizzes.",
        ],
      },
      {
        day: "Friday",
        date: "July 10, 2026",
        time: "8:00 AM – 5:00 PM",
        accomplishments: [
          "Studied Typography, Accessibility, Positioning, CSS Grid, Debugging CSS, Animation and Accessibility, and Responsive Web Design.",
          "Built a Newspaper Article, Game Webpage, Cat Painting, House Painting, Magazine, Magazine Layout, Product Landing Page, an Animated Ferris Wheel, and a Moon Orbit.",
          "Completed the corresponding reviews and quizzes, strengthening practical skills in responsive web design and modern CSS.",
        ],
      },
      {
        day: "Saturday",
        date: "July 11, 2026",
        time: "9:00 AM – 5:00 PM",
        accomplishments: [
          "Continued studying Responsive Web Design best practices and completed the Responsive Web Design Review and Quiz.",
          "Built a Technical Documentation Page to practice responsive layouts and well-structured documentation sites.",
          "Learned CSS Variables by building a City Skyline project and an Availability Table, reinforcing reusable CSS properties and responsive techniques.",
        ],
      },
    ],
  },
];

export const stats = {
  weeksDocumented: posts.length,
  totalHours: "141 hours",
  projectsBuilt: "30+ builds",
  requiredHours: 324,
  hoursRemaining: "132h 54m",
};
