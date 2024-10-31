import { ref } from 'vue'

export function useRandomText() {
  const sentences = ref([
    'Hello there!',
    'This is a random text.',
    'How are you doing?',
    'Vue.js is awesome!',
  ])

  const randomSentence = () => {
    const randomIndex = Math.floor(Math.random() * sentences.value.length)
    return sentences.value[randomIndex]
  }

  function generateParagraph(counter) {
    let paragraph = ''
    for (let i = 0; i < counter; i++) {
      paragraph += randomSentence() + ' '
    }
    return '<p>' + paragraph + '</p>'
  }

  const generateParagraphs = (count) => {
    const paragraphs = []
    for (let i = 0; i < count; i++) {
      paragraphs.push(generateParagraph(Math.floor(Math.random() * 10) + 5))
    }
    return paragraphs.join('')
  }

  return { randomSentence, generateParagraph, generateParagraphs }
}
