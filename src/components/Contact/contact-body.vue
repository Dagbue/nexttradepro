<template>
  <div>
    <div class="alpha">

      <div class="section-alpha">

        <div class="section-1">
          <img src="@/assets/contactusimage.svg" alt=""  class="image"/>
        </div>
        <div class="section-2">

          <div id="contact-form" class="contact-form">
            <h1 class="contact-form_title">Get in touch</h1>
            <p class="contact-form_paragraph">Our friendly team would love to hear from you.</p>

            <form class="form" >
              <div class="form-separate">
                <div class="split">
                  <label class="label-input">First name</label>
                  <input
                      required
                      name="name"
                      type="text"
                      autocomplete="off"
                  />
                </div>
                <div class="split">
                  <label class="label-input">Last name</label>
                  <input
                      required
                      name="name"
                      type="text"
                      autocomplete="off"
                  />
                </div>
              </div>

              <div class="split">
                <label class="label-input">Email address</label>
                <input
                    required
                    name="email"
                    type="email"
                />
              </div>

              <div class="split">
                <label class="label-input">Message</label>
                <textarea
                    name="message"
                    rows="4"
                    placeholder="Leave us a message..."
                    required
                    style="
                                    font-family: 'BR-Firma-Regular', sans-serif;
                                    letter-spacing: 1.5px;
                                    font-size: 13px;
"
                ></textarea>
              </div>

              <div class="split-2">
                <input type="checkbox" class="checkbox"/>
                <label class="check-box-label">You agree to our friendly privacy policy.</label>
              </div>

              <button class="button">
                Send message
                <img src="@/assets/arrow-right-line.svg" alt="btn-image" class="btn-image" />
              </button>
            </form>
          </div>

        </div>

      </div>

    </div>

    <div class="newsletter">

      <div class="parent-wrapper">
        <span class="close-btn glyphicon glyphicon-remove"></span>
        <div class="subscribe-wrapper">
          <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
          <form class="newsletter-form" @submit.prevent="newsLetter">

            <input
                required
                type="email"
                name="email"
                autocomplete="off"
                class="subscribe-input"
                placeholder="Your e-mail"
                v-model="newsLetterEmail"
            />

            <button class="submit-btn">SUBMIT</button>
          </form>
        </div>
      </div>

    </div>

  </div>
</template>

<script>


export default {
  name: "contact-body",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      newsLetterEmail: ""
    };
  },
}
</script>

<style scoped>

.alpha{
  height: 100%;
  padding-bottom: 5%;
  padding-top: 5%;
}
.section-alpha{
  display: flex;
  align-content: center;
  align-items: center;
}

.section-1{
  width: 50%;
}

.section-2{
  width: 50%;
}

.image{
  width: 75%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.contact-form {
  max-width: 540px;
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  /*margin-right: 10%;*/
  /*box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);*/
  /*padding: 20px 30px;*/
  /*border-radius: 8px;*/
  /*padding-bottom: 40px;*/
}

.contact-form  {
  /*border-bottom: solid 1px #ccc;*/
  /*margin-bottom: 15px;*/
}

.contact-form .form {
  display: flex;
  flex-direction: column;
  font-size: 16px;
}

.contact-form_title {
  text-align: left;
  font-size: 36px;
  line-height: 44px;
  padding-bottom: 10px;
  color: #ffffff;
}

.contact-form_paragraph {
  text-align: left;
  font-size: 20px;
  line-height: 30px;
  padding-bottom: 6%;
  color: #8599a6;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
  padding: 11px 16px;
  margin-bottom: 15px;
  margin-top: 5px;
  outline: none;
  width: 100%;
  border-radius: 12px;
}

.contact-form textarea {
  resize: none;
}

.contact-form .button {
  background: #007aff;
  border: 1px solid #007aff;
  color: white;
  cursor: pointer;
  padding: 15px 16px;
  text-align: center;
  border-radius: 12px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  gap: 2.5px;
}

/*.contact-form .button:hover {*/
/*  background: #070e20;*/
/*  border: solid 1px #070e20;*/
/*}*/

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form input[type="checkbox"],
.contact-form textarea,
.contact-form .button {
  font-size: 15px;
  border: solid 1px #007aff;
}

.form-separate{
  display: flex;
  justify-content: space-between;
}

.split{
  display: block;
}

.split-2{
  display: flex;
  align-items: center;
  align-content: center;
  margin-bottom: 30px;
}

.check-box-label{
  padding-left: 8px;
  color: #8599a6;
  font-size: 16px;
}

.label-input{
  color: #000000;
  font-size: 14px;
}

.btn-image{
  width: 3.5%;
}




.newsletter {
  background-color: hsla(0, 0%, 4%, .9);
  border: 1px solid hsla(0, 0%, 4%, .9);
  padding-top: 10px;
  padding-bottom: 55px;
}

.parent-wrapper {
  position: relative;
  width: 400px;
  height: 270px;
  margin: 50px auto 0;
  /*background-image: url('http://www.imgbase.info/images/safe-wallpapers/digital_art/1_miscellaneous_digital_art/41750_1_miscellaneous_digital_art_simple_dark_shapes.jpg');*/
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-y: -600%;
  /*background-color: #070e20;*/
  background: linear-gradient(180deg, #3179FF 0%, #1450C8 100%);
  border: 1px solid #3179FF;
  border-radius: 4px;
  color: #FFF;
  box-shadow: 0 0 10px 2.5px rgba(0, 0, 0, 0.25);
}

.close-btn {
  margin: 20px;
  font-size: 18px;
  cursor: pointer;
}

.subscribe-wrapper {
  position: absolute;
  left: -30px;
  right: -30px;
  height: 200px;
  padding: 30px;
  background-position-x: 272%;
  background-position-y: -1px;
  background-repeat: no-repeat;
  background-color: #FFF;
  border-radius: 4px;
  color: #333;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
}

.subscribe-wrapper:after {
  position: absolute;
  content: "";
  right: -10px;
  bottom: 71px;
  width: 0;
  height: 0;
  border-left: 0 solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #3179FF;
}

.subscribe-wrapper h4 {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  padding-top: 25px;
  line-height: 28px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.subscribe-wrapper input {
  position: absolute;
  bottom: 30px;
  border: none;
  border-bottom: 1px solid #d4d4d4;
  padding: 10px;
  width: 65%;
  background: transparent;
  transition: all .25s ease;
}

.subscribe-wrapper input:focus {
  outline: none;
  background: linear-gradient(180deg, #3179FF 0%, #1450C8 100%);
}

.subscribe-wrapper .submit-btn {
  position: absolute;
  border-radius: 20px 0 0 20px;
  background: linear-gradient(180deg, #3179FF 0%, #1450C8 100%);
  border: 1.5px solid #3179FF;
  color: #FFF;
  padding: 12px 25px;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  right: -10px;
  bottom: 30px;
  cursor: pointer;
  transition: all .25s ease;
  /*box-shadow: -5px 6px 20px 0 rgba(51, 51, 51, 0.4);*/
}

.subscribe-wrapper .submit-btn:hover {
  background: linear-gradient(180deg, #3179FF 0%, #1450C8 100%);
}


@media (max-width: 990px){
  .alpha{
    display: block;
  }
  .contact-form{
    margin-left: 20%;
    margin-top: 10%;
  }
  .contact-form_title{
    font-size: 26px;
  }
}

@media (max-width: 800px) {
  .contact-form{
    margin-left: 11%;
  }

  .section-alpha{
    display: block;
  }

  .section-1{
    width: 100%;
  }

  .section-2{
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 700px){
  .contact-form{
    margin-left: unset;
    margin-top: 10%;
    max-width: unset;
    width: unset;
    margin-right: 20px;
  }
}


@media (max-width: 500px){
  .parent-wrapper {
    position: relative;
    width: 300px;
    height: 270px;
    margin: 50px auto 0;
  }
  .subscribe-wrapper h4 {
    font-size: 17px;
    padding-top: 20px;
  }
}

@media (max-width: 990px){
  .alpha{
    display: block;
  }
  .contact-form{
    margin-left: 20%;
    margin-top: 10%;
  }
  .contact-text{
    text-align: center;
  }
  .contact-text-para-2{
    padding-bottom: unset;
  }
  .contact-text-para-3{
    padding-bottom: unset;
  }
  .contact-form_title{
    font-size: 26px;
  }
}


@media (max-width: 800px) {
  .contact-form{
    margin-left: 11%;
  }
}

@media (max-width: 700px){
  .contact-text-header {
    font-size: 30px;
  }
  .contact-text-para {
    font-size: 18px;
  }
  .contact-form{
    margin-left: unset;
    margin-top: 10%;
    max-width: unset;
    width: unset;
    margin-right: 20px;
  }
}

</style>