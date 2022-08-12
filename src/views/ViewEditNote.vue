<template lang="">
    <div class="edit-notes">
        <AddEditNote
        ref="addEditNoteRef"
        placeholder="Edit Note"
        label="Edit Note"
        bgColor="link"
        v-model="noteContent">
            <template v-slot:buttons>
                <!-- <router-link class="button is-link is-light" to="/">Cancel</router-link> -->
                <button class="button is-link is-light mr-2" @click="$router.back()">Cancel</button>
               <button @click="updateNote" class="button is-link has-background-link"
               :disabled="!noteContent">Update Note</button>
            </template>
        </AddEditNote>
    </div>
</template>
<script setup>
/** IMPORTS */
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import { usestoreNotes } from '@/stores/storeNotes'
import { ref } from 'vue'
import { useRoute,useRouter } from 'vue-router'

/** NOTE */
const noteContent = ref('')

const storeNotes = usestoreNotes()

/** USE ROUTE */
const route = useRoute();
const router = useRouter();
console.log(route.params.id)

noteContent.value = storeNotes.getNoteContent(route.params.id)

/** UPDATE */
const updateNote = () =>{
    storeNotes.updateNote(route.params.id,noteContent.value)
    router.push('/')
}
</script>
