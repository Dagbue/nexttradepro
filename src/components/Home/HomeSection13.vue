<template>
  <div class="alpha">

    <div class="header-section">
      <p class="header">Why choose TopShares Pro?</p>
      <p class="sub-header">Experience one-click trading across 3,000+ world-renowned markets—all at your fingertips.</p>
    </div>

    <div class="section-alpha">

      <div class="section-1">
        <div class="img-bg">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="image"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
        </div>
          <p class="text-1">Wide range of instruments</p>
        <p class="text-2">Invest globally in stocks, options, futures, currencies, bonds and funds from a single integrated account.</p>
      </div>

      <div class="section-1">
        <div class="img-bg-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="image"><line x1="12" x2="12" y1="20" y2="10"></line><line x1="18" x2="18" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="16"></line></svg>
        </div>
        <p class="text-1">Trading Platforms</p>
        <p class="text-2">Powerful enough for the professional trader but designed for everyone.</p>
      </div>

      <div class="section-1">
        <div class="img-bg-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="image"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
        </div>
          <p class="text-1">Globally licensed & regulated</p>
        <p class="text-2">We adhere to regulations set by FINRA, SEC, and SIPC, ensuring an additional layer of security for your accounts.</p>
      </div>

      <div class="section-1">
        <div class="img-bg-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="image"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
        </div>
          <p class="text-1">Premier Technology</p>
        <p class="text-2">Our powerful suite of technology helps you optimize your trading speed and efficiency and perform sophisticated portfolio analysis.</p>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "HomeSection13"
}
</script>

<style scoped>
.alpha{
  margin-top: 5%;
  margin-bottom: 5%;
}
.header-section{
  margin-bottom: 5%;
}
.header{
  color: #0A0A0AFF;
  font-size: 1.9rem;
  line-height: 1.2;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
}

.sub-header{
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: #8599a6;
  font-size: 1.294rem;
  line-height: 1.5;
  font-weight: 300;
  text-align: center;
}

.section-1{
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  max-width: 300px;
  min-width: min(100% - 40px, 260px);
  width: 100%;
  border-radius: 20px;
  margin: 0;
  overflow: hidden;
  padding: 30px 30px 45px;
}

.text-1{
  font-size: 19px;
  line-height: 26px;
  margin-bottom: 10px;
  margin-top: 0;
  color: #0A0A0AFF;
  font-weight: 600;
}

.text-2{
  color: #8599a6;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 30px;
  font-weight: 300;
}

.section-alpha{
  display: flex;
  justify-content: space-evenly;
  margin-left: 5%;
  margin-right: 5%;
}


.image{
  width: 35%;
  margin-top: 5%;
  margin-bottom: 12%;


}
.img-bg{
  background-color: #3b82f6;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
}

.img-bg-1{
  background-color: #f97316;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
}

.img-bg-2{
  background-color: #a855f7;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
}

.img-bg-3{
  background-color: #22c55e;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
}


svg{
  color: #FFFFFF;
}


/* Responsive Adjustments */
@media (max-width: 768px) {
  .header-section{
    margin-left: unset;
    text-align: center;
  }
  .header{
    font-size: 1.5rem;
    line-height: 1;

  }

  .sub-header{
    font-size: 1rem;
    line-height: 1.25;
    width: 90%;
    display: block;
    margin-right: auto;
    margin-left: auto;
    padding-top: 5px;
  }

  .section-alpha{
    display: block;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  }

  .section-1{
    display: block;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 5%;
  }
}

@media (max-width: 480px) {

}
</style>