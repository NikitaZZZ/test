<template>
  <button type="button" class="btn category-btn">{{ category }}</button>
</template>

<script>
export default {
  name: 'sortBtn',
  props: {
    category: String,
  },
};
</script>
