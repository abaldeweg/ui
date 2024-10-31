import { describe, it, expect } from 'vitest'
import { useRandomText } from './useRandomText'

describe('useRandomText', () => {
  it('randomSentence returns a string', () => {
    const { randomSentence } = useRandomText()
    expect(typeof randomSentence()).toBe('string')
  })

  it('generateParagraph returns a paragraph string', () => {
    const { generateParagraph } = useRandomText()
    const paragraph = generateParagraph(5)
    expect(paragraph).toContain('<p>')
    expect(paragraph).toContain('</p>')
    expect(paragraph.length).toBeGreaterThan(7)
  })

  it('generateParagraph returns a paragraph string without p elements', () => {
    const { generateParagraph } = useRandomText()
    const paragraph = generateParagraph(5, false)
    expect(paragraph).not.toContain('<p>')
    expect(paragraph).not.toContain('</p>')
    expect(paragraph.length).toBeGreaterThanOrEqual(1)
  })

  it('generateParagraphs returns a string with multiple paragraphs', () => {
    const { generateParagraphs } = useRandomText()
    const paragraphs = generateParagraphs(3)
    expect(paragraphs.match(/<p>/g).length).toBe(3)
    expect(paragraphs.match(/<\/p>/g).length).toBe(3)
    expect(paragraphs.length).toBeGreaterThan(14)
  })

  it('generateParagraphs returns a string with multiple paragraphs and without p elements', () => {
    const { generateParagraphs } = useRandomText()
    const paragraphs = generateParagraphs(3, false)
    expect(paragraphs.match(/<p>/g)).toBe(null)
    expect(paragraphs.match(/<\/p>/g)).toBe(null)
    expect(paragraphs.length).toBeGreaterThanOrEqual(1)
  })
})
