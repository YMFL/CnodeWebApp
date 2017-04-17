import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import store from './configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory, hashHistory} from 'react-router';
import routes from './routes';
import './styles/index.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
//点击事件有300ms的（可能存在双击事件，判断300ms有无再次点击）
//injectTapEventPlugin() 的作用是取消这300ms时间，马上执行点击事件
injectTapEventPlugin();

//
if (process.env.NODE_ENV === 'production') {
    console.log('production');
} else {
    console.log('dev');
}
render(
    // Provider为react-redux
    <Provider store={store}>
        <Router routes={routes} history={hashHistory}/>
    </Provider>
    ,
    document.getElementById('root')
);