import { deploySubtable, getValue } from '../src/deploySubtable';
import { describe, it } from 'mocha';
import { assert } from 'chai';

describe('Hello function', () => {
  it('should return hello world', () => {
    // assert.equal(deploySubtable().length, 3);
    const obj = {"value": [1, 2, 3]};
    assert.equal(deploySubtable(obj).length, 3);
    assert.equal(getValue(obj))
  });
});