<template>
  <h3>{{ msg }}</h3>
  <p>{{ descritption }}</p>
</template>

<script>
export default {
  name: 'index-page',
  props: {
    msg: String,
    descritption: String
  }
}
</script>

<style scoped>
.holder {
  margin-right: 25%;
  margin-left: 25%;
  margin-top: 20px;
  margin-bottom: 20px;
}

.holder p {
  font-family: 'Vazirmatn';
}
</style>