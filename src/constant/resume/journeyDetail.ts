import { IJourneyDetails } from "@/interface/resume/journeyDetail";

export const EXPERIENCE_JOURNEY: IJourneyDetails = {
  subTitle: "2018 - 2024",
  title: "Job Experience",
  details: [
    {
      title: "Senior Software Engineer",
      subTitle: "Kellton, Gurgaon (April 2022 - Present)",
      description:
        "As a Senior Software Engineer specializing in React and Next.js, delivered robust UI features integrated with REST APIs, authored test cases, and led a team of five developers to ensure successful project delivery aligned with best practices.",
    },
    {
      title: "Software Engineer",
      subTitle:
        "Leanpitch Technologies Pvt. Ltd, Bengaluru (Nov 2018 - March 2022)",
      description:
        "Specialized in React and Next.js for frontend development and Django for backend API creation. Integrated payment gateways like Razorpay and Stripe, managed multiple projects, and utilized AWS services (S3, Lambda, CloudFront) for scalable solutions.",
    },
    {
      title: "Intern",
      subTitle:
        "Leanpitch Technologies Pvt. Ltd, Bengaluru (Sep 2018 - Nov 2018)",
      description:
        "I gained hands-on experience with HTML, CSS, and JavaScript, using these technologies to design and develop a fully functional company website. This project allowed me to strengthen my understanding of web development fundamentals and implement solutions effectively.",
    },
  ],
};

export const EDUCATION_JOURNEY: IJourneyDetails = {
  subTitle: "2013 - 2017",
  title: "Education",
  details: [
    {
      title: "B.Tech in ECE",
      subTitle: "S.R.M University, Chennai (2013 - 2017)",
      description:
        "Graduated in 2017 from SRM University, Chennai, with a degree in Electronics and Communication Engineering (ECE) and a CGPA of 7.961.",
    },
  ],
};
