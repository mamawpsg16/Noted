<template lang="">
    <div
      class="card p-4 mb-5"
      :class="`has-background-${ bgColor }-dark`"
    >
        <label v-if="label" class="label has-text-white">{{label}}</label>
        <div class="field">
            <div class="control">
                <textarea
                    v-autofocus
                    v-model="modelValue"
                    ref="textAreaRef"
                    @input="$emit('update:modelValue',modelValue)"
                    class="textarea"
                    maxlength="100"
                    :placeholder="placeholder"
                   ></textarea
                >
            </div>
        </div>
        <div class="field is-grouped is-grouped-right">
            <div class="control">
               <slot name="buttons"></slot>
            </div>
        </div>
    </div>
</template>
<script setup>
/** IMPORT */
import { ref } from 'vue'
import { vAutofocus } from '@/directives/vAutoFocus'

const props = defineProps({
    modelValue:{
        type:String,
        required:true
    },
    bgColor:{
        type:String,
        default: 'success'
    },
    placeholder:{
        type:String,
        default:'Type something...'
    },
    label:{
        type:String,
    }
})

/** EMITS */
const emit = defineEmits(['update:modelValue'])

/** FOCUS TEXT AREA */
const textAreaRef = ref(null)
const focustTextArea = () =>{
    textAreaRef.value.focus()
}

defineExpose({
    focustTextArea
})

/** LOCAL DIRECTIVES */

// const vAutofocus = {
//     mounted: (el) => {
//         el.focus()
//     }
// }

</script>
