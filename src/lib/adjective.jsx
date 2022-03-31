const safe = [
    'sick',
    'flirtatious',
    'spicy',
    'empty',
    'trashy',
    'recreational',
    'cold',
    'underwater',
    'clumsy',
    'greasy',
    'grumpy',
    'creepy',
    'high',
    'lonely',
    'messy',
    'loud',
    'juicy',
    'itchy',
    'blushing',
    'slippery',
    'icy',
    'dizzy',
    'pregnant',
    'sneaky',
    "stretchy",
    "long",
    "stout",
    "inflated",
    "grabby",
    "broken",
    "fuzzy",
    "toothy",
    "flying",
    "unicycling",
    "annoying",
    "ugly",
    "crusty",
    "old",
    "kawaii",
    'sleepy',
    'hot',
    'crumbly',
    'bouncy',
    'sprinkled',
    'slobbery',
    'magnetic',
    'chubby',
    'glamorous',
    'obedient',
    'confused'
]

const unsafe = [
    'kinky',
    'depressed',
    'trippy',
    'dead',
    'bougie',
    "starving",
    'violent'
]

function adjective(safety) {
    //tighen up into ternary once App has sfw checkbox
    if (safety) {
        console.log('I am safe')
        return safe
    } else {
        console.log('I am not safe!')
        return safe.concat(...unsafe)
    }
}

export default adjective