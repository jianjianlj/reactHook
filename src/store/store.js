import {createContext} from 'react';
import {observable} from 'mobx';

   export const store = observable({
        num : 0, //完成个数
        todos: [
            {
                id: 1,
                item: '起床',
                checked: false,
            },
            {
                id: 2,
                item: '刷牙洗脸',
                checked: false,
            },
            {
                id: 3,
                item: '吃早饭',
                checked: false,
            },
            {
                id: 4,
                item: '坐地铁',
                checked: false,
            },
            {
                id: 5,
                item: '在地铁上看一会书',
                checked: false,
            },
            {
                id: 6,
                item: '工作',
                checked: false,
            },
            {
                id: 7,
                item: '吃午饭',
                checked: false,
            },
        ],
        finishedTodos (id) {
            this.todos.map(todo=>{
                if(todo.id === id){
                    todo.checked = !todo.checked;
                    if(todo.checked ) {
                        store.num++;
                    }else {
                        store.num--;
                    }
                }
            });
        },
        get cnt() {//未完成个数
            return store.todos.length-store.num;
        }

    })


export default  createContext(store);