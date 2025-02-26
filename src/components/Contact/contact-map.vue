<template>
<div>

  <div class="mapouter">
    <div class="gmap_canvas">

      <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=128%20City%20Road,%20London,%20United%20Kingdom,%20EC1V%202NX%20London+(Nexttrade%20Pro)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

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