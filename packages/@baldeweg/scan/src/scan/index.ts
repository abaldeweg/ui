#!/usr/bin/env node

import { readdirSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import path from 'path';
import ejs from 'ejs';

type ComponentData = {
  name: string;
  directory: string;
};

const template: string = `<%_ components.forEach(component => { _%>
import <%= component.name %> from './<%= component.directory %>/<%= component.name %>.vue';
<%_ }); _%>

export {
<%_ components.forEach(component => { _%>
  <%= component.name %>,
<%_ }); _%>
};
`;

const getComponentsDetails = (dir: string, componentsDir: string): ComponentData[] => {
  return readdirSync(path.join(componentsDir, dir), { withFileTypes: true })
    .filter((dirent) => dirent.isFile() && dirent.name.endsWith('.vue') && dirent.name.startsWith('B'))
    .map((dirent) => {
      return {
        name: dirent.name.slice(0, -4),
        directory: dir,
      };
    });
};

function findComponents(componentsDir: string): ComponentData[] {
  return readdirSync(componentsDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => getComponentsDetails(dirent.name, componentsDir))
    .flat();
}

function renderTemplate(components: ComponentData[]) {
  return ejs.render(template, { components });
}

const writeFile = (componentsDir: string, filename: string, content: string): void => {
  const outputFilePath = path.join(componentsDir, filename);
  if (!existsSync(path.dirname(outputFilePath))) {
    mkdirSync(path.dirname(outputFilePath), { recursive: true });
  }
  writeFileSync(outputFilePath, content, 'utf-8');
};

const listComponents = (componentsDir: string, filename: string): void => {
  const components: ComponentData[] = findComponents(componentsDir);
  const content = renderTemplate(components);
  writeFile(componentsDir, filename, content);
};

export { listComponents }
