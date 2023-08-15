// hamburger on mobile
const hamburger = document.querySelector('.noheader .nav-bar .nav-list .hamburger');
const menu_item = document.querySelectorAll('.noheader .nav-bar .nav-list ul li a');
const icon_nav = document.querySelector('.noheader .nav-bar .nav-list ul.icon-nav');
const word_nav = document.querySelector('.noheader .nav-bar .nav-list ul.word-nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    icon_nav.classList.toggle('active');
    word_nav.classList.toggle('active');
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        icon_nav.classList.remove('active');
        word_nav.classList.remove('active');
    });
});

//header changing colour
const header = document.querySelector('.noheader.container');

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#1f2121';
	} else {
		header.style.backgroundColor = '#313232';
	}
});


    /* updating headcover option per the measurement input */
    function updateDropdown() {
		var depthInput = parseFloat(document.getElementById("depthInput").value);
		var widthInput = parseFloat(document.getElementById("widthInput").value);
		var heightInput = parseFloat(document.getElementById("heightInput").value);
		var controlOption = document.getElementById("controlOptionDropdown").value;
  
		var menuOptions = document.getElementById("menuOptions");
		menuOptions.innerHTML = ""; // Clear previous options
  
		//check if the depth measurement is below 2 inches
		if(depthInput < 2){
		  showDepthDiv();
		} else{
		  dontShowDepthDiv();
		}

		//choose an option
		addOption("menuOptions", "Please Choose a head cover option", "");
  
		//check if the motorized option is selected
		if(depthInput != null || widthInput != null || heightInput != null){
			if (controlOption === "option3"){
				if(depthInput > 3.4 && heightInput < 98.42 && heightInput > 13.77 && widthInput > 15.74 && widthInput < 98.42){
					addOption("menuOptions", "3.4'' cover", "3.4cover");
				}
			} 
			//if it isn't motorized, then do normal 3.4 cover check
			else if (depthInput > 3.4 && heightInput < 157.48 && widthInput > 11.81 && widthInput < 98.42) {
					addOption("menuOptions", "3.4'' cover", "3.4cover");
				
			}
			// check 2.6 cover option
			if (depthInput < 2.6 || heightInput > 70.86 || widthInput < 11.81 || widthInput > 98.42) {
				// '2.6'' cover' option is not available
			} else {
				addOption("menuOptions", "2.6'' cover", "2.6cover");
			}
	
			//check if the motorized option is selected
			if (controlOption === "option3"){
				if(depthInput > 2.3 && heightInput < 98.42 && widthInput > 15.74 && widthInput < 98.42){
					addOption("menuOptions", "Girder", "girder");
				}
			} 
			//check if the cordless option is selected
			else if (controlOption === "option2"){
				if(depthInput > 2 && heightInput < 70.86 && widthInput > 23.62 && widthInput < 78.74){
					addOption("menuOptions", "Girder", "girder");
				}
			} 
			//if it isn't motorized nor cordless, then just add girder
			else if(depthInput >= 2 && depthInput <= 30 && heightInput < 98.42 && widthInput < 98.42 ){
				addOption("menuOptions", "Girder", "girder");
			} else {
			console.log("choose a measurement larger than 2 inches");
			}
	
			if (depthInput < 2.4 || heightInput > 196.85 || widthInput < 11.81 || widthInput > 98.42) {
				// 'Exposed' option is not available
			} else {
				addOption("menuOptions", "Exposed", "exposed");
			}
		}
  
		displayOptions();
	}
  
	/* adds option to the <select> */
	function addOption(selectID, optionText, optionValue) {
		var menuOptions = document.getElementById(selectID);
		var options = menuOptions.options;
		var isFirstOption = options.length === 0;
	
		options[options.length] = new Option(optionText, optionValue);
	
		// Select the first option if it's the first option being added
		if (isFirstOption) {
			options[0].selected = true;
		}
	}
	
	/* End adds option to the <select> */
	  
	
/* listen to control option choice and show options */
function displayOptions() {
	var firstDropdown = document.getElementById("controlOptionDropdown");
	var selectedOption = firstDropdown.value;
	var optionsContainer = document.getElementById("optionsContainer");
	optionsContainer.innerHTML = "";
	var cordPositionContainer = document.getElementById("cordPositionContainer");
	cordPositionContainer.innerHTML = "";
  
	// Hide all divs initially
	var cordDiv = document.getElementById("cordDiv");
	var cordlessDiv = document.getElementById("cordlessDiv");
	var motorizedDiv = document.getElementById("motorizedDiv");
	cordDiv.style.overflow = "hidden";
	cordlessDiv.style.overflow = "hidden";
	motorizedDiv.style.overflow = "hidden";
  
	// Set initial height to 0 for all divs
	cordDiv.style.height = "0";
	cordlessDiv.style.height = "0";
	motorizedDiv.style.height = "0";
  
	// Show the selected div and animate the height
	if (selectedOption === "option1") {

	//show cord operation description
	cordDiv.style.display = "block";

	//show cord position options
	var cordPositions = [
	'Choose Cord Position',
	'Left',
	'Right'
	];

	//show cord position option values
	var cordPositionValues = [
	'',
	'left',
	'right'
	];

	var cordLabel = document.createElement("label");
	cordLabel.setAttribute("for", "cord-position");
	cordLabel.innerText = "testsetes";
	var cordPositionDropdown = document.createElement("select");
	cordPositionDropdown.classList.add("cord");
	cordPositionDropdown.setAttribute("id", "cord-position");
	// cordPositionDropdown.addEventListener("onchange", showCordImage());
	
	var options = cordPositionDropdown.options;

	for (var i = 0; i < cordPositions.length; i++) {
	options[options.length] = new Option(cordPositions[i], cordPositionValues[i]);
	}

	cordPositionContainer.appendChild(cordPositionDropdown);
	  cordDiv.style.display = "block";
	  animateHeight(cordDiv, cordDiv.scrollHeight);
	  cordlessDiv.style.display = "none";
	  motorizedDiv.style.display = "none";
	} else if (selectedOption === "option2") {
	  cordDiv.style.display = "none";
	  cordlessDiv.style.display = "block";
	  animateHeight(cordlessDiv, cordlessDiv.scrollHeight);
	  motorizedDiv.style.display = "none";
	} else if (selectedOption === "option3") {
	  cordDiv.style.display = "none";
	  cordlessDiv.style.display = "none";
	  motorizedDiv.style.display = "block";
	  animateHeight(motorizedDiv, motorizedDiv.scrollHeight);
	}
  }
  
  function animateHeight(element, targetHeight) {
	var start = null;
	var currentHeight = 0;
	var step = 20; // adjust the step size as needed (smaller value = smoother animation)
	var duration = 500; // adjust the duration as needed (in milliseconds)
  
	function animationStep(timestamp) {
	  if (!start) start = timestamp;
	  var progress = timestamp - start;
	  var fraction = progress / duration;
  
	  if (fraction > 1) fraction = 1;
  
	  currentHeight = fraction * targetHeight;
	  element.style.height = currentHeight + "px";
  
	  if (fraction < 1) {
		requestAnimationFrame(animationStep);
	  } else {
		element.style.height = targetHeight + "px";
	  }
	}
  
	requestAnimationFrame(animationStep);
  }
  
  /* end listen to control option choice and show options */
  
  
  
	  /* listen to depth measurement input and show details */
	  function showDepthDiv() {
  
	  // Hide all divs initially
	  var depthDiv = document.getElementById("depthDiv");
  
	  // Show the selected div based on the selected value
	  depthDiv.style.display = "block";
	}
  
	  function dontShowDepthDiv() {
  
		// Hide all divs initially
		var depthDiv = document.getElementById("depthDiv");
  
		// hide the selected div based on the selected value
		depthDiv.style.display = "none";
	  }
   /* end listen to depth measurement input and show details */
  
	/* listen to mount type choice and show options */
	function showSelectedDiv() {
	var selectElement = document.getElementById("mountType");
	var selectedValue = selectElement.value;
	
	// Hide all divs initially
	var insideMountDiv = document.getElementById("insideMountDiv");
	var outsideMountDiv = document.getElementById("outsideMountDiv");
	insideMountDiv.style.overflow = "hidden";
	outsideMountDiv.style.overflow = "hidden";
	
	// Show the selected div and hide the inactive div
	if (selectedValue === "insideMount") {
		insideMountDiv.style.display = "block";
		outsideMountDiv.style.display = "none";
		var insideMountHeight = insideMountDiv.offsetHeight;
		insideMountDiv.style.height = "0";
		insideMountDiv.style.transition = "height 0.5s";
		setTimeout(function() {
		insideMountDiv.style.height = insideMountHeight + "px";
		}, 10);
	} else if (selectedValue === "outsideMount") {
		outsideMountDiv.style.display = "block";
		insideMountDiv.style.display = "none";
		var outsideMountHeight = outsideMountDiv.offsetHeight;
		outsideMountDiv.style.height = "0";
		outsideMountDiv.style.transition = "height 0.5s";
		setTimeout(function() {
		outsideMountDiv.style.height = outsideMountHeight + "px";
		}, 10);
	}
	}
	 /* end listen to mount type choice and show options */
  
	  /* enable input */
	  function enableInput(first, second) {
		var firstInput = first;
		var secondInput = second;
  
		if (firstInput.value !== "") {
		  secondInput.disabled = false;
		} else {
		  secondInput.disabled = true;
		}
	  }
	  /*end enable input */

	  /* 헤드커버 색상 headcover colour option depending on which style headcover they choose*/
	  function handleMenuChange() {
		var selectElement = document.getElementById("menuOptions");
		var selectedValue = selectElement.value;
	
		if (selectedValue === "3.4cover" || selectedValue === "2.6cover") {
			var divElement = document.getElementById("colorOptions");
			divElement.innerHTML = "";
	
			var captionElement = document.createElement("caption");
			captionElement.innerText = "Headrail Colour";
	
			var selectColorElement = document.createElement("select");
			selectColorElement.id = "colorSelect";
	
			var options = [
				{ text: "White", value: "white" },
				{ text: "Ivory", value: "ivory" },
				{ text: "Grey", value: "grey" }
			];
	
			options.forEach(function(option) {
				var optionElement = document.createElement("option");
				optionElement.value = option.value;
				optionElement.innerText = option.text;
				selectColorElement.appendChild(optionElement);
			});
	
			selectColorElement.addEventListener("change", handleColorChange);
	
			var imageElement = document.createElement("img");
			imageElement.id = "colorImage";
			imageElement.src = "dist/images/white_image.jpg"; // Set initial src to white_image.jpg
	
			var descriptionElement = document.createElement("p");
			descriptionElement.id = "colorDescription";
			descriptionElement.innerText = "White sheet will be installed inside the headcover"; // Set initial description for White
	
			divElement.appendChild(captionElement);
			divElement.appendChild(selectColorElement);
			divElement.appendChild(imageElement);
			divElement.appendChild(descriptionElement);
		} else {
			var divElement = document.getElementById("colorOptions");
			divElement.innerHTML = "";
		}
	}
	
	function handleColorChange() {
		var selectColorElement = document.getElementById("colorSelect");
	  
		// Check if the selectColorElement exists
		if (selectColorElement) {
		  var selectedColor = selectColorElement.value;
	  
		  var imageElement = document.getElementById("colorImage");
		  imageElement.src = selectedColor ? "dist/images/" + selectedColor + "_image.jpg" : "dist/images/white_image.jpg";
	  
		  var descriptionElement = document.getElementById("colorDescription");
		  descriptionElement.innerText = selectedColor ? selectedColor + " sheet will be installed inside the headcover" : "White sheet will be installed inside the headcover";
		}
	  }
	  
	
	// Trigger handleColorChange on page load
	window.addEventListener("load", handleColorChange);
	
	/* end 헤드커버 색상 headcover colour option depending on which style headcover they choose */

	/* roll option change */ 
	function handleRollOptionChange() {
		var selectElement = document.getElementById("pull");
		var selectedValue = selectElement.value;
	  
		var imageElement = document.getElementById("rollImage");
		var descriptionElement = document.getElementById("rollDescription");
		var slideDownContainer = document.querySelector(".slide-down-container");
	  
		if (selectedValue === "standard" || selectedValue === "reverse") {
		  imageElement.src = selectedValue === "standard" ? "dist/images/standard_roll.jpg" : "dist/images/reverse_roll.jpg";
		  descriptionElement.innerText = selectedValue === "standard" ? "Description for Standard Roll" : "Description for Reverse Roll";
	  
		  // Show the container and its content by adding the 'expanded' class
		  slideDownContainer.classList.add("expanded");
		  slideDownContainer.style.maxHeight = "300px"; // Adjust the value based on the content's height
		} else {
		  // Hide the image and description
		  imageElement.src = "";
		  descriptionElement.innerText = "";
	  
		  // Hide the container and its content by removing the 'expanded' class
		  slideDownContainer.classList.remove("expanded");
		  slideDownContainer.style.maxHeight = "0";
		}
	  }
	  
	  // Set default values and hide the container on page load
	  window.addEventListener("load", function () {
		var selectElement = document.getElementById("pull");
		selectElement.value = ""; // Set an empty value initially
		handleRollOptionChange();
	  });
	  
	
	
	  
	  // Add event listener to handle roll option change
	  
	/* End roll option change */


    const colorFeature1Radio = document.getElementById("colorFeature1");
    const colorFeature2Radio = document.getElementById("colorFeature2");
    const doubleProduct = document.querySelector(".product.double");
    const retroProduct = document.querySelector(".product.retro");
    const otherProducts = document.querySelectorAll(".product:not(.double):not(.retro)");

    colorFeature1Radio.addEventListener("change", function() {
      if (colorFeature1Radio.checked) {
        doubleProduct.classList.remove("hidden");
        retroProduct.classList.remove("hidden");
        otherProducts.forEach(product => product.classList.add("hidden"));
      }
    });

    colorFeature2Radio.addEventListener("change", function() {
      if (colorFeature2Radio.checked) {
        doubleProduct.classList.add("hidden");
        retroProduct.classList.add("hidden");
        otherProducts.forEach(product => product.classList.remove("hidden"));
      }
    });

	


	/* blind colour option */ 
	function showColourImage() {
		var id = 'colourChoice';
		var selectElement = document.getElementById(id);
		var selectedValue = selectElement.value;
	  
		// Hide all image descriptions
		var imageDescriptions = document.getElementsByClassName("image-description assistImageDiv");
		for (var i = 0; i < imageDescriptions.length; i++) {
		  imageDescriptions[i].style.maxHeight = 0;
		}
	  
		// Show the selected image description with slide down effect
		var selectedImage = document.getElementById(selectedValue + "Image");
		if (selectedImage) {
		  selectedImage.style.maxHeight = selectedImage.scrollHeight + "px";
		}
	  }  
	/* End blind colour option */ 


	/* mount type option */
	function showMountImage() {
		var mountTypeSelect = document.getElementById("mountType");
		var selectedOption = mountTypeSelect.options[mountTypeSelect.selectedIndex].value;
	
		var insideMountDiv = document.getElementById("insideMountImage");
		var outsideMountDiv = document.getElementById("outsideMountImage");
	
		// Reset all divs
		insideMountDiv.classList.remove("active");
		outsideMountDiv.classList.remove("active");
	
		// Show the selected image and description
		if (selectedOption === "insideMount") {
		  insideMountDiv.classList.add("active");
		} else if (selectedOption === "outsideMount") {
		  outsideMountDiv.classList.add("active");
		}
	  }
	/* End mount type option */


	// /* cord position option */
	// function showCordImage() {
	// 	var cordPositionSelect = document.getElementById("cord-position");
	// 	var selectedOption = cordPositionSelect.options[cordPositionSelect.selectedIndex].value;
	
	// 	var insideMountDiv = document.getElementById("insideMountImage");
	// 	var outsideMountDiv = document.getElementById("outsideMountImage");
	
	// 	// Reset all divs
	// 	insideMountDiv.classList.remove("active");
	// 	outsideMountDiv.classList.remove("active");
	
	// 	// Show the selected image and description
	// 	if (selectedOption === "insideMount") {
	// 	  insideMountDiv.classList.add("active");
	// 	} else if (selectedOption === "outsideMount") {
	// 	  outsideMountDiv.classList.add("active");
	// 	}
	//   }
	// /* End cord position option */