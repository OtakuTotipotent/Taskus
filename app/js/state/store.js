const listeners = [];

let state = {
    tasks: [],
    notes: [],
    settings: {}
};

export function getState() {
    return state;
}

export function subscribe(listener) {
    listeners.push(listener);
}

export function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(l => l());
}
