const enhancer = require('./enhancer.js');


describe('enhancer.js', () => {
    it('should run tests without errors', () => {
        expect(false).toBeFalsy();
    })

    describe('.repair()', () => {
        it('should return an item with durability restored to 100', () => {
            expect(enhancer.repair({
                name: 'elven sword',
                durability: 30,
                enhancement: 10
            })).toEqual({
                name: 'elven sword',
                durability: 100,
                enhancement: 10
            })
        })
    })

    describe('.succeed()', () => {
        it('should return an item enhanced by 1pt if enhancement was less than 20', () => {
            expect(enhancer.succeed({
                name: "staff of Magnus",
                durability: 93,
                enhancement: 17
            })).toEqual({
                name: "staff of Magnus",
                durability: 93,
                enhancement: 18
            });

            expect(enhancer.succeed({
                name: "iron dagger",
                durability: 30,
                enhancement: 0
            })).toEqual({
                name: "iron dagger",
                durability: 30,
                enhancement: 1
            });
        });

        it('should return an item with enhancement = 20 if it was already set to enhancement = 20', () => {
            expect(enhancer.succeed({
                name: "novice mage robes",
                durability: 30,
                enhancement: 20
            })).toEqual({
                name: "novice mage robes",
                durability: 30,
                enhancement: 20
            });
        });

        it('should leave the rest of the game item unchanged', () => {
            // you can tell as much if the other tests 
            // are passing, but i added this for clarity
            // + to make it easier to spot bugs
            expect(enhancer.succeed({
                name: "orcish boots",
                durability: 97,
                enhancement: 19
            })).toEqual({
                name: "orcish boots",
                durability: 97,
                enhancement: 20
            });
            expect(enhancer.succeed({
                name: "orcish helmet",
                durability: 95,
                enhancement: 20
            })).toEqual({
                name: "orcish helmet",
                durability: 95,
                enhancement: 20
            });
        })
    })

    describe('.fail()', () => {
        it.todo('should return an item with durability decreased by 5 if enhancement is less than 15')

        it.todo('should return an item with durability decreased by 10 if enhancement is 15 or more');

        it.todo('should return an item with enhancement decreased by 1 if starting enhancement was greater than 16')
    })
})