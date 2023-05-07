import React from 'react';
import recordList from "../../commponents/list";

const Product=()=> {
  
  return (
  <div class="row layer">
  <div class="col-lg-6">
  <div id="shopCaro" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner" role="listbox">
   <div class="item_shopBimg">
    <img src="e3dgbaqi.png" alt=""/>
   </div>
   </div>
  </div>
</div>


<div class="col-lg-6 ">
<div class="singleProInfo">
<div class="productinfoTop">
<h2 class="newiTitle">NEW!</h2>
<h2 class="productSiTitle">Mens Cotton Jacket</h2>
<h2 class="productSiTitle">$55.99</h2>
<p class="prices2">&nbsp;Brand: H & M</p>
</div>
</div>
<div class="sinShopCont">
<p>
<h5>Great outerwear jackets</h5>
<h5>Crew neck</h5>
<h5>Drop shoulder sleeves</h5>
<h5>Elasticated neckline, hemline and cuffs</h5>
<h5>Made in Russia</h5>
</p>
</div>
<h3 class="stokPrduct">Stock & Availability: 10</h3>
<div class="ctyandColor">
<div class="quantityW">
<h4>QTY:</h4>
<div class="quantity">
<button class="qtyBtn btnMinus">-</button>
 <input type="text" name="qty" value="1" title="Qty" class="input-text qty text carqty"/>
<button class="qtyBtn btnPlus">+</button>
</div>
</div>
  <div class="cgkit-as-wrap">
  <span class="cgkit-swatch-title">Size</span>
  <ul class="cgkit-attribute-swatches " data-attribute="attribute_pa_size" data-no-selection="No selection">
  
      <button type="button" data-type="button" data-attribute-value="xs" data-attribute-text="XS" aria-label="XS"
      data-oos-text="Out of stock" title="XS" class="BTN" data-gimg_id="" >
      <span class="cross">&nbsp;</span>
      XS</button>
    
      <button type="button" data-type="button" data-attribute-value="s" data-attribute-text="S" aria-label="S"
      data-oos-text="Out of stock" title="S" class="BTN" data-gimg_id="">
      <span class="cross">&nbsp;</span>
      S</button>
      <button type="button" data-type="button" data-attribute-value="m" data-attribute-text="M" aria-label="M" 
      data-oos-text="Out of stock" title="M" class="BTN" data-gimg_id="">
      <span class="cross">&nbsp;</span>
      M</button>
      <button type="button" data-type="button" data-attribute-value="l" data-attribute-text="L" aria-label="L" 
      data-oos-text="Out of stock" title="L" class="BTN" data-gimg_id="">
      <span class="cross">&nbsp;</span>
      L</button>
      <button type="button" data-type="button" data-attribute-value="xl" data-attribute-text="XL" aria-label="XL" 
      data-oos-text="Out of stock" title="XL" class="BTN" data-gimg_id="">
      <span class="cross">&nbsp;</span>
      XL</button>
    </ul>
  </div>
</div>
<div class="cartButtons">
<a href="#" class="vol_btn vol_btn_bg" id="cartButtons">
  ADD TO CART <i class="flaticon-arrows-3 fa fa-heart-o"></i></a>
</div>
</div>
</div>
);
};

export default Product;

