


const jobs = [
    {
      title: "Software Engineer",
      image: "jobimages/software-engineer.svg",
      details:
        "Responsible for designing, developing and maintaining software systems and applications.",
      openPositions: "2",
      link: "#",
      location: "Taguig City, Metro",
      requirements: "Bachelor's degree in Computer Science or related field.",
      
    },
  
    {
      title: "Data Scientist",
      image: "jobimages/data-scientist.svg",
      details:
        "Responsible for collecting, analyzing and interpreting large data sets to help organizations make better decisions.",
      openPositions: "3",
      link: "#",
    },
  
    {
      title: "Project Manager",
      image: "jobimages/project-manager.svg",
      details:
        "Responsible for planning, executing and closing projects on time and within budget.",
      openPositions: "1",
      link: "#",
    },
  
    {
      title: "Sales Representative",
      image: "jobimages/sales-representative.svg",
      details:
        "Responsible for reaching out to potential customers and closing sales deals.",
      openPositions: "5",
      link: "#",
    },
  
    {
      title: "Marketing Manager",
      image: "jobimages/marketing-manager.svg",
      details:
        "Responsible for creating and executing marketing strategies to promote a company or product.",
      openPositions: "1",
      link: "#",
    },
    {
      title: "Graphic Designer",
      image: "jobimages/graphic designer.png",
      details:
        "Responsible for creating visual concepts to communicate ideas that inspire, inform, and captivate consumers.",
      openPositions: "2",
      link: "#",
    },
    
  ];
  
const jobsHeading = document.querySelector(".jobs-list-container h2");
const jobsContainer = document.querySelector(".jobs-list-container .jobs");
const jobSearch = document.querySelector(".jobs-list-container .job-search");

let searchTerm = "";

const createJobListingCards = () => {
    jobsContainer.innerHTML = "";

    jobs.forEach((job) => {
        if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            let jobCard = document.createElement("div");
            jobCard.classList.add("job");

            let image = document.createElement("img");
            image.src = job.image;

            let title = document.createElement("h3");
            title.innerHTML = job.title;
            title.classList.add("job-title");

            let details = document.createElement("div");
            details.innerHTML = job.details;
            details.classList.add("details");

            let detailsBtn = document.createElement("a");
            detailsBtn.href = job.link;
            detailsBtn.innerHTML = "More Details";
            detailsBtn.classList.add("details-btn");

            let openPositions = document.createElement("span");
            openPositions.classList.add("open-positions");

            if (job.openPositions == 1) {
                openPositions.innerHTML = `${job.openPositions} open position`;
            } else {
                openPositions.innerHTML = `${job.openPositions} open positions`;
            }

            jobCard.appendChild(image);
            jobCard.appendChild(title);
            jobCard.appendChild(details);
            jobCard.appendChild(detailsBtn);
            jobCard.appendChild(openPositions);

            jobsContainer.appendChild(jobCard);
        }
    });
};

createJobListingCards();

jobSearch.addEventListener("input", (e) => {
    searchTerm = e.target.value.trim(); // Trim whitespace from the search term
    createJobListingCards();
}); 