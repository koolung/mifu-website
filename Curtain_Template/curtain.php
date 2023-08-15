<!-- Gallery -->
<section id="gallery">
    <div class="gallery container">
      <div class="row product-description">
        <div class="col main-col curtain-col">
          <h1>Curtians & Draperies</h1>
          <p>
            Total control over privacy and lighting<br>
            Good for insulation<br>
            Ideal for large windows<br>
            Durable and easy to maintain<br>
            Can be customized to be cordless,<br>
            traditional cord control, or motorized<br>
            by remote or smart WIFI control
          </p>
        </div>
        <div class="col start-col">
          <img class="gallery-img" src="img/1_1_1_1.jpg">
        </div>
      </div>

      <!-- Recommended -->
        
        <div class="carousel">
          <div class="card-container">
            <div class="card card1 click">
              <div>
                <h5>Double</h5>
              </div>
            </div>
            <div class="card card2 click">
              <div>
                <h5>Retro</h5>
              </div>
            </div>
            <div class="card card3 click">
              <div>
                <h5>Blackout</h5>
              </div>
            </div>
            <div class="card card4 click">
              <div>
                <h5>Embroidered</h5>
              </div>
            </div>
            <div class="card card5 click">
              <div>
                <h5>Organic</h5>
              </div>
            </div>
          </div>
          
          <button class="carousel-button carousel-button-prev" id="prevButton"><img class="arrows" src="dist/images/left.png"></button>
          <button class="carousel-button carousel-button-next" id="nextButton"><img class="arrows" src="dist/images/right.png"></button>
          <script src="Curtain_Template/carousel.js"> </script>
        </div>
      <!-- End Recommended -->
      
      <h1>Shop Now</h1> 
      <div class="row filter-row"> 
        
        <div class="col sidebar-col filter-col">
          
          
          <div>
            <!-- Sidebar  by color Filter -->
            <h2>By Colour</h2>
              <div class="sidebar">
                <article class="feature1">
                  <input type="radio" id="colorFeature1" name="color"/>
                  <div>
                    <span>
                      Neutral 
                    </span>
                  </div>
                </article>

                <article class="feature2">
                  <input type="radio" id="colorFeature2" name="color"/>
                  <div>
                    <span>
                      Decorative
                    </span>
                  </div>
                </article>
              </div>
            <!-- End Sidebar Filter -->
          </div>
          
          <!-- Sidebar by pattern Filter -->
          <br><br>
          <h2>By Pattern</h2>
          <div class="sidebar">
            <article class="feature1">
            <input type="radio" id="patternFeature1" name="pattern"/>
            <div>
              <span>
                Solid 
              </span>
            </div>
            </article>
            
            <article class="feature2">
              <input type="radio" id="patternFeature2" name="pattern"/>
              <div>
                <span>
                  Small
                </span>
              </div>
            </article>
            
            <article class="feature3">
              <input type="radio" id="patternFeature3" name="pattern"/>
              <div>
                <span>
                  Big 
                </span>
              </div>
            </article>
          </div>
          <!-- End Sidebar Filter -->

          <!-- Sidebar function Filter -->
          <br><br>
          <h2>By Function</h2>
          <div class="sidebar">
            <article class="feature1">
            <input type="radio" id="functionFeature1" name="function"/>
            <div>
              <span>
                Blackout
              </span>
            </div>
            </article>
            
            <article class="feature2">
              <input type="radio" id="functionFeature2" name="function"/>
              <div>
                <span>
                  Sheer
                </span>
              </div>
            </article>
            
            <article class="feature3">
              <input type="radio" id="functionFeature3" name="function"/>
              <div>
                <span>
                  Privacy
                </span>
              </div>
            </article>
          </div>
          <!-- End Sidebar Filter -->
          
            <!-- Reset Button -->
            <br><br>
            <h2>Reset</h2>
            <button id="resetButton">Reset</button>
        </div>



          <!-- 제품란 products -->
          <div class="col option ">
            <a href="curtain_product.php" class="product double">
              <div class="card card1 click">
                <div>
                  <h5>Double</h5>
                </div>
              </div>
            </a>
            <a href="curtain_product.php" class="product retro">
              <div class="card card2 click">
                <div>
                  <h5>Retro</h5>
                </div>
              </div>
            </a>
            <a href="curtain_product.php" class="product blackout">
              <div class="card card3 click">
                <div>
                  <h5>Blackout</h5>
                </div>
              </div>
            </a>
            <a href="curtain_product.php" class="product embroidered">
              <div class="card card4 click" >
                <div>
                  <h5>Embroidered</h5>
                </div>
              </div>
            </a>
            <a href="curtain_product.php" class="product organic">
              <div class="card card5 click">
                <div>
                  <h5>Organic</h5>
                </div>
              </div>
            </a>
          </div>
    </div>
  </section>
  <!-- End Gallery-->