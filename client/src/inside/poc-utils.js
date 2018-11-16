
export function getPhrase (cnt) {
  let p = []
  for (var i = 0; i < cnt; i++) {
    p.push(getWord())
  }
  return p.join(' ')
}
export function getWord () {
  var r = Math.floor(Math.random() * wordList.length)
  return wordList[r]
}
export function getName () {
  var r = Math.floor(Math.random() * nameList.length)
  return nameList[r]
}

const wordList = ['abhorrent',
  'acceptable',
  'acid',
  'acoustics',
  'action',
  'actor',
  'ad hoc',
  'adjoining',
  'adorable',
  'adventurous',
  'advertisement',
  'amused',
  'animated',
  'answer',
  'apologise',
  'appliance',
  'appreciate',
  'argue',
  'astonishing',
  'auspicious',
  'average',
  'avoid',
  'ban',
  'berserk',
  'bird',
  'bit',
  'bite',
  'bleach',
  'bless',
  'boat',
  'brief',
  'bubble',
  'busy',
  'call',
  'camp',
  'caption',
  'care',
  'cat',
  'cause',
  'cent',
  'certain',
  'changeable',
  'charge',
  'cheap',
  'cheerful',
  'circle',
  'clever',
  'coach',
  'coast',
  'coil',
  'communicate',
  'competition',
  'complete',
  'condemned',
  'control',
  'creepy',
  'crook',
  'crowd',
  'crown',
  'cruel',
  'cub',
  'cumbersome',
  'cure',
  'curly',
  'current',
  'daily',
  'death',
  'debt',
  'deceive',
  'delightful',
  'desert',
  'detect',
  'difficult',
  'dinosaurs',
  'direful',
  'discovery',
  'discreet',
  'disgusting',
  'dolls',
  'donkey',
  'door',
  'doubt',
  'doubtful',
  'drag',
  'drawer',
  'dreary',
  'driving',
  'drown',
  'drum',
  'dusty',
  'ear',
  'easy',
  'eight',
  'elbow',
  'electric',
  'enchanting',
  'engine',
  'enormous',
  'exciting',
  'exclusive',
  'expensive',
  'fabulous',
  'faithful',
  'familiar',
  'fancy',
  'far-flung',
  'faulty',
  'field',
  'finicky',
  'five',
  'flaky',
  'flight',
  'flippant',
  'flock',
  'fluffy',
  'fly',
  'four',
  'fresh',
  'friends',
  'frighten',
  'fuel',
  'furtive',
  'fuzzy',
  'gamy',
  'general',
  'glamorous',
  'gray',
  'grease',
  'grip',
  'groan',
  'growth',
  'gullible',
  'guttural',
  'half',
  'handle',
  'harass',
  'harm',
  'hat',
  'head',
  'heat',
  'help',
  'helpful',
  'here',
  'holistic',
  'honourable',
  'hook',
  'hover',
  'hypnotic',
  'ice',
  'imminent',
  'improve',
  'inform',
  'inject',
  'injure',
  'intelligent',
  'interest',
  'interesting',
  'invincible',
  'island',
  'joke',
  'judge',
  'kettle',
  'kindhearted',
  'knot',
  'land',
  'learned',
  'lethal',
  'lettuce',
  'level',
  'likeable',
  'lock',
  'locket',
  'loud',
  'makeshift',
  'male',
  'mask',
  'material',
  'materialistic',
  'measure',
  'mess up',
  'milk',
  'mind',
  'minister',
  'mist',
  'mom',
  'mundane',
  'neighborly',
  'nerve',
  'new',
  'nine',
  'nod',
  'noiseless',
  'null',
  'offend',
  'offer',
  'old',
  'one',
  'optimal',
  'outrageous',
  'overt',
  'peel',
  'perfect',
  'periodic',
  'pets',
  'picayune',
  'planes',
  'plant',
  'pleasure',
  'polite',
  'pop',
  'pour',
  'power',
  'premium',
  'pricey',
  'produce',
  'psychotic',
  'punishment',
  'quack',
  'quarter',
  'rail',
  'railway',
  'rapid',
  'reach',
  'realise',
  'recondite',
  'record',
  'reign',
  'relieved',
  'religion',
  'remarkable',
  'remind',
  'repair',
  'resonant',
  'rhythm',
  'rifle',
  'rock',
  'rough',
  'ruddy',
  'rule',
  'scared',
  'scary',
  'screeching',
  'screw',
  'seashore',
  'secret',
  'secretary',
  'serious',
  'sheep',
  'shiny',
  'shirt',
  'shop',
  'silent',
  'sloppy',
  'slow',
  'songs',
  'soothe',
  'sour',
  'spark',
  'sparkling',
  'spell',
  'spiritual',
  'spoon',
  'squash',
  'stamp',
  'step',
  'stick',
  'stiff',
  'stitch',
  'stomach',
  'stone',
  'stormy',
  'strong',
  'stuff',
  'suggestion',
  'superb',
  'support',
  'suspend',
  'synonymous',
  'talented',
  'tame',
  'taste',
  'tasteful',
  'tasty',
  'tax',
  'tendency',
  'test',
  'thirsty',
  'thumb',
  'time',
  'tiresome',
  'toes',
  'tongue',
  'toothpaste',
  'toothsome',
  'top',
  'tour',
  'trashy',
  'tray',
  'treatment',
  'trousers',
  'trucks',
  'true',
  'tub',
  'tug',
  'turn',
  'two',
  'unbecoming',
  'uneven',
  'unite',
  'unkempt',
  'unnatural',
  'unwieldy',
  'use',
  'useful',
  'vacuous',
  'vague',
  'valuable',
  'vast',
  'verdant',
  'versed',
  'victorious',
  'voyage',
  'wail',
  'wash',
  'wet',
  'whimsical',
  'whip',
  'whirl',
  'wide',
  'wide-eyed',
  'wild',
  'wire',
  'wiry',
  'woman',
  'wood',
  'wool',
  'worm',
  'wrestle',
  'yellow',
  'yummy',
  'zesty'
]

const nameList = [
  'Livia Kerekes',
  'Sidney Mroz',
  'Alida Maltby',
  'Magdalen Virgil',
  'Sarai Lucien',
  'Evangeline Moctezuma',
  'Otis Hosford',
  'Tari Rowell',
  'Alyssa Recker',
  'Janelle Clark',
  'Lois Marchi',
  'Tanya Brandenberger',
  'Naomi Nanez',
  'Sharon Glen',
  'Ashlea Works',
  'Gaylene Gustavson',
  'Wendi Medlen',
  'Valrie Steverson',
  'Kiara Krawiec',
  'Merle Garner'
]
