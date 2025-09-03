<template>
  <div class="alpha">
    <p class="header">Testimonials</p>

    <div class="testimonials-grid">
      <div v-for="testimonial in featuredTestimonials" :key="testimonial.id" class="testimonial-card">
        <div class="quote-icon">
          <svg class="quote-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 21c0-2.4 1.6-4.4 3.8-5 1.1-.3 2.2-.7 3.2-1.2-.4 1.2-.7 2.5-.7 3.8 0 2.7 2.2 4.9 4.9 4.9s4.9-2.2 4.9-4.9c0-1.3-.3-2.6-.7-3.8 1 0.5 2.1 0.9 3.2 1.2 2.2 0.6 3.8 2.6 3.8 5" />
          </svg>
        </div>

        <div class="rating">
          <span v-for="n in testimonial.rating" :key="n" class="star">★</span>
        </div>

        <p class="testimonial-text">"{{ testimonial.testimonial }}"</p>

        <div class="metrics">
          <div style="text-align: center;">
            <div class="metric-value profit">{{ testimonial.metrics.profit }}</div>
            <div class="metric-label">Profit</div>
          </div>
          <div style="text-align: center;">
            <div class="metric-value period">{{ testimonial.metrics.period }}</div>
            <div class="metric-label">Period</div>
          </div>
          <div style="text-align: center;">
            <div class="metric-value trades">{{ testimonial.metrics.trades }}</div>
            <div class="metric-label">Trades</div>
          </div>
        </div>

        <div class="author">
          <img :src="testimonial.image" :alt="testimonial.name" class="author-image" />
          <div>
            <div class="author-name">{{ testimonial.name }}</div>
            <div class="author-role">{{ testimonial.role }}</div>
            <div class="author-company">{{ testimonial.company }}</div>
          </div>
        </div>
      </div>
    </div>

    <p @click="onPostClick" class="btn">View More</p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Section6",
  data() {
    return {
      featuredTestimonials: [
        {
          id: 1,
          name: "Sarah Chen",
          role: "Professional Trader",
          company: "Goldman Sachs",
          image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150",
          rating: 5,
          testimonial: "TopShares Pro has revolutionized my trading experience. The platform's speed and reliability are unmatched. I've increased my portfolio by 340% in just 8 months.",
          metrics: {
            profit: "+340%",
            period: "8 months",
            trades: "2,400+"
          }
        },
        {
          id: 2,
          name: "Michael Rodriguez",
          role: "Investment Analyst",
          company: "JP Morgan",
          image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
          rating: 5,
          testimonial: "The analytical tools and real-time data have given me a significant edge in the market. Customer support is exceptional - they're available 24/7 and truly understand trading.",
          metrics: {
            profit: "+280%",
            period: "1 year",
            trades: "5,200+"
          }
        },
        {
          id: 3,
          name: "Emily Watson",
          role: "Crypto Specialist",
          company: "Binance",
          image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150",
          rating: 5,
          testimonial: "As someone who trades both traditional assets and crypto, TopShares Pro's unified platform is a game-changer. The execution speed is lightning fast.",
          metrics: {
            profit: "+420%",
            period: "6 months",
            trades: "3,800+"
          }
        }
      ]
    }
  },
  methods: {
    onPostClick() {
      this.$router.push("/testimonials");
    },
  },
}
</script>

<style scoped>
.alpha{
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




.btn{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 250px;
  text-align: center;
  background: #007aff;
  border: 1px solid #007aff;
  color: #FFFFFF;
  padding: 0.9em 25px;
  border-radius: 10px;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.25s ease;
  margin-top: 2%;
}
.btn:hover{
  color: #FFFFFF;
  background-color: #0063cc;
}


.header {
  text-align: center;
  margin-bottom: 4rem;
}

.header h2 {
  font-size: 2.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.header p {
  font-size: 1.25rem;
  color: #4b5563;
  max-width: 48rem;
  margin: 0 auto;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-left: 7%;
  margin-right: 7%;
  margin-bottom: 4%;
}

.testimonial-card {
  position: relative;
  padding: 2rem;
  background: linear-gradient(to bottom right, #eff6ff, #e0e7ff);
  border-radius: 1rem;
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-0.5rem);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.quote-icon {
  position: absolute;
  top: -1rem;
  left: 2rem;
  background-color: #2563eb;
  padding: 0.75rem;
  border-radius: 50%;
}

.quote-svg {
  width: 1.5rem;
  height: 1.5rem;
  color: #ffffff;
}

.rating {
  display: flex;
  margin: 1rem 0 1.5rem;
}

.star {
  font-size: 1.25rem;
  color: #facc15;
}

.testimonial-text {
  font-size: 1.125rem;
  color: #374151;
  line-height: 1.75;
  font-style: italic;
  margin-bottom: 2rem;
}

.metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 0.75rem;
  margin-bottom: 1.5rem;
}

.metric-value {
  font-size: 1.25rem;
  font-weight: 700;
}

.metric-value.profit { color: #16a34a; }
.metric-value.period { color: #2563eb; }
.metric-value.trades { color: #7c3aed; }

.metric-label {
  font-size: 0.75rem;
  color: #6b7280;
}

.author {
  display: flex;
  align-items: center;
}

.author-image {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
}

.author-name {
  font-weight: 600;
  color: #111827;
}

.author-role {
  font-size: 0.875rem;
  color: #6b7280;
}

.author-company {
  font-size: 0.875rem;
  color: #2563eb;
}

@media (max-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

@media (max-width: 700px) {
  .btn{
    margin-top: 2%;
    width: 300px;
  }
}

@media (max-width: 500px) {

}
</style>