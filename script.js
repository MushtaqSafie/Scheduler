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
    currentHour: "5AM",
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
  newTh2.attr("class", "task-item color-"+taskList[n].currentHour);
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

// Theme Color for Past, Present, Future
var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(currentDate);

var currentTime = moment().format("ha");

var order = taskList.length;
for (i = 0; i < taskList.length; i++) {
  var currentHourArry = taskList[i].currentHour;
  var hoursNow = currentTime.toUpperCase();

  if (currentHourArry == hoursNow) {
    order = i;
    var current = "color-"+ taskList[i].currentHour;
    $("."+current).addClass("present");
  }
}

for (x = order-1; x > -1; x--) {
  var before = "color-"+ taskList[x].currentHour;
  $("."+before).addClass("past");
}

for (y = order+1; y < taskList.length; y++) {
  var after = "color-"+ taskList[y].currentHour;
  $("."+after).addClass("future");
}