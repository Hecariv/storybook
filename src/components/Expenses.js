import React from 'react'

const Expense = ({expense}) => (
    <div className="expense">
        { expense.amount.toString() }: { expense.date } - ${ expense.amount }
    </div>
)

const Expenses = ({expenses}) => (
    <div className="expenses">
        <p>The first expense's amount is { expenses.length > 0 ? expenses[0].amount : null}</p>
        { expenses.map( (expense, i) => <Expense key={i} expense={expense} />) }
    </div>
)

export default Expenses