import { describe, it, expect } from 'vitest';
import { renderMarkdown } from './templates';

describe('renderMarkdown', () => {
  it('renders and returns a markdown string successfully', async () => {
    const components = [{
      name: 'TestComponent',
      props: [],
      slots: [],
      events: []
    }];

    const output = await renderMarkdown(components);

    const expectedOutput = '# Components\n\n## TestComponent\n';
    expect(output).toBe(expectedOutput);
  });
});
