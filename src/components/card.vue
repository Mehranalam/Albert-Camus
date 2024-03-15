<template>
  <div class="holder" dir="rtl">
    <div align="right" class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">محتوای خواندنی - متنی</h6>
        <p class="card-text">{{ description }}</p>
        <a :href="link">خواندن </a>
      </div>
    </div>
  </div>
  <main>
    <RouterView />
  </main>
</template>

<script>
export default {
  name: 'card-page',
  props: {
    title: String,
    description: String,
    link: String
  }
}
</script>

<style lang="scss" scoped>
.holder {
  display: flex;
  flex-direction: column;
  direction: rtl;
  padding: 20px;
}

.holder p {
  font-family: 'Vazirmatn';
}

.holder button {
  background-color: rgb(54, 54, 124);
  color: white;
  font-family: 'IRANYekan';
  width: 100px;
  border: 0px;
  border-radius: 4px;
  padding: 5px;
}
</style>