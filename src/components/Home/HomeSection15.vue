<template>
  <div class="alpha">
    <div class="section-alpha">

      <div class="section-1">
        <p class="text-1">&lt; 7.12 ms</p>
        <p class="text-2">Average order execution speed</p>
      </div>

      <div class="vl"></div>

      <div class="section-2">
        <p class="text-1">12+</p>
        <p class="text-2">Integrated liquidity providers</p>
      </div>

      <div class="vl"></div>

      <div class="section-3">
        <p class="text-1">> 12,000</p>
        <p class="text-2">Executed orders per second</p>
      </div>

      <div class="vl"></div>

      <div class="section-4">
        <p class="text-1">$545 k</p>
        <p class="text-2">Average trading volume per day</p>
      </div>


    </div>

    <div class="button-section">

      <div class="button-section-inner">
        <button class="btn">Setup Your trading Account</button>
        <button class="btn-2">Discover Our Platform</button>
      </div>

      <p class="button-section-text">Registration takes only 40 seconds!!!</p>

    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSection15"
}
</script>

<style scoped>
.alpha {
  margin-top: 2%;
  margin-bottom: 2%;
  padding: 0 10px; /* Add some side padding on small devices */
}

.section-alpha {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  flex-wrap: nowrap; /* Default: horizontal layout */
}

/* Vertical line */
.vl {
  border-left: 1px solid #8599a6;
  height: 90px;
}

/* Text styles */
.text-1 {
  color: #0A0A0AFF;
  text-align: center;
  font-size: 1.7rem;
  line-height: 1.2;
  font-weight: 600;
}

.text-2 {
  color: #8599a6;
  font-size: 0.95rem;
  line-height: 1.5;
  text-align: center;
  font-weight: 300;
}

/* Button container */
.button-section-inner {
  display: flex;
  justify-content: center;
  margin-top: 3%;
  gap: 10px;
  flex-wrap: wrap; /* Allow buttons to wrap on small screens */
}

/* Buttons */
.btn, .btn-2 {
  padding: 1.3em 25px 1.2em 30px;
  border-radius: 12px;
  position: relative;
  display: inline-block;
  text-decoration: none;
  transition: all 0.25s ease;
  margin: 0 2.5px;
  width: 250px;
  text-align: center;
  font-size: 15px;
  box-sizing: border-box;
}

/* First button style */
.btn {
  background-color: transparent;
  border: 1px solid #d0d0d0;
  color: #0A0A0AFF;
}

/* Second button style */
.btn-2 {
  background: #007aff;
  border: 1px solid #007aff;
  color: #ffffff;
}

.btn-2:hover {
  background-color: #0063cc;
}

.button-section-text {
  color: #0A0A0AFF;
  text-align: center;
  font-size: 1rem;
  line-height: 1.2;
  font-weight: 300;
  margin-top: 2%;
}

/* -------- Responsive styles -------- */

/* Medium screens (tablets and below) */
@media (max-width: 768px) {
  .section-alpha {
    flex-wrap: wrap;        /* Allow wrapping */
    gap: 30px;              /* Reduce gap */
    justify-content: center;
  }

  .section-alpha > div {
    flex: 1 1 45%;          /* Take roughly half width */
    min-width: 200px;       /* Minimum width */
  }

  .vl {
    display: none;          /* Hide vertical lines */
  }

  /* Button container */
  .button-section-inner {
    gap: 15px;
    margin-top: 5%;
    margin-bottom: 5%;
  }

  /* Make buttons shrinkable */
  .btn, .btn-2 {
    width: 45%;             /* Buttons side by side, 45% width */
    min-width: 150px;
  }
  .alpha {
    margin-top: 5%;
    margin-bottom: 5%;
  }
}

/* Small screens (phones) */
@media (max-width: 480px) {
  .section-alpha {
    flex-direction: column; /* Stack stats vertically */
    align-items: center;
    gap: 20px;
  }

  .section-alpha > div {
    flex: none;
    width: 100%;            /* Full width blocks */
    max-width: 320px;
  }

  .vl {
    display: none;          /* Hide vertical lines */
  }

  /* Buttons stacked vertically */
  .button-section-inner {
    flex-direction: column;
    gap: 12px;
  }

  .btn, .btn-2 {
    width: 100%;            /* Full width buttons */
    max-width: 320px;
    margin: 0 auto;
  }
}
</style>