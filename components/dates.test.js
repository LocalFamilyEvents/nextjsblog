import { render } from 'react-test-renderer';

import Date from "./date";

describe('Date', () => {
    test("render correctly", () => {
        render(<Date dateString='2022-02-02' />);

        expect().toBe(<time dateTime='2022-02-02'>2nd Feb 2022</time>);
    });
})
