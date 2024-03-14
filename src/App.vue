<template>
  <div dir="rtl" class="albert no-select">
    <img id="image-albert" alt="Albert Camus" src="./assets/Albert.jpg">
    <div align="center">
      <index msg="Welcome to Albert Camus honoer"/>
      <h1>آلبر کامو - کتابخوان آنلاین آثار او</h1>
    </div>
  </div>

  <div class="displaey">
    <card title="طاعون" description="آنگاه پی بردم که دست کم من در سراسر این سال های دراز طاعون زده بوده‌ام و با وجود باهمه صمیمیتم گمان کرده‌ام که بر ضد طاعون می‌جنگم."/>
    <card title="بیگانه" description="من مدت‌ها قبل بیگانه را خلاصه کردم، با یک اظهار نظر اعتراف می‌کنم خیلی متناقض بود: «در جامعهٔ ما هر مردی که در مراسم تشییع جنازهٔ مادرش گریه نکند، با خطر محکومیت به اعدام مواجه می‌شود». فقط منظورم این بود که قهرمان کتاب من به این دلیل محکوم می‌شود که در این بازی شرکت نمی‌کند"/>
    <card title="افسانه سیزیف" description="سیزیف در اساطیر یونان بخاطر فاش کردن راز خدایگان محکوم شد تا تخته سنگی را به دوش گرفته و تا قله یک کوه حمل کند، اما همین که به قله می‌رسد، سنگ به پایین می‌غلتد و سیزیف باید دوباره این کار را انجام دهد.کامو می‌گوید پیروزی وی در آگاهی است."/>

  </div>
</template>

<script>
import index from './components/index.vue'
import card from './components/card.vue'

export default {
  name: 'App',
  components: {
    index,
    card
  }
}
</script>

<style lang="scss">

#app {
  font-family: 'IRANYekan', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

#image-albert {
  width: 50%;
  border-radius: 24px;
}

.albert {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 5%;
}

.displaey {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

</style>
