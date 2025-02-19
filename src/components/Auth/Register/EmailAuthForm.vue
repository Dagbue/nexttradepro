<!--suppress CssUnresolvedCustomProperty -->
<template>
  <div class="alpha">

    <div class="image">
      <img src="@/assets/logo.png" alt="inter-switch-logo"  class="company-logo" />
    </div>

    <div class="text-area">
      <h3>Verify email address</h3>
      <p>Enter OTP sent to Your Email Address</p>
    </div>

    <div class="form-alpha">
      <form @submit.prevent="completeEnrollment">

        <!--        <div class="pin-code" ref="pinContainer">-->
        <!--          <input type="number" autofocus v-model="pins[0]" maxlength="1" @keyup="handleKeyUp($event, 0)" @keydown="handleKeyDown($event, 0)" required="required">-->
        <!--          <input type="number" v-model="pins[1]" maxlength="1" @keyup="handleKeyUp($event, 1)" @keydown="handleKeyDown($event, 1)" required="required">-->
        <!--          <input type="number" v-model="pins[2]" maxlength="1" @keyup="handleKeyUp($event, 2)" @keydown="handleKeyDown($event, 2)" required="required">-->
        <!--          <input type="number" v-model="pins[3]" maxlength="1" @keyup="handleKeyUp($event, 3)" @keydown="handleKeyDown($event, 3)" required="required">-->
        <!--          <input type="number" v-model="pins[4]" maxlength="1" @keyup="handleKeyUp($event, 2)" @keydown="handleKeyDown($event, 4)" required="required">-->
        <!--          <input type="number" v-model="pins[5]" maxlength="1" @keyup="handleKeyUp($event, 3)" @keydown="handleKeyDown($event, 5)" required="required">-->
        <!--        </div>-->

        <div class="pin-code" ref="pinContainer">
          <div class="vue-otp-input">
            <div
                class="otp-wrapper"
                :class="isInputFocused ? activeWrapperClassHandler : wrapperClassHandler"
                :style="wrapperStyle"
                :id="id"
            >
              <input
                  v-for="(digitInput, index) in digits"
                  ref="digitInput"
                  :key="id + index"
                  autocomplete="one-time-code"
                  v-model="inputValue[index]"
                  class="otp-input"
                  :class="[inputClassHandler, activeInput === index ? activeInputClassHandler : '']"
                  :placeholder="placeholder"
                  :disabled="isDisabled"
                  @focus="onFocus(index)"
                  @blur="onBlur"
                  @paste="OnPaste"
                  @input="onInput(index, $event)"
                  @change="onChanged(index)"
                  @keydown="keydownHandler(index, $event)"
                  :style="inputStyle"
                  required
              />
            </div>
            <span v-if="!isValid" :class="errorClassHandler">
                          <slot name="errorMessage"></slot>
                        </span>
          </div>
        </div>

        <div class="submit">
          <!--          <input type="submit" class="submit-btn"   value="Verify email"/>-->
          <base-button
              :loading="loading"
              style="
  background: #007aff;
  border: 1px solid #007aff;
  color: white;
"
          >Verify email</base-button>
        </div>

      </form>
    </div>

    <div class="last-text">
      <p>Didn’t get a code? <span @click="resendOtp">Resend OTP</span></p>
    </div>

  </div>
</template>

<script>

import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";
import {mapState} from "vuex";
import StoreUtils from "@/utility/StoreUtils";
import Swal from "sweetalert2";
import router from "@/router";

export default {
  name: 'EmailAuthForm',
  components: {BaseButton},
  props: {
    id: {
      type: String,
      default: "otp",
    },
    digits: {
      type: Number,
      default: 6,
    },
    mode: {
      type: String,
      default: "separate",
    },
    type: {
      type: String,
      default: "number",
    },
    placeholder: {
      type: String,
      default: "-",
    },
    radius: {
      type: Number,
      default: 5,
    },
    gap: {
      type: Number,
      default: 10,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isValid: {
      type: Boolean,
      default: true,
    },
    rtl: {
      type: Boolean,
      default: false,
    },
    autoFocus: {
      type: Boolean,
      default: true,
    },
    errorClass: {
      type: String,
      default: "",
    },
    separateInputClass: {
      type: String,
      default: "",
    },
    separateWrapperClass: {
      type: String,
      default: "",
    },
    groupInputClass: {
      type: String,
      default: "",
    },
    groupWrapperClass: {
      type: String,
      default: "",
    },
    activeInputClass: {
      type: String,
      default: "",
    },
    activeWrapperClass: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      pins: [],
      inputValue: [],
      joinedValue: "",
      isInputFocused: false,
      activeInput: -1,
    };
  },
  computed:{
    ...mapState({
      loading: state => state.auth.loading,
      auth: state => state.auth
    }),
    signUpFormData() {
      return StoreUtils.rootGetters(StoreUtils.getters.auth.getSignUpFormData)
    },

    wrapperStyle() {
      const dir = this.rtl ? "rtl" : "ltr";
      const styles = {
        direction: dir,
        gap: `${this.gap}px`,
        "border-radius": `${this.radius}px`,
      };
      return styles;
    },
    inputStyle() {
      return {
        "--border-radius": `${this.radius}px`,
      };
    },
    inputClassHandler() {
      if (this.mode === "separate") {
        if (this.isValid) {
          return this.separateInputClass ? this.separateInputClass : "defualt-input-separate";
        } else {
          return this.separateInputClass ? this.separateInputClass : "defualt-error-input-separate";
        }
      }
      if (this.mode === "group") {
        return this.groupInputClass ? this.groupInputClass : "defualt-input-group";
      }
      return "";
    },
    activeInputClassHandler() {
      if (this.mode === "separate") {
        return this.activeInputClass ? this.activeInputClass : "defualt-active-input";
      }
      return "";
    },
    activeWrapperClassHandler() {
      if (this.mode === "group") {
        if (this.isValid) {
          return this.activeWrapperClass ? this.activeWrapperClass : "defualt-active-wrapper";
        } else {
          return this.activeWrapperClass ? this.activeWrapperClass : "defualt-error-wrapper-group";
        }
      }
      return "";
    },
    wrapperClassHandler() {
      if (this.mode === "separate") {
        return this.separateWrapperClass ? this.separateWrapperClass : "defualt-wrapper-separate";
      }
      if (this.mode === "group") {
        if (this.isValid) {
          return this.groupWrapperClass ? this.groupWrapperClass : "defualt-wrapper-group";
        } else {
          return this.groupWrapperClass ? this.groupWrapperClass : "defualt-error-wrapper-group";
        }
      }
      return "";
    },
    errorClassHandler() {
      return this.errorClass ? this.errorClass : "default-error-class";
    },

  },
  methods: {
    async completeEnrollment() {
      await Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'User Created successfully!',
      });
      await router.push("/login")
    },

    resendOtp(){
      StoreUtils.dispatch(StoreUtils.actions.auth.resendOtp, {
        email: this.signUpFormData.email,
      })
    },

    handleKeyUp(event) {
      const target = event.target;

      const maxLength = parseInt(target.attributes.maxlength.value, 10);
      const myLength = target.value.length;

      if (myLength >= maxLength) {
        const next = target.nextElementSibling;
        if (next && next.tagName.toLowerCase() === 'input') {
          next.focus();
        }
      }

      if (myLength === 0) {
        const prev = target.previousElementSibling;
        if (prev && prev.tagName.toLowerCase() === 'input') {
          prev.focus();
        }
      }

      this.$emit('input', this.pins.join(''));
    },
    handleKeyDown(event) {
      const target = event.target;
      target.value = '';
    },

    keydownHandler(index, e) {
      if (e.keyCode === 8 && e.target.value === "") {
        this.$refs.digitInput[Math.max(0, index - 1)].focus();
      }
    },
    onInput(index) {
      const [first, ...rest] =
          this.type === "number"
              ? this.inputValue[index].replace(/[^0-9]/g, "")
              : this.inputValue[index];
      this.inputValue[index] = first === null || first === undefined ? "" : first;
      const lastInputBox = index === this.digits - 1;
      const insertedContent = first !== undefined;
      if (insertedContent && !lastInputBox) {
        this.$refs.digitInput[index + 1].focus();
        this.$refs.digitInput[index + 1].value = rest.join("");
        this.$refs.digitInput[index + 1].dispatchEvent(new Event("input"));
      }
      this.joinedValue = this.inputValue.map((value) => value).join("");
      this.$emit("value", this.joinedValue);
      if (this.joinedValue.length === this.digits) {
        this.onComplete(this.joinedValue);
      }
    },
    onFocus(index) {
      this.activeInput = index;
      this.isInputFocused = true;
    },
    onBlur() {
      this.activeInput = -1;
      this.isInputFocused = false;
    },
    onComplete(joinedValue) {
      this.onBlur();
      this.$refs.digitInput[this.digits - 1].blur();
      if(this.type === "password"){
        this.$emit("on-complete", joinedValue);
      }
      else
        this.$emit("on-complete", joinedValue);
    },
    onChanged(index) {
      this.$emit("on-changed", this.inputValue[index]);
    },
    OnPaste(event) {
      this.$emit("on-paste", event);
    },
  },
  mounted() {
    if (this.autoFocus && !this.isDisabled) {
      this.onFocus(0);
      this.$refs.digitInput[0].focus();
      //setting input type based on the existing types for now
      const types = ["text", "password", "number"];
      if (types.indexOf(this.type)!=-1) {
        for (let box of this.$refs.digitInput) {
          box.type = this.type;
        }
      }
    }
  },
}
</script>

<style scoped>
.alpha{
  margin-top: 10%;
}
.company-logo{
      width: 20%;
      /*margin-top: 20%;*/
}

.text-area h3{
  padding-bottom: 0;
  margin-bottom: 0;
  text-align: center;
  letter-spacing: 0.5px;
  color: #ffffff;
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
}

.text-area p{
  padding-top: 2px;
  margin-top: 2px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #ffffff;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}

.text-area{
  margin-bottom: 1%;
}


.image{
  display: flex;
  justify-content: center;
  margin: 0.8%;
}

.submit{
  margin-left: 36%;
  margin-right: 36%;
  margin-top: 3%;
}


.last-text{
  margin-top: 1.5%;
  text-align: center;
  color: #ffffff;
}

span{
  color: #007aff;
}

.pin-code{
  padding: 0;
  display: flex;
  justify-content:space-evenly;
  /*margin-bottom: 2%;*/
  margin-top: 2%;
  /*margin-left: 38%;*/
  /*margin-right: 38%;*/
}

.pin-code input {
  border: 1px solid #D0D5DD;
  text-align: center;
  width: 48px;
  height:48px;
  font-size: 36px;
  background-color: #F3F3F3;
  margin-right:5px;
  border-radius: 6px;
  color: #191C1F;
}



.pin-code input:focus {
  border: 1px solid #191C1F;
  outline:none;
  color: #191C1F;
}


input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}



div.vue-otp-input {
  width: max-content;
}
div.vue-otp-input > div.otp-wrapper {
  direction: var(--direction);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;
}

div.vue-otp-input > div.otp-wrapper > input.otp-input {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;
  border-radius: var(--border-radius);
}
div.vue-otp-input > div.otp-wrapper > input.otp-input:disabled {
  background-color: #F3F3F3 !important;
}
/* SINGLE INPUT IN SEPARATE MODE */
div.vue-otp-input > div.otp-wrapper > input.defualt-input-separate {
//text-align: center;
//font-weight: 600;
//background-color: #F3F3F3;
//border: 1px solid #D0D5DD;
//width: 3rem;
//height: 48px;
  border: 1px solid #D0D5DD;
  text-align: center;
  width: 50px;
  height: 50px;
  font-size: 30px;
  background-color: #F3F3F3;
//margin-right: 10px;
  border-radius: 6px;
  color: #191C1F;
}
div.vue-otp-input > div.otp-wrapper > input.defualt-error-input-separate {
  text-align: center;
  font-weight: 600;
  background-color: transparent;
  border: 1px solid #D0D5DD;
  width: 3rem;
  height: 48px;
}
@media only screen and (max-width: 600px) {
  div.vue-otp-input > div.otp-wrapper > input.defualt-input-separate {
    width: 50px;
    height: 50px;
  }
}
/* INPUTS WRAPPER IN SEPARATE MODE */
div.vue-otp-input > div.defualt-wrapper-separate {
  background: transparent;
}
/* INPUTS WRAPPER IN GROUP MODE */
div.vue-otp-input > div.defualt-wrapper-group {
  border: 1px solid #D0D5DD;
}
div.vue-otp-input > div.defualt-error-wrapper-group {
  border: 1px solid #D0D5DD;
}

/* SINGLE INPUT IN GROUP MODE */
div.vue-otp-input > div.otp-wrapper > input.defualt-input-group {
  background-color: transparent;
  font-weight: 600;
  border: none;
  width: 3rem;
  height: 48px;
  text-align: center;
}
@media only screen and (max-width: 600px) {
  div.vue-otp-input > div.otp-wrapper > input.defualt-input-group {
    width: 2.5rem;
    height: 40px;
  }
}
div.vue-otp-input > div.otp-wrapper > input.defualt-active-input {
  border: 1px solid #D0D5DD;
}
div.vue-otp-input > div.defualt-active-wrapper {
  border: 1px solid #D0D5DD;
}
div.vue-otp-input > span.default-error-class {
  color: #191C1F;
  font-weight: bold;
}
input:focus {
  outline: none;
}
/* removing the arrow keys on side of the input area */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

@media (max-width: 700px) {
  .submit{
    margin-left: 22%;
    margin-right: 23%;
    margin-top: 3%;
  }
  .company-logo{
    width: 60%;
  }
}

@media (max-width: 500px) {
  .submit{
    margin-left: 9%;
    margin-right: 9%;
    margin-top: 4%;
  }

}

</style>

<!--<style scoped>-->
<!--form {-->
<!--  margin: 0 auto;-->
<!--  max-width: 40rem;-->
<!--  /*box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);*/-->
<!--//box-shadow:  30px 30px 100px #bebebe,-->
<!--//-50px -50px 100px #ffffff;-->
<!--//padding: 2rem;-->
<!--//background-color: #ffffff;-->
<!--}-->

<!--.alpha{-->
<!--//background-color: #F6F6F7;-->
<!--//background-image: url(https://www.interactivebrokers.com/images/web/why-ibkr-global-market-access-background.png), linear-gradient(#F6F6F7 17.14%, #DFE2E7 95.69%);-->
<!--//background-repeat: no-repeat;-->
<!--//background-size: 60%, cover;-->
<!--//background-position: bottom right, top left;-->
<!--//padding-bottom: 8.5%;-->
<!--}-->

<!--.company-logo{-->
<!--  width: 30%;-->
<!--  margin-top: 20%;-->
<!--}-->

<!--:root {-->
<!--  &#45;&#45;primary-color: #3525d3;-->
<!--  &#45;&#45;white-color: #fff;-->
<!--  &#45;&#45;black-color: #3c4a57;-->
<!--  &#45;&#45;light-gray: #e4e8ee;-->
<!--}-->

<!--.wrapper {-->
<!--  position: relative;-->
<!--  align-items: center;-->
<!--  justify-content: center;-->
<!--}-->

<!--.header-span {-->
<!--  color: #124DA8;-->
<!--}-->

<!--.wrapper {-->
<!--//padding: 50px 25px 0;-->
<!--  max-width: 768px;-->
<!--  width: 100%;-->
<!--  margin: auto;-->
<!--}-->

<!--.wrapper::before {-->
<!--  content: "";-->
<!--  position: absolute;-->
<!--  top: 0;-->
<!--  left: 0;-->
<!--  right: 0;-->
<!--  bottom: 0;-->
<!--  background-position: center center;-->
<!--  background-size: cover;-->
<!--  background-repeat: no-repeat;-->
<!--  min-height: 100vh;-->
<!--  z-index: -1;-->
<!--}-->

<!--.wrapper .headline {-->
<!--  text-align: center;-->
<!--  padding-bottom: 20px;-->
<!--}-->


<!--.wrapper .headline h2 {-->
<!--  font-weight: 400;-->
<!--  font-size: 22px;-->
<!--  padding-top: 1%;-->
<!--  padding-bottom: 1%;-->
<!--  margin-top: 10%;-->
<!--}-->

<!--.wrapper .form {-->
<!--  max-width: 350px;-->
<!--  width: 100%;-->
<!--  margin: auto;-->
<!--}-->

<!--.wrapper .form-group {-->
<!--  margin-bottom: 15px;-->
<!--}-->

<!--.wrapper .form-group input {-->
<!--  display: block;-->
<!--  font-size: 16px;-->
<!--  line-height: 24px;-->
<!--  letter-spacing: -0.1px;-->
<!--  padding: 12px 16px;-->
<!--  height: 48px;-->
<!--  border-radius: 8px;-->
<!--  color: var(&#45;&#45;black-color);-->
<!--  border: 1px solid #e4e8ee;-->
<!--  box-shadow: none;-->
<!--  width: 100%;-->
<!--}-->

<!--.wrapper .form-group input:focus {-->
<!--  outline: none;-->
<!--}-->

<!--.wrapper .form-group input::placeholder {-->
<!--  color: var(&#45;&#45;black-color);-->
<!--  font-weight: 400;-->
<!--  font-size: 14px;-->
<!--}-->

<!--.btn,-->
<!--.btn-white,-->
<!--.btn-animated {-->
<!--  width: 100%;-->
<!--  margin: 15px 0 30px;-->
<!--  line-height: 22px;-->
<!--  padding: 12px 146px;-->
<!--  border: none;-->
<!--  text-align: center;-->
<!--  border-radius: 5px;-->
<!--}-->

<!--.btn:link,-->
<!--.btn:visited {-->
<!--  text-decoration: none;-->
<!--  padding: 10px 40px;-->
<!--//display: inline-block;-->
<!--  border-radius: 100px;-->
<!--  transition: all 0.2s;-->
<!--  position: relative;-->
<!--}-->
<!--.btn:hover {-->
<!--  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);-->
<!--  transition: 4ms ease-in;-->
<!--}-->
<!--.btn:active {-->
<!--  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);-->
<!--  transition: 4ms ease-in;-->
<!--}-->
<!--.btn-white {-->
<!--  background-color: #0f171c;-->
<!--  color: white;-->
<!--  font-size: 15px;-->
<!--}-->

<!--.form-group-2 {-->
<!--  padding-top: 15px;-->
<!--  padding-bottom: 15px;-->
<!--}-->

<!--.checkbox-text {-->
<!--  padding-left: 8px;-->
<!--  font-size: 15px;-->
<!--}-->

<!--.forgot-password {-->
<!--  padding-left: 26%;-->
<!--  text-decoration: none;-->
<!--  color: #124DA8;-->
<!--  font-size: 15px;-->
<!--}-->

<!--.separator {-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--  padding-top: 35px;-->
<!--}-->

<!--.separator .line {-->
<!--  height: 1px;-->
<!--  flex: 0.5;-->
<!--  background-color: #676767;-->
<!--}-->

<!--.separator h2 {-->
<!--  padding: 0 1rem;-->
<!--  font-size: 12px;-->
<!--  color: #676767;-->
<!--}-->

<!--.create-acc {-->
<!--  padding-top: 15px;-->
<!--  font-size: 17px;-->
<!--}-->
<!--.create-text {-->
<!--  font-size: 15px;-->
<!--}-->
<!--.create-link {-->
<!--  padding-left: 10px;-->
<!--  text-decoration: none;-->
<!--  color: #0f171c;-->
<!--}-->

<!--@media (max-width: 1030px) {-->
<!--  .wrapper::before {-->
<!--    left: -25%;-->
<!--    min-height: 60vh;-->
<!--    height: 500px;-->
<!--  }-->
<!--}-->
<!--@media (max-width: 767px) {-->
<!--  .wrapper {-->
<!--    max-width: 550px;-->
<!--  }-->
<!--  .wrapper .headline h1 {-->
<!--    font-size: 22px;-->
<!--    line-height: 25px;-->
<!--  }-->
<!--}-->
<!--@media (max-width: 990px) {-->
<!--  .wrapper .headline h1  {-->
<!--    font-size: 32px;-->
<!--  }-->
<!--  .wrapper .headline h2  {-->
<!--    font-size: 28px;-->
<!--  }-->
<!--}-->
<!--@media (max-width: 500px) {-->
<!--  .wrapper {-->
<!--    padding: 10px 25px 0;-->
<!--  }-->
<!--  form {-->
<!--    margin: 1rem;-->
<!--    max-width: 40rem;-->
<!--    border-radius: 12px;-->
<!--    padding: 1rem;-->
<!--    background-color: #ffffff;-->
<!--  }-->
<!--  .wrapper .headline h1  {-->
<!--    font-size: 25px;-->
<!--  }-->
<!--  .wrapper .headline h2  {-->
<!--    font-size: 23px;-->
<!--  }-->
<!--  .checkbox-text {-->
<!--    padding-left: 10px;-->
<!--  }-->
<!--  .forgot-password {-->
<!--    padding-left: 20px;-->
<!--  }-->
<!--  .company-logo{-->
<!--    width: 50%;-->
<!--    margin-top: unset;-->
<!--  }-->
<!--}-->

<!--</style>-->



