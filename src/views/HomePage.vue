<template>
  <formDish
    v-model:title="dishCreate.title"
    v-model:category="dishCreate.category"
    v-model:compound="dishCreate.compound"
    @change="selectFile"
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

      dishCreate: {
        title: '',
        compound: '',
        category: '',
      },

      categories: ['Салаты', 'Супы', 'Бургеры', 'Паста'],
      dishes: [],
    };
  },

  components: {
    formDish,
    dishMenu,
    sortBtn,
  },

  methods: {
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    },

    selectFile(e) {
      if (e.target.files != null) {
        const [image] = e.target.files;
        const reader = new FileReader();
        reader.readAsDataURL(image);

        this.getBase64(image).then((data) => (this.dishCreate.image = data));
      }
    },

    async createDish() {
      await axios.post('http://localhost:5000/createDish', {
        title: this.dishCreate.title,
        category: this.dishCreate.category,
        compound: this.dishCreate.compound,
        image: this.dishCreate.image,
      });
    },

    sortDish(categoryDish) {
      try {
        this.dishes.sort((dish) => (dish.category == categoryDish ? -1 : 1));
      } catch {
        console.log('ok');
      }
    },

    updateCurrentIdEditedDish(dishId) {
      this.dishUpdate.id = dishId;
    },

    async updateInfoDish() {
      this.dishes[this.dishUpdate.id] = {
        title:
          this.dishUpdate.title != ''
            ? this.dishUpdate.title
            : this.dishes[this.dishUpdate.id].title,
        compound:
          this.dishUpdate.compound != ''
            ? this.dishUpdate.compound
            : this.dishes[this.dishUpdate.id].compound,
        category:
          this.dishUpdate.category != ''
            ? this.dishUpdate.category
            : this.dishes[this.dishUpdate.id].category,
        id: this.dishUpdate.id,
      };

      await axios
        .put('http://localhost:5000/updateDish', this.dishes[this.dishUpdate.id])
        .then(() => {
          location.reload();
        });
    },
  },

  mounted() {
    axios
      .get('http://localhost:5000/getDishes')
      .then((resp) => console.log((this.dishes = resp.data)));
  },
};
</script>

<style>
.all-categories {
  margin-right: 0.5rem;
}
</style>
