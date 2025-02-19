<template>
  <div>
    <div class="backdrop" @click="$emit('close')"></div>
    <dialog open>
      <p
          @click="$emit('close')"
          style="float: right;
          font-family: 'BR-Firma-Bold', sans-serif;"
      >X</p>

      <img src="@/assets/certificate.jpeg" alt="" class="image">

    </dialog>
  </div>
</template>

<script>
export default {
  name: "CertificateModal",
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
  top: 6vh;
  width: 33rem;
  height: 45rem;
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

.image{
  width: 100%;
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