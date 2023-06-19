let resumeDesign = document.getElementById('resumeDesign')

resumeDesign.classList.add('d-none')

let addExperience = document.getElementById("addExperience");
addExperience.addEventListener("click", addExperiencedFunc);

let removeExperience = document.getElementById("removeExperience");
removeExperience.addEventListener("click", removeExperienceFunc);

const generateBtn = document.getElementById("generate");

const loader = document.getElementById('loader');

generateBtn.addEventListener("click", generateResumeFunc);

let addLanguageBtn = document.getElementById('addLanguageBtn');
addLanguageBtn.addEventListener("click", generateLanguageFun);

let removeLanguageBtn = document.getElementById('removeLanguageBtn');
removeLanguageBtn.addEventListener("click", removeLanguageFun);

let languageOptions = document.getElementById('languageOptions');

let languageNameInput = document.getElementById('languageNameInput');


let languageNames = document.getElementById('languageNames');
let dob = document.getElementById('dob');
let dobResume = document.getElementById('dobResume');



function generateResumeFunc() {





  loader.classList.remove("d-none");

  setTimeout(() => {
    loader.classList.add('d-block')
    loader.classList.add("d-none");
    resumeDesign.classList.remove('d-none')
    window.print();
    resumeDesign.classList.add('d-none')
  }
    , 1000);








  const inputFullname = document.getElementById("inputFullname");
  const inputEmail = document.getElementById("inputEmail");
  const inputAddress = document.getElementById("inputAddress");
  const inputPhone = document.getElementById("inputPhone");
  const inputLinkedin = document.getElementById("inputLinkedin");
  const summary = document.getElementById("summary");
  const experience1 = document.getElementById("experience1");
  const schoolEducation = document.getElementById("schoolEducation");
  const higherEducation = document.getElementById("higherEducation");
  const skills = document.getElementById("skills");

  //   resume

  const fullnameResume = document.getElementById("fullnameResume");
  const emailResume = document.getElementById("emailResume");
  const addressResume = document.getElementById("addressResume");
  const phoneResume = document.getElementById("phoneResume");
  const linkedinResume = document.getElementById("linkedinResume");
  const summaryResume = document.getElementById("summaryResume");
  const experienceResume = document.getElementById("experienceResume");
  const schoolEducationResume = document.getElementById(
    "schoolEducationResume"
  );
  const higherEducationResume = document.getElementById(
    "higherEducationResume"
  );
  const skillsResume = document.getElementById("skillsResume");
  const languageResume = document.getElementById("languageResume");

  let exper = document.getElementById('exper');

  let values = [];

  experienceResume.innerText = "";

  if (exper.childElementCount > 0) {

    for (let index = 0; index < exper.childElementCount; index++) {

      values[index] = exper.children[index].children[0].value;

    }
  }

  for (let index = 0; index < values.length; index++) {
    const h6 = document.createElement("h6");
    //h6.className = "list-group-item";
    h6.innerHTML = values[index];
    experienceResume.appendChild(h6);
  }

  let skillsString = skills.value;


  const skillsArray = skillsString.split(",");


  skillsResume.innerHTML = "";
  languageResume.innerHTML = "";


  for (let index = 0; index < skillsArray.length; index++) {

    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = skillsArray[index];
    skillsResume.appendChild(li);

  }

  fullnameResume.innerHTML = inputFullname.value;
  emailResume.innerHTML = inputEmail.value;
  addressResume.innerHTML = inputAddress.value;
  phoneResume.innerHTML = inputPhone.value;
  linkedinResume.innerHTML = inputLinkedin.value;
  summaryResume.innerHTML = summary.value;
  schoolEducationResume.innerHTML = schoolEducation.value;
  higherEducationResume.innerHTML = higherEducation.value;
  dobResume.innerText = dob.value


  let languageNamesResume = [];
  let languageValuesResume = [];

  for (let index = 0; index < languageNames.childElementCount; index++) {

    languageNamesResume[index] = languageNames.children[index].innerText;
    languageValuesResume[index] = languageOptions.children[index].children[0].value;
  }


  for (let index = 0; index < languageNamesResume.length; index++) {

    if (languageValuesResume[index] == 0) {
      languageValuesResume[index] = "No Proficiency";
    } else if (languageValuesResume[index] == 1) {
      languageValuesResume[index] = "Elementary";
    } else if (languageValuesResume[index] == 2) {
      languageValuesResume[index] = "Limited Working Proficiency";
    } else if (languageValuesResume[index] == 3) {
      languageValuesResume[index] = "Professional Working Proficiency";
    } else if (languageValuesResume[index] == 4) {
      languageValuesResume[index] = "Full Professional Proficiency";
    } else if (languageValuesResume[index] == 5) {
      languageValuesResume[index] = "Native / Bilingual";
    }

    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = languageNamesResume[index] + ": " + languageValuesResume[index];
    languageResume.appendChild(li);

  }



}



function addExperiencedFunc() {
  const div = document.createElement("div");
  div.className = "row mt-3";

  var text = document.createElement("INPUT");
  text.setAttribute("type", "text");
  text.className = "form-control mb-3 mx-2";

  div.appendChild(text);

  let exper = document.getElementById("exper");

  exper.appendChild(div);
}

function removeExperienceFunc() {
  let lastChild = document.getElementById("exper").lastChild;

  lastChild.remove();
}

function generateLanguageFun() {

  if (languageNameInput.value == "") {
    alert("Language Name Can Not Be Empty!");
  } else {

    const th = document.createElement("th");

    th.innerText = languageNameInput.value;

    languageNames.appendChild(th);

    let languageLevels = ["No Proficiency", "Elementary", "Limited Working Proficiency", "Professional Working Proficiency", "Full Professional Proficiency", "Native / Bilingual"];

    let languageValues = [0, 1, 2, 3, 4, 5];

    const td = document.createElement('td');

    const select = document.createElement('select');

    select.classList = "form-select form-select-sm";
    select.setAttribute("aria-label", ".form-select-sm example");




    for (let index = 0; index < languageValues.length; index++) {

      let option = document.createElement("option");

      option.setAttribute("value", languageValues[index])

      option.innerText = languageLevels[index];

      select.appendChild(option);


    }

    td.appendChild(select);

    languageOptions.appendChild(td);

    languageNameInput.value = "";

  }



}

function removeLanguageFun() {
  languageOptions.lastChild.remove();
  languageNames.lastChild.remove();
}





