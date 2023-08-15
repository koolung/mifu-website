<!-- include 위치: 디렉토리 root (include location: directory root) -->

<html lang="en">
 <head>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="./dist/css/dd.css?v=4.0">
</head>

<div class = "main-wrapper">
        <div class = "container">
            <div class = "product-div">
              <div class = "product-div-left">
                    <!-- 제품 사진 갤러리 product photo gallery -->
                    <div class="img-container">
                      <div class="blind-carousel">
                        <img src="Blind_Template/images/w3.jpg" alt="image">
                        <img src="Blind_Template/images/w2.jpg" alt="image">
                        <img src="Blind_Template/images/w1.jpg" alt="image">
                        <img src="Blind_Template/images/w4.jpg" alt="image">
                        <img src="Blind_Template/images/w5.jpg" alt="image">
                        <img src="Blind_Template/images/w6.jpg" alt="image">
                        <img src="Blind_Template/images/w7.jpg" alt="image">
                        <img src="Blind_Template/images/w8.jpg" alt="image">
                        <img src="Blind_Template/images/w9.jpg" alt="image">
                        <img src="Blind_Template/images/w10.jpg" alt="image">
                        <img src="Blind_Template/images/w11.jpg" alt="image">
                      </div>
                    </div>
                    <div class="hover-container">
                      <div><input type="radio" name="carousel-radio" id="radio-0" value="0" checked><label for="radio-0"></label></div>
                      <div><input type="radio" name="carousel-radio" id="radio-1" value="1"><label for="radio-1"></label></div>
                      <div><input type="radio" name="carousel-radio" id="radio-2" value="2"><label for="radio-2"></label></div>
                      <div><input type="radio" name="carousel-radio" id="radio-3" value="3"><label for="radio-3"></label></div>
                      <div><input type="radio" name="carousel-radio" id="radio-4" value="4"><label for="radio-4"></label></div>
                      <div><input type="radio" name="carousel-radio" id="radio-5" value="5"><label for="radio-5"></label></div>
                      <div><input type="radio" name="carousel-radio" id="radio-6" value="6"><label for="radio-6"></label></div>
                      <div><input type="radio" name="carousel-radio" id="radio-7" value="7"><label for="radio-7"></label></div>
                      <div><input type="radio" name="carousel-radio" id="radio-8" value="8"><label for="radio-8"></label></div>
                      <div><input type="radio" name="carousel-radio" id="radio-9" value="9"><label for="radio-9"></label></div>
                      <div><input type="radio" name="carousel-radio" id="radio-10" value="10"><label for="radio-10"></label></div>
                    </div>
                    
                    <div class="img-container">
                      <div class="blind-carousel">
                        <img src="Blind_Template/images/w7.jpg" alt="image">
                      </div>
                    </div>
                    <div class="img-container">
                      <div class="blind-carousel">
                        <img src="Blind_Template/images/w5.jpg" alt="image">
                      </div>
                    </div>
                  </div>
                <div class = "product-div-right">
                  <!-- 제품 1 이름 product 1 name -->
                    <span class = "product-name">Double</span>
                    <!-- 제품 1 가격 product 1 price  -->
                    <span class = "product-price">$ 50.25</span>
                    <div class = "product-rating">
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "fas fa-star-half-alt"></i></span>
                        <span>(350 ratings)</span>
                    </div>
                    <p class = "product-description">
                        • Combines a soft shade with the benefits of a horizontal blind<br>
                        • Custom made  <br>
                        • Motorized lift option<br>
                        • 3 color options<br>
                        • Easy installation  /  All hardware included<br>
                        • Cord control option means drilling unnecessary</p>
                    <!-- Button Groups -->
                    <form name="submit" id="submit" action="">
                      <div class = "btn-groups ">
                        
                        <!--넓이 입력 width input-->  
                        <label for="widthInput">Enter a width:</label><br>
                        <input type="number" placeholder="Enter Width"  class="measure-input" name="width" id="widthInput" oninput="enableInput(widthInput, heightInput)" onchange="updateDropdown()" step=".01" required>
                          <label class="toggle">
                            <input type="checkbox" onClick="toggle(this)" name="unit">
                            <span class="labels" data-on="cm" data-off="inch"></span>
                          </label>
                        <br><br>
                        <!-- end 넓이 입력 width input-->

                        <!-- 높이 입력 height input -->
                        <label for="heightInput">Enter a height:</label><br>
                        <input type="number" placeholder="Enter Height"  class="measure-input" name="height" id="heightInput" onchange="updateDropdown()" step=".01" disabled required>
                          <label class="toggle">
                            <input type="checkbox" onClick="toggle(this)" name="unit">
                            <span class="labels" data-on="cm" data-off="inch"></span>
                          </label>
                        <br><br>
                        <!-- end 높이 입력 height input -->

                        <!-- 주름 타입 Pleat type -->
                        <div class="dropdown">
                            <label for="pleatTypeDropdown">Select Pleat Type:</label><br>
                            <select id="pleatTypeDropdown" class="drop-down-btn" onchange="showPleatDetails()">
                                <option value="" disabled selected hidden>Select Pleat Type</option>
                                <option value="singlePleat">Single Pleat</option>
                                <option value="doublePleat">Double Pinch Pleat</option>
                                <option value="2.5Pleat">2.5 Pinch Pleat</option>
                                <option value="rippleFoldPleat">Ripple Fold Pleat</option>
                                <option value="modern1.5Pleat">Modern 1.5 Pleat</option>
                                <option value="modern2Pleat">Modern 2 Pleat</option>
                            </select>
                            </div><br>

                        <div id="pleatDetails">
                            <div id="pleatImage" class="pleat-content"></div>
                            <div id="pleatDescription" class="pleat-content"></div>
                            <div id="pleatWarning" class="pleat-content"></div>
                        </div>

                        <!-- End Pleat type -->
                        <br>

                        <!-- 라이닝 방식 Lining options-->
                        <label for="liningOptionDropdown">Lining Options:</label><br>
                        <select id="liningOptionDropdown" class="drop-down-btn" onchange="showLiningDetails()" placeholder="Choose Lining Option" required>
                        <option value="" disabled selected hidden>Select a lining option</option>
                        <option value="blackout">Blackout</option>
                        <option value="privacy">Privacy</option>
                        </select><br><br>

                        <div id="liningDetails">
                            <div id="liningImage"></div>
                            <div id="liningDescription"></div>
                        </div>

                        <!-- End Lining options-->

                        <!-- Caption -->
                        <label for="productCaption">Room Name:</label><br>
                        <input id="productCaption" type="text" value="" class="caption size-down" placeholder="Write Room Name/Number">
                        <br><br>
                        <!-- End Caption -->

                        <!-- Counter -->               
                        <label for="counter">Quantity:</label><br>
                        <div class="counter">
                            <span class="down" onClick='decreaseCount(event, this)'>-</span>
                            <input type="text" value="1" oninput="slideNumber(this)">
                            <span class="up" onClick='increaseCount(event, this)'>+</span>
                        </div>

                        <!-- End Counter -->

                        
                        <!-- 장바구니에 추가 add to cart -->
                        <br><br>
                        <button type = "button" class = "add-cart-btn"><i class = "fas fa-shopping-cart"></i>add to cart</button>

                        <script src="Curtain_Template/curtain.js"></script>
                    </div>
                  </form>
                  <!-- End Button Groups -->
                </div>
            </div>
        </div>
    </div>
    <script src = "script.js"></script>

    