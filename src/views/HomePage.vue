<template>
  <formDish
    v-model:title="dishCreate.title"
    v-model:category="dishCreate.category"
    v-model:compound="dishCreate.compound"
    :eventClick="createDish"
  />

  <label class="form-label">Категория блюда</label>

  <div class="d-block mb-3" role="group">
    <sortBtn
      v-for="category in categories"
      :key="category"
      :category="category"
      :eventClick="sortDish(category)"
    />
  </div>

  <dishMenu
    v-for="dish in dishes"
    :key="dish.id"
    :dishContent="dish"
    @click="updateCurrentIdEditedDish(dish.id)"
  >
  </dishMenu>

  <div class="modal fade" id="modal-upd">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Обновить информацию блюда</h5>
        </div>

        <div class="modal-body">
          <div class="form">
            <div class="mb-3">
              <label class="form-label">Название блюда</label>
              <input
                type="text"
                class="form-control"
                placeholder="Название"
                v-model="dishUpdate.title"
              />
            </div>

            <div class="mb-3">
              <label class="form-label">Категория блюда</label>
              <input
                type="text"
                class="form-control"
                placeholder="Категория"
                v-model="dishUpdate.category"
              />
            </div>

            <div class="mb-3">
              <label class="form-label">Состав блюда</label>
              <input
                type="text"
                class="form-control"
                placeholder="Состав"
                v-model="dishUpdate.compound"
              />
            </div>

            <button class="btn btn-outline-primary mt-3" @click="updateInfoDish()">
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import formDish from '../components/formDish.vue';
import dishMenu from '../components/dishMenu.vue';
import sortBtn from '../components/sortBtn.vue';

export default {
  name: 'HomePage',

  data() {
    return {
      dishUpdate: {
        title: '',
        category: '',
        compound: '',
        id: 0,
      },

      categories: ['Салаты', 'Супы', 'Бургеры', 'Паста'],
      dishes: [
        {
          title: 'Цезарь',
          category: 'Супы',
          imgSrc: 'https://s1.eda.ru/StaticContent/Photos/120131082454/161109234550/p_O.jpg',
          compound:
            'Зеленый салат, помидоры, куриное филе, белый хлеб, соус "Цезарь", сливочное масло, чеснок, сыр пармезан',
          id: 0,
        },
        {
          title: 'Гурме',
          category: 'Салаты',
          imgSrc: 'https://s1.eda.ru/StaticContent/Photos/120131082454/161109234550/p_O.jpg',
          compound:
            'Зеленый салат, помидоры, куриное филе, белый хлеб, соус "Цезарь", сливочное масло, чеснок, сыр пармезан',
          id: 1,
        },
        {
          title: 'Греческий',
          category: 'Супы',
          imgSrc: 'https://s1.eda.ru/StaticContent/Photos/120131082454/161109234550/p_O.jpg',
          compound:
            'Зеленый салат, помидоры, куриное филе, белый хлеб, соус "Цезарь", сливочное масло, чеснок, сыр пармезан',
          id: 2,
        },
      ],

      dishCreate: {
        title: '',
        compound: '',
        category: '',
      },
    };
  },

  components: {
    formDish,
    dishMenu,
    sortBtn,
  },

  methods: {
    async createDish() {
      await axios.post('http://localhost:5000/createDish', {
        title: this.dishCreate.title,
        category: this.dishCreate.category,
        compound: this.dishCreate.compound,
        id: this.dishes.length,
      });
    },

    sortDish(categoryDish) {
      this.dishes.sort((dish) => (dish.category == categoryDish ? -1 : 1));
    },

    updateCurrentIdEditedDish(dishId) {
      this.dishUpdate.id = dishId;
    },

    updateInfoDish() {
      this.dishes[this.dishUpdate.id] = this.dishUpdate;
      axios.put('http://localhost:5000/updateDish', this.dishes[this.dishUpdate.id]);
    },
  },

  mounted() {
    axios.get('http://localhost:5000/getDishes').then((resp) => (this.dishes = resp.data.rows));
  },
};
</script>

<style>
.all-categories {
  margin-right: 0.5rem;
}
</style>
