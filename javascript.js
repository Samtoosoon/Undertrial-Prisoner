// complaint box 
document.addEventListener("DOMContentLoaded", function() {
    // Get the complaint box element
    var complaintBox = document.getElementById("complaint-box");
  
    // Add a click event listener to the complaint box
    complaintBox.addEventListener("click", function() {
      // Open a new HTML file when the complaint box is clicked
      window.open("complain.html", "_blank");
    });
  });
  
//   court hearing tracker 
  document.addEventListener("DOMContentLoaded", function() {
    // Get the court hearing tracker element
    var courtHearingTracker = document.getElementById("court-hearing-tracker");
  
    // Add a click event listener to the court hearing tracker
    courtHearingTracker.addEventListener("click", function() {
      // Open the specified website in a new window
      window.open("https://services.ecourts.gov.in/ecourtindia_v6/?p=courtorder/index&app_token=c6f9b76d4d6d2e7b1337239510b36692c5e163b5157cd81483d13146cd2d6dc7", "_blank");
    });
  });
  

//  probono lawyer 
document.addEventListener("DOMContentLoaded", function() {
    // Get the complaint box element
    var complaintBox = document.getElementById("lawyer-find");
  
    // Add a click event listener to the complaint box
    complaintBox.addEventListener("click", function() {
      // Open a new HTML file when the complaint box is clicked
      window.open("search/search_page.html", "_blank");
    });
  });
