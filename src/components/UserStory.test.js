import React from 'react'

import { shallow } from 'enzyme'
import UserStory from "./UserStory";

describe('UserStory', () => {

    let func
    let wrapper

    beforeEach(() => {
        func = jest.fn()
        wrapper = shallow(<UserStory updateStatus={func} />)
    })

    it('click "finish" button', () => {
        wrapper.find('[data-behavior="finish"]').simulate("click");
        expect(func.mock.calls).toEqual([["finished"]])

    })

    it('click "deliver" button', () => {
        wrapper.find('[data-behavior="deliver"]').simulate("click");
        expect(func.mock.calls).toEqual([["delivered"]])

    })

})