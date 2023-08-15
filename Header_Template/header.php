


 <!-- Header -->
 <!DOCTYPE html>
 <html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="Template/style.css">
  <link rel="stylesheet" href="style.css">
  <title>Mifu Draperies & Curtains</title>

</head>
  <section id="header" onload="transparentBg">
    <div class="header container">
      <div class="nav-bar">
        <div class="brand">
          <a href="index.php">
            <img class="logo main-logo" src="./img/logo1.png" alt="logo">
          </a>
        </div>
        <div class="nav-list">
          <div class="hamburger">
            <div class="bar"></div>
          </div>
          <ul class="icon-nav">
            <li class="search-icon-li">
            <a href="search.php" data-after="Search" class="search-icon">
              <img class="bag" src="img/search.png" alt="search">
              <p class="search-placeholder">Search</p>
            </a>
            </li>
            <li class="profile-icon-li">
              <a data-after="Profile" class="profile-icon" id="show-popup">
                <img class="bag" src="img/account.png" alt="profile">
              </a>
            </li>
            <li class="question-icon-li">
              <a href="question.php" data-after="Question" class="question-icon">
                <img class="bag" src="img/question.png" alt="question">
              </a>
            </li>
            <li class="bag-icon-li">
              <a href="cart.php" data-after="Cart" class="bagicon">
                <img class="bag" src="img/bag.png" alt="cart">
              </a>
            </li>
          </ul>

          <ul class="word-nav">
            <li><a href="needs.php" data-after="Needs">Shop by Needs</a></li>
            <li><a href="product.php" data-after="Products">Shop by Pruducts</a></li>
            <li><a href="corporate.php" data-after="Corporate">Corporate</a></li>
            <li><a href="hrm.php" data-after="HRM">HRM Clients</a></li>
            <li><a href="promotion.php" data-after="Promotion">Promotion</a></li>
            <li><a href="testimonial.php" data-after="Testimonial">Testimonial</a></li>
            <li><a href="gallery.php" data-after="Gallery">Gallery</a></li>
            
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!-- End Header -->

  <!-- 팝업 창 Pop-up window container -->
  <div id="popup-container">
    <!-- Close button for the pop-up -->
    <span id="popup-close">&times;</span>
    <!-- Content of the pop-up -->
    <h2>Hello, Would you like to log in?</h2>
    <div class="login-div"><caption for="login-id">Email:</caption><input id="login-id"></div>
    <div class="login-div"><caption for="login-pw">Password:</caption><input id="login-pw"></div>
    <button type = "button" class = "login-btn">Log In</button>

  </div>
    <!-- End Pop-up window container -->

  <script src="app.js"></script>
  <script src="Template/popup.js"></script>