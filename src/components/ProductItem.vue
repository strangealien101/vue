<template>
        <li class="catalog__item">
        <a class="catalog__pic" href="#">
            <img :src="product.image" :alt="product.title">
        </a>

        <h3 class="catalog__title">
            <a href="#">
                {{ product.title }}
            </a>
        </h3>

        <span class="catalog__price">
            {{ product.price }} p
        </span>

        <ul class="colors colors--black">
            <li class="colors__item">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-1" value="#73B6EA" checked="">
                  <span class="colors__value" style="background-color: #73B6EA;">
                  </span>
                </label>
            </li>
        </ul>
    </li>
</template>

<script>
export default {
  props: ['product']
}
</script>
