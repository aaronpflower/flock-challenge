import test from 'ava';
import Calculator from './client/calculator'

test('add', async t => {
    let add = await Calculator.add(4, 5)
    t.is(add, 9)
})

test('subtract', async t => {
    let subtract = await Calculator.subtract(4, 5)
    t.is(subtract, -1)
})

test('mult', async t => {
    let mult = await Calculator.mulitply(5, 5)
    t.is(mult, 25)
})

test('divide', async t => {
    let divide = await Calculator.divide(20, 5)
    t.is(divide, 4)
})