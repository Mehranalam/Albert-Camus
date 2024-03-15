<template>
  <div class="container text-center">
    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
      <div class="col">
        <card title="افسانه سیزیف"
          description="سیزیف در اساطیر یونان بخاطر فاش کردن راز خدایگان محکوم شد تا تخته سنگی را به دوش گرفته و تا قله یک کوه حمل کند، اما همین که به قله می‌رسد، سنگ به پایین می‌غلتد و سیزیف باید دوباره این کار را انجام دهد.کامو می‌گوید پیروزی وی در آگاهی است." />
      </div>
      <div class="col">
        <card title="بیگانه"
          description="من مدت‌ها قبل بیگانه را خلاصه کردم، با یک اظهار نظر اعتراف می‌کنم خیلی متناقض بود: «در جامعهٔ ما هر مردی که در مراسم تشییع جنازهٔ مادرش گریه نکند، با خطر محکومیت به اعدام مواجه می‌شود». فقط منظورم این بود که قهرمان کتاب من به این دلیل محکوم می‌شود که در این بازی شرکت نمی‌کند" />
      </div>
      <div class="col">
        <card title="طاعون"
          description="آنگاه پی بردم که دست کم من در سراسر این سال های دراز طاعون زده بوده‌ام و با وجود باهمه صمیمیتم گمان کرده‌ام که بر ضد طاعون می‌جنگم." />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import card from '@/components/card.vue'

export default {
  name: 'HomeView',
  components: {
    card
  }
}
</script>
