<?php

    // request method post
    if($_SERVER['REQUEST_METHOD'] == "POST"){
        if (isset($_POST['top_sale_submit'])){
            // call method addToCart
            $Cart->addToCart($_POST['user_id'], $_POST['item_id']);
        }
    }

    foreach ($product_shuffle as $item)
?>

<div class="price py-2">
   <span>$<?php echo $item['item_price'] ?? '0' ; ?></span>
</div>
<form method="post">
    <input type="hidden" name="item_id" value="<?php echo $item['item_id'] ?? '1'; ?>">
    <input type="hidden" name="user_id" value="<?php echo 1; ?>">
    <?php
    if (in_array($item['item_id'], $Cart->getCartId($product->getData('cart')) ?? [])){
        echo '<button type="submit" disabled class="btn btn-success font-size-12">In the Cart</button>';
    }else{
        echo '<button type="submit" name="top_sale_submit" class="btn btn-warning font-size-12">Add to Cart</button>';
    }
    ?>

</form>