<template>
  <section class="service">
    <div class="container">
      <div class="service__content content">
        <div class="content__item" v-for="item in service" :key="item.id">
          <div class="content__item-header header-item">
            <div class="header-item__img">
              <div class="f-size" v-html="item.image"></div>
            </div>
            <div class="header__item-text">{{ item.title }}</div>
          </div>
          <div class="content__item-text">
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { service } from "@/config/serviceConfig.js";
</script>

<style scoped>
.service {
  margin-top: 30px;
}
.service__content {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
}
.content__item {
  max-width: 280px;
}
.content__item-header {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  align-items: center;
}
.content__item-text {
  padding-left: 33px;
}
.content__item-text p {
  font-size: 14px;
  line-height: 19px;
}
.header__item-text {
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
}
.f-size {
  font-size: 20px;
}
</style>
