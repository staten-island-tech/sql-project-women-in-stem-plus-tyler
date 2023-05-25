import { defineStore } from 'pinia'

export const useNoteStore = defineStore({
  id: 'note',
  state: () => ({
    notes: []
  }),
  actions: {
    addNote(note) {
      if (typeof note === 'object') {
        this.notes.push(note)
      }
    },
    removeNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id)
    }
  }
})
