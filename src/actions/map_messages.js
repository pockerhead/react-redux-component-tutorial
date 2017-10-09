// слой данных для сообщений в туториал возвращает в payload массив обьектов
// принимает как аргумент номер этапа обучения
export function Stages(i) {
    return {
        type: 'STAGES',
        payload: {
            stage: i,
            stages_payload: [
                {
                    avatar: '', //персонаж
                    message: 'Этап 1 - ты попал на край света, тебе нужно выживать', // сообщение
                    el: '' // элемент который нужно подсветить
                }, {
                    avatar: 'cap',
                    message: 'Этап 2 - "Слушай сюда, пацан! Для выживания могу дать пару бесплатных советов!"',
                    el: ''
                }, {
                    avatar: '',
                    message: 'Этап 3 - 1. Не берите ничего из рук бьорнклов, они могут зализать Вас до смерти,' +
                            ' и ничто Вас не спасёт',
                    el: ''
                }, {
                    avatar: 'cap',
                    message: '4',
                    el: 'casino'
                }, {
                    avatar: 'starpom',
                    message: '5',
                    el: ''
                }, {
                    avatar: 'cap',
                    message: '6',
                    el: 'profile'
                }, {
                    avatar: '',
                    message: '',
                    el: ''
                }
            ]
        }
    }
}
