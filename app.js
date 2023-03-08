// Ngày bắt đầu yêu nhau
const yourDate = new Date("2023-01-14T02:12:36"),

    // Danh sách cái bài nhạc nền
    music = ['AkumanoKo'];

document.addEventListener('DOMContentLoaded', function() {
    var rootTime = document.querySelector("time");

    document.querySelector("anni").textContent = `${(yourDate.getDate()>9)?yourDate.getDate():"0"+yourDate.getDate()}-${(yourDate.getMonth()>8)?(yourDate.getMonth()+1):"0"+(yourDate.getMonth()+1)}-${yourDate.getFullYear()}`;

    document.querySelector("date").textContent = Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) + " Ngày";

    function olock() {
        var today = new Date(),
            hrs = (Math.floor(Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
            min = (Math.floor(Math.floor((today - yourDate) / 1000) / 60)) % 60,
            sec = Math.floor((today - yourDate) / 1000) % 60;
        rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
    }
    olock();
    var timer = setInterval(function() {
        olock()
    }, 1000);
    document.querySelector("audio").setAttribute("src", "https://www.nhaccuatui.com/mh/auto/Gg8jNDAqxLnU");

    document.getElementsByTagName("body")[0].insertAdjacentHTML(
        "beforeend",
        "<div id='mask'></div>"
    );

}, false);