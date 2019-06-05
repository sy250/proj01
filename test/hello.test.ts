import hello from '../src/hello';
import { describe, it } from 'mocha';
import { assert } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';

describe('Hello function', () => {
  it('should return hello world', () => {
    // const result = hello();
    // expect(result).to.equal('Hello World!');
    // assert.equal(hello(), "taro");
    assert.equal(hello(), "Hello World!");
  });
});