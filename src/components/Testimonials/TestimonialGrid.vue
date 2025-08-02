<template>
  <section class="testimonial-section">
    <div class="container">
      <div class="section-header">
        <h2>Real Stories from Real Traders</h2>
        <p>Join thousands of successful traders who have transformed their financial future with TopShares Pro.</p>
      </div>

      <div class="testimonial-grid">
        <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-card">
          <!-- Verified Badge -->
          <div v-if="testimonial.verified" class="verified-badge">
            ✓ Verified
          </div>

          <!-- Rating -->
          <div class="rating">
            <span v-for="n in testimonial.rating" :key="n" class="star">★</span>
          </div>

          <!-- Testimonial Text -->
          <p class="testimonial-text">"{{ testimonial.testimonial }}"</p>

          <!-- Trading Stats -->
          <div class="stats-grid">
            <div class="stat-item">
              <span class="icon trending-up"></span>
              <div class="stat-value">{{ testimonial.tradingStats.profit }}</div>
              <div class="stat-label">Profit</div>
            </div>
            <div class="stat-item">
              <span class="icon dollar-sign"></span>
              <div class="stat-value">{{ testimonial.tradingStats.trades }}</div>
              <div class="stat-label">Trades</div>
            </div>
            <div class="stat-item">
              <span class="icon clock"></span>
              <div class="stat-value">{{ testimonial.tradingStats.period }}</div>
              <div class="stat-label">Period</div>
            </div>
          </div>

          <!-- Author -->
          <div class="author">
            <img :src="testimonial.avatar" :alt="testimonial.name" class="avatar" />
            <div>
              <div class="author-name">{{ testimonial.name }}</div>
              <div class="author-role">{{ testimonial.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TestimonialGrid",
  data() {
    return {
      testimonials: [
        {
          id: 1,
          name: "Ronald Dooms",
          role: "Investor",
          avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100",
          rating: 5,
          testimonial: "This is more than a trading company. Giving you guys 5 ratings for your support services. Great customer service. Awesome support.. TopShares Pro is the best....",
          verified: true,
          tradingStats: {
            profit: "+156%",
            trades: "1,200+",
            period: "2 years"
          }
        },
        {
          id: 2,
          name: "Theresa Williams",
          role: "Banker",
          avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100",
          rating: 5,
          testimonial: "TopShares Pro has the simplest interface of all and also has the fastest entry point into the market. I was a banker who was deep in debt, but with the help of TopShares Pro...., now I am living well and comfortable with my family",
          verified: true,
          tradingStats: {
            profit: "+289%",
            trades: "890+",
            period: "18 months"
          }
        },
        {
          id: 3,
          name: "William Tyler Pelicione",
          role: "Business Woman",
          avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100",
          rating: 5,
          testimonial: "My name is William Tyler Pelicione. Few weeks I have traded with TopShares Pro, I made enough profit of 1.8btc and my withdrawal was processed instantly. TopShares Pro is the best.",
          verified: true,
          tradingStats: {
            profit: "+412%",
            trades: "650+",
            period: "6 months"
          }
        },
        {
          id: 4,
          name: "Mark Rutherfod",
          role: "Investor",
          avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100",
          rating: 5,
          testimonial: "I joined TopShares Pro as a way of earning income and consolidating on my 9-5 which had placed me in a loop for so long. My experience has been nothing short of beautiful in the few years that I've been with the platform. I've been able to keep expanding my goals off profits from TopShares Pro and it keeps looking better.",
          verified: true,
          tradingStats: {
            profit: "+234%",
            trades: "2,100+",
            period: "3 years"
          }
        },
        {
          id: 5,
          name: "Jennifer McCain",
          role: "Trader",
          avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100",
          rating: 5,
          testimonial: "After losing my way in the cryptocurrency space a few times, I made a decision to turn towards an opportunity that is consistent, dependable, and I could build steadily with, and TopShares Pro has ticked all these boxes by providing all the tools I need to earn weekly, but most importantly the guidance that comes with the experience is simply top quality.",
          verified: true,
          tradingStats: {
            profit: "+367%",
            trades: "1,450+",
            period: "2.5 years"
          }
        },
        {
          id: 6,
          name: "Ingredia Nutrisha",
          role: "Business Woman",
          avatar: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100",
          rating: 5,
          testimonial: "I spent 25 years in the corporate world, and retirement seemed like the plan, always looked forward to it. Yet, I wasn't going to turn down an opportunity to really chase my dreams and accomplish the things I'd wanted to do. 34 months down the line, I own my home, accrue substantive income and have the financial freedom to fully explore ideas and plans I had left in my notebooks.",
          verified: true,
          tradingStats: {
            profit: "+445%",
            trades: "3,200+",
            period: "3 years"
          }
        }
      ]
    };
  }
}
</script>

<style scoped>
.testimonial-section {
  padding: 5rem 1rem;
  background-color: #f9fafb;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.25rem;
  color: #6b7280;
  max-width: 48rem;
  margin: 0 auto;
}

.testimonial-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.testimonial-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.testimonial-card:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}

.testimonial-card:hover::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, #2563eb, #7c3aed);
  opacity: 0.05;
  border-radius: 1rem;
}

.verified-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #dcfce7;
  color: #15803d;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
}

.rating {
  display: flex;
  margin-bottom: 1rem;
}

.star {
  color: #facc15;
  font-size: 1rem;
}

.testimonial-text {
  color: #374151;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  padding: 0.75rem;
  background: #f9fafb;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
}

.stat-item {
  text-align: center;
}

.icon {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  margin-bottom: 0.25rem;
}

.icon.trending-up::before {
  content: '📈';
  color: #16a34a;
}

.icon.dollar-sign::before {
  content: '💵';
  color: #2563eb;
}

.icon.clock::before {
  content: '⏰';
  color: #7c3aed;
}

.stat-value {
  font-size: 0.875rem;
  font-weight: 700;
}

.stat-value:nth-child(1) {
  color: #16a34a;
}

.stat-value:nth-child(2) {
  color: #2563eb;
}

.stat-value:nth-child(3) {
  color: #7c3aed;
}

.stat-label {
  font-size: 0.75rem;
  color: #6b7280;
}

.author {
  display: flex;
  align-items: center;
}

.avatar {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.75rem;
}

.author-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: #111827;
}

.author-role {
  font-size: 0.75rem;
  color: #6b7280;
}

@media (max-width: 768px) {
  .testimonial-grid {
    grid-template-columns: 1fr;
  }
}
</style>