<template>
  <button type="button" class="btn category-btn" @click="eventClick">{{ category }}</button>
</template>

<script>
export default {
  name: 'sortBtn',
  props: {
    category: String,
    eventClick: Function,
  },
};
</script>
