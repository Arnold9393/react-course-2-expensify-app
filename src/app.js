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
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();

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
