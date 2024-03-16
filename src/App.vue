<template>
  <div style="margin-top: 14px; border-radius: 12px;" class="container" dir="rtl">
    <headery />

    <div id="section-intro" dir="rtl" class="sections holder-inside" align="right">
      <div id="intro-container" class="text-break" style="margin-left: 10px;">
        <div>
          <p>برای یادبود نویسنده‌ای که فقر را تجربه کرده بود خوده او گفته است که آفتاب و فقر محله بلکور چه
            مفهومی برایش داشته است فقر مانع این شد که فکر کنم زیر آفتاب و در تاریخ همه چیز خوب است </p>

          <figure>
            <blockquote class="blockquote">
              <p>اشتیاق به آزاد بودن و داشتن استقلال در کسی امکان پذیر است که هنوز امیدی در دل می‌پروراند. برای مرسو در
                آن
                موقع دیگر هیچ امیدی وجود نداشت. </p>
            </blockquote>
            <figcaption class="blockquote-footer">
              آلبر کامو <cite title="Source Title">مرگ شادمانه</cite>
            </figcaption>
          </figure>
          <br>
          <br>
          <h5 style="border-right: 3px solid blue; padding-right: 15px; border-radius: 6px;"> صفحه درباره این پروژه - یادبود آلبر کامو - <a style="text-decoration: underline;" href=""><router-link to="/about">درباره پروژه</router-link></a></h5>
          <br>
          <figure>
            <blockquote class="blockquote">
              <p>هیچکس مجبور نیست انسان بزرگی باشد، تنها  انسان بودن کافی است.</p>
            </blockquote>
            <figcaption class="blockquote-footer">
              آلبر کامو <cite title="Source Title">بیگانه</cite>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
  <router-view />

  <div class="container" dir="rtl">
    <footeer />
  </div>

</template>

<script>
import headery from './components/header-page.vue'
import footeer from './components/footer.vue'
export default {
  name: 'HomeView',
  components: {
    headery,
    footeer
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'IRANYekan', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.holder-inside {
  display: flex;
  flex-direction: row;
  margin: 25px;
  direction: rtl;
  justify-content: space-between;
  padding: 30px;
  align-items: right;
}

.holder-inside img {
  width: 150px;
  border-radius: 15px;
}

@import '~bootstrap/dist/css/bootstrap.css'
</style>
