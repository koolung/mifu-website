$(document).ready(function() {
    // Hide the expandable content initially
    $(".expandable-content").hide();
    
    // Toggle expandable content when footer column is clicked
    $(".footer-column").click(function() {
      var clickedExpandable = $(this).find(".expandable-content");
      
      // Hide all other expandable-content sections
      $(".expandable-content").not(clickedExpandable).slideUp();
      
      // Toggle the clicked expandable-content
      clickedExpandable.slideToggle();
      clickedExpandable.toggleClass("active");
    });
  });