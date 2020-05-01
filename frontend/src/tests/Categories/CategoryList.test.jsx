import React from "react";
import { CategoryList } from './../../components';
import { shallow } from "enzyme";

describe(CategoryList.name, () => {
    it('should render without crashing', () => {
        shallow(<CategoryList />);
    });
});
