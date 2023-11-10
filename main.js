const FREELANCER_FORM = document.querySelector("form");
const FREELANCERS = document.querySelector(".freelancers");

import Freelancer from "./Freelancer.js";

const freelancers = [
  new Freelancer("Luigi Smith", "Plumber", 55),
  new Freelancer("Mario Smith", "Plumber", 75),
  new Freelancer("The Sister", "Plumber", 65),
];

function OnCreateFreeLancerClick(event) {
  event.preventDefault();

  const formElements = FREELANCER_FORM.elements;

  const freelancerName = formElements["freelancer-name"].value;
  const freelancerJob = formElements["freelancer-job"].value;
  const freelancerRate = formElements["freelancer-rate"].value;

  const newFreelancer = new Freelancer(
    freelancerName,
    freelancerJob,
    freelancerRate
  );

  freelancers.push(newFreelancer);
  renderFreelancers();
}

FREELANCER_FORM.addEventListener("submit", OnCreateFreeLancerClick);

function renderFreelancer(name, job, rate) {
  const FREELANCER_CONTAINER = document.createElement("div");

  const NAME_LABEL = document.createElement("h3");
  const OCCUPATION_LABEL = document.createElement("p");
  const RATE_LABEL = document.createElement("p");

  FREELANCER_CONTAINER.classList.add("freelance-container");

  NAME_LABEL.textContent = name;
  OCCUPATION_LABEL.textContent = `Occupation Title: ${job}`;
  RATE_LABEL.textContent = `Hourly Rate: $${rate}`;

  FREELANCER_CONTAINER.append(NAME_LABEL, OCCUPATION_LABEL, RATE_LABEL);
  FREELANCERS.append(FREELANCER_CONTAINER);
}

const names = [
  "Adam White",
  "Emily Gray",
  "Mark Black",
  "Chris Gray",
  "Steven Jobs",
  "Jay Mamosa",
  "Kim K",
  "Cameron D",
  "Sandy Cheeks",
];

const jobs = [
  "Dancer",
  "Programmer",
  "Painter",
  "Shoe Shinner",
  "Butler",
  "Musicians",
  "Potter",
  "Flight Attendant",
  "Maker",
];

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateFreelancer() {
  const randomNameindex = getRandomIndex(names);
  const randomName = names[randomNameindex];

  const randomJobindex = getRandomIndex(jobs);
  const randomJob = jobs[randomJobindex];

  const randomRate = Math.floor(Math.random() * 100 + 8);

  return new Freelancer(randomName, randomJob, randomRate);
}

generateFreelancer();

function renderFreelancers() {
  FREELANCERS.innerHTML = "";
  for (const freelancer of freelancers) {
    renderFreelancer(freelancer.name, freelancer.job, freelancer.rate);
  }
}

const intervalId = setInterval(() => {
  if (freelancers.length >= 10) {
    clearInterval(intervalId);
    return;
  }

  const randomFreelancer = generateFreelancer();
  freelancers.push(randomFreelancer);
  renderFreelancers();
}, 1500);

renderFreelancers();

// wrap it in a funtion and dont call it is like commenting it out until you call it
