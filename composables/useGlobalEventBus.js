import { reactive } from 'vue';

const state = reactive({
  events: {}
});

export function useGlobalEventBus() {
  function on(event, handler) {
    if (!state.events[event]) {
      state.events[event] = [];
    }
    state.events[event].push(handler);
  }

  function off(event, handler) {
    if (!state.events[event]) return;
    state.events[event] = state.events[event].filter(h => h !== handler);
  }

  function emit(event, ...args) {
	console.log(state);
    if (!state.events[event]) return;
    state.events[event].forEach(handler => handler(...args));
  }

  return { on, off, emit };
}