const lessons = document.querySelectorAll(".lesson");
const progressbar = document.getElementById("progressbar");
const percent = document.getElementById("percent");
const count = document.getElementById("count");

progressbar.max = lessons.length;

lessons.forEach(function(lesson){
    lesson.addEventListener("change", updateProgress);
});

function updateProgress(){

    let completed = 0;

    lessons.forEach(function(lesson){
        if(lesson.checked){
            completed++;
        }
    });

    progressbar.value = completed;

    let percentage = (completed / lessons.length) * 100;

    percent.textContent = Math.round(percentage) + "%";
    count.textContent = completed + " / " + lessons.length + " completed";
}
updateProgress();
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