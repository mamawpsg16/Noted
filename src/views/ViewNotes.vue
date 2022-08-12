<template >
    <div class="notes">
        <AddEditNote
        ref="addEditNoteRef"
        placeholder="Add a new note"
        v-model="newNote">
            <template v-slot:buttons>
               <button class="button is-link has-background-success" @click="addNote" :disabled="!newNote">Add Note</button>
            </template>
        </AddEditNote>
        <Note v-for="note in storeNotes.notes" :key="note.id" :note="note"/>
    </div>
</template>
<script setup>
/** IMPORTS */
import { ref } from 'vue'
import { useWatchCharacters } from '@/use/useWatchCharacters'
import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import { usestoreNotes } from '@/stores/storeNotes'
/** NOTES */
const addEditNoteRef = ref(null)
const newNote = ref('')
const addNote = ()=>{
    storeNotes.addNote(newNote.value)
    newNote.value = ''
    addEditNoteRef.value.focustTextArea()
}

/** PINIA STATE MANAGEMENT */
const  storeNotes  = usestoreNotes();

/** WATCH */
useWatchCharacters(newNote,100)


</script>
<style lang="">
    
</style>