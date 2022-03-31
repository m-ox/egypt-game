const safe = [
    'sick',
    'trippy',
    'flirtatious',
    'kinky',
    'depressed',
    'spicy',
    'empty',
    'dead',
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
    'bougie',
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
    "starving",
    "annoying",
    "ugly",
    "crusty",
    "old",
    "kawaii",
    'sleepy',
    'hot',
    'crumbly',
    'violent',
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
    'sexy'
]

function adjective(safety) {
    if (safety) {
        return safe
    } else {
        return safe.concat(...unsafe)
    }
}

export default adjective