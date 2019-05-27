import React , {useContext} from 'react';
import { observer, useObservable } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
 import storeData from '../../store/store.js';
 import './index.css';



const NeedTodos = observer(() =>  {
    const store  = useObservable(useContext(storeData)); 
    return (
        <div className="todos">
        <div className="header">计划列表:</div>
        <ul>
            {store.todos.map(todo=>{
                return <li key={todo.id}>
                <span className="todoItem">{todo.item}</span>
                <span className="todosChecked" onClick={store.finishedTodos.bind(store,todo.id)}>
                    <Icon className="icon" type={todo.checked ? "check-circle" : "close-circle"} theme="twoTone" twoToneColor={todo.checked ? "red"  :"#52c41a"} />
                </span>
                </li>
            })}
       </ul>
        <div className="finished">{store.num}个计划已完成</div>
        <div className="unfinished">{store.cnt}个计划未完成</div>
        <div className="completeDegree">完成度：{store.num}/{store.todos.length}</div>
        <div className="result"> <Link to="/finishedTodos">result</Link></div>
    </div>
    );
});

export default NeedTodos