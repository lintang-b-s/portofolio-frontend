"use strict";

var ActivitiesList = function ActivitiesList() {
  function renderActivities() {
    if (!activities) {
      return "tidak ada apa apa";
    }

    var bukannone = activities.filter(function (activitie) {
      return activitie.name != "None";
    });
    return bukannone.map(function (activitie) {});
  }
};