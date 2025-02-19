<template>
  <div class="alpha">

<!--    <div class="section-1">-->
<!--      <div class="video">-->
<!--        <iframe width="400" height="340" src="https://www.youtube.com/embed/jWtmuRn_n5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
<!--      </div>-->
<!--      <div class="video">-->
<!--        <iframe width="400" height="340" src="https://www.youtube.com/embed/jWtmuRn_n5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
<!--      </div>-->
<!--      <div class="video">-->
<!--        <iframe width="400" height="340" src="https://www.youtube.com/embed/jWtmuRn_n5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
<!--      </div>-->
<!--    </div>-->


    <div class="section-2">
      <figure class="snip1533">
        <figcaption>
          <blockquote>
            <p>This is a more than a trading company. Giving you guys 5 ratings for your support services. Great
              company. Awesome support.. NextTrade Pro is the best....</p>
          </blockquote>
          <h3>Ronald Dooms</h3>
          <h4>Investor.</h4>
        </figcaption>
      </figure>
      <figure class="snip1533">
        <figcaption>
          <blockquote>
            <p>NextTrade Pro has the simplest interface of all and also has the fastest entry point into the market.I was
              a banker who was deep in debt, but  with the help of NextTrade Pro ..., now I am living well and
              comfortable with my family</p>
          </blockquote>
          <h3>Theresa Williams</h3>
          <h4>Banker</h4>
        </figcaption>
      </figure>
      <figure class="snip1533">
        <figcaption>
          <blockquote>
            <p>My name is William Tyler Pelicione. Few weeks I have traded with NextTrade Pro, i made enough profit of
              1.8btc and my withdrawal was processed instantly. NextTrade Pro is the best.</p>
          </blockquote>
          <h3>William Tyler Pelicione</h3>
          <h4>Business Woman</h4>
        </figcaption>
      </figure>
    </div>

    <div class="section-2">
      <figure class="snip1533">
        <figcaption>
          <blockquote>
            <p>I joined NextTrade Pro as a way of earning income and consolidating on my 9-5 which had placed me in a loop for
              so long. My experience has been nothing short of beautiful in the few years that I've been with the
              platform. I've been able to keep expanding my goals off profits from NextTrade Pro and it keeps looking better.</p>
          </blockquote>
          <h3>Mark Rutherfod</h3>
          <h4>Investor.</h4>
        </figcaption>
      </figure>
      <figure class="snip1533">
        <figcaption>
          <blockquote>
            <p>After losing my way in the cryptocurrency space a few times, I made a decision to turn towards an
              opportunity that is consistent, dependable, and I could build steadily with, and NextTrade Pro has ticked all
              these boxes by providing all the tools I need to earn weekly, but most importantly the guidance that
              comes with the experience is simply top quality.</p>
          </blockquote>
          <h3>Jennifer McCain</h3>
          <h4>Trader</h4>
        </figcaption>
      </figure>
      <figure class="snip1533">
        <figcaption>
          <blockquote>
            <p>I spent 25 years in the cooperate world, and retirement seemed like the plan, always looked forward to
              it. Yet, I wasn't going to turn down an opportunity to really chase my dreams and accomplish the things
              I'd wanted to do. 34 months down the line, I own my home, accrue substantive income and have the
              financial freedom to fully explore ideas and plans I had left in my notebooks".</p>
          </blockquote>
          <h3>Ingredia Nutrisha</h3>
          <h4>Buiness Woman</h4>
        </figcaption>
      </figure>
    </div>

  </div>
</template>

<script>
export default {
  name: "TestimonialsBody"
}
</script>

<style scoped>
.alpha{
  /*background-color: #000;*/
  height: 100%;
  padding-bottom: 5%;
  padding-top: 3%;
}

.section-1{
  display: flex;
  justify-content: space-around;
  margin-top: 5%;
  margin-bottom: 5%;
}

.snip1533 {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  color: #ffffff;
  display: inline-block;
  font-size: 16px;
  margin: 35px 10px 10px;
  max-width: 370px;
  min-width: 250px;
  position: relative;
  text-align: center;
  width: 100%;
  background-color: hsla(0, 0%, 4%, .9);
  border: 1px solid hsla(0, 0%, 4%, .9);
  border-radius: 5px;
  border-top: 5px solid #007aff;
  line-height: 1.4;
}

.snip1533 *,
.snip1533 *:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.1s ease-out;
  transition: all 0.1s ease-out;
}

.snip1533 figcaption {
  padding: 13% 10% 12%;
}

.snip1533 figcaption:before {
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  color: #007aff;
  content: "&";
  font-size: 32px;
  font-style: normal;
  left: 50%;
  line-height: 60px;
  position: absolute;
  top: -30px;
  width: 60px;
}

.snip1533 h3 {
  color: #ffffff;
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
  margin: 10px 0 5px;
}

.snip1533 h4 {
  font-weight: 400;
  margin: 0;
  opacity: 0.5;
}

.snip1533 blockquote {
  font-style: italic;
  font-weight: 300;
  margin: 0 0 20px;
}

.btn{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  text-align: center;
  background: #070e20;
  /*border: 1px solid #124DA8;*/
  color: #FFFFFF;
  padding: 0.8em 25px;
  border-radius: 5px;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.25s ease;
  margin-top: 2%;
}
.btn:hover{
  background: #2e8cec;
  color: #FFFFFF;
}
.section-2{
  display: flex;
  justify-content: space-around;
  margin-top: 5%;
  margin-bottom: 5%;
}
.container {
  border: 2px solid #ccc;
  background-color: #eee;
  border-radius: 5px;
  padding: 16px;
  margin: 16px 0;
  width: 380px;
}

.container::after {
  content: "";
  clear: both;
  display: table;
}

.container img {
  float: left;
  margin-right: 20px;
  border-radius: 50%;
}

.container span {
  font-size: 20px;
  margin-right: 15px;
}

@media (max-width: 700px) {
  .section-1{
    display: block;
  }
  iframe{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5%;
  }

  .section-2{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .snip1533{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5%;
  }
}

@media (max-width: 500px) {

}
</style>