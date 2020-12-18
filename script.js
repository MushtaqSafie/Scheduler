


localStorage.setItem("9AM", "it is now 9 o clock");
localStorage.setItem("10AM", "helo 10 o clock");

// Working Hour
// 9 10 11 12 1 2 3 4 5 


for (i = 0; i < 9; i++) {
  var dataSelector = $(".row-"+i).attr("data-time");

  var getReminder = localStorage.getItem(dataSelector);
  $(".reminder-" + i).text(getReminder);
}

$(".saveBtn").on("click", function() {
  var setTime = $(this).parent().attr("data-time");
  console.log(setTime);
})