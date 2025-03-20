<template>
  <div>
    <div class="backdrop" @click="$emit('close')"></div>
    <dialog open>
      <p
          @click="$emit('close')"
          style="float: right;
          font-family: 'BR-Firma-Bold', sans-serif;"
      >X</p>
      <div>
        <h4>Legal information and ownership of website</h4>
        <p>TopShares Pro ("Website"), which includes all products and services offered by TopShares Pro,
          is and remains the sole property of the Company. All rights are reserved in and for the Company TopShares Pro
          group is the owner of all the intellectual property rights, including trade names, trademarks, logos
          and the trade names in and are exclusive to TopShares Pro at all times. Except where expressly stated
          to the contrary, copyright in the underlying HTML, text, graphics, audio clips, video clips and other information
          and material is owned by the Company. No person or entity may alter, modify, reproduce, distribute, display,
          exploit, transmit, transcribe, reproduce, redistribute, copy, post, store or translate into any other form,
          any materials or media from the Website, without obtaining prior written permission from TopShares Pro
          Group.</p>
      </div>
      <div>
        <h4>Data</h4>
        <p>Data provided via the Website is intended only for informational and private use purposes. The User may obtain
          the advice of independent investment, financial, legal and tax advisors, if desired, before proceeding with an
          investment. All information provided via the Website should not be read, interpreted or construed as providing
          any investment advice by the Company, or its Employees, Officers, Directors, Affiliates, Agents, Service
          Provider and/or Licensors. This Website does not take into consideration any investment goals, financial
          situation or specific requirements of any User. Any person and/or entity should carefully consider their
          financial circumstances prior to entering into any transaction(s) and/or Agreement(s). Any information that
          the Company has obtained from a User, through the use of the Website is at all times held in confidence and
          for lawful purposes. Information so obtained is only subject to a disclosure in cases of request imposed by any
          relevant supervisory body, legal request subjecting the Company to disclose such information(s), or
          in cases where disclosure of such information is necessary to protect any of Company's legal obligations
          and/or rights.</p>
      </div>
      <div>
        <h4>Cookies</h4>
        <p>The Company may use "Cookies", which are minute files containing information that websites use to track
          visitors of the Website. The Company measures activity of the Website through the use of "Cookies".
          The Company may access Cookies on the User's Computer in order to obtain information related to which website,
          banners and/or advertisements let the User to the Company's Website. Details transmitted through Cookies shall
          not be used for any direct promotional or marketing purposes without the User's Prior Consent.</p>
      </div>
      <div>
        <h4>Cancellations</h4>
        <p>Client are allowed to terminate their accounts, but stand to forfeit all profits earned and give a 100 day
          prior notice for documentation. Clients are advised to thoroughly go through the terms and conditions and
          become certain of investing before proceeding.</p>
      </div>
      <div>
        <h4>Amendments</h4>
        <p>TopShares Pro has the right to amend the Agreement without obtaining any prior consent from the Client.
          If the Organization makes any material change to the Agreement, it will give at least 100 (Hundred) Business
          Days’ notice of such change to the Client. Such amendment will become effective on the date specified in the
          notice. Unless otherwise agreed, an amendment will not affect any outstanding order or Transaction or any legal
          rights or obligations which may already have arisen.</p>
      </div>
      <div>
        <h4>Confidentiality</h4>
        <p>No personal or financial information, provided by the User, will be disclosed, given, sold or exchanged to any
          third party. In rare circumstances, if Company is required by relevant legal authority or supervisory body or
          legislation, information(s) may be disclosed in such cases. As a general rule, the User(s) information will
          remain in the Company's possession and will be treated as confidential at all times. It is the User's
          responsibility to keep any account numbers and/or passwords and/or logins confidential at all times. User
          authorizes the Company to act on any instruction received in good faith.</p>
      </div>
      <div>
        <h4>Applicable Law and Jurisdiction</h4>
        <p>The access and use of the Website, the products and services provided through the Website, is governed by the
          laws of United Kingdom Companies House. Without restricting the generality of the foregoing, the User may not
          make commercial use of the contents of the Website or include the contents of the Website in or with any other
          product that is created or distributed by the User, or copy the contents of the Website to the User's own or
          another User Website, without obtaining the prior permission from the Company. In cases that for any reason,
          any term and condition is deemed invalid or unenforceable, such provision will be excluded and remaining
          provisions will remain in full force and effect. Any translation of the contents of the Website including
          products and services provided through the Website is made as goodwill for the convenience of the User. In
          the event of a dispute between various language versions, the English Version of the Website shall prevail.</p>
      </div>
    </dialog>
  </div>
</template>

<script>
export default {
  name: "TermsBaseModal",
  emits: ['close'],
}
</script>

<style scoped>

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

div{
  padding-bottom: 10px;
}
dialog {
  position: fixed;
  top: 18vh;
  width: 33rem;
  height: 30rem;
  left: calc(50% - 17rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 2rem;
  background-color: white;
  color: black;
  z-index: 100;
  border: none;
  animation: modal 0.3s ease-out forwards;
  overflow-y: scroll;
}

h4{
  margin-bottom: 5px;
}

p{
  font-size: 15px;
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
    top: 18vh;
    width: 20rem;
    height: 20rem;
    left: unset;
    right: 30px;
  }
  h3{
    font-size: 20px;
  }
  p{
    font-size: unset;
  }
}
</style>