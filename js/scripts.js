$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();
    var luckyScore = 0;
    $("input:checkbox[name=lucky]:checked").each(function() {
      luckyScore = luckyScore + parseInt($(this).val());
    });
    $("input:checkbox[name=unlucky]:checked").each(function() {
      luckyScore = luckyScore + parseInt($(this).val());
    });
    if (luckyScore == 0) {
      $(".output").text("You are neither lucky nor unlucky, because luck is a fake idea that doesn't actually exist.");
    } else if (luckyScore > 0) {
      $(".output").text("You are insanely lucky, grab yourself some lucky charms and hit the craps table, baby.");
    } else {
      $(".output").text("DO NOT LEAVE THE HOUSE YOU ARE IN DANGER.");
    };
  });
});
