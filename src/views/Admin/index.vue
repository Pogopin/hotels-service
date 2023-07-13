<template>
  <section class="login">
    <div class="container">
      <h3>Введите логин и пароль администратора</h3>
      <form class="form__login">
        <div class="form-group">
            <BaseInput
              type="text"
              class="form-control"
              placeholder="Логин"
              id="login"
            />
        </div>
        <div class="form-group">
            <BaseInput
              type="text"
              class="form-control"
              placeholder="пароль"
              id="password"
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

</script>

