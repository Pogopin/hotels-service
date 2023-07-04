<template>
    <div class="booking__service">
        <div class="container">
          <div class="booking__service-content content-service">
            <div class="content-service__item item">
              <div class="item__info-wrap">
                <div class="item__info-img">
                  <img src="https://firebasestorage.googleapis.com/v0/b/vue-hotel-service.appspot.com/o/hotels%2Fcoral-hills-resort%2Fcoral-preview.jpeg?alt=media&token=6b61fb28-e93b-4098-a953-564706628a2b" alt="">
                </div>
                <div class="item__info-number number">
                  <h5 class="hotel-name">{{hotelInfo.name}}</h5>
                  <p class="hotel-address">{{hotelInfo.addres}}</p>

                  <div>
                    <p class="number-name">{{numberInfo.name}}</p>
                  </div>
                </div>
                <div class="item__info-booking booking">
                  <div class="booking-from">Заезд с 10-00</div>
                  <div class="booking-from-date">{{bookingParams.dateFrom}}</div>

                  <div class="booking-to">Выезд с 10-00</div>
                  <div class="booking-to-date">{{bookingParams.dateTo}}</div>
                </div>

              </div>
              <div class="item__info-description-wrap number">
                  <p class="number-description">{{numberInfo.description}}</p>
                  <p class="number-info">{{numberInfo.info}}</p>
              </div>

            </div>
            <div class="content-service__item item">
              <div class="item__number-tarif tarif">
                <p class="tarif__price">Cтоимость номера:</p>
                <p class="tarif__price-cash">1x {{numberInfo.price}}</p>
                <div class="tarif__info">для 2 взрослых на 1 ночь</div>
                <div>Оплата сейчас в валюте:</div>
                <div> Российский рубль</div>
                <div v-if="isNaN(differenceInDays)">{{numberInfo.price}}</div>
                <div v-else>{{numberInfo.price.replace(/[^+\d]/g, '') * differenceInDays}} ₽</div>
              </div>
            </div>

          </div>
          <form class="form__booking">
            <div class="fields">
              <div class="form-input">
                <BaseInput
                  type="email"
                  class="form-control"
                  placeholder="email"
                  id="email"
                  :value="bookingParams.email"
                  @update:value="(value) => setData(value, 'email')"
                />
                <div class="form-error" v-for="el in v$.email.$silentErrors" :key="el.$uid">{{el.$message}}</div>
              </div>
              <div class="form-input">
                <BaseInput
                  type="text"
                  class="form-control"
                  placeholder="Имя"
                  id="name"
                  @update:value="(value) => setData(value, 'name')"
                />
                <TransitionGroup>
                  <div class="form-error" v-for="el in v$.name.$silentErrors" :key="el.$uid">{{el.$message}}</div>
                </TransitionGroup>
              </div>

              <div class="form-input">
                <BaseInput
                  type="text"
                  class="form-control"
                  placeholder="Фамилия"
                  id="surname"
                  :value="bookingParams.surname"
                  @update:value="(value) => setData(value, 'surname')"
                />
                <div class="form-error" v-for="el in v$.surname.$silentErrors" :key="el.$uid">{{el.$message}}</div>
              </div>
              <div class="form-input">
                <BaseInput
                  type="tel"
                  class="form-control"
                  placeholder="Телефон формат: 8 (9xx) xxx-xxxx"
                  id="phone"
                  :value="bookingParams.phone"
                  @update:value="(value) => setData(value, 'phone')"
                  v-phone="bookingParams.phone"
                />
              </div>
              <div class="form-input">
                <BaseInput
                  type="text"
                  id="date_from"
                  class="form-control"
                  placeholder="Дата заезда"
                  @focus="($event) => changeDate($event, 'dateFrom')"
                />
              </div>
              <div class="form-input">
                <BaseInput
                  type="text"
                  id="date_to"
                  class="form-control"
                  placeholder="Дата выезда"
                  @focus="($event) => changeDate($event, 'dateTo')"
                />
              </div>
              <div class="form-input">
                <BaseButton
                  text="Забронировать"
                  modifyStyle="btn-primary py-3 px-5"
                  :disabled="v$.$invalid"
                  @click.prevent="bookingNumber"
                />
              </div>

            </div>
          </form>
        <!-- {{hotelInfo}} -->
        <!-- {{numberInfo}} -->
        <!-- {{v$.email.$silentErrors}} -->
        <!-- {{bookingParams}} -->
        <!-- {{v$.$invalid}}         -->

        </div>
    </div>
</template>
<style scoped>
.booking__service {
  margin-top: 60px;

}
.booking__service-content {
  display: flex;
  gap: 20px;
  justify-content: center;
}
.content-service__item {
  padding: 20px;
  background-color: white;
}
.item__info-wrap {
  display: flex;
  gap: 30px;
  border-bottom: 1px solid rgb(223, 214, 214);
}
.item__info-img {
  max-width: 150px;

}
.hotel-name {
  margin-bottom: 0;
}
.hotel-address {
  margin-bottom: 0;
  font-size: 12px;
}
.item__info-description-wrap {
  display: flex;
  margin-top: 20px;
}
.number-description {
  margin-right: 50px;
}
.number-name {
  font-size: 14px;
  font-weight: 700;
}
.item__info-number {
  padding-right: 20px;
  border-right: 1px solid rgb(223, 214, 214);
}
.tarif__price {
  margin-right: 30px;

}
.item__number-tarif p {
  display: inline-block;
  margin-bottom: 0;
}
.booking-from, .booking-to {
  font-size: 13px;
  font-weight: 600;
}
.booking-from-date {
  margin-bottom: 20px;
}
.tarif__info {
  color: #868686;
  font-size: 12px;
  margin-bottom: 30px;
}
.form__booking {
  margin: 0 auto;
  max-width: 600px;
  margin-top: 40px;
  padding: 20px;
  background-color: white;
}
.form-input {
  max-width: 400px;
  margin: 0 auto;
  margin-bottom: 30px;
  text-align: center;
  position: relative;
}
.form-error {
  position: absolute;
  color: red;
}
</style>
<script setup>
import { useVuelidate } from '@vuelidate/core';
import { helpers, minLength, email, maxLength, numeric, required } from '@vuelidate/validators';

import { BaseInput, BaseButton} from "@/components/ui";
import { dataIn } from "@/assets/js/picker.js";
import { defineProps, computed, onBeforeMount, ref, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { useHotelsStore } from '../../stores/hotelsStore.js';
import { data } from "@/utils/database.js";

const hotelsStore = useHotelsStore();
const hotelInfo = computed(()=> hotelsStore.getHotelInfo);
const route = useRoute();
const id = computed(()=>  route.params.id);
const number = computed(()=> route.params.num);

const numberInfo = computed(() => { // это объект выбранного номера для отображения на странице, полученный из hotelInfo.numbers[]
      if (Object.keys(hotelInfo.value).length !== 0) {
        const numberIndex = Number(number.value);
        return hotelInfo.value.numbers[numberIndex];
      }
      return null;
  });

onBeforeMount(async ()=> {
  await hotelsStore.fetchHotelById(id.value);
})
async function bookingNumber() {
  const numberIndex = Number(number.value);
  //новый массив numbers с обновленными данными
  const updateNumbers = hotelInfo.value.numbers;
  updateNumbers[numberIndex].booking = true;
  updateNumbers[numberIndex].dateFrom = bookingParams.dateFrom;
  updateNumbers[numberIndex].dateTo = bookingParams.dateTo;
  // console.log(id.value)
  v$.value.$touch();
  bookingParams.email = '';
  bookingParams.surname = '';
  bookingParams.phone = '';
    console.log('form Success!!!')

  // await data.setNumberBookingDate(id.value, updateNumbers);
}

function changeDate(nameSelector, searchProperty) {
  const idInput = nameSelector.target.id;
  dataIn(idInput, (date) => {
    bookingParams[searchProperty] = date;
  });
}
const bookingParams = reactive({
  email: '',
  name: '',
  surname: '',
  phone: null,
  dateFrom: '',
  dateTo: '',
})
const rules = computed(() => {
      const localRules = {
        email: {minLength: helpers.withMessage(`Неверный ввод email`, email), required: helpers.withMessage(`Поле обязательное`, required) },
        name: {minLength: helpers.withMessage(`Минимальная длинна: 3 символа`, minLength(3))},
        surname: {required: helpers.withMessage(`Поле обязательное`, required)},
        // phone: {
        //   maxLength: helpers.withMessage(`Максимальная длинна: 11 символов`, maxLength(16)),
        //   numeric: helpers.withMessage(`Только цифры`, numeric)
        // }
      }
      return localRules;
    })
const v$ = useVuelidate(rules, bookingParams);

function setData(val, data) {
  bookingParams[data] = val;
}
//расчет разницы дней из выбранных дат
const date1 = computed(() => new Date(bookingParams.dateFrom));
const date2 = computed(() => new Date(bookingParams.dateTo));

const timeDiff = computed(() => Math.abs(date2.value.getTime() - date1.value.getTime()));
const differenceInDays = computed(() => Math.ceil(timeDiff.value / (1000 * 3600 * 24)));

</script>

