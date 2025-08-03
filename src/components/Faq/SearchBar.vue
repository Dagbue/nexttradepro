<template>
  <div class="search-container">
    <div class="search-wrapper">
      <div class="search-icon-wrapper">
        <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
      <input
          type="text"
          :value="searchQuery"
          @input="updateSearch"
          placeholder="Search frequently asked questions..."
          class="search-input"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    searchQuery: {
      type: String,
      required: true
    }
  },
  methods: {
    updateSearch(event) {
      this.$emit('update:searchQuery', event.target.value);
    }
  }
}
</script>

<style scoped>
.search-container {
  max-width: 35rem;
  margin: 3.5% auto 0;
}

.search-wrapper {
  position: relative;
}

.search-icon-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  pointer-events: none;
}

.search-icon {
  height: 1.25rem;
  width: 1.25rem;
  color: #9ca3af;
}

.search-input {
  display: block;
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 1px solid #d1d5db;
  border-radius: 0.75rem;
  background: white;
  color: #111827;
  font-size: 1.125rem;
  line-height: 1.25;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}

.search-input::placeholder {
  color: #6b7280;
}

.search-input:focus {
  outline: none;
  border-color: transparent;
  box-shadow: 0 0 0 2px #3b82f6;
}

.search-input:focus::placeholder {
  color: #9ca3af;
}
</style>