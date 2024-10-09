<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Modal from './Modal.vue'

let books = ref()

const closeableModal = ref(false);

// const modal = ref(false);


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

const addBook = (title, author, read) => {
    const payload = {
        'title' : title,
        'author': author,
        'read': read
    };
      const path = 'http://localhost:5000/books';
      axios.post(path, payload)
        .then(() => {
          getBooks();
          location.reload();
        })
        .catch((error) => {
          
          console.log(error);
          getBooks();
        });
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

                <!-- <button type="button" class="btn btn-success btn-sm" data-toggle="modal"
                    data-target="#">AddBook</button> -->
                
                <button @click="closeableModal = true" type="button" class="btn btn-success btn-sm">AddBook</button>
                <Modal v-model="closeableModal" closeable header="AddBook">
                    <form action="" class="form-group">
                        <label for="title"></label>
                        <input type="text" id="title" class="form-control" v-model="title">
                        <label for="author"></label>
                        <input type="text" id="author" class="form-control" v-model="author">
                        <label for="read">is read?</label>
                        <input type="checkbox" name="" id="read" v-model="read">
                        <button type="button" class="btn btn-success" @click="addBook(title, author, read)">Submit</button>
                        <button type="reset" class="btn btn-danger">Reset</button>
                    </form>
                </Modal>


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


    <!-- 
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add a new book</h5>
                </div>
                <div class="modal-body">
                    <form action="" method="post">
                        <label for="title"></label>
                        <input type="text" id="title" class="form-control" >
                        <label for="author"></label>
                        <input type="text" id="author" class="form-control" >
                        <label for="read">is read?</label>
                        <input type="checkbox" name="" id="read">
                        <button type="submit" class="btn btn-success" >Submit</button>
                        <button type="reset" class="btn btn-danger">Reset</button>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div> -->


</template>