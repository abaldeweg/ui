import { defineAsyncComponent } from 'vue';
import components from './components/components.json';

export const createUi = () => {
  const install = (app) => {
    components.forEach((component) => {
      const componentName = "B" + component.name;
      const componentPath = `./components/B${component.directory}/B${component.name}.vue`;
      app.component(componentName, defineAsyncComponent(() => import(componentPath)));
    });
  };

  return { install };
};
