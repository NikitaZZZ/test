<template>
  <div class="form-add-to-menu">
    <div class="mb-3">
      <label class="form-label">Название блюда</label>
      <input type="text" class="form-control" placeholder="Напишите сюда имя блюда" />
    </div>
    <div class="mb-3">
      <div class="mt-3 mb-3">
        <button class="btn btn-outline-primary">Добавить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'formDish',
}
</script>

<style>
.category-btn {
  margin-right: 0.5rem;
  border: 1px solid silver;
}

.category-btn:hover {
  background-color: silver;
  transition: 0.5s ease;
}
</style>
