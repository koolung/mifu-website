function showPleatDetails() {
    var dropdown = document.getElementById("pleatTypeDropdown");
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
  
    var pleatImage = document.getElementById("pleatImage");
    var pleatDescription = document.getElementById("pleatDescription");
    var pleatWarning = document.getElementById("pleatWarning");
    var pleatDetails = document.getElementById("pleatDetails");
  
    // Reset previous content
    pleatImage.innerHTML = "";
    pleatDescription.innerHTML = "";
    pleatWarning.innerHTML = "";
  
    // Set new content based on the selected option
    if (selectedOption === "singlePleat") {
      pleatImage.innerHTML = "<img class='curtainPleatImg' src='dist/images/single_pleat_image.jpg'>";
      pleatDescription.innerHTML = "<p> Single Pleat description goes here. </p>";
    } else if (selectedOption === "doublePleat") {
      pleatImage.innerHTML = "<img class='curtainPleatImg' src='dist/images/double_pleat_image.jpg'>";
      pleatDescription.innerHTML = "<p> Double Pinch Pleat description goes here.</p>";
    } else if (selectedOption === "2.5Pleat") {
      pleatImage.innerHTML = "<img class='curtainPleatImg' src='dist/images/2.5_pleat_image.jpg'>";
      pleatDescription.innerHTML = "<p> 2.5 Pinch Pleat description goes here.</p>";
    } else if (selectedOption === "rippleFoldPleat") {
      pleatImage.innerHTML = "<img class='curtainPleatImg' src='dist/images/ripple_fold_image.jpg'>";
      pleatDescription.innerHTML = "<p> Ripple Fold Pleat description goes here.</p>";
      pleatWarning.innerHTML = "<p> Ripple Fold Pleat option only supports tracks.</p>";
    } else if (selectedOption === "modern1.5Pleat") {
      pleatImage.innerHTML = "<img class='curtainPleatImg' src='dist/images/modern_1.5_pleat_image.jpg'>";
      pleatDescription.innerHTML = "<p> Modern 1.5 Pleat description goes here.</p>";
    } else if (selectedOption === "modern2Pleat") {
      pleatImage.innerHTML = "<img class='curtainPleatImg' src='dist/images/modern_2_pleat_image.jpg'>";
      pleatDescription.innerHTML = "<p> Modern 2 Pleat description goes here.</p>";
    }
  
    // Add the common information about rods and tracks
    pleatDescription.innerHTML += "<p>Rods and Tracks are sold individually.</p>";
  
    // Slide open the pleatDetails div
    pleatDetails.style.height = pleatDetails.scrollHeight + "px";
  }
  

  
  
  function showLiningDetails() {
    var dropdown = document.getElementById("liningOptionDropdown");
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
  
    var liningImage = document.getElementById("liningImage");
    var liningDescription = document.getElementById("liningDescription");
    var liningDetails = document.getElementById("liningDetails");
  
    // Reset previous content
    liningImage.innerHTML = "";
    liningDescription.innerHTML = "";
  
    // Set new content based on the selected option
    if (selectedOption === "blackout") {
      liningImage.innerHTML = "<img class='curtainPleatImg' src='dist/images/blackout_lining.jpg'>";
      liningDescription.innerHTML = "<p>Blackout lining description goes here.</p>";
    } else if (selectedOption === "privacy") {
      liningImage.innerHTML = "<img class='curtainPleatImg' src='dist/images/privacy_lining.jpg'>";
      liningDescription.innerHTML = "<p>Privacy lining description goes here.</p>";
    }
  
    // Slide open the liningDetails div
    liningDetails.style.height = liningDetails.scrollHeight + "px";
  }
  