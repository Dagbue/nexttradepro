<template>
  <div>
    <div class="backdrop"></div>
    <dialog open>
      <div class="alpha">

        <div class="first-part">
          <img src="@/assets/withdraw-icon.svg" alt="withdraw-icon"/>
          <i class='bx bx-x' @click="$emit('close')"></i>
        </div>

        <div class="second-part">
          <p class="second-text-1">Subscription payment</p>
          <form @submit.prevent="">

            <div class="input-form-2">
<!--              <input type="text"  placeholder="Duration" class="input-form-1" required="required" />-->

                          <label>Please select a Plan</label>
              <select class="input-form-1"  name="selected"  required>
                <option value="" ></option>
                <option value="BASIC">BASIC</option>
                <option value="STANDARD" >STANDARD</option>
                <option value="PREMIUM">PREMIUM</option>
                <option value="DELUXE">DELUXE</option>
                <option value="401K PLAN">401K PLAN</option>
              </select>
            </div>

            <div class="input-form-2">
<!--              <input type="number"  placeholder="Enter Amount" class="input-form-1" required="required" />-->
                          <label>Please select Daily ROI</label>
              <select class="input-form-1" name="selected"  required>
                <option value="" ></option>
                <option value="10">BASIC</option>
                <option value="20" >STANDARD</option>
                <option value="30">PREMIUM</option>
                <option value="40">DELUXE</option>
                <option value="50">401K PLAN</option>
              </select>
            </div>



          </form>
        </div>

        <br/>
        <div class="separate">
          <button class="btn" @click="$emit('close')">Back</button>
          <button class="btn" @click="onPostClick">Submit</button>
        </div>

      </div>

    </dialog>
  </div>
</template>

<script>
export default {
  name: "SelectPlanModal",
  emits: ['close'],
  methods: {
    onPostClick() {
      this.$router.push("/fund-wallet");
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped >

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
}


dialog {
  position: fixed;
  top: 18vh;
  width: 32rem;
  height: 20rem;
  left: calc(50% - 9rem);
  margin: 0;
  background-color: transparent;
  z-index: 100;
  border: none;
  animation: modal 0.3s ease-out forwards;
}

.alpha{
  position: relative;
  display: block;
  overflow: hidden;
  width: 400px;
  height: 400px;
  /*height: auto;*/
  padding: 24px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(3, 28, 67, 0.1);
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 34px 0 rgba(3, 28, 67, 0.13);
}

.first-part{
  display: flex;
  justify-content: space-between;
}

.bx-x{
  font-size: 25px;
  padding-top: 2px;
}

.separate{
  display: flex;
  justify-content: space-between;
}

.btn{
  padding: 8px 55px;
  color: white;
  background-color: #0f171c;
  border: 1px solid #0f171c;
  border-radius: 5px;
  font-size: 13px;
  text-decoration: none;
  /*display: block;*/
  /*margin-left: auto;*/
  /*margin-right: auto;*/
}
.btn:hover{
  color: white;
  background-color: #0f171c;
  border: 1px solid #0f171c;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.second-text-1{
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0f171c;
  margin-top: 2%;
  margin-bottom: 4%;
}

.input-form-2{
  display: block;
  justify-content: center;
  margin-top: 2%;
  margin-bottom: 2%;
}

.input-form-1{
  order: 1;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  box-sizing: border-box;
  margin-bottom: 2%;
}

input {
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 8px;
  -webkit-transition: 0.3s;
  padding-top: 12px;
  padding-bottom: 12px;
  transition: 0.3s;
  outline: none;
  color: #667085;
  letter-spacing: 0.5px;
}

input:focus {
  border: 1px solid #24405A;
}

select {
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 8px;
  -webkit-transition: 0.3s;
  padding-top: 12px;
  padding-bottom: 12px;
  transition: 0.3s;
  outline: none;
  color: #667085;
  letter-spacing: 0.5px;
}

select:focus {
  border: 1px solid #24405A;
}


@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@media (max-width: 500px) {
  dialog {
    top: 14vh;
    width: 27rem;
    height: 20rem;
    left: calc(50% - 11rem);
    right: 30px;
  }
  h3{
    font-size: 20px;
  }
  p{
    font-size: unset;
  }
  .alpha{
    width: 360px;
  }
}
</style>