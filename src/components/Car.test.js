import fetchMock from 'fetch-mock'
import ReactDOM from 'react-dom';
import React from "react";
import Car from "./Cars";

describe('Student', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    it('renders cars with data', async () => {
        fetchMock.get('https://mypath', [
            {
                "id": 1,
                "brand": "Volkswagen",
                "model": "Golf GTI"
            },
        ])

        const div = document.createElement('div');
        const response = await fetch('https://mypath');
        const json = await response.json();

        ReactDOM.render(
        json.map(element => (
            <Car key={element.id} name={element.brand} id={element.id} age={element.model}/>
        ))
        , div)
    })
})