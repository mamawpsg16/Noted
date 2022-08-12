<template lang="">
    <div class="modal is-active px-3">
        <div class="modal-background"></div>
            <div
              class="modal-card"
              ref="modalCardRef"
            >
                <header class="modal-card-head">
                <p class="modal-card-title">Delete Note?</p>
                <button class="delete" aria-label="close" @click="closeModal"></button>
                </header>
                <section class="modal-card-body">
                Are you sure you want to delete this note?
                </section>
                <footer class="modal-card-foot is-justify-content-flex-end">
                    <button class="button" @click="closeModal">Cancel</button>
                  <button
                      @click="storeNotes.deleteNote(noteId)"
                      class="button is-danger"
                    >Delete</button>
                </footer>
            </div>
        </div>
</template>
<script setup>
/** IMPORTS */
import { ref, onMounted, onUnmounted } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { usestoreNotes } from '@/stores/storeNotes'


/** PROPS */
const props = defineProps({
    modelValue:{
        type:Boolean,
        default:false
    },
    noteId:{
        type:String,
        required:true
    }
})

/** EMIT */
const emit = defineEmits(['update:modelValue'])


/** CLOSE MODAL */
const closeModal = ()=>{
    emit('update:modelValue',false)
}

/** VUE USE ONCLICK OUTSIDE */
const closeOnOutsideClick = ref(null)

const modalCardRef = ref(null)
onClickOutside(modalCardRef,closeModal)


/** KEYBOARD LISTENER */
const handleKeyboard = e  => {
    console.log('close')
    if(e.key === 'Escape'){
        closeModal()
    }
}

/** PINIA STATE MANAGEMENT */
const  storeNotes  = usestoreNotes();

/** LIFECYCLE HOOKS */
onMounted(()=>{
    document.addEventListener("keyup",handleKeyboard)
})
onUnmounted(()=>{
    document.removeEventListener("keyup",handleKeyboard)
})
</script>
<style lang="">
    
</style>