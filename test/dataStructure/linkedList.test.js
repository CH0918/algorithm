import { LinkedList } from '../../src/dataStructure/LinkedList';
describe('linkedList', () => {
  it('init', () => {
    const link = new LinkedList();
    expect(link.head.value).toBe('head');
  });
  it('append', () => {
    const link = new LinkedList();
    link.append(1);
    expect(link.size).toBe(1);
    link.append(2);
    link.append(3);
    expect(link.size).toBe(3);
  });
  it('findByValue', () => {
    const link = new LinkedList();
    expect(link.findByValue(1)).toBe(-1);
    link.append(8);
    link.append(2);
    console.log(link);
    expect(link.findByValue(1)).toBe(-1);
    expect(link.findByValue(2).value).toBe(2);
    expect(link.findByValue(8).value).toBe(8);
  });

  it('findByIndex', () => {
    const link = new LinkedList();
    // expect(link.findByValue(1)).toBe(-1);
    link.append(8);
    link.append(2);
    expect(link.findByIndex(0).value).toBe(8);
    expect(link.findByIndex(1).value).toBe(2);
    expect(link.findByIndex(3)).toBe(-1);
  });

  it('insertAfter', () => {
    const link = new LinkedList();
    link.append(2);
    link.insertAfter(3, 2);
    expect(link.size).toBe(2);
    expect(link.findByIndex(1).value).toBe(3);
    expect(link.findByIndex(0).value).toBe(2);
  });

  it('findePrev', () => {
    const link = new LinkedList();
    link.append(2);
    link.append(3);
    expect(link.size).toBe(2);
    let res = link.findePrev(3);
    expect(link.findPrev(3).value).toBe(2);
    expect(link.findPrev(2).value).toBe('head');
  });

  it('remove', () => {
    const link = new LinkedList();
    link.append(2);
    link.append(3);
    link.remove(2);
    expect(link.size).toBe(1);
    expect(link.findByValue(3).value).toBe(3);
  });
});
