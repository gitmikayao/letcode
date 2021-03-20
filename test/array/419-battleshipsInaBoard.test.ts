import {test,expect} from '@jest/globals';
import {countBattleships} from '@src/array/419-battleshipsInaBoard';

test('battle ships in a board', ()=>{
    expect(countBattleships([["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]])).toBe(2)
})