<template>
  <div class="container form-add-to-menu">
    <div class="mb-3">
      <label class="form-label">Название блюда</label>
      <input
        type="text"
        :value="title"
        @input="$emit('update:title', $event.target.value)"
        class="form-control"
        placeholder="Напишите сюда имя блюда"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">Категория блюда</label>
      <input
        type="text"
        :value="category"
        @input="$emit('update:category', $event.target.value)"
        class="form-control"
        placeholder="Напишите сюда категорию блюда"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">Состав блюда</label>
      <input
        type="text"
        :value="compound"
        @input="$emit('update:compound', $event.target.value)"
        class="form-control"
        placeholder="Напишите сюда состав блюда"
      />
    </div>

    <div class="mb-3">
      <div class="mt-3 mb-3">
        <button class="btn btn-outline-primary" @click="eventClick">Добавить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'formDish',
  props: {
    title: String,
    category: String,
    compound: String,
    eventClick: Function,
  },
  emits: ['update:title', 'update:category', 'update:compound'],
};
</script>

<style>
.form-add-to-menu {
  width: 400px;
  border: 2px solid silver;
  margin: 1rem auto;
  padding: 1rem;
}

.category-btn {
  margin-right: 0.5rem;
  border: 1px solid silver;
}

.category-btn:hover {
  background-color: silver;
  transition: 0.5s ease;
}
</style>
