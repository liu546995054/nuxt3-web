<template>
  <div className="wrapper">
    <Header/>
    <Hero/>
    <main>
      <Products/>
      <About/>
      <News/>
    </main>
    <Footer/>
  </div>
</template>

<script setup>
usePageSeo('home')
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>
