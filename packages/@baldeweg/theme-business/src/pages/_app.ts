import type { App } from 'vue';
import { createUi } from '@baldeweg/ui'

const ui = createUi();

export default (app: App) => {
    app.use(ui);
}
