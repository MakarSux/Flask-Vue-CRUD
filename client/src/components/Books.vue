<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

let books = ref()


const getBooks = () => {
    const path = 'http://localhost:5000/books';
    axios.get(path)
        .then((res) => {
            books.value = res.data.books;
        })
        .catch((error) => {
            console.error(error)
        })
}

onMounted(() => {
    getBooks()
})

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-10">
                <h1>Books</h1>
                <hr><br><br>
                <button type="button" class="btn btn-success btn-sm">Add Book</button>
                <br><br>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Author</th>
                            <th scope="col">Read?</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(book, index) in books">
                            <td>{{ book.title }}</td>
                            <td>{{ book.author }}</td>
                            <td>
                                <span v-if="book.read">Yes</span>
                                <span v-else>No</span>
                            </td>
                            <td>
                                <button type="button" class="btn btn-warning btn-sm">Update</button>
                                <button type="button" class="btn btn-danger btn-sm ml-2">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>