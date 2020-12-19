var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(currentDate);

$("#currentDay").text(currentDate);

var currentTime = moment().format("ha");


console.log(currentTime.toUpperCase());

// How to compaire arry order




var taskList = [
  {
    currentHour: "9AM",
    currentTask: "",
  },
  {
    currentHour: "10AM",
    currentTask: "",
  },
  {
    currentHour: "11AM",
    currentTask: "",
  },
  {
    currentHour: "12PM",
    currentTask: "",
  },
  {
    currentHour: "1PM",
    currentTask: "",
  },
  {
    currentHour: "2PM",
    currentTask: "",
  },
  {
    currentHour: "3PM",
    currentTask: "",
  },
  {
    currentHour: "4PM",
    currentTask: "",
  },
  {
    currentHour: "5PM",
    currentTask: "",
  },
];

for (n = 0; n < taskList.length; n++) {
  if (localStorage.getItem(taskList[n].currentHour) === null ) {
    localStorage.setItem(taskList[n].currentHour, taskList[n].currentTask);
  }

  var newTr = $("<tr>");
  newTr.attr("data-time", taskList[n].currentHour);
  newTr.attr("class", taskList[n].currentHour);
  $("#table-body").append(newTr);

  var newTh1 = $("<th>");
  newTh1.text(taskList[n].currentHour);
  newTh1.attr("class", "hour");
  newTh1.attr("scope", "row");

  var newTh2 = $("<th>");
  newTh2.attr("class", "task-item");
  newTh2.html("<textarea class='description' rows='2' cols='45'>"+ localStorage.getItem(taskList[n].currentHour) +"</textarea>");

  var newTh3 = $("<th>");
  newTh3.attr("class", "saveBtn text-center");
  newTh3.html("<i class='far fa-save'></i>");
  newTh3.on("click", function() {
    var setHour = $(this).parent().attr("data-time");
    var setTask = $(this).siblings(".task-item").children().val().trim();
    localStorage.setItem(setHour , setTask);
  });
  $("."+ taskList[n].currentHour).append(newTh1, newTh2, newTh3);

}

