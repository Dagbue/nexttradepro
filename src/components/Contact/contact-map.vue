<template>
<div>

  <div class="mapouter">
    <div class="gmap_canvas">
      <iframe width="100%" height="100%"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=75%20Uxbridge%20Rd,%20London%20W5%205SL,%20UK%20+(Assets%20Management%20Limited)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
<!--      <a href='https://maps-generator.com/'>Maps Generator</a>-->
  </div>
  </div>






</div>
</template>

<script>
export default {
  name: "contact-map"
}
</script>

<style scoped>


.mapouter{position:relative;text-align:right;width:100%;height:573px;}
.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:573px;}
.gmap_iframe {height:573px!important;}
</style>