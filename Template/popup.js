    // Function to show the pop-up
    function showPopup() {
        const popup = document.getElementById('popup-container');
        popup.style.display = 'block';
        popup.style.zIndex = '99';
        setTimeout(() => {
          popup.style.opacity = '1';
          popup.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 10);
      }
  
      // Function to hide the pop-up
      function hidePopup() {
        const popup = document.getElementById('popup-container');
        popup.style.opacity = '0';
        popup.style.transform = 'translate(-50%, -70%) scale(0.7)';
        setTimeout(() => {
          popup.style.display = 'none';
          popup.style.zIndex = '-99';
        }, 300); // Set the delay to match the transition duration
      }
  
      // Event listener for the button to show the pop-up
      document.getElementById('show-popup').addEventListener('click', showPopup);
  
      // Event listener for the close button to hide the pop-up
      document.getElementById('popup-close').addEventListener('click', hidePopup);
  