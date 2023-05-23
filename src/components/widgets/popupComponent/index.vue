<template>
    <div class="popup">
        <div class="overlay"></div>
        <div class="popup-content">
            <slot/>
            <button class="popup-close-btn">Закрыть</button>
        </div>
    </div>
</template>
<style scoped>
.popup-content{
    width: 600px;
    height: 500px;
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 9;
    transform: translate3d(-50%, -50%, 0);
    transition: opacity .4s ease;
}
.popup-close-btn {
    position: absolute;
    top: 25px;
    right: 0;
    cursor: pointer;
}
.overlay {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.7;
}

</style>