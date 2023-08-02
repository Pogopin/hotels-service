<template>
  <section class="login">
    <div v-if="hotelsStore.$state.error">
      <h1>ошибка</h1>
    </div>
    <div class="container">
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

