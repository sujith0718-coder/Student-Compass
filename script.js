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
            window.location.href = "cse.html";
        } else {
            window.location.href = "engineering.html";
        }
    });
}

// Dashboard page

//localStorage.clear();
let currentTask=Number(localStorage.getItem("currentTask"))||0;
let weeklycurrentTask=Number(localStorage.getItem("weeklycurrentTask"))||0;
let p=Number(localStorage.getItem("p"))||0;

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
const weeklytasks = [

    {
        topic: "💻 Programming in C",
        title: "Learn Variables & Data Types",
        description: "Understand variables, data types, and memory allocation.",
        difficulty: "⭐ Beginner",
        time: "45 Minutes",
        resource: "https://www.w3schools.com/c/c_variables.php",
        points: 10
    },

    {
        topic: "💻 Programming in C",
        title: "Practice Input & Output",
        description: "Use scanf() and printf() to interact with users.",
        difficulty: "⭐ Beginner",
        time: "45 Minutes",
        resource: "https://www.programiz.com/c-programming/c-input-output",
        points: 10
    },

    {
        topic: "💻 Programming in C",
        title: "Learn Operators",
        description: "Arithmetic, relational, logical and assignment operators.",
        difficulty: "⭐⭐ Beginner",
        time: "1 Hour",
        resource: "https://www.programiz.com/c-programming/c-operators",
        points: 15
    },

    {
        topic: "💻 Programming in C",
        title: "Practice if-else",
        description: "Solve decision-making problems using if and else.",
        difficulty: "⭐⭐ Beginner",
        time: "1 Hour",
        resource: "https://www.programiz.com/c-programming/c-if-else-statement",
        points: 15
    },

    {
        topic: "💻 Programming in C",
        title: "Build a Simple Calculator",
        description: "Apply variables, operators and conditions in one mini project.",
        difficulty: "⭐⭐⭐ Intermediate",
        time: "2 Hours",
        resource: "calculator.html",
        points: 25
    },

    {
        topic: "🌐 Web Development",
        title: "Learn HTML Basics",
        description: "Understand HTML tags, structure and semantic elements.",
        difficulty: "⭐ Beginner",
        time: "1 Hour",
        resource: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
        points: 10
    },

    {
        topic: "🌐 Web Development",
        title: "Learn CSS Basics",
        description: "Style webpages using colors, spacing and layouts.",
        difficulty: "⭐⭐ Beginner",
        time: "1 Hour",
        resource: "https://developer.mozilla.org/en-US/docs/Learn/CSS",
        points: 10
    },

    {
        topic: "🌐 Web Development",
        title: "Build a Personal Portfolio",
        description: "Create your first responsive portfolio website.",
        difficulty: "⭐⭐⭐ Intermediate",
        time: "3 Hours",
        resource: "portfolio.html",
        points: 30
    },

    {
        topic: "📂 Git & GitHub",
        title: "Learn Git Basics",
        description: "Understand commits, repositories and version control.",
        difficulty: "⭐⭐ Beginner",
        time: "1 Hour",
        resource: "https://git-scm.com/docs/gittutorial",
        points: 15
    },

    {
        topic: "🚀 Real Project",
        title: "Build Student Compass",
        description: "Combine HTML, CSS and JavaScript into a real project.",
        difficulty: "⭐⭐⭐⭐ Project",
        time: "Ongoing",
        resource: "index.html",
        points: 50
    }

];


const weeklytaskTopic = document.getElementById("weeklytaskTopic");
const weeklytaskTitle = document.getElementById("weeklytaskTitle");
const weeklytaskDescription = document.getElementById("weeklytaskDescription");
const weeklytaskDifficulty = document.getElementById("weeklytaskDifficulty");
const weeklytaskTime = document.getElementById("weeklytaskTime");
const weeklytaskPoints = document.getElementById("weeklytaskPoints");
const weeklytaskLink = document.getElementById("weeklytaskLink");
const wtaskPoint = document.getElementById("wtaskPoint");

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
function weeklyshowTask() {

    weeklytaskTopic.textContent = weeklytasks[weeklycurrentTask].topic;

    weeklytaskTitle.textContent ="✨ "+weeklytasks[weeklycurrentTask].title;

    weeklytaskDescription.textContent = "📝 "+weeklytasks[weeklycurrentTask].description;

    weeklytaskDifficulty.textContent =
        "⭐ " + weeklytasks[weeklycurrentTask].difficulty;

    weeklytaskTime.textContent =
        "⏱  " + weeklytasks[weeklycurrentTask].time;

    weeklytaskPoints.textContent =
        "🏆 +" + weeklytasks[weeklycurrentTask].points + " XP";

    weeklytaskLink.href = weeklytasks[weeklycurrentTask].resource;

}

const weeklymbtn=document.getElementById("weeklymbtn");
const weeklyoutoff=document.getElementById("weeklyoutoff");
const weeklyper=document.getElementById("weeklyper");
weeklyoutoff.textContent = `${weeklycurrentTask} / ${weeklytasks.length} completed`;
weeklyper.textContent = `${Math.round((weeklycurrentTask / weeklytasks.length) * 100)}%`;
if (weeklycurrentTask >= weeklytasks.length && weeklymbtn) {
    weeklytaskTitle.textContent = "🎉 All tasks completed!";
    weeklytaskTime.textContent = "Great job! Keep learning.";
    weeklymbtn.textContent = "Completed ✔";
    weeklymbtn.disabled = true;
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

let progressBar=document.getElementById("progressBar");
let weeklyprogressBar=document.getElementById("weeklyprogressBar");
weeklyprogressBar.max = weeklytasks.length;
progressBar.max = tasks.length;
if(mbtn)
{
mbtn.addEventListener("click",function(){

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
        outoff.textContent = `${currentTask} / ${tasks.length} completed`;
        per.textContent = `${Math.round((currentTask / tasks.length) * 100)}%`;
          mbtn.disabled = true;
       confetti({
    particleCount: 120,
    spread: 90,
    startVelocity: 45,
    origin: { x: 0.5, y: 0.75 }
});


    }

}
  progressBar.value=currentTask;
})
}

if(weeklymbtn)
{
weeklymbtn.addEventListener("click",function(){
    p+=weeklytasks[weeklycurrentTask].points;
        localStorage.setItem("p",p);
        wtaskPoint.textContent = "🏆 +" + p + " XP";
    weeklycurrentTask++;
localStorage.setItem("weeklycurrentTask",weeklycurrentTask);


if (weeklytaskTitle && weeklytaskTime) {
    if (weeklycurrentTask < weeklytasks.length) {
        weeklytasks[weeklycurrentTask].completed=true;
        weeklyoutoff.textContent = `${weeklycurrentTask} / ${weeklytasks.length} completed`;
        weeklyper.textContent = `${Math.round((weeklycurrentTask / weeklytasks.length) * 100)}%`;

        weeklyshowTask();
        
        
    } else {
        weeklymbtn.textContent = "Completed ✔";
        weeklyoutoff.textContent = `${weeklycurrentTask} / ${weeklytasks.length} completed`;
        weeklyper.textContent = `${Math.round((weeklycurrentTask / weeklytasks.length) * 100)}%`;
          weeklymbtn.disabled = true;
          weeklyprogressBar.value=weeklycurrentTask;
           weeklytaskTopic.textContent=
 weeklytaskTopic.textContent = "🏆 Weekly Challenge Complete";

weeklytaskTitle.textContent = "🎉 Congratulations! You completed all weekly tasks.";

weeklytaskDescription.textContent =
    "You stayed consistent and finished every challenge. Keep applying these skills in your projects.";

weeklytaskDifficulty.textContent = "⭐ Achievement: Consistency Champion";

weeklytaskTime.textContent = "⏱ Total Progress: 10 / 10 Tasks Completed";

weeklytaskPoints.textContent = `🏆 Total XP Earned: ${p} XP`;

weeklytaskLink.textContent = "📚 Review Learning Resources";
weeklytaskLink.href = "#Resource";
confetti({
    particleCount: 180,
    spread: 100,
    startVelocity: 50,
    origin: { x: 0.5, y: 0.7 }
});

setTimeout(() => {
    confetti({
        particleCount: 150,
        spread: 120,
        angle: 60,
        origin: { x: 0, y: 0.6 }
    });

    confetti({
        particleCount: 150,
        spread: 120,
        angle: 120,
        origin: { x: 1, y: 0.6 }
    });
}, 300);
 
    }

}
  weeklyprogressBar.value=weeklycurrentTask;
})
}



showTask();
weeklyshowTask();


