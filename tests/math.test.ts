import { describe, it, expect } from 'vitest';

import { add, subtract } from '~/math';

describe('math', () => {
  describe('add', () => {
    it('1 + 2 = 3', () => expect(add(1, 2)).toEqual(3));
    it('2 + 2 != 3', () => expect(add(1, 2)).toEqual(3));
  });

  describe('subtract', () => {
    it('2 - 1 = 1', () => expect(subtract(2, 1)).toEqual(1));
    it('2 - 2 != 4', () => expect(subtract(2, 2)).toEqual(0));
  });
});
