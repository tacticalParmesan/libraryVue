<script setup>
import BookCard from './BookCard.vue';
import { Library } from '@/store';

function toggleRead(book) {
    book.readStatus = !book.readStatus
    console.log(Library.books)

}
</script>

<template>
  <div class="library-display">
    <BookCard v-for="book in Library.books" :book="book" :toggle-read="toggleRead" :key="book.title"/>
  </div>
</template>

<style>
.library-display {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;
    gap: 1rem;
    max-height: calc(100% - 162px);
}
</style>
