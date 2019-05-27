import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import { observer, useObservable } from 'mobx-react-lite';
import storeData from '../../store/store.js';
import './index.css';

const FinishednpTodos= observer(()=>{
    const store = useObservable(useContext(storeData))
     return (
        <div className="finishedTodos">
        <div className="completePlan">完成计划数: <span>{store.num}</span></div>
        <div className="todosLink"> <Link  to="/">todos</Link></div>
    </div>
    );

}) 
   
export default FinishednpTodos;