// stores/counter.js
import { defineStore } from 'pinia'

export const usestoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
        notes:[
            {
                id:'id1',
                content:'  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, adipisci? Ad sequi architecto debitis aliquam maxime? Harum, eaque cupiditate ipsum repellendus ea rerum corporis provident dolores, dolor eos, rem natus!',
            },
            {
                id:'id2',
                content:'Shorter content yay!',
            }
        ]

    }
  },
  actions:{
    addNote(newNote){
      let currentDate = new Date().getTime(),
          id = currentDate.toString()
      let note = {
          id:id,
          content:newNote
      }
      this.notes.unshift(note)
    },
    deleteNote(noteId){
      this.notes = this.notes.filter(note => { return note.id !== noteId })
    },
    updateNote(id,content){
      let index = this.notes.findIndex(note => { return note.id === id })
      this.notes[index].content = content
    }
  },
  getters:{
    getNoteContent:(state)=>{ 
      return (id) =>{
        return state.notes.filter(note =>{ return note.id === id})[0].content
      }
    },
    totalNotesCount:(state)=>{
      return state.notes.length
    },
    totalCharactersCount:(state)=>{
      let count = 0;
      state.notes.forEach(note=>{ 
        count+= note.content.length
      })
      return count
    }
  }
})