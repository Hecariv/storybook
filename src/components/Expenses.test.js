
import React from 'react';
import ReactDOM from 'react-dom';
import Expenses from "./Expenses";

describe("Expenses", () => {

    it('renders empty expenses without crashing', () => {
        let expenses = [];
        const div = document.createElement('div');
        ReactDOM.render(<Expenses expenses={expenses} />, div);
    })

    it('renders empty expenses without error', () => {
        const expenses = [
            { date: '2017-04-05', amount: 0 },
            { date: '2017-04-05', amount: 4 },
        ]
        const div = document.createElement('div');
        ReactDOM.render(<Expenses expenses={expenses} />, div);
    });
})
