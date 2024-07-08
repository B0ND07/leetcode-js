/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let val = init
    const increment = () => {
        return val += 1

    }

    const decrement = () => {
        return val -= 1

    }
    const reset = () => {
        return val = init

    }
    return { increment, reset, decrement }

};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

//----------------------------------------------------------------------------------------------------

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let count = init;

    return {
        increment() {
            count += 1;
            return count;
        },
        decrement() {
            count -= 1;
            return count;
        },
        reset() {
            count = init;
            return count;
        }
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
