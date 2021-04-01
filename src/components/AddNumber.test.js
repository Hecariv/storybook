import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import AddNumbers from "./AddNumber";

describe('MyComponent', () => {


    it('button got clicked',  () => {
        const func = jest.fn()

        const wrapper = mount(<AddNumbers updateStatus={func}/>)
        wrapper
            .find('button')
            .simulate("click")

        expect(wrapper.find("Number")).toHaveLength(1)
        wrapper
            .find('button')
            .simulate("click")

        expect(wrapper.find("Number")).toHaveLength(2)
    });
})