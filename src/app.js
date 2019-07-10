//import './utils.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'WATA', amount: 4500 }));
store.dispatch(addExpense({ description: 'GAS', createdAt: 1000}));
store.dispatch(addExpense({ description: 'rent', amount: 109500 }));
console.log(store.getState());



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

/*class NewSyntax {
    name = 'Jen';
    getGreeting = () => {
        return `Hi, ${this.name}`;
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());*/

/*console.log("WORKING");
console.log(square(4));
console.log(add(4, 6));
console.log(anythingIWantSubtract(7, 2));

console.log(validator.isEmail('test@gmail.com'));

const template = <p>THIS IS JSX FROM WEBBY</p>;
ReactDOM.render(template, document.getElementById('app'));*/
