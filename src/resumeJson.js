const resumeData = {
   "personalInfo": {
      "name": "Mohammed Algadhib",
      "objective": "Motivated Software Engineer with experience in developing desktop and embedded applications using C and C++.",
      "linkedin": "https://www.linkedin.com/in/algadhim/",
      "github": "https://github.com/algadhib",
      "email": "algadhib.mohammed@gmail.com",
      "phone": "",
      "address": ""
   },
   "education": {
      "schoolName": "Oregon State University",
      "GPA": "3.75",
      "gradDate": "December 2018",
      "major": "Bachelor of Science, Electrical and Computer Engineering.",
      "meta": [
         "Minor in Computer Science.",
         "Eta kappa Nu, Pi chapter, EECS Honors society.",
         "Related coursework: Analog circuit design, C/C++ programming, Operating Systems, Software Engineering, Computer Architecture, Data Structures, Web Development, Microcontrollers, Mobile App Development, Multimedia Systems, System Verilog, Computer Graphics."
      ],
   },
   "experince": [
      {
         "position": "Software Engineer",
         "companyName": "On Semiconductor",
         "companyAddress": "Beaverton, OR. ",
         "date": "March 2018 – Current",
         "summary": "Collaborated in the development of Strata Developer Studio. Strata Developer Studio is a cloud-connected desktop application that provides seamless environment for engineers to design and evaluate with ON Semiconductor technologies.",
         "duties": [
            "Designed, tested, and maintained backend services and libraries in C/C++.",
            "Reduced the time required for new developers to set up their computer to only one hour by automating the process of downloading, installing and configuring the required tools.",
            "Developed and maintained embedded firmware libraries."
         ]
      },
      {
         "position": "Software Developer Intern",
         "companyName": "Autodesk Inc.",
         "companyAddress": "Portland, OR. ",
         "date": "June 2018 – September 2018",
         "summary": "Contributed to scrum team contributing to the development of HFDM “High Frequency Data Management” C++ SDK. by adding new product features, fixing bugs, testing, and integrating CI/CD tools.",
         "duties": [
            "Implemented new functionality to the SDK using.",
            "Debugged and fix reported bugs in the source code. ",
            "Added new test cases using Google test framework.",
            "Integrated CI/CD, such as code coverage tools, to Jenkins pipeline."
         ]
      },
      {
         "position": "Control Engineering Intern",
         "companyName": "Peterson Pacific Corp.",
         "companyAddress": "Eugene, OR.",
         "date": "September 2017 – June 2018",
         "summary": "Designed and Integrated volume and weight production rate monitoring systems into a mobile mulch grinder using IQAN software through communication via J1939 protocol.",
         "duties": [
            "Implemented the systems control logic and the GUI using IQAN Design Software.",
            "Analyzed CAN bus network traffic."
         ]
      }
   ],
   "projects": [
      {
         "name": "Online Portfolio",
         "date": "Winter 2019",
         "description": "Implemented an online resume page that parses the resume data from a json object and render it as a web page using React and Semantic-ui.",
         "skills": [
            "React",
            "JavaScript",
            "NodeJS"
         ],
         "githubLink":"https://github.com/algadhib/onlinePortfolio"
      },
      {
         "name": "Crypto Clicker",
         "date": "Winter 2018",
         "description": "Collaborated in the design and implementation of a clicker game that utilize Coinbase API to get real time crypto currency exchange rates to enable the player to invest in virtual money.",
         "skills": [
            "Java",
            "Android Studio"
         ],
         "githubLink":"https://github.com/algadhib/final-project-crypto-clicker"
      },
      {
         "name": "Atmega128 FM Clock Radio",
         "date": "Fall 2017",
         "description": "Programmed and built FM clock radio using Atmega128 development board and FM radio chip that uses encoders, buttons, 7-segment display, and LCD screen as a user interface.",
         "skills": [
            "Embedded systems programming",
            "microcontroller communication"
         ],
         "githubLink":""
      },
      {
         "name": "\"Game\"",
         "date": "Summer 2017",
         "description": "Contributed in a group of three in developing the backend a game platform.",
         "skills": [
            "JavaScript",
            "NodeJS",
            "web development"
         ],
         "githubLink":"https://github.com/algadhib/Game"
      },
      {
         "name": "Blackjack",
         "date": "Spring 2016",
         "description": "Programmed Blackjack game using object-oriented language (C++) that have multi-players and single-player modes.",
         "skills": [
            "Object Oriented Programming",
            "Linux environment"
         ],
         "githubLink":""
      },
   ],
   "skills":[
      {
         "skillHeader": "Programming",
         "skillList": [ "C/C++", "JavaScript", "Bash shell scripting", "Java", "AVR C", "AVR Assembly", "Python", "OpenGL"]
      },
      {
         "skillHeader": "Web Development",
         "skillList": [ "nodeJs", "React", "Redux", "Express"]},
      {
         "skillHeader": "CI/CD",
         "skillList": [ "Google test", "Junit testing", "Jenkins", "Docker"]
      },
      {
         "skillHeader": "Data Analysis/Simulation",
         "skillList": [ "MATLAB", "LTspice"]
      }
   ]
}

export default resumeData;