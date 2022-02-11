import renderer from 'react-test-renderer';

import Date from "./date";


test("render correctly", () => {
    const component = renderer.create(
        <Date dateString='2022-02-02' />,
    );
    
    let json = component.toJSON();
    expect(json).toMatchSnapshot();
    // expect().toBe(<time dateTime='2022-02-02'>2nd Feb 2022</time>);

});
