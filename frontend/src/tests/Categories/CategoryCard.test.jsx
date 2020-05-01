import React from "react";
import { CategoryCard } from './../../components';
import { shallow } from "enzyme";

describe(CategoryCard.name, () => {
    let wrapper = null
    afterEach(() => {
        wrapper = null;
    })

    it('should render without crashing', () => {
        shallow(<CategoryCard id={1} title="title" img="src/img" />);
    });

    it('should display title', () => {
        const title = 'Jest';
        wrapper = shallow(<CategoryCard id={1} title={title} img={'src/jest_logo'} />);

        expect(wrapper.find('.category__card-title h1').text()).toBe(title);
    });
});
