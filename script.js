// Check form email
let checkEmailForm = document.querySelector(".checkEmailForm");
let infoForm = document.querySelector(".infoForm");
let replaceEmail = document.querySelector(".replaceEmail");
function checkEmail() {
  let email = document.getElementById("email");
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  console.log(email.value);
  if (!regex.test(email.value)) {
    alert("Dia chi email khong hop le.\nExample@gmail.com");
  } else {
    console.log(email.value);
    console.log("Email checked"); // check console
    checkEmailForm.classList.add("d-none");
    infoForm.classList.remove("d-none");
    replaceEmail.innerHTML = email.value;
  }
}

// Xu li cham con tro view more
// con tro luot qua thi hien
function handle(event) {
  let x = ".slide" + event;
  let slide = document.querySelector(x);
  console.log(x); // check console
  slide.classList.remove("d-none");
}
//con tro ra ngoai thi an
function outHandle(event) {
  let x = ".slide" + event;
  let slide = document.querySelector(x);
  console.log("Re " + x); // check console
  slide.classList.add("d-none");
}
function showContent(event) {
  //hien hoac an content
  let x = ".slide" + event;
  let y = ".hide" + event;
  let slide = document.querySelector(x);
  let hideContent = document.querySelector(y);
  if (slide.innerHTML == "View more...") {
    hideContent.classList.remove("d-none");
    slide.innerHTML = "View less...";
  } else {
    slide.classList.add("d-none");
    hideContent.classList.add("d-none");
    slide.innerHTML = "View more...";
  }
}

// Javascript phan nang cao digital-cv
// luu thong tin text tung phan vao cac object
const cvcanhan = {
  goal: ["CV CÁ NHÂN", "none", "Lorem ipsum dolor sit amet."], //goal 1,2,3
  in: ["Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet."],
  out: ["Lorem ipsum dolor sit amet.", "none"],
  name: ["BÙI TRÍ SƠN", "none", "none", "none"],
  primary: ["Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet."],
  project: ["Start 1", "ba", "none", "none", "none", "none", "none"],
  timeline: [
    "No access",
    "none",
    "Lorem ipsum dolor sit amet.",
    "none",
    "none",
    "none",
    "none",
  ],
};
const news = {
  goal: ["TRANG WEB XEM TIN TỨC", "none", "none"], // goal 1,2,3
  in: ["Loreamamamama", "none"], // in 1,2
  out: ["casasaacac", "none"], // out 1,2
  name: ["BÙI TRÍ SƠN", "none", "none", "none"], // name 1,2,3,4
  primary: [
    "Lorem ipsum dolor sit amet consectetur adipisi",
    "Lorem ipsum dolor sit amet.",
  ],
  project: ["Start 1", "none", "none", "none", "none", "none", "none"],
  timeline: [
    "No access",
    "none",
    "none",
    "Lorem ipsum dolor sit amet.",
    "none",
    "none",
    "none",
  ],
};
const pets = {
  goal: ["TRANG WEB QUẢN LÍ THÚ CƯNG", "none", "none"], // goal 1,2,3
  in: ["Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet."],
  out: ["Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet."],
  name: ["BÙI TRÍ SƠN", "none", "none", "none"],
  primary: ["Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet."],
  project: ["Start 1", "ab", "none", "none", "none", "none", "none"],
  timeline: [
    "No access",
    "Lorem ipsum dolor sit amet.",
    "none",
    "none",
    "Lorem ipsum dolor sit amet.",
    "none",
    "none",
  ],
};

const queryString = window.location.search; //url params
console.log(queryString);
// Truy van cac lop trong HTML
isGoal = document.querySelector(".goal-1");
isGoal2 = document.querySelector(".goal-2");
isGoal3 = document.querySelector(".goal-3");
isIn = document.querySelector(".in-1");
isIn2 = document.querySelector(".in-2");
isOut = document.querySelector(".out-1");
isOut2 = document.querySelector(".out-2");
isMember = document.querySelector(".name-1");
isMember2 = document.querySelector(".name-2");
isMember3 = document.querySelector(".name-3");
isMember4 = document.querySelector(".name-4");
isPrimary = document.querySelector(".primary-1");
isPrimary2 = document.querySelector(".primary-2");
isProject = document.querySelector(".project-1");
isProject2 = document.querySelector(".project-2");
isProject3 = document.querySelector(".project-3");
isProject4 = document.querySelector(".project-4");
isProject5 = document.querySelector(".project-5");
isProject6 = document.querySelector(".project-6");
isContent = document.querySelector(".content-1");
isContent2 = document.querySelector(".content-2");
isContent3 = document.querySelector(".content-3");
isContent4 = document.querySelector(".content-4");
isContent5 = document.querySelector(".content-5");
isContent6 = document.querySelector(".content-6");

function isReplace(element) {
  let bien = element;
  isGoal.innerHTML = bien.goal[0];
  isGoal2.innerHTML = bien.goal[1];
  isGoal3.innerHTML = bien.goal[2];
  isIn.innerHTML = bien.in[0];
  isIn2.innerHTML = bien.in[1];
  isOut.innerHTML = bien.out[0];
  isOut2.innerHTML = bien.out[1];
  isMember.innerHTML = bien.name[0];
  isMember2.innerHTML = bien.name[1];
  isMember3.innerHTML = bien.name[2];
  isMember4.innerHTML = bien.name[3];
  isPrimary.innerHTML = bien.primary[0];
  isPrimary2.innerHTML = bien.primary[1];
  isProject.innerHTML = bien.project[0];
  isProject2.innerHTML = bien.project[1];
  isProject3.innerHTML = bien.project[2];
  isProject4.innerHTML = bien.project[3];
  isProject5.innerHTML = bien.project[4];
  isProject6.innerHTML = bien.project[5];
  isContent.innerHTML = bien.timeline[0];
  isContent2.innerHTML = bien.timeline[1];
  isContent3.innerHTML = bien.timeline[2];
  isContent4.innerHTML = bien.timeline[3];
  isContent5.innerHTML = bien.timeline[4];
  isContent6.innerHTML = bien.timeline[5];
}
if (queryString == "?new") {
  // phan trang web tin tuc
  isReplace(news);
} else if (queryString == "?pet") {
  // phan trang web thu cung
  isReplace(pets);
} else if (queryString == "?cvcanhan") {
  // phan cv ca nhan
  isReplace(cvcanhan);
}
