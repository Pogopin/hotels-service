<template>
    <div class="col-lg-3 sidebar">
          <div class="sidebar-wrap bg-light">
            <h3 class="heading mb-4">Find City</h3>
            <form class="form">
              <div class="fields">
                <div class="form-group">
                  <BaseInput 
                    type="text"
                    class="form-control"
                    placeholder="Destination, City"
                    id="checkin_dectination"
                    @update:value="changeCity"
                  />
                </div>
                <div class="form-group">
                  <div class="select-wrap one-third">
                    <div class="icon">
                      <span class="ion-ios-arrow-down"></span>
                    </div>
                    <BaseSelect
                        id="city-select"
                        class="form-control"
                        :options="[{name: 'San Francisco USA', value: 1},{name: 'Berlin Germany', value: 2},{name: 'Lodon UK', value: 3},{name: 'Paris France', value: 4}]"
                        selected="Select Location"
                        @update:select="sel"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <BaseInput
                    type="text"
                    class="form-control"
                    placeholder="Date from"
                    id="checkin_date_from"
                    @focus="($event) => changeDate($event)"
                  />
                </div>
                <div class="form-group">
                  <BaseInput
                    type="text"
                    id="checkin_date_to"
                    class="form-control"
                    placeholder="Date to"
                    @focus="($event) => changeDate($event)"
                  />
                </div>
                <div class="form-group">
                  <RangeSlider
                    type="range"
                    :minValue="1000"
                    :maxValue="120000"
                    :step="500"
                    @update:priceRange="priceRangeSelect" 
                  />
                </div>
                <div class="form-group">
                  <BaseButton
                    text="Search"
                    modifyStyle="btn-primary py-3 px-5"
                  />
                </div>
                <button @click="saveData">ок</button>
              </div>
            </form>
          </div>
                   
          <div class="sidebar-wrap bg-light">
            <h3 class="heading mb-4">Star Rating</h3>
            <form class="star-rating">
              <div
                v-for="el in checkBoxConf" :key="el.id"
              >
                <BaseCheckBox 
                  :type="el.type"
                  :name="el.name"
                  id="exampleCheck1"
                  value="four-stars"
                  @checked:value="(val) => exist(val, el.propertyForSearch)"
                >
                  <p class="rate"><span v-html="el.inSlot"></span></p>
                </BaseCheckBox>
              </div>
            </form>
          </div>
        </div>
</template>
<script setup>
import { dataIn } from '@/assets/js/picker.js';
import { BaseInput, BaseButton, BaseSelect, BaseCheckBox, RangeSlider } from '@/components/ui';
import { ref } from 'vue';
import { checkBoxConf } from '@/config/checkBoxConfig.js';

import { data } from '../../../assets/js/database.js';

function saveData(db){
  data.getSavedHotels()
  console.log(cityList)
}




function priceRangeSelect(min, max) {
  // console.log('minPrice: ', min )
  // console.log('maxPrice: ', max )
  searchParams.value.minPriceValue = min;
  searchParams.value.maxPriceValue = max;
}

function changeDate(nameSelector) {
  const idInput = nameSelector.target.id;
  console.log(idInput);
  dataIn(idInput);
}
function changeCity(val) {
  searchParams.value.city = val;
};
function sel(value) {
  console.log(value);
  searchParams.value.country = value;
};
function exist(value, property) {
  searchParams.value.starRating[property].checked = value;

  console.log(value, property);
};
function currentComponent (name) {
    return markRaw(components[name])
};
const searchParams = ref({
  city: '',
  country: '',
  minPriceValue: 0,
  maxPriceValue: 1000,
  starRating: {
    fiveStars: 
      { checked: false,
        num: 5
      },
    fourStars: 
      { checked: false,
        num: 4
      },
    threeStars: 
      { checked: false,
        num: 3
      },
    twoStars: 
      { checked: false,
        num: 2
      },
    oneStar: 
      { checked: false,
        num: 1
      },

  }
})
</script>
