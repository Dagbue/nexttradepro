<template>
    <section class="mission-section">
      <div class="container">
        <div class="header">
          <h2 class="title">
            We're on a mission to democratize
            <span class="title-highlight">finance for all.</span>
          </h2>
          <p class="description">
            At <span class="brand">TopShares Pro</span> Markets, our values are in service of our customers. We strive to uphold our
            values every day.
          </p>
        </div>
        <div class="content-grid">
          <div class="text-content">
            <h3 class="subtitle">
              About <span class="brand">TopShares Pro</span>
            </h3>
            <div class="content">
              <p>
                Crypto creates economic freedom by ensuring that people can participate fairly in the
                economy, and TopShares Pro is on a mission to increase economic freedom for more
                than 1 billion people.
              </p>
              <p>
                We're updating the century-old financial system by providing a trusted platform that makes it easy for people and institutions to engage with "financial
                assets" using cryptocurrencies as the method of currency to trade the financial
                markets.
              </p>
              <p>
                We also provide critical infrastructure for onchain activity and support builders
                who share our vision that onchain is the new online. And together with the crypto
                community, we advocate for responsible rules to make the benefits of crypto available
                around the world.
              </p>
            </div>
          </div>
          <div class="image-container">
            <div class="image-card">
              <img
                  src="@/assets/aboutimag1.jpg"
                  alt="Mobile trading app interface"
                  class="image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>


</template>

<script>
export default {
  name: "AboutSection2",
  data() {
    return {
      // Import the video file here
    }
  }
}
</script>


<style scoped>
.mission-section {
  padding: 5rem 0;
  background: linear-gradient(to bottom right, #EFF6FF, #E0E7FF);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.header {
  text-align: center;
  margin-bottom: 4rem;
}

.title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
}

.title-highlight {
  display: block;
  color: #2563EB;
}

.description {
  font-size: 1.25rem;
  color: #6B7280;
  max-width: 64rem;
  margin: 0 auto;
}

.brand {
  color: #2563EB;
  font-weight: 600;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.text-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #374151;
  line-height: 1.75;
}



.image {
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-radius: 0.75rem;
}

@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>