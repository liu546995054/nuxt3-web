<template>
  <section class="hero">
    <video autoplay loop muted playsinline class="hero-video">
      <source src="/videos/01.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
<!--    <div class="hero-content">-->
<!--      <h1>Professional Metal Recycling Technologies</h1>-->
<!--      <p>With more than 13 years of experience and 2000+ machines installed worldwide</p>-->
<!--      <div class="hero-buttons">-->
<!--        <NuxtLinkLocale to="/products" class="btn">Explore Products</NuxtLinkLocale>-->
<!--        <NuxtLinkLocale to="/contact" class="btn btn-outline">Contact Us</NuxtLinkLocale>-->
<!--      </div>-->
<!--    </div>-->
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.hero-content {
  max-width: 800px;
  text-align: center;
  padding: 0 20px;
  margin: 0 auto;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.btn {
  display: inline-block;
  padding: 12px 30px;
  background-color: #f95738;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  cursor: pointer;
}

.btn:hover {
  background-color: #e04a2d;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.btn-outline {
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
}

.btn-outline:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .hero {
    height: 70vh;
    min-height: 500px;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
