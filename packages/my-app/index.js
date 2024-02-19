// my-app/index.js

// Import directly from the relative path
import { createApp, h } from '../ui-library';

const container = document.getElementById('app');

function template(state) {
  return h('div', [
    h('h1', state.count),
    h('button', { on: { click: handleClick } }, 'Add'),
  ]);
}

function handleClick() {
  app.updateState({ count: app.state.count + 1 });
}

const app = createApp(container, template);
app.mount();
