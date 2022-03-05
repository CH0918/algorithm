import { findTheDifference, findTheDifference2 } from '../../src/leetcode/389';
describe('findTheDifference', () => {
  it('findTheDifference', () => {
    let s = 'abce';
    let t = 'abced';
    expect(findTheDifference(s, t)).toBe('d');
    let s2 = '';
    let t2 = 'y';
    expect(findTheDifference(s2, t2)).toBe('y');
  });
});
describe('findTheDifference2', () => {
  it('findTheDifference2', () => {
    let s = 'abce';
    let t = 'abced';
    expect(findTheDifference(s, t)).toBe('d');
    let s2 = 'a';
    let t2 = 'aa';
    expect(findTheDifference2(s2, t2)).toBe('a');
  });
});
