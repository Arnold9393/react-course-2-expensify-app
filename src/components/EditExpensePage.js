import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    return (
    <div>
        <h1>Edit Expense</h1>
        <ExpenseForm
            expense={props.expense}
            onSubmit={(expense) => {
                props.dispatch(startEditExpense(props.expense.id, expense));
                props.history.push('/');
            }}
        />
        <button onClick={() => {
            props.dispatch(startRemoveExpense({ id: props.expense.id }));
            props.history.push('/');
        }}>Remove</button>
    </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id; // find in store (state) matching id of URL
        })
    }
}

export default connect(mapStateToProps)(EditExpensePage);
