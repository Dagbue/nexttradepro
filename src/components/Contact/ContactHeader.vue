<template>
  <div class="alpha">
    <div class="content-alpha">

      <p class="text-1">Contact Us</p>

    </div>
  </div>
</template>

<script>
export default {
  name: "ContactHeader"
}
</script>

<style scoped>
.alpha{
  background-color: hsla(0, 0%, 4%, .9);
  border: 1px solid hsla(0, 0%, 4%, .9);
  padding-top: 6%;
  padding-bottom: 6%;
}

.content-alpha{
  text-align: center;
}

.text-1{
  color: #FFFFFF;
  font-stretch: normal;
  font-style: normal;
  font-weight: 700;
  letter-spacing: normal;
  font-size: 37px;
  line-height: 1;
  margin: 0;
}

@media (max-width: 990px) {

}

@media (max-width: 700px) {
  .alpha{
    padding-top: 10%;
    padding-bottom: 10%;
  }
  .text-1{
    font-size: 35px;
  }
}

@media (max-width: 500px) {

}


</style>