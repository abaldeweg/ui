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

  function generateParagraph(counter = 5, tags = true) {
    let paragraph = ''
    for (let i = 0; i < counter; i++) {
      paragraph += randomSentence() + ' '
    }
    if (tags) {
      return '<p>' + paragraph + '</p>'
    }
    return paragraph
  }

  const generateParagraphs = (count = 5, tags = true) => {
    const paragraphs = []
    for (let i = 0; i < count; i++) {
      paragraphs.push(generateParagraph(Math.floor(Math.random() * 10) + 5, tags))
    }
    return paragraphs.join('')
  }

  return { randomSentence, generateParagraph, generateParagraphs }
}
