<template>
  <header class="header">
    <nav
      class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div class="container">
        <router-link to="/" class="navbar-brand">dirEngine.</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="oi oi-menu"></span> Menu
        </button>

        <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
            <li class="nav-item">
              <router-link to="/hotels" class="nav-link">Hotels</router-link>
            </li>
            <li class="nav-item"><router-link to="/" class="nav-link">Contact</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<style scoped></style>
