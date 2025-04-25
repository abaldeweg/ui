import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import fs from 'fs';
import path from 'path';
import { extractComponentInfo } from './index';

describe('extractComponentInfo', () => {
  const tempDir = path.join(__dirname, 'temp-components');

  beforeAll(() => {
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir);
    }

    const components = [
      {
        name: 'BButton',
        content: `<template><button>{{ label }}</button></template>
                  <script>
                  export default {
                    name: 'BButton',
                    props: { label: String },
                    emits: ['click']
                  };
                  </script>`
      },
      {
        name: 'BInput',
        content: `<template><input :value="value" @input="$emit('input', $event.target.value)" /></template>
                  <script>
                  export default {
                    name: 'BInput',
                    props: { value: String },
                    emits: ['input']
                  };
                  </script>`
      }
    ];

    components.forEach(component => {
      fs.writeFileSync(path.join(tempDir, `${component.name}.vue`), component.content);
    });
  });

  afterAll(() => {
    fs.rmSync(tempDir, { recursive: true, force: true });
  });

  it('should extract component information from Vue files', async () => {
    const result = await extractComponentInfo(tempDir);

    expect(result).toEqual([
      {
        name: 'BButton',
        props: [{ name: 'label', type: { "name": "string" } }],
        slots: undefined,
        events: [{ name: 'click', type: undefined }],
      },
      {
        name: 'BInput',
        "props": [{ "name": "value", "type": { "name": "string", }, },],
        slots: undefined,
        events: [{ name: 'input', type: undefined }],
      },
    ]);
  });

  it('should return an empty array if no files match', async () => {
    const emptyDir = path.join(tempDir, 'empty');
    fs.mkdirSync(emptyDir);

    const result = await extractComponentInfo(emptyDir);

    expect(result).toEqual([]);

    fs.rmdirSync(emptyDir);
  });
});
