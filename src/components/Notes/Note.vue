<template lang="">
    <div class="card mb-4">
        <div class="card-content">
            <div class="content">
                {{note.content}}
                <div class="has-text-right has-text-grey-light mt-2">
                    <small>{{ characterLength}}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <router-link :to="`/editNote/${note.id}`"
              class="card-footer-item">
              Edit
              </router-link
            >
            <a href="#" class="card-footer-item" @click.prevent="modals.deleteNote = true">Delete</a>
        </footer>
        <ModalDeleteNote v-if="modals.deleteNote" v-model="modals.deleteNote" :noteId="note.id"/>
    </div>
</template>
<script setup>
/** IMPROTS */
import {computed, reactive} from 'vue'
import { usestoreNotes } from '@/stores/storeNotes'
import ModalDeleteNote from '@/components/Notes/ModalDeleteNote.vue'
/** PROPS */
const props = defineProps({
    note:{
        type:Object,
        required:true
    }
})

/** EMITS */
// const emit = defineEmits(['delete'])
const characterLength = computed(()=>{
    let length = props.note.content.length
    let description = length > 1 ? 'characters' : 'character '
    return `${length} ${description}`
})
/** DELETE EMIT */
// const deleteNote = () => {
//     emit('delete',props.note.id)
// }

/** DELETE NOTE */
const deleteNote = (id) => {
    storeNotes.deleteNote(id)
}

/** PINIA STATE MANAGEMENT */
const  storeNotes  = usestoreNotes();

/** MODALS */

const modals = reactive({
    deleteNote:false
})
</script>
