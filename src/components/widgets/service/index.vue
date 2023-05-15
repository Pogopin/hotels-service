<template>
    <section class="service">
        <div class="container">
            <div class="service__content content">
                <div class="content__item">
                    <div class="content__item-header header-item">
                        <div class="header-item__img">
                            <i class="fa-solid fa-piggy-bank f-size"></i>
                        </div>
                        <div class="header__item-text">Низкие цены</div>
                    </div>
                    <div class="content__item-text">
                        <p>Мы работаем напрямую с тысячами отелей, десятками поставщиков и можем контролировать цены на номера. Поэтому у нас всегда есть выгодные предложения на большинство направлений.</p>
                    </div>
                </div>
                <div class="content__item">
                    <div class="content__item-header header-item">
                        <div class="header-item__img">
                            <i class="fa-solid fa-key f-size"></i>
                        </div>
                        <div class="header__item-text">Отели по всему миру</div>
                    </div>
                    <div class="content__item-text">
                        <p>У нас более 1900000 вариантов размещения по всему миру. Это отели, хостелы, апартаменты, виллы и даже кемпинги. В любой сезон вы найдёте то, что подходит именно вам.</p>
                    </div>
                </div>
                <div class="content__item">
                    <div class="content__item-header header-item">
                        <div class="header-item__img">
                            <i class="fa-solid fa-sliders f-size"></i>
                        </div>
                        <div class="header__item-text">Гибкая оплата</div>
                    </div>
                    <div class="content__item-text">
                        <p>Вы сами выбираете способ оплаты. Можно оплатить бронь сразу — мы поддерживаем большинство банковских карт и PayPal. А можно заплатить в отеле при заезде.</p>
                    </div>
                </div>
                <div class="content__item">
                    <div class="content__item-header header-item">
                        <div class="header-item__img">
                            <i class="fa-solid fa-phone f-size"></i>
                        </div>
                        <div class="header__item-text">Заботливая поддержка 24/7</div>
                    </div>
                    <div class="content__item-text">
                        <p>Операторы поддержки помогут с выбором отеля и бронированием. Если вопрос возник в поездке, оператор будет на связи и найдёт решение в кратчайший срок.</p>
                    </div>
                </div>
                <div class="content__item">
                    <div class="content__item-header header-item">
                        <div class="header-item__img">
                            <i class="fa-regular fa-comment f-size"></i>
                        </div>
                        <div class="header__item-text">Достоверные отзывы</div>
                    </div>
                    <div class="content__item-text">
                        <p>Мы собираем и публикуем отзывы путешественников, а также добавляем отзывы TripAdvisor. Так вы получаете ещё больше информации об отеле.</p>
                    </div>
                </div>
                <div class="content__item">
                    <div class="content__item-header header-item">
                        <div class="header-item__img">
                            <i class="fa-solid fa-mobile-screen-button f-size"></i>
                        </div>
                        <div class="header__item-text">Бесплатное приложение</div>
                    </div>
                    <div class="content__item-text">
                        <p>Главное в мобильном приложении — секретные цены. А ещё оно всегда под рукой. Бронируйте отели в метро, на работе и даже в аэропорте.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
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
    /* align-items: center; */
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