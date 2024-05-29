import Project1 from "/src/assets/Project-1.jpg";
import Project2 from "/src/assets/Project-2.jpg";
import Project3 from "/src/assets/Project-3.jpg";
import Project4 from "/src/assets/Project-4.jpg";
import Project5 from "/src/assets/Project-5.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React.js, as well as back-end technologies like Python, Django, Javascript, Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = "I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including Python, Django, Javascript, Mysql, Postgresql.My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active and exploring new technologies."

export const EXPERIENCES = [
    {
        year: "2022 - Present",
        role: "Junior Software Developer",
        company: "Dailidecal pvt ltd.",
        description: `Developed and maintained custom admin templates using Django framework to streamline backend operations. Implemented RESTful API calls for seamless data retrieval and manipulation, enhancing overall application functionality.Created and integrated custom components to optimize user experience and meet project requirements. Handled data files efficiently, ensuring proper storage, retrieval, and processing for improved data management. Identified and implemented optimizations to enhance website loading efficiency, resulting in improved performance.`,
        technologies: ["Python", "Django", "Javascript", "Mysql"],
    },
];

export const PROJECTS = [
    {
        title: "CRM System",
        image: Project1,
        description: "The CRM includes secure login, logout, and registration functionalities to manage user access and render user specific data. Custom import-export functionality facilitates the easy management of data, which allow users to import and export CRM data in various formats, enhancing data accessibility and flexibility.",
        technologies: ["Python", "Django", "Mysql", "HTML5", "CSS3"],
    },
    {
        title: "Django REST Api",
        image: Project2,
        description:" Developed a scalable Django-based API to retrieve cryptocurrency data and deliver it in JSON format. Integrated MySQL database to store and manage cryptocurrency data efficiently.",
        technologies: ["Python", "Django", "HTML", "SQLite3"],
    },
    {
        title: "Portfolio Website",
        image: Project3,
        description: "A personal portfolio website showcasing projects, skills, and contact information. The whole UI and all components are responsive for mobile and small screen size.",
        technologies: ["React", "Tailwind CSS", "Framer motion"],
    },
    {
        title: "Cryptocurrency App",
        image: Project4,
        description: "By fetching data from multiple Api, an application is made which keeps track of all cryptocurrencies and related news form the market.",
        technologies: ["React", "Redux-toolkit"],
    },
    {
        title: "RESTFul Api",
        image: Project5,
        description: "The API supports Create, Read, Update, and Delete operations, allowing users to interact with the database efficiently. MongoDB ensures efficient data storage and retrieval, making it well-suited for handling large volumes of data in a scalable manner.",
        technologies: ["Node.js", "Express.js", "Javascript", "MongoDB"],
    },
];

export const CONTACT = {
    address: "India",
    linkedIn: "linkedin.com/abhilash",
    email: "abhilashshakya4@gmail.com",
};