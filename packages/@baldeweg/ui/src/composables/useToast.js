import { ref } from 'vue'

const messages = ref([])
const current = ref(null)

const show = () => {
  current.value = messages.value[0]

  setTimeout(() => {
    messages.value.shift()
    current.value = null
  }, 3000)
}

setInterval(() => {
  if (messages.value.length >= 1 && current.value === null) {
    show()
  }
}, 1000)

export function useToast() {
  const add = (msg) => {
    messages.value.push(msg)
  }

  return { messages, current, add }
}
