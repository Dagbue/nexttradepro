<template>
  <div class="alpha">

    <div class="section-alpha">
      <p class="header">Our <span style="color: #3760ff;">Values</span></p>
      <p class="sub-header">Everything we do is in service of our clients and their best interests. This is exemplified by our core
        values, which align with our mission, and help us achieve our vision.</p>

      <div class="section-inner">
        <div class="section-1">
          <div class="section-1-inner">
            <p class="text-1">Innovation</p>
            <p class="text-2">We always provide our clients with the latest and greatest in trading tech.</p>
            <img src="@/assets/about-benefit-1.svg" alt="" class="img" />
          </div>
        </div>

        <div class="section-1">
          <div class="section-1-inner">
          <p class="text-1">Empowerment</p>
          <p class="text-2">We empower users to take control.</p>
          <img src="@/assets/about-benefit-2.svg" alt="" class="img" />
          </div>
        </div>
      </div>


      <div class="section-inner">

        <div class="section-1">
          <div class="section-1-inner">
          <p class="text-1">Client-focus</p>
          <p class="text-2">Before we do anything, we always think about our users, and how they will benefit.</p>
          <img src="@/assets/afr-contact.webp" alt="" class="img" />
          </div>
        </div>

        <div class="section-1">
          <div class="section-1-inner">
          <p class="text-1">Transparency</p>
          <p class="text-2">We earn the trust of clients by being clear about everything from the very start.</p>
          <img src="@/assets/about-benefit-4.svg" alt="" class="img" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "AboutSection3"
}
</script>

<style scoped>
.alpha{
  margin-top: 5%;
  margin-bottom: 5%;
}

.section-alpha{
  background-color: #f8f8f8;
  padding-top: 5%;
  padding-bottom: 5%;
}

.header{
  text-align: center;
  font-size: 35px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.sub-header{
  width: 65%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 1.5%;
}

.img{
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.section-inner{
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.section-1{
  width: 50%;
}

.section-1-inner{
  width: 500px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 2px 4px 60px 0 hsla(227, 5%, 65%, .12);
  background-color: #fcfcfc;
  padding: 70px 20px 0 20px;
  border-radius: 12px;
  margin-top: 5%;
  margin-bottom: 5%;
}

.text-1{
  text-align: center;
  font-size: 27px;
  padding-bottom: 5px;
}

.text-2{
  text-align: center;
  font-size: 16px;
  padding-bottom: 25px;
}

@media (max-width: 900px) {

}

@media (max-width: 700px) {
  .section-inner{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .section-1-inner{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .section-1{
    width: 100%;
  }

  .sub-header{
    width: 85%;
  }
}

@media (max-width: 500px) {

  .section-1-inner{
    width: 380px;
  }

  .text-1{
    font-size: 25px;
  }

  .text-2{
    font-size: 15px;
  }

}

</style>