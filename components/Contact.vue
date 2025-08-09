<template>
  <section class="section contact">
    <div class="container">
      <div class="contact-wrapper">
        <div class="contact-info">
          <h3>Contact Information</h3>
          <ul>
            <li>
              <i class="fa fa-whatsapp"></i>
              <span>+86-18360809300</span>
            </li>
            <li>
              <i class="fa fa-envelope-o"></i>
              <span>info@titan-recycling.com</span>
            </li>
            <li>
              <i class="fa fa-map-marker-alt"></i>
              <span> #1 Renmin road, Qiaoqi, Jiangyin, Jiangsu, China</span>
            </li>
          </ul>
        </div>

        <div class="contact-form">
          <h3>Send us a message</h3>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <input type="text" v-model="form.name" placeholder="Your Name" required>
            </div>
            <div class="form-group">
              <input type="email" v-model="form.email" placeholder="Your Email" required>
            </div>
            <div class="form-group">
              <input type="tel" v-model="form.phone" placeholder="Your Phone">
            </div>
            <div class="form-group">
              <textarea v-model="form.message" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" class="btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
});

const submitForm = () => {
  // Form submission logic
  console.log('Form submitted:', form.value);
  alert('Thank you for your message! We will contact you soon.');

  // Reset form
  form.value = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };
};
</script>

<style scoped>
.contact {
  padding: 80px 0;
  background-color: #f8f9fa;
}

.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 50px;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info, .contact-form {
  background: #fff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.contact-info h3, .contact-form h3 {
  font-size: 1.5rem;
  color: #0d3b66;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 2px solid #f95738;
}

.contact-info ul {
  list-style: none;
  padding: 0;
}

.contact-info li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
}

.contact-info i {
  color: #f95738;
  font-size: 1.2rem;
  min-width: 30px;
  margin-top: 5px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #f95738;
  outline: none;
  box-shadow: 0 0 0 3px rgba(249, 87, 56, 0.1);
}

.form-group textarea {
  min-height: 150px;
  resize: vertical;
}

.btn {
  display: inline-block;
  padding: 12px 30px;
  background-color: #f95738;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn:hover {
  background-color: #e04a2d;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 992px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>