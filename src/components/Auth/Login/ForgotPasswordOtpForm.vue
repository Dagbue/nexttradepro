<!--suppress CssUnresolvedCustomProperty -->
<template>
  <div class="alpha">

    <div class="image">
      <img src="@/assets/logo.png" alt="logo" class="company-logo">
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
              style="
  background: #007aff;
  border: 1px solid #007aff;
" >Verify email</base-button>
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

export default {
  name: 'ForgotPasswordOtpForm',
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
    // ...mapState({
    //   loading: state => state.auth.loading,
    //   auth: state => state.auth
    // }),
    // forgotPasswordFormData() {
    //   return StoreUtils.rootGetters(StoreUtils.getters.auth.getForgotPasswordFormData)
    // },

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
    completeEnrollment(){
      this.$router.push("/new-password")
    },

    resendOtp(){
      // StoreUtils.dispatch(StoreUtils.actions.auth.resendOtp, {
      //   email: this.forgotPasswordFormData.email,
      // })
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
  width: 22%;
  /*margin-bottom: 1.5%;*/
}

.text-area h3{
  padding-bottom: 0;
  margin-bottom: 0;
  text-align: center;
  letter-spacing: 0.5px;
  color: #0A0A0AFF;
  font-weight: 600;
  font-size: 22px;
  line-height: 38px;
}

.text-area p{
  padding-top: 2px;
  margin-top: 2px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #0A0A0AFF;
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
  color: #0A0A0AFF;
}

span{
  color: #007aff;
  text-decoration: underline;
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

  border: 1px solid #D0D5DD;
  text-align: center;
  width: 50px;
  height: 50px;
  font-size: 30px;
  background-color: #F3F3F3;

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
    width: 50%;
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

