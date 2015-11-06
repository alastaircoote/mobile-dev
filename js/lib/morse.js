
var map = {
  'A': '.-',
  'B': '-...',
  'C': '-.-.',
  'D': '-..',
  'E': '.',
  'F': '..-.',
  'G': '--.',
  'H': '....',
  'I': '..',
  'J': '.---',
  'K': '-.-',
  'L': '.-..',
  'M': '--',
  'N': '-.',
  'O': '---',
  'P': '.--.',
  'Q': '--.-',
  'R': '.-.',
  'S': '...',
  'T': '-',
  'U': '..-',
  'V': '...-',
  'W': '.--',
  'X': '-..-',
  'Y': '-.--',
  'Z': '--..',
  'Á': '.--.-', // A with acute accent
  'Ä': '.-.-',  // A with diaeresis
  'É': '..-..', // E with acute accent
  'Ñ': '--.--', // N with tilde
  'Ö': '---.',  // O with diaeresis
  'Ü': '..--',  // U with diaeresis
  '1': '.----',
  '2': '..---',
  '3': '...--',
  '4': '....-',
  '5': '.....',
  '6': '-....',
  '7': '--...',
  '8': '---..',
  '9': '----.',
  '0': '-----',
  ',': '--..--',  // comma
  '.': '.-.-.-',  // period
  '?': '..--..',  // question mark
  ';': '-.-.-',   // semicolon
  ':': '---...',  // colon
  '/': '-..-.',   // slash
  '-': '-....-',  // dash
  "'": '.----.',  // apostrophe
  '()': '-.--.-', // parenthesis
  '_': '..--.-',  // underline
  '@': '.--.-.',  // at symbol from http://www.learnmorsecode.com/
  ' ': '.......'
};
var tree = {
  '.': {
    stop: 'E',
    '.': {
      stop: 'I',
      '.': {
        stop: 'S',
        '.': {
          stop: 'H',
          '.': {
            stop: '5'
          },
          '-': {
            stop: '4'
          }
        },
        '-': {
          stop: 'V',
          '.': {
            stop: 'Ś'
          },
          '-': {
            stop: '3'
          }
        }
      },
      '-': {
        stop: 'U',
        '.': {
          stop: 'F',
          // note lack of -
          '.': {
            stop: 'É'
          }
        },
        '_': {
          stop: 'Ü',
          '.': {
            stop: 'Ð',
            '.': {
              stop: '?'
            },
            '-': {
              stop: '_'
            }
          },
          '-': {
            stop: '2'
          }
        }
      }
    },
    '-': {
      stop: 'A',
      '.': {
        stop: 'R',
        '.': {
          stop: 'L',
          // note lack of .
          '-': {
            stop: 'È',
            '.': {
              stop: '"'
            }
          }
        },
        '-': {
          stop: 'Ä',
          // note lack of -
          '.': {
            stop: '+',
            // note lack of .
            '-': {
              stop: '.'
            }
          }
        }
      },
      '-': {
        stop: 'W',
        '.': {
          stop: 'P',
          // '.': {},
          // TODO can't replicate character -_-
          '-': {
            stop: 'À',
            // note lack of -
            '.': {
              stop: '@'
            }
          }
        },
        '-': {
          stop: 'J',
          '.': {
            stop: 'Ĵ'
          },
          '-': {
            stop: '1',
            // note lack of -
            '.': {
              stop: "'"
            }
          }
        }
      }
    }
  },
  '-': {
    stop: 'T',
    '.': {
      stop: 'N',
      '.': {
        stop: 'D',
        '.': {
          stop: 'B',
          '.': {
            stop: '6',
            // notive lack of .
            '-': {
              stop: '-'
            }
          },
          '-': {
            stop: '='
          }
        },
        '-': {
          stop: 'X',
          // notice lack of -
          '.': {
            stop: '/'
          }
        }
      },
      '-': {
        stop: 'K',
        '.': {
          stop: 'C',
          '.': {
            stop: 'Ç'
          },
          '-': {
            // notice lack of stop
            '.': {
              stop: ';'
            },
            '-': {
              stop: '!'
            }
          }
        },
        '-': {
          stop: 'Y',
          // notice lack of -
          '.': {
            stop: 'Ĥ',
            // notice lack of .
            '-': {
              stop: '()'
            }
          }
        }
      }
    },
    '-': {
      stop: 'M',
      '.': {
        stop: 'G',
        '.': {
          stop: 'Z',
          '.': {
            stop: '7'
          },
          '-': {
            // note lack of stop
            // note lack of .
            '-': {
              stop: ','
            }
          }
        },
        '-': {
          stop: 'Q',
          '.': {
            stop: 'Ĝ'
          },
          '-': {
            stop: 'Ñ'
          }
        }
      },
      '-': {
        stop: 'O',
        '.': {
          stop: 'Ö',
          // note lack of -
          '.': {
            stop: '8',
            // note lack of -
            '.': {
              stop: ':'
            }
          }
        },
        '-': {
          stop: 'CH', // is there a digraph for this?
          '.': {
            stop: '9'
          },
          '-': {
            stop: '0'
          }
        }
      }
    }
  }
};

window.morseEncode = function(obj) {
  return maybeRecurse(obj, encodeMorseString);

  function encodeMorseString (str) {
    var ret = str.split('');
    for (var j in ret) {
      ret[j] = map[ret[j].toUpperCase()] || '?';
    }
    return ret.join(' ');
  }
}

window.morseDecode = function(obj, dichotomic) {
  return maybeRecurse(obj, decodeMorseString);

  function decodeMorseString (str) {
    var ret = str.split(' ');
    for (var i in ret) {
      if (!dichotomic) {
        ret[i] = decodeCharacterByMap(ret[i]);
      } else {
        ret[i] = decodeCharacterByDichotomy(ret[i]);
      }
    }
    return ret.join('');
  }
}

function maybeRecurse (obj, func) {
  if (!obj.pop) {
    return func(obj);
  }

  var clone = [];
  var i = 0;
  for (; i < obj.length; i++) {
    clone[i] = func(obj[i]);
  }
  return clone;
}

function decodeCharacterByMap (char) {
  for (var i in map) {
    if (map[i] == char) {
      return i;
    }
  }
  return ' ';
}

function decodeCharacterByDichotomy (char) {
  var sub = char.split('');
  return traverseNodeWithCharacters(tree, sub);

  function traverseNodeWithCharacters (node, chars) {
    var cur = chars.shift();
    if (!node[cur]) {
      return node.stop || '?';
    }
    return traverseNodeWithCharacters(node[cur], chars);
  }
}
