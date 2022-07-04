<template>
  <formDish />

  <label class="form-label">Категория блюда</label>

  <div class="d-block mb-3" role="group">
    <button type="button" class="btn btn-primary all-categories" @click="reload">Все</button>

    <sortBtn
      v-for="category in categories"
      :key="category"
      :category="category"
      @click="sortDish(category)"
    />
  </div>

  <dishMenu v-for="dish in dishes" :key="dish.title" :dishContent="dish"></dishMenu>
</template>

<script>
import formDish from '../components/formDish.vue';
import dishMenu from '../components/dishMenu.vue';
import sortBtn from '../components/sortBtn.vue';

import axios from 'axios';

export default {
  name: 'HomePage',

  data() {
    return {
      categories: ['Салаты', 'Супы', 'Бургеры', 'Паста'],
      dishes: [
        {
          title: 'Цезарь',
          category: 'Салаты',
          imgSrc: 'https://s1.eda.ru/StaticContent/Photos/120131082454/161109234550/p_O.jpg',
          compound:
            'Зеленый салат, помидоры, куриное филе, белый хлеб, соус "Цезарь", сливочное масло, чеснок, сыр пармезан',
        },
        {
          title: 'Гурме',
          category: 'Супы',
          imgSrc: 'https://s1.eda.ru/StaticContent/Photos/120131082454/161109234550/p_O.jpg',
          compound:
            'Зеленый салат, помидоры, куриное филе, белый хлеб, соус "Цезарь", сливочное масло, чеснок, сыр пармезан',
        },
        {
          title: 'Греческий',
          category: 'Салаты',
          imgSrc: 'https://s1.eda.ru/StaticContent/Photos/120131082454/161109234550/p_O.jpg',
          compound:
            'Зеленый салат, помидоры, куриное филе, белый хлеб, соус "Цезарь", сливочное масло, чеснок, сыр пармезан',
        },
      ],
      dishesCopy: [
        {
          title: 'Цезарь',
          category: 'Салаты',
          imgSrc: 'https://s1.eda.ru/StaticContent/Photos/120131082454/161109234550/p_O.jpg',
          compound:
            'Зеленый салат, помидоры, куриное филе, белый хлеб, соус "Цезарь", сливочное масло, чеснок, сыр пармезан',
        },
        {
          title: 'Гурме',
          category: 'Супы',
          imgSrc: 'https://s1.eda.ru/StaticContent/Photos/120131082454/161109234550/p_O.jpg',
          compound:
            'Зеленый салат, помидоры, куриное филе, белый хлеб, соус "Цезарь", сливочное масло, чеснок, сыр пармезан',
        },
        {
          title: 'Греческий',
          category: 'Салаты',
          imgSrc: 'https://s1.eda.ru/StaticContent/Photos/120131082454/161109234550/p_O.jpg',
          compound:
            'Зеленый салат, помидоры, куриное филе, белый хлеб, соус "Цезарь", сливочное масло, чеснок, сыр пармезан',
        },
      ],
    };
  },

  components: {
    formDish,
    dishMenu,
    sortBtn,
  },

  // created() {
  // axios.get('http://localhost:3333/database.json').then(function (res) {
  // this.dishes = res.data.menu;
  // });
  // },

  methods: {
    sortDish(categoryDish) {
      this.reload();

      this.dishes = this.dishes.filter((dish) => categoryDish === dish.category);
    },

    reload() {
      this.dishes = [];
      for (const dish of this.dishesCopy) {
        this.dishes.push(dish);
      }
    },
  },
};
</script>
