import {combineReducers, createStore} from 'redux'
import msg_reducer from '../reducers/message_box'
import {saveProps, loadProps} from './localStorage'
const rootReducer = combineReducers({msg_reducer});

export default function configureStore() {
  let store = createStore(rootReducer);
  let persistedState = loadProps(store.getState(),['first_enter'],'msg_reducer'); //объявляем персистед стэйт, на текущий момент getState() уже доступна
  store = createStore(rootReducer, persistedState); //переопределяем стор с нашим persistedState
  store.subscribe(() => { //подписываем стор на сохранение пропсов в localStorage
    saveProps(store.getState().msg_reducer.first_enter, 'first_enter');
  })
  return store
}