<template>
    <div class="col-lg-3 sidebar">
          <div class="sidebar-wrap bg-light">
            <h3 class="heading mb-4">Find City</h3>
            <form class="form">
              <div class="fields">
                <div class="form-group">
                  <div class="select-wrap one-third">
                    <div class="icon">
                      <span class="ion-ios-arrow-down"></span>
                    </div>
                    <BaseSelect
                        id="country-select"
                        class="form-control"
                        :options="['Россия','Египет','Тайланд','Австрия']"
                        selected="Страна"
                        @update:select="selectCountry"                                                
                    />
                  </div>
                </div>                
                <div class="form-group">
                  <div class="select-wrap one-third">
                    <div class="icon">
                      <span class="ion-ios-arrow-down"></span>
                    </div>
                    <BaseSelect
                        id="city-select"
                        class="form-control"
                        :options="selectCityOptions"
                        selected="Выберите город"
                        @update:select="changeCity"                        
                    />
                  </div>
                </div>
                <div class="form-group">
                  <BaseInput
                    type="text"
                    class="form-control"
                    placeholder="Дата с"
                    id="checkin_date_from"
                    @focus="($event) => changeDate($event, 'dateFrom')"
                  />
                </div>
                <div class="form-group">
                  <BaseInput
                    type="text"
                    id="checkin_date_to"
                    class="form-control"
                    placeholder="Дата до"
                    @focus="($event) => changeDate($event, 'dateTo')"
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
                    @click.prevent="search"
                  />
                </div>                
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
          <!-- {{searchParams}} -->
          
        </div>
</template>
<script setup>
import { dataIn } from '@/assets/js/picker.js';
import { BaseInput, BaseButton, BaseSelect, BaseCheckBox, RangeSlider } from '@/components/ui';
import { ref, onMounted, computed } from 'vue';
import { checkBoxConf } from '@/config/checkBoxConfig.js';
import { towns } from '@/config/city.js';

function search () {
  console.log('Поиск')
}
const selectCityOptions = ref([]);
// const choseCity = ref('Выберите город')

function priceRangeSelect(min, max) {
  searchParams.value.minPriceValue = min;
  searchParams.value.maxPriceValue = max;
}

function changeDate(nameSelector, searchProperty) {
  const idInput = nameSelector.target.id;
  dataIn(idInput, (date)=> {
    searchParams.value[searchProperty] = date;    
  });
}
function changeCity(val) {
  searchParams.value.city = val;
};

function selectCountry(value) {  
  searchParams.value.country = value;
      
  towns.forEach( item => {
    if(item.country === value) {
      selectCityOptions.value = item.city;
            
    }
  })
  towns.forEach( el => {
    if(el.country === value) {
      if(!el.city.includes(searchParams.value.city)) {
        // console.log('нет такого города в этой стране')
        const cityInput = document.querySelector('#city-select > p' );        
        cityInput.innerText = 'Выберите город';
        searchParams.value.city = null;
      }
    }
  })  
};
function exist(value, property) {
  searchParams.value.starRating[property].checked = value;
};
function currentComponent (name) {
    return markRaw(components[name])
};
const searchParams = ref({
  city: '',
  country: '',
  dateFrom: '',
  dateTo: '',
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
