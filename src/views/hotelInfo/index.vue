<template>
    <section class="ftco-section ftco-degree-bg">
      <div class="container">
        <div class="row">
            <Sidebar
            />
            <div class="col-lg-9">
              <div v-if="hotelInfo">
                <h1 class="hotel-name">Отель -- {{hotelInfo.name}}</h1>
                <img :src="hotelInfo.fullPath" alt="image">
                <h4 class="hotel-title">Доступные номера отеля</h4>
                <div class="numbers">
                  <div class="number__content"
                    v-for="(num, index) in hotelInfo.numbers" :key="num.name"
                  >
                    <div class="numbers__content-item item-content">
                      <div class="item-content-slider">
                        <SwiperSlider
                          @click="sliderClick(num)"
                        >
                          <template #default>
                            <swiper-slide
                              v-for="(slide) in num.img" :key="slide.photo">
                              <div>
                                <img :src="slide.photoImgUrl" alt="" />
                              </div>
                            </swiper-slide>
                          </template>
                        </SwiperSlider>
                      </div>
                      <div class="item-content-info info">
                        <h5 class="info-hotel-name">{{num.name}}</h5>
                        <p>2 отдельные кровати</p>
                        <div class="item-content-qualities">
                          <p>Площадь:</p>
                          <p class="item-content-closet">Шкаф</p>
                          <p class="item-content-conditioner">Кондиционер:</p>
                          <p class="item-content-safe">Сейф:</p>
                        </div>
                      </div>
                      <div class="item-content-price">
                          <span>Цена: {{num.price}}<p>за ночь для 2 гостей</p></span>
                      </div>
                    </div>
                    <p class="numbers__content-description">{{num.description}}</p>
                    <p class="numbers__content-info">{{num.info}}</p>

                    <div class="form-group">
                      <router-link :to="{name: 'booking', params: {id: id, num: index }}"
                      >
                      <BaseButton
                        class="booking-btn"
                        text="Забронировать"
                        modifyStyle="booking-button"
                        :disabled = hotelInfo.numbers[index].booking
                      />
                      </router-link>
                    </div>
                    <div class="text-booking"
                      v-if="hotelInfo.numbers[index].booking"
                    >Номер уже забронирован</div>

                    <!-- {{hotelInfo.numbers[index].booking}} -->
                    <!-- забронирован номер или нет! -->
                  </div>
                </div>
              </div>
              <h1 v-else>Данные загружаются</h1>
							<!-- {{hotelInfo}} -->

            </div>
        </div>
        <!-- В попап передаем реактивную переменную inPopupSlides со слайдами, полученной из функции sliderClick-->
        <Popup
          v-show="isPopupVisible"
        >
          <SwiperSlider
            :isPrevArrowVisible="true"
            :isNextArrowVisible="true"
          >
            <template #default>
              <swiper-slide
                v-for="(slide) in inPopupSlides" :key="slide.photo">
                  <div>
                    <img :src="slide.photoImgUrl" alt="" />
                  </div>
              </swiper-slide>
              <button
                @click="isPopupVisible = false"
                class="popup-close-btn">Закрыть
              </button>
            </template>
          </SwiperSlider>
        </Popup>
      </div>
    </section>
</template>
<script setup>
import { BaseButton } from '@/components/ui';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Sidebar, Popup } from '@/components/widgets';
import { SwiperSlider } from '@/components/widgets';
import { defineProps, computed, onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useHotelsStore } from '../../stores/hotelsStore.js';

// здесь получаем через getter из store данные об отеле!
const hotelsStore = useHotelsStore();
const hotelInfo = computed(()=> hotelsStore.getHotelInfo);
const route = useRoute();
const id = computed(()=>  route.params.id);

const isPopupVisible = ref(false);
const inPopupSlides = ref([]);

function sliderClick (sl) {
  isPopupVisible.value = true;
  inPopupSlides.value = sl.img;
}
onBeforeMount(async()=> {
    await hotelsStore.fetchHotelById(id.value);
})
// const hotelsList = computed(()=> hotelsStore.getHotelsData);
// const hotelInfo = computed(()=> hotelsList.value.find(hotel => hotel.id === id.value));
</script>
<style scoped>
.popup-close-btn {
    position: fixed;
    top: 25px;
    right: 0;
    cursor: pointer;
}
.booking-btn {
  display: block;
  margin: 0 auto;
}
.hotel-title {
  font-size: 21px;
  text-align: center;
  margin-top: 30px;
}
.numbers {
  margin-top: 50px;
}
.item-content {
  display: flex;
  align-items: flex-start;
  gap: 30px;
  margin-bottom: 20px;
}
.number__content {
  border: 1px solid #e9eaea;
  border-radius: 3px;
  margin-bottom: 20px;
  padding: 10px;
}
.numbers__content p {
  margin-bottom: 0;
}
.item-content-slider {
  max-width: 200px;
  margin-top: -50px;
}
.item-content-qualities {
  display: flex;
  gap: 50px;
  font-size: 12px;
}
.item-content-price {
  margin-left: auto;
  font-size: 18px;
  color: #373e44;
}
.item-content-price p {
  font-size: 14px;
}
.item-content-qualities p {
  background-color: #e9eaea;
  border-radius: 3px;
  padding: 0 5px 0;
  position: relative;

}
.numbers__content-info {
  margin-bottom: 20px !important;
}
.item-content-closet::before {
  content: '';
  position: absolute;
  left: -23px;
  background-image: url('@/assets/icons/closet.svg');
  width: 20px;
  height: 20px;
}
.item-content-conditioner::before {
  content: '';
  position: absolute;
  left: -23px;
  background-image: url('@/assets/icons/conditioner.svg');
  width: 20px;
  height: 20px;
}
.item-content-safe::before {
  content: '';
  position: absolute;
  left: -23px;
  background-image: url('@/assets/icons/safe.svg');
  width: 20px;
  height: 20px;
}
.info-hotel-name {
  font-size: 18px;
}
.text-booking {
  text-align: center;
  font-size: 20px;
  color: red;
}
</style>
