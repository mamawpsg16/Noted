<template >
    <div class="stats">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of Notes</td>
                    <td>{{storeNotes.totalNotesCount}}</td>
                </tr>
                <tr>
                    <td>Number of Character ( of all notes )</td>
                    <td>{{ storeNotes.totalCharactersCount }}</td>
                </tr>
            </tbody>
        </table>
        <input  v-autofocus class="input" v-model="statNote" type="text" >
    </div>
</template>
<script setup>
/** IMPORT */
import { ref } from 'vue'
import { useWatchCharacters } from '@/use/useWatchCharacters'
import { vAutofocus } from '@/directives/vAutoFocus'
import { usestoreNotes } from '@/stores/storeNotes'

/** REFS */
const storeNotes = usestoreNotes()
const statNote = ref('')

/** WATCH */
useWatchCharacters(statNote,50)
</script>
