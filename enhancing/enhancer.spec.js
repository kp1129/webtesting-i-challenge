const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
    it('should run tests without errors', () => {
        expect(false).toBeFalsy();
    })

    describe('.repair()', () => {
        it('should return an item with durability restored to 100', () => {
            expect(enhancer.repair({name: 'item', durability: 30, enhancement: 10})).toEqual({name: 'item', durability: 100, enhancement: 10})
        })
    })

    describe('.success()', () => {
        it.todo('should return an item modified according to the rules defined by the client for enhancement success');
    })

    describe('.fail()', () => {
        it.todo('should return an item modified according to the rules defined by the client for enhancement failure')
    })
})