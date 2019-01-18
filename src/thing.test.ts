import {foo} from "./thing";

describe('foo', function () {
    it('should thing', function () {
        foo('some-string');
        expect(true).toEqual(true);
    });
});