import React from "react";
import {shallow} from "enzyme";

import Signup from "../signup";

describe("test/signup.spec.jsx", () => {
    let component;
    beforeEach(() => {
        component = shallow(<Signup/>);
    });
    test("should render", () => {
        expect(!!component).toEqual(true);
    });
});