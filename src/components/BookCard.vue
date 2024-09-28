<script setup>
import { Book } from "@/store";
import { defineProps, ref } from "vue";

const props = defineProps({ book: Book, toggleRead: Function });
const book = ref(props.book);
</script>

<template>
  <div class="book-card">
    <img src="" class="cover-img" alt="Book Cover" />
    <div class="book-info">
      <p class="book-title">{{ book.title }}</p>
      <p class="book-author">{{ book.author }}</p>
      <p class="book-year">{{ book.year }}</p>
      <p class="book-pages">{{ book.pages }}</p>
      <p class="book-genre">Genre</p>
      <div class="book-buttons">
        <button @click="toggleRead(book)" class="read-button">{{ book.readStatus ? 'Read' : 'To Read' }}</button>
        <button class="delete-button"><span class="material-symbols-outlined"> delete </span></button>
      </div>
    </div>
  </div>
</template>

<style>
.book-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 360px;
  }

.book-info {
  display: flex;
  flex-direction: column;
  flex: 2;

  padding: .5rem;
}

.book-title {
  font-size: 1.4rem;
}

.book-author {
  font-size: .8rem;
  margin-bottom: .5rem;
}

.book-year, .book-pages {
  font-size: .9rem;
}

.book-genre {
  padding: .5rem 0;
}

.book-buttons {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: .5rem;
}

.book-buttons button {
  padding: .4rem;
  border-radius: 8px;
  height: 2rem;
}

.delete-button {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
