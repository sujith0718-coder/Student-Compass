// Login page
const form = document.getElementById("startForm");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const path = document.getElementById("path").value;
        const sem = document.getElementById("sem").value;

        localStorage.setItem("studentName", name);
        localStorage.setItem("studyPath", path);
        localStorage.setItem("semester", sem);

        if (path === "💻 Computer Science & IT") {
            window.location.href = "index.html";
        } else {
            window.location.href = "final.html";
        }
    });
}

// Dashboard page
const name = localStorage.getItem("studentName");
const deg = localStorage.getItem("studyPath");
const sem = localStorage.getItem("semester");

const welcome = document.getElementById("welcome");
const degree=document.getElementById("degree");
const semester=document.getElementById("semester");
if (welcome && name && semester && degree ) {
    welcome.textContent = `Welcome, ${name}! 👋`;
    degree.textContent = deg;
    semester.textContent = sem;
}

let i= Number(localStorage.getItem("completedTasks"))||0;
let progressBar=document.getElementById("progressBar");
const mbtn=document.getElementById("mbtn");
mbtn.addEventListener("click",function(){
    i++;
localStorage.setItem("completedTasks",i);
  progressBar.value=i;
})



if(progressBar)
{
    progressBar.value=i;
}


