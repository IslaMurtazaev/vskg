import React from "react";
import { CategoryBlock } from './../../components';
import { shallow } from "enzyme";

describe(CategoryBlock.name, () => {
    it('should render without crashing', () => {
        shallow(<CategoryBlock/>);
    });
});
