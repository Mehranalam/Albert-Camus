  <template>
    <div class="holder">
      <p>
        برای یادبود نویسنده‌ای که فقر را تجربه کرده بود خوده او گفته است که آفتاب و فقر محله بلکور چه مفهومی برایش داشته است: <b>فقر مانع این شد که فکر کنم زیر آفتاب و در تاریخ همه چیز خوب است</b>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'index-page',
    props: {
      msg: String
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
  