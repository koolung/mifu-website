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
                  
                  <div class="img-container blind-img-container">
                    <div class="blind-image">
                      <img src="Blind_Template/images/w7.jpg" alt="image">
                    </div>
                  </div>
                  <div class="img-container blind-img-container">
                    <div class="blind-image">
                      <img src="Blind_Template/images/w5.jpg" alt="image">
                    </div>
                  </div>
                </div>

                <div class = "product-div-right">
                  <!-- 제품 1 이름 product 1 name -->
                    <span class = "product-name">Classic Light Filtering Zebra Blinds</span>
                    <!-- 제품 1 가격 product 1 price  -->
                    <span class = "product-price">$ 50.25</span>
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
                        <!-- 제품 색상 선택  colour choice options -->
                        <label for="colorInput">Choose a Colour:</label><br>
                        <select id="colourChoice" class="drop-down-btn" onchange="showColourImage()">
                          <option value="" disabled selected hidden>Select Colour</option>
                          <option value="beige">Beige</option>
                          <option value="black">Black</option>
                        </select>

                        <div id="beigeImage" class="image-description assistImageDiv">
                          <img src="dist/images/beige.jpg" alt="Beige Image">
                          <p>Description for Beige Image</p>
                        </div>

                        <div id="blackImage" class="image-description assistImageDiv">
                          <img src="dist/images/black.jpg" alt="Black Image">
                          <p>Description for Black Image</p>
                        </div>

                        &nbsp; <br><br>

                        <script src="./dist/js/dd.min.js?ver=4.0"></script>
                        <!-- end 색상 선택 end colour choice optioins -->

                        <!--------------------------------------------------->
                         <!-- 창틀 깊이 입력 창 window depth input --> 
                        <label for="depthInput">Enter a depth:</label><br>
                        <div class="measurement-input">
                          <input type="number" placeholder="Enter Depth"  class="measure-input" name="depthInput" id="depthInput" oninput="enableInput(depthInput, widthInput)" onchange="updateDropdown()" step=".01" required>
                            <label class="toggle">
                              <input type="checkbox" onClick="toggle(this)" name="unit">
                              <span class="labels" data-on="cm" data-off="inch"></span>
                            </label>
                        </div>
                        <!-- 창문 깊이 입력 창 window depth input --> 

                        <!-- 많약 깊이가 '2' 이하 일때 Div for inisufficient Depth if width is less than '2' -->
                        <div id="depthDiv" class="assistImageDiv" style="display: none;">
                          <h2>What if my frame depth is less than 2''? </h2>
                          <img src="dist/images/depth_measurement.jpg" alt="Depth Measurement Image" class="option-images">
                          <p>In case your window frame depth is insufficient for any type of operation system,<br>
                            we recommend you to choose the outside mount option.<br><br>
                          </p>
                        </div>
                        <br><br>
                        <!-- 많약 깊이가 '2' 이하 일때 Div for inisufficient Depth if width is less than '2' -->
                        
                        <!--넓이 입력 width input-->  
                        <label for="widthInput">Enter a width:</label><br>
                        <div class="measurement-input">
                          <input type="number" placeholder="Enter Width"  class="measure-input" name="width" id="widthInput" oninput="enableInput(widthInput, heightInput)" onchange="updateDropdown()" step=".01" disabled required>
                            <label class="toggle">
                              <input type="checkbox" onClick="toggle(this)" name="unit">
                              <span class="labels" data-on="cm" data-off="inch"></span>
                            </label>
                        </div>
                        <br><br>
                        <!-- end 넓이 입력 width input-->

                        <!-- 높이 입력 height input -->
                        <label for="heightInput">Enter a height:</label><br>
                        <div class="measurement-input">
                          <input type="number" placeholder="Enter Height"  class="measure-input" name="height" id="heightInput" onchange="updateDropdown()" step=".01" disabled required>
                            <label class="toggle">
                              <input type="checkbox" onClick="toggle(this)" name="unit">
                              <span class="labels" data-on="cm" data-off="inch"></span>
                            </label>
                        </div>
                        <br><br>
                        <!-- end 높이 입력 height input -->

                        <!-- 체결 방법 Mount type -->
                        <div class="dropdown">
                          <label for="mountType">Select Mount Type:</label><br>
                          <select id="mountType" class="drop-down-btn" onchange="showSelectedDiv()">
                            <option value="" disabled selected hidden>Select Mount Type</option>
                            <option value="insideMount">Inside Mount</option>
                            <option value="outsideMount">Outside Mount</option>
                          </select>
                        </div>
                        <!-- End Mount type -->
                        <br>

                        <!-- 창틀 안쪽 방식 선택시 발동 Div for Inside Mount -->
                        <div id="insideMountDiv" class="assistImageDiv" style="display: none;">
                          <h2>Inside Mount</h2>
                          <img src="dist/images/inside_mount_image.jpg" alt="Inside Mount Image" class="option-images">
                          <p>Description caption for Inside Mount.</p>
                        </div>

                        <!-- 창틀 바깥쪽 방식 선택시 발동 Div for Outside Mount -->
                        <div id="outsideMountDiv" class="assistImageDiv" style="display: none;">
                          <h2>Outside Mount</h2>
                          <img src="dist/images/outside_mount_image.jpg" alt="Outside Mount Image" class="option-images">
                          <p>Description caption for Outside Mount.</p>
                        </div>

                        <!-- 작동 방식 control options-->
                        <label for="controlOptionDropdown">Control Options:</label><br>
                        <select id="controlOptionDropdown" class="drop-down-btn" onchange="updateDropdown()" placeholder="choose control option" required>
                          <option value="" disabled selected hidden>Select a control option</option>
                          <option value="option1">Cord</option>
                          <option value="option2">Cordless</option>
                          <option value="option3">Motorized</option>
                        </select>
                        <!-- End control options-->

                        <!-- 코드/체인 작동방식 선택시 발동 Div for Cord -->
                        <div id="cordDiv" style="display: none;">
                          <h2>Cord Operation</h2>
                          <img src="dist/images/cord_image.jpg" alt="cord Image" class="option-images">
                          <p>Description caption for cord.</p>
                        </div>

                        <!-- cord position drop down-->
                        <div id="cordPositionContainer" class="drop-down-container"></div>
                        <!-- End cord position drop down-->

                        <!-- 코드/체인 없는 작동방식 선택시 발동 Div for Cordless -->
                        <div id="cordlessDiv" class="assistImageDiv" style="display: none;">
                          <h2>Cordless Operation</h2>
                          <img src="dist/images/cordless_image.jpg" alt="cordless Image" class="option-images">
                          <p>Description caption for cordless.</p>
                        </div>

                        <!-- 자동화 선택시 발동 Div for Motorized -->
                        <div id="motorizedDiv" class="assistImageDiv" style="display: none;">
                          <h2>Motorized Operation</h2>
                          <img src="dist/images/motorized_image.jpg" alt="Motorized Image" class="option-images">
                          <p>Description caption for motorized.</p>
                        </div>

                        <!-- 각 옵션 control option drop down-->
                        <div id="optionsContainer" class="drop-down-container"></div>
                        <!-- End control option drop down-->

                      <!-- 헤드 커버 선택 Dropdown Menu -->
                      <br>
                      <label for="menuOptions">Headcover Options:</label><br>
                      <select id="menuOptions" class="drop-down-btn" onchange="handleMenuChange()" required>
                        <option value="" disabled selected hidden>Input Measurements First</option>
                      </select> <br><br>

                      <!-- 헤드 색생 옵션 head cover colour-->
                      <div id="colorOptions" class="drop-down-container assistImageDiv"></div><br>

                        <!--------------------------------------------------->

                        <!-- Pull Position 롤 방향
                        <label for="pull">Roll Options:</label><br>
                        <select name="option" class = "drop-down-btn size-down" id="pull"  onchange="handleRollOptionChange()" required>
                          <option value="" disabled selected hidden>Choose Roll Option</option>
                          <option value="standard">Standard</option>
                          <option value="reverse">Reverse</option>
                        </select>

                        <img id="rollImage" class="option-images" src="" alt="Roll Image">
                        <p id="rollDescription"></p>
                        <br><br>

                        
                         End Pull Type -->


                        <!-- Caption -->
                        <label for="productCaption">Room Name:</label><br>
                        <input id="productCaption" type="text" value="" class="caption size-down" placeholder="Write Room Name/Number">
                        <!-- End Caption -->

                        <!-- Counter -->
                        <div class="measurement-input">
                          <div class="counter">
                            <span class="down" onClick='decreaseCount(event, this)'>-</span>
                            <input type="text" value="1">
                            <span class="up" onClick='increaseCount(event, this)'>+</span>
                          </div>
                          <!-- End Counter -->

                        
                          <!-- 장바구니에 추가 add to cart -->
                          <button type = "button" class = "add-cart-btn"><i class = "fas fa-shopping-cart"></i>add to cart</button>
                        </div>
                    </div>
                  </form>
                  <!-- End Button Groups -->
                </div>
            </div>
        </div>
    </div>
    <script src = "script.js"></script>