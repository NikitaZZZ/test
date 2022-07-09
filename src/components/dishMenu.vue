<template>
  <div class="card dish" style="width: 18rem">
    <img :src="dishContent.image.file" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">
        {{ dishContent.title }}
        <button class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#modal-upd">
          <i class="fas fa-pen"></i>
        </button>
      </h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ dishContent.category }}</h6>
      <p class="card-text">{{ dishContent.compound }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dishMenu',
  model: {
    prop: 'eventUpdate',
  },
  props: {
    dishContent: {
      type: Object,
    },
  },
};
</script>

<style>
.dish {
  display: inline-block;
  margin-right: 1rem;
}
</style>
