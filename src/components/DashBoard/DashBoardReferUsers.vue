<template>
  <section id="ReferralContentCard" class="referral-wrapper">
    <div class="margin-bottom margin-medium">
      <div class="referral-banner-wrapper"><img src="@/assets/referral-banner.png" loading="lazy" sizes="(max-width: 479px) 90vw, (max-width: 767px) 100vw, 496px" srcset="@/assets/referral-banner-p-500.png 500w, @/assets/referral-banner-p-800.png 800w, @/assets/referral-banner.png 992w" alt=""></div>
    </div>
    <div class="referral-content">
      <div class="margin-bottom margin-xsmall">
        <h3 class="referral-heading">Invite your friends to <br>ITA and earn!</h3>
      </div>
      <p class="referral-subtext">You can refer users by sharing your referral link:</p>
      <div class="margin-top margin-medium">
        <div class="referral-link-wrapper">
          <div class="referral-link-block">
            <div class="referral-link">incometradeasets.com/register/12hkhd</div>
          </div>
          <a @click="copyToClipboard('incometradeasets.com')" class="button-12 w-button">Copy</a>
        </div>
      </div>
      <div class="margin-top margin-medium">
        <a href="#" class="button w-button">Invite friends</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DashBoardReferUsers",
  data() {
    return {
      randomString: "",
    };
  },
  computed: {
  },

  methods: {
    generateRandomString() {
      const length = 5; // Length of the random string
      let result = "";
      const characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      this.randomString = result;
    },
    copyToClipboard(content) {
      const textarea = document.createElement('textarea')
      textarea.value = content
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
  },

  mounted() {
    this.generateRandomString()
  },
}
</script>

<style scoped>
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }

.referral-link{
  text-transform: lowercase;
}

.referral-wrapper{
  margin-top:4%;
}

</style>