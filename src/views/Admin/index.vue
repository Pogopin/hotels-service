<template>
  <section class="login">
    <div class="container">
      <div class="login__admin-btn">
        <button
          @click="router.push('/hotels')"
          class="login__admin-home-btn"> -- Вернуться на страницу отелей
        </button>
      </div>
      <p>Данные для входа в админку: email: test@mail.ru  password: 1234567</p>
      <h3>Введите логин и пароль администратора</h3>
      <form class="form__login">
        <div class="form-group">
            <BaseInput
              type="text"
              class="form-control"
              placeholder="Логин"
              id="login"
              @update:value="(value)=> logininp = value"
            />
        </div>
        <div class="form-group">
            <BaseInput
              type="text"
              class="form-control"
              placeholder="пароль"
              id="password"
              @update:value="(value)=> pass = value"
            />
        </div>
        <div class="form-input">
          <BaseButton
            text="Войти"
            modifyStyle="btn-primary py-3 px-5"
            @click.prevent="signUp"
          />
        </div>

      </form>
    </div>
  </section>

</template>
<style scoped>
.login__admin-btn{
  position: absolute;
  top: 30px;
}
.login__admin-home-btn {
  display: inline-block;
  cursor: pointer;
  background-color: rgb(250, 198, 198);
}
.login__admin-home-btn:hover {
  background-color: transparent;
}
.login{
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

}
.form__login {
  margin: 0 auto;
  max-width: 350px;
}
</style>
<script setup>
import { BaseInput, BaseButton } from "@/components/ui";
import { useRouter } from "vue-router";
import { ref } from 'vue';
import { useHotelsStore } from "@/stores/hotelsStore.js";
import { data } from '@/utils/database.js';

const router = useRouter();
const hotelsStore = useHotelsStore();
const logininp = ref('');
const pass = ref('');

async function signUp(){
  console.log('sign');
  const sign = await data.signIn({email: logininp.value, password: pass.value});
  if(sign) { router.push('/bookingFalse'); }
}

</script>

