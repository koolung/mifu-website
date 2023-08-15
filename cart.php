<?php
  //include header.php file
  include("noheader.php");
?>
<!-- End Header -->

<!-- Spacer -->
<?php
  //include spacer.php file
  include("spacer.php");
?>
<!-- End Spacer -->


<?php

    /*  include cart items if it is not empty */
        count($product->getData('cart')) ? include ('Template/_cart-template.php') :  include ('Template/notFound/_cart_notFound.php');
    /*  include cart items if it is not empty */

?>

<!-- Footer -->
<?php
//include footer.php file
include("footer.php");
?>
<!-- End Footer -->




