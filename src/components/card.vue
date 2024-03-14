  <template>
    <div class="holder">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <button>خواندن این اثر</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'card-page',
    props: {
      title: String,
      description: String
    }
}
  </script>
  
  <style lang="scss" scoped>
    .holder {
      display: flex;
      flex-direction: column;
      direction: rtl;
      justify-content: space-between;
      border: 1px solid #2c3e50;
      padding: 25px;
      margin: 1%;
      border-radius: 20px;
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
  