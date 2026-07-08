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
localStorage.clear();
let currentTask=Number(localStorage.getItem("currentTask"))||0;


const tasks = [
  {
    topic: "💻 Programming in C",
    title: "Learn Variables & Data Types",
    time: "45 Minutes",
    resource: "https://www.w3schools.com/c/c_variables.php"
  },
  {
    topic: "💻 Programming in C",
    title: "Practice if-else Programs",
    time: "1 Hour",
    resource: "https://www.programiz.com/c-programming/c-if-else-statement"
  },
  {
    topic: "🌐 Web Development",
    title: "Learn HTML Basics",
    time: "1 Hour",
    resource: "https://developer.mozilla.org/en-US/docs/Learn/HTML"
  },
  {
    topic: "🌐 Web Development",
    title: "Build Your First Portfolio",
    time: "2 Hours",
    resource: "portfolio.html"
  }
];

const taskTopic = document.getElementById("taskTopic");
const taskTitle = document.getElementById("taskTitle");
const taskTime = document.getElementById("taskTime");
const taskLink = document.getElementById("taskLink");

function showTask() {
    taskTopic.textContent = tasks[currentTask].topic;
    taskTitle.textContent = tasks[currentTask].title;
    taskTime.textContent = "⏱ " + tasks[currentTask].time;
    taskLink.href = tasks[currentTask].resource;
}
const mbtn=document.getElementById("mbtn");
const outoff=document.getElementById("outoff");
const per=document.getElementById("per");
outoff.textContent = `${currentTask} / ${tasks.length} completed`;
per.textContent = `${Math.round((currentTask / tasks.length) * 100)}%`;
if (currentTask >= tasks.length && mbtn) {
    taskTitle.textContent = "🎉 All tasks completed!";
    taskTime.textContent = "Great job! Keep learning.";
    mbtn.textContent = "Completed ✔";
    mbtn.disabled = true;
}

if (taskTitle && taskTime) {
    if (currentTask < tasks.length) {
        showTask();
        
    } else {
        taskTitle.textContent = "🎉 All tasks completed!";
        taskTime.textContent = "Great job! Keep learning.";
        mbtn.textContent="Completed ✔"
        mbtn.disabled=true;
    }
}


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

if(mbtn)
{
mbtn.addEventListener("click",function(){
    i++;
localStorage.setItem("completedTasks",i);
currentTask++;
localStorage.setItem("currentTask",currentTask)
if (taskTitle && taskTime) {
    if (currentTask < tasks.length) {
        tasks[currentTask].completed=true;
        outoff.textContent = `${currentTask} / ${tasks.length} completed`;
        per.textContent = `${Math.round((currentTask / tasks.length) * 100)}%`;
        showTask();
        
        
    } else {
        taskTitle.textContent = "🎉 All tasks completed!";
        taskTime.textContent = "Great job! Keep learning.";
        mbtn.textContent = "Completed ✔";
          mbtn.disabled = true;
    }

}
  progressBar.value=i;
})
}


if(progressBar)
{
    progressBar.value=i;
}



