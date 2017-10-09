export const loadState = () => {
    try {
        const serialisedState = localStorage.getItem('state');
        if (serialisedState === null) {
            return undefined;
        }
        return JSON.parse(serialisedState);
    } catch (err) {
        return undefined;
    }
};
export const saveState = (state) => {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem('state', serialisedState)
    } catch (err) {}
};
//сохраняет prop в locastorage, принимает как аргументы state и имя пропа
export const saveProps = (state, prop_name) => {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem(prop_name, serialisedState)
    } catch (err) {}
};
//выгружает props из localStorage, принимает как аргумент state, массив имен пропсов, название редьюсера
// возращает измененный state
export const loadProps = (state, props_array, reducer) => {
    let newstate = {};
    try {
        props_array
            .forEach(function (element) {
                const serialisedProp = JSON.parse(localStorage.getItem(element));
                if (serialisedProp === null) {
                    return undefined;
                }
                state[reducer][element] = serialisedProp;
            }, this);
        newstate = state;
        return newstate;
    } catch (err) {
        return undefined;
    }

};
// выгружает prop из locastorage, принимает как аргументы state, имя пропа,
// , возращает стейт можно доработать, чтобы принимал массив
// пропов и редьюсеров!!!
export const loadProp = (state, prop, reducer) => {
    let newstate = {};
    try {
        const serialisedProp = JSON.parse(localStorage.getItem(prop));
        if (serialisedProp === null) {
            return undefined;
        }
        state[reducer][prop] = serialisedProp;
        newstate = state;
        return newstate;
    } catch (err) {
        return undefined;
    }

};