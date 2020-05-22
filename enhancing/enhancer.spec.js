const enhancer = require('./enhancer.js');


describe('enhancer.js', () => {
    
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

        it('should leave the rest of the item unchanged', () => {
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
        it('should return an item with durability decreased by 5 if enhancement is less than 15', () => {
            expect(enhancer.fail({
                name: "staff of Magnus",
                durability: 93,
                enhancement: 13
            })).toEqual({
                name: "staff of Magnus",
                durability: 88,
                enhancement: 13
            });
        })

        it('should not return durability below 0 after decreasing by 5 (in the case of enhancement < 15 and original durability < 5)', () => {
            expect(enhancer.fail({
                name: "staff of Magnus",
                durability: 3,
                enhancement: 13
            })).toEqual({
                name: "staff of Magnus",
                durability: 0,
                enhancement: 13
            });
        })

        it('should return an item with durability decreased by 10 if enhancement is 15 or more', () => {
            expect(enhancer.fail({
                name: 'elven sword',
                durability: 30,
                enhancement: 15
            })).toEqual({
                name: 'elven sword',
                durability: 20,
                enhancement: 15
            })
        });

        it('should not return an item with durability < 0 after decreasing by 10 (in the case of enhancement >= 15 and original durability < 10', () => {
            expect(enhancer.fail({
                name: 'elven sword',
                durability: 7,
                enhancement: 16
            })).toEqual({
                name: 'elven sword',
                durability: 0,
                enhancement: 16
            })
        });

        it('should return an item with enhancement decreased by 1 if starting enhancement was greater than 16', () => {
            expect(enhancer.fail({
                name: 'dragonborn armor',
                durability: 100,
                enhancement: 20
            })).toEqual({
                name: 'dragonborn armor',
                durability: 90,
                enhancement: 19
            });
            expect(enhancer.fail({
                name: 'dragonborn armor',
                durability: 70,
                enhancement: 17
            })).toEqual({
                name: 'dragonborn armor',
                durability: 60,
                enhancement: 16
            })
        })

        it('should not drop enhancement on an item that had original enhancement already at 16 or less', () => {
            expect(enhancer.fail({
                name: "novice mage robes",
                durability: 30,
                enhancement: 16
            })).toEqual({
                name: "novice mage robes",
                durability: 20,
                enhancement: 16
            });
            expect(enhancer.fail({
                name: "novice mage robes",
                durability: 30,
                enhancement: 10
            })).toEqual({
                name: "novice mage robes",
                durability: 25,
                enhancement: 10
            });
        })
    })
})