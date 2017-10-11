/**
 * Created by kal on 8/1/17.
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/distinctUntilChanged';

@Injectable()
export class AtomsService {

  /*
   * Build in samples
   */

  // Sample 1 - Original built-in sample
  private atomsSample1: any = {
    'result': {
        'atoms': [{
                'outgoing': [2, 3],
                'handle': 1,
                'name': '',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [],
                'type': 'EquivalenceLink'
  }, {
                'outgoing': [],
                'handle': 2,
                'name': 'LOC285484',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [1],
                'type': 'PredicateNode'
  }, {
                'outgoing': [4, 5],
                'handle': 3,
                'name': '',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [1],
                'type': 'LambdaLink'
  }, {
                'outgoing': [],
                'handle': 4,
                'name': '$X',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [3, 7],
                'type': 'VariableNode'
  }, {
                'outgoing': [6, 7],
                'handle': 5,
                'name': '',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [3],
                'type': 'EvaluationLink'
  }, {
                'outgoing': [],
                'handle': 6,
                'name': 'overexpressed',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [5],
                'type': 'PredicateNode'
  }, {
                'outgoing': [8, 4],
                'handle': 7,
                'name': '',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [5],
                'type': 'ListLink'
  }, {
                'outgoing': [],
                'handle': 8,
                'name': 'LOC285483',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [7],
                'type': 'GeneNode'
  }, {
                'outgoing': [10, 11],
                'handle': 9,
                'name': '',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [],
                'type': 'AndLink'
  }, {
                'outgoing': [],
                'handle': 10,
                'name': 'CCR6',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [9, 12],
                'type': 'GeneNode'
  }, {
                'outgoing': [],
                'handle': 11,
                'name': 'GO:0009986',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [9],
                'type': 'ConceptNode'
  }, {
                'outgoing': [10, 13],
                'handle': 12,
                'name': '',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [],
                'type': 'MemberLink'
  }, {
                'outgoing': [],
                'handle': 13,
                'name': 'GO:0010634',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [12],
                'type': 'ConceptNode'
    }]
  }
};

// Sample 2 - Like sample 1, but added some non-zero STI values
private atomsSample2: any = {
    'result': {
        'atoms': [{
                'outgoing': [2, 3],
                'handle': 1,
                'name': '',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [],
                'type': 'EquivalenceLink'
  }, {
                'outgoing': [],
                'handle': 2,
                'name': 'LOC285484',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 18,
                    'vlti': false
                },
                'incoming': [1],
                'type': 'PredicateNode'
  }, {
                'outgoing': [4, 5],
                'handle': 3,
                'name': '',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [1],
                'type': 'LambdaLink'
  }, {
                'outgoing': [],
                'handle': 4,
                'name': '$X',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 22,
                    'vlti': false
                },
                'incoming': [3, 7],
                'type': 'VariableNode'
  }, {
                'outgoing': [6, 7],
                'handle': 5,
                'name': '',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [3],
                'type': 'EvaluationLink'
  }, {
                'outgoing': [],
                'handle': 6,
                'name': 'overexpressed',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [5],
                'type': 'PredicateNode'
  }, {
                'outgoing': [8, 4],
                'handle': 7,
                'name': '',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [5],
                'type': 'ListLink'
  }, {
                'outgoing': [],
                'handle': 8,
                'name': 'LOC285483',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [7],
                'type': 'GeneNode'
  }, {
                'outgoing': [10, 11],
                'handle': 9,
                'name': '',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 25,
                    'vlti': false
                },
                'incoming': [],
                'type': 'AndLink'
  }, {
                'outgoing': [],
                'handle': 10,
                'name': 'CCR6',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 13,
                    'vlti': false
                },
                'incoming': [9, 12],
                'type': 'GeneNode'
  }, {
                'outgoing': [],
                'handle': 11,
                'name': 'GO:0009986',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [9],
                'type': 'ConceptNode'
  }, {
                'outgoing': [10, 13],
                'handle': 12,
                'name': '',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 3,
                    'vlti': false
                },
                'incoming': [],
                'type': 'MemberLink'
    }, {
                  'outgoing': [],
                  'handle': 13,
                  'name': 'GO:0010634',
                  'truthvalue': {
                      'type': 'simple',
                      'details': {
                          'count': 0.0,
                          'confidence': 0.0,
                          'strength': 1.0
                      }
                  },
                  'attentionvalue': {
                      'lti': 0,
                      'sti': 0,
                      'vlti': false
                  },
                  'incoming': [12],
                  'type': 'ConceptNode'
    }]
  }
};

// Sample 3 - Like sample 2 w/some non-zero STI values, but also added 2 additional 3 node clusters
private atomsSample3: any = {
    'result': {
        'atoms': [{
                'outgoing': [2, 3],
                'handle': 1,
                'name': '',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [],
                'type': 'EquivalenceLink'
    }, {
                'outgoing': [],
                'handle': 2,
                'name': 'LOC285484',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 18,
                    'vlti': false
                },
                'incoming': [1],
                'type': 'PredicateNode'
    }, {
                'outgoing': [4, 5],
                'handle': 3,
                'name': '',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [1],
                'type': 'LambdaLink'
    }, {
                'outgoing': [],
                'handle': 4,
                'name': '$X',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 22,
                    'vlti': false
                },
                'incoming': [3, 7],
                'type': 'VariableNode'
    }, {
                'outgoing': [6, 7],
                'handle': 5,
                'name': '',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [3],
                'type': 'EvaluationLink'
    }, {
                'outgoing': [],
                'handle': 6,
                'name': 'overexpressed',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [5],
                'type': 'PredicateNode'
    }, {
                'outgoing': [8, 4],
                'handle': 7,
                'name': '',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [5],
                'type': 'ListLink'
    }, {
                'outgoing': [],
                'handle': 8,
                'name': 'LOC285483',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [7],
                'type': 'GeneNode'
    }, {
                'outgoing': [10, 11],
                'handle': 9,
                'name': '',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 25,
                    'vlti': false
                },
                'incoming': [],
                'type': 'AndLink'
    }, {
                'outgoing': [],
                'handle': 10,
                'name': 'CCR6',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 13,
                    'vlti': false
                },
                'incoming': [9, 12],
                'type': 'GeneNode'
    }, {
                'outgoing': [],
                'handle': 11,
                'name': 'GO:0009986',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [9],
                'type': 'ConceptNode'
    }, {
                'outgoing': [10, 13],
                'handle': 12,
                'name': '',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 3,
                    'vlti': false
                },
                'incoming': [],
                'type': 'MemberLink'
    }, {
                'outgoing': [],
                'handle': 13,
                'name': 'GO:0010634',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [12],
                'type': 'ConceptNode'
    }, {
                'outgoing': [15, 16],
                'handle': 14,
                'name': '',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 25,
                    'vlti': false
                },
                'incoming': [],
                'type': 'AndLink'
    }, {
                'outgoing': [],
                'handle': 15,
                'name': 'CCR7',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 9,
                    'vlti': false
                },
                'incoming': [14, 17],
                'type': 'GeneNode'
    }, {
                'outgoing': [],
                'handle': 16,
                'name': 'GO:409986',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [14],
                'type': 'ConceptNode'
    }, {
                'outgoing': [15, 18],
                'handle': 17,
                'name': '',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 3,
                    'vlti': false
                },
                'incoming': [],
                'type': 'MemberLink'
    }, {
                'outgoing': [],
                'handle': 18,
                'name': 'GO:4010634',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [17],
                'type': 'ConceptNode'
    }, {
                'outgoing': [20, 21],
                'handle': 19,
                'name': '',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [],
                'type': 'AndLink'
    }, {
                'outgoing': [],
                'handle': 20,
                'name': 'CCR8',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [19, 22],
                'type': 'GeneNode'
    }, {
                'outgoing': [],
                'handle': 21,
                'name': 'GO:509986',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [19],
                'type': 'ConceptNode'
    }, {
                'outgoing': [20, 23],
                'handle': 22,
                'name': '',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 3,
                    'vlti': false
                },
                'incoming': [],
                'type': 'MemberLink'
    }, {
                'outgoing': [],
                'handle': 23,
                'name': 'GO:4020634',
                'truthvalue': {
                    'type': 'simple',
                    'details': {
                        'count': 0.0,
                        'confidence': 0.0,
                        'strength': 1.0
                    }
                },
                'attentionvalue': {
                    'lti': 0,
                    'sti': 0,
                    'vlti': false
                },
                'incoming': [22],
                'type': 'ConceptNode'
    }]
  }
};

// Sample 4 - Same as src\assets\atoms.json
private atomsSample4: any = {
    'result': {
        'atoms': [{
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 132,
            'incoming': [129, 130, 131],
            'name': 'he@0dc3eaff-5250-4a13-a49c-b823f1329c73',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.0010000000474974513
                },
                'type': 'simple'
            },
            'type': 'ConceptNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 10,
                'vlti': false
            },
            'handle': 134,
            'incoming': [133, 135],
            'name': 'speed',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.0010000000474974513
                },
                'type': 'simple'
            },
            'type': 'ConceptNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 4,
                'vlti': false
            },
            'handle': 137,
            'incoming': [133, 135, 136],
            'name': 'quickly@7c8c7ca3-44bd-46b9-9e09-941254ac91d7',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.0010000000474974513
                },
                'type': 'simple'
            },
            'type': 'ConceptNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 141,
            'incoming': [138, 139, 140],
            'name': 'he@be348474-26a7-4bb7-b37a-1cb282327d73',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.0010000000474974513
                },
                'type': 'simple'
            },
            'type': 'ConceptNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 3,
            'incoming': [129, 138, 2],
            'name': 'he',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.0010000000474974513
                },
                'type': 'simple'
            },
            'type': 'ConceptNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 6,
            'incoming': [2, 4, 5],
            'name': 'he@5c3978be-30a7-493b-b276-ebaf4a879669',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.0010000000474974513
                },
                'type': 'simple'
            },
            'type': 'ConceptNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 2,
                'vlti': false
            },
            'handle': 143,
            'incoming': [142],
            'name': '44.000000',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'NumberNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 145,
            'incoming': [144],
            'name': '43.000000',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'NumberNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 147,
            'incoming': [146],
            'name': '38.000000',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'NumberNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 10,
                'vlti': false
            },
            'handle': 149,
            'incoming': [148],
            'name': '39.000000',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'NumberNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 151,
            'incoming': [150],
            'name': '41.000000',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'NumberNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 14,
            'incoming': [13],
            'name': '30.000000',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'NumberNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 153,
            'incoming': [152],
            'name': '40.000000',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'NumberNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 10,
            'incoming': [9],
            'name': '32.000000',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'NumberNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 155,
            'incoming': [154],
            'name': '35.000000',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'NumberNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 16,
            'incoming': [15],
            'name': '29.000000',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'NumberNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 8,
            'incoming': [7],
            'name': '33.000000',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'NumberNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 157,
            'incoming': [156],
            'name': '42.000000',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'NumberNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 12,
            'incoming': [11],
            'name': '31.000000',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'NumberNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 159,
            'incoming': [158],
            'name': '37.000000',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'NumberNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 161,
            'incoming': [160],
            'name': '34.000000',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'NumberNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 163,
            'incoming': [162],
            'name': '36.000000',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'NumberNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 170,
            'incoming': [169],
            'name': '',
            'outgoing': [164, 129, 165, 166, 167, 168],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'SetLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 177,
            'incoming': [176],
            'name': '',
            'outgoing': [171, 138, 172, 133, 135, 173, 174, 175],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'SetLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 23,
            'incoming': [22],
            'name': '',
            'outgoing': [17, 2, 18, 19, 20, 21],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'SetLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 139,
            'incoming': [172, 175],
            'name': '',
            'outgoing': [141],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.9900000095367432
                },
                'type': 'simple'
            },
            'type': 'ListLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 130,
            'incoming': [165, 167],
            'name': '',
            'outgoing': [132],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.9900000095367432
                },
                'type': 'simple'
            },
            'type': 'ListLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 182,
            'incoming': [180, 181],
            'name': '',
            'outgoing': [178, 179],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ListLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 186,
            'incoming': [184, 185],
            'name': '',
            'outgoing': [178, 183],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ListLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 190,
            'incoming': [188, 189],
            'name': '',
            'outgoing': [187, 179],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ListLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 195,
            'incoming': [193, 194],
            'name': '',
            'outgoing': [191, 192],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ListLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 199,
            'incoming': [197, 198],
            'name': '',
            'outgoing': [191, 196],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ListLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 43,
            'incoming': [],
            'name': '',
            'outgoing': [1, 42],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ListLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 41,
            'incoming': [39, 40],
            'name': '',
            'outgoing': [24, 38],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ListLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 202,
            'incoming': [201],
            'name': '',
            'outgoing': [200, 192],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ListLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 35,
            'incoming': [33, 34],
            'name': '',
            'outgoing': [29, 25],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ListLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 204,
            'incoming': [203],
            'name': '',
            'outgoing': [179, 187],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ListLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 207,
            'incoming': [205, 206],
            'name': '',
            'outgoing': [192, 200],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ListLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 32,
            'incoming': [30, 31],
            'name': '',
            'outgoing': [24, 29],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ListLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 210,
            'incoming': [208, 209],
            'name': '',
            'outgoing': [191, 200],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ListLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 28,
            'incoming': [26, 27],
            'name': '',
            'outgoing': [24, 25],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ListLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 215,
            'incoming': [212, 213, 214],
            'name': '',
            'outgoing': [179, 211],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ListLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 4,
            'incoming': [18, 20],
            'name': '',
            'outgoing': [6],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.9900000095367432
                },
                'type': 'simple'
            },
            'type': 'ListLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 218,
            'incoming': [216, 217],
            'name': '',
            'outgoing': [178, 187],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ListLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 220,
            'incoming': [],
            'name': '',
            'outgoing': [1, 219],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ListLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 37,
            'incoming': [36],
            'name': '',
            'outgoing': [25, 29],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ListLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 222,
            'incoming': [],
            'name': '',
            'outgoing': [1, 221],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ListLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 168,
            'incoming': [170],
            'name': '',
            'outgoing': [223, 47],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.0010000000474974513
                },
                'type': 'simple'
            },
            'type': 'InheritanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 129,
            'incoming': [170],
            'name': '',
            'outgoing': [132, 3],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.9900000095367432
                },
                'type': 'simple'
            },
            'type': 'InheritanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 174,
            'incoming': [177],
            'name': '',
            'outgoing': [224, 47],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.0010000000474974513
                },
                'type': 'simple'
            },
            'type': 'InheritanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 173,
            'incoming': [177],
            'name': '',
            'outgoing': [225, 45],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.9900000095367432
                },
                'type': 'simple'
            },
            'type': 'InheritanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 133,
            'incoming': [177],
            'name': '',
            'outgoing': [137, 134],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.9900000095367432
                },
                'type': 'simple'
            },
            'type': 'InheritanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 226,
            'incoming': [],
            'name': '',
            'outgoing': [200, 45],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'InheritanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 227,
            'incoming': [],
            'name': '',
            'outgoing': [192, 54],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'InheritanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 21,
            'incoming': [23],
            'name': '',
            'outgoing': [46, 47],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.0010000000474974513
                },
                'type': 'simple'
            },
            'type': 'InheritanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 228,
            'incoming': [],
            'name': '',
            'outgoing': [187, 48],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'InheritanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 51,
            'incoming': [],
            'name': '',
            'outgoing': [29, 50],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'InheritanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 2,
            'incoming': [23],
            'name': '',
            'outgoing': [6, 3],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.9900000095367432
                },
                'type': 'simple'
            },
            'type': 'InheritanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 19,
            'incoming': [23],
            'name': '',
            'outgoing': [44, 45],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.9900000095367432
                },
                'type': 'simple'
            },
            'type': 'InheritanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 229,
            'incoming': [],
            'name': '',
            'outgoing': [200, 56],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'InheritanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 53,
            'incoming': [],
            'name': '',
            'outgoing': [29, 52],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'InheritanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 166,
            'incoming': [170],
            'name': '',
            'outgoing': [230, 45],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.9900000095367432
                },
                'type': 'simple'
            },
            'type': 'InheritanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 49,
            'incoming': [],
            'name': '',
            'outgoing': [29, 48],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'InheritanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 57,
            'incoming': [],
            'name': '',
            'outgoing': [25, 56],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'InheritanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 231,
            'incoming': [],
            'name': '',
            'outgoing': [179, 56],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'InheritanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 138,
            'incoming': [177],
            'name': '',
            'outgoing': [141, 3],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.9900000095367432
                },
                'type': 'simple'
            },
            'type': 'InheritanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 135,
            'incoming': [177],
            'name': '',
            'outgoing': [232, 137],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.9900000095367432
                },
                'type': 'simple'
            },
            'type': 'InheritanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 55,
            'incoming': [],
            'name': '',
            'outgoing': [29, 54],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'InheritanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 233,
            'incoming': [],
            'name': '',
            'outgoing': [192, 52],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'InheritanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 234,
            'incoming': [],
            'name': '',
            'outgoing': [192, 50],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'InheritanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 235,
            'incoming': [],
            'name': '',
            'outgoing': [187, 54],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'InheritanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 58,
            'incoming': [],
            'name': '',
            'outgoing': [25, 45],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'InheritanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 236,
            'incoming': [],
            'name': '',
            'outgoing': [179, 45],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'InheritanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 237,
            'incoming': [],
            'name': '',
            'outgoing': [192, 48],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'InheritanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 238,
            'incoming': [],
            'name': '',
            'outgoing': [187, 52],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'InheritanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 239,
            'incoming': [],
            'name': '',
            'outgoing': [187, 50],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'InheritanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 232,
            'incoming': [135],
            'name': '',
            'outgoing': [225],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.9900000095367432
                },
                'type': 'simple'
            },
            'type': 'SatisfyingSetLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 164,
            'incoming': [170],
            'name': '',
            'outgoing': [230, 59],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.9900000095367432
                },
                'type': 'simple'
            },
            'type': 'ImplicationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 171,
            'incoming': [177],
            'name': '',
            'outgoing': [225, 59],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.9900000095367432
                },
                'type': 'simple'
            },
            'type': 'ImplicationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 17,
            'incoming': [23],
            'name': '',
            'outgoing': [44, 59],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.9900000095367432
                },
                'type': 'simple'
            },
            'type': 'ImplicationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 165,
            'incoming': [170],
            'name': '',
            'outgoing': [230, 130],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.9900000095367432
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 203,
            'incoming': [],
            'name': '',
            'outgoing': [69, 204],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 181,
            'incoming': [],
            'name': '',
            'outgoing': [240, 182],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 175,
            'incoming': [177],
            'name': '',
            'outgoing': [60, 139],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.9900000095367432
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 180,
            'incoming': [],
            'name': '',
            'outgoing': [67, 182],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 217,
            'incoming': [],
            'name': '',
            'outgoing': [241, 218],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 216,
            'incoming': [],
            'name': '',
            'outgoing': [64, 218],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 188,
            'incoming': [],
            'name': '',
            'outgoing': [61, 190],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 184,
            'incoming': [],
            'name': '',
            'outgoing': [65, 186],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 214,
            'incoming': [],
            'name': '',
            'outgoing': [242, 215],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 27,
            'incoming': [],
            'name': '',
            'outgoing': [68, 28],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 213,
            'incoming': [],
            'name': '',
            'outgoing': [243, 215],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 36,
            'incoming': [],
            'name': '',
            'outgoing': [69, 37],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 40,
            'incoming': [],
            'name': '',
            'outgoing': [66, 41],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 39,
            'incoming': [],
            'name': '',
            'outgoing': [65, 41],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 189,
            'incoming': [],
            'name': '',
            'outgoing': [244, 190],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 33,
            'incoming': [],
            'name': '',
            'outgoing': [63, 35],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 185,
            'incoming': [],
            'name': '',
            'outgoing': [245, 186],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 30,
            'incoming': [],
            'name': '',
            'outgoing': [62, 32],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 34,
            'incoming': [],
            'name': '',
            'outgoing': [61, 35],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 167,
            'incoming': [170],
            'name': '',
            'outgoing': [60, 130],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.9900000095367432
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 20,
            'incoming': [23],
            'name': '',
            'outgoing': [60, 4],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.9900000095367432
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 212,
            'incoming': [],
            'name': '',
            'outgoing': [246, 215],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 205,
            'incoming': [],
            'name': '',
            'outgoing': [61, 207],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 206,
            'incoming': [],
            'name': '',
            'outgoing': [247, 207],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 194,
            'incoming': [],
            'name': '',
            'outgoing': [248, 195],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 193,
            'incoming': [],
            'name': '',
            'outgoing': [64, 195],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 172,
            'incoming': [177],
            'name': '',
            'outgoing': [225, 139],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.9900000095367432
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 208,
            'incoming': [],
            'name': '',
            'outgoing': [67, 210],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 18,
            'incoming': [23],
            'name': '',
            'outgoing': [44, 4],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.9900000095367432
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 31,
            'incoming': [],
            'name': '',
            'outgoing': [64, 32],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 197,
            'incoming': [],
            'name': '',
            'outgoing': [65, 199],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 198,
            'incoming': [],
            'name': '',
            'outgoing': [249, 199],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 26,
            'incoming': [],
            'name': '',
            'outgoing': [67, 28],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 201,
            'incoming': [],
            'name': '',
            'outgoing': [69, 202],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 209,
            'incoming': [],
            'name': '',
            'outgoing': [250, 210],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'EvaluationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 230,
            'incoming': [164, 165, 166, 251],
            'name': 'runs@3c28a178-5584-4800-bef7-68f7c25a9f78',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.0010000000474974513
                },
                'type': 'simple'
            },
            'type': 'PredicateNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 59,
            'incoming': [164, 171, 17],
            'name': 'run',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.0010000000474974513
                },
                'type': 'simple'
            },
            'type': 'PredicateNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 10,
                'vlti': false
            },
            'handle': 225,
            'incoming': [171, 172, 232, 173, 252],
            'name': 'runs@ab2940c8-f997-4d4d-9200-80c7ab661019',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.0010000000474974513
                },
                'type': 'simple'
            },
            'type': 'PredicateNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 14,
                'vlti': false
            },
            'handle': 44,
            'incoming': [17, 18, 19, 70],
            'name': 'runs@838adddd-073f-4e19-8e53-2f6b398809ea',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.0010000000474974513
                },
                'type': 'simple'
            },
            'type': 'PredicateNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 10,
                'vlti': false
            },
            'handle': 1,
            'incoming': [43, 222, 220],
            'name': '# New Parsed Sentence',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'AnchorNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 10,
                'vlti': false
            },
            'handle': 255,
            'incoming': [253, 254],
            'name': '🌎',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 10,
                'vlti': false
            },
            'handle': 72,
            'incoming': [256, 257, 71],
            'name': 'run',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 74,
            'incoming': [258, 73, 259],
            'name': 'runs',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 77,
            'incoming': [260, 261, 75, 76, 262, 263],
            'name': '.',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 80,
            'incoming': [264, 265, 266, 78, 267, 79],
            'name': 'he',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 82,
            'incoming': [268, 81, 269],
            'name': '###LEFT-WALL###',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 30,
                'vlti': false
            },
            'handle': 270,
            'incoming': [],
            'name': '',
            'outgoing': [245, 65],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 253,
            'incoming': [],
            'name': '',
            'outgoing': [211, 255],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 271,
            'incoming': [],
            'name': '',
            'outgoing': [241, 64],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 264,
            'incoming': [],
            'name': '',
            'outgoing': [187, 80],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 268,
            'incoming': [],
            'name': '',
            'outgoing': [178, 82],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 131,
            'incoming': [],
            'name': '',
            'outgoing': [132, 192],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 251,
            'incoming': [],
            'name': '',
            'outgoing': [230, 200],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 272,
            'incoming': [],
            'name': '',
            'outgoing': [250, 67],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 258,
            'incoming': [],
            'name': '',
            'outgoing': [179, 74],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 273,
            'incoming': [],
            'name': '',
            'outgoing': [249, 65],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 136,
            'incoming': [],
            'name': '',
            'outgoing': [137, 211],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 70,
            'incoming': [],
            'name': '',
            'outgoing': [44, 25],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 269,
            'incoming': [],
            'name': '',
            'outgoing': [191, 82],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 252,
            'incoming': [],
            'name': '',
            'outgoing': [225, 179],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 274,
            'incoming': [],
            'name': '',
            'outgoing': [244, 61],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 169,
            'incoming': [],
            'name': '',
            'outgoing': [223, 170],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 86,
            'incoming': [],
            'name': '',
            'outgoing': [68, 67],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 85,
            'incoming': [],
            'name': '',
            'outgoing': [66, 65],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 267,
            'incoming': [],
            'name': '',
            'outgoing': [192, 80],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 84,
            'incoming': [],
            'name': '',
            'outgoing': [63, 61],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 275,
            'incoming': [],
            'name': '',
            'outgoing': [247, 61],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 76,
            'incoming': [],
            'name': '',
            'outgoing': [38, 77],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 78,
            'incoming': [],
            'name': '',
            'outgoing': [29, 80],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 83,
            'incoming': [],
            'name': '',
            'outgoing': [62, 64],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 259,
            'incoming': [],
            'name': '',
            'outgoing': [200, 74],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 176,
            'incoming': [],
            'name': '',
            'outgoing': [224, 177],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 73,
            'incoming': [],
            'name': '',
            'outgoing': [25, 74],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 81,
            'incoming': [],
            'name': '',
            'outgoing': [24, 82],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 5,
            'incoming': [],
            'name': '',
            'outgoing': [6, 29],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 276,
            'incoming': [],
            'name': '',
            'outgoing': [242, 243],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 140,
            'incoming': [],
            'name': '',
            'outgoing': [141, 187],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 22,
            'incoming': [],
            'name': '',
            'outgoing': [46, 23],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 263,
            'incoming': [],
            'name': '',
            'outgoing': [196, 77],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 262,
            'incoming': [],
            'name': '',
            'outgoing': [183, 77],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 277,
            'incoming': [],
            'name': '',
            'outgoing': [248, 64],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 278,
            'incoming': [],
            'name': '',
            'outgoing': [240, 67],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ReferenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 221,
            'incoming': [279, 142, 222],
            'name': 'sentence@9f079f5d-052f-47d5-aae4-a0f1c1b8ea93',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'SentenceNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 219,
            'incoming': [280, 146, 220],
            'name': 'sentence@7385a85d-928e-4d89-a87f-6f36a470491e',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'SentenceNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 42,
            'incoming': [43, 87, 7],
            'name': 'sentence@17302cea-0d43-40f0-b454-311c18d6478b',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'SentenceNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 287,
            'incoming': [279, 281, 282, 283, 284, 285, 286],
            'name': 'sentence@9f079f5d-052f-47d5-aae4-a0f1c1b8ea93_parse_0',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.9879999756813049,
                    'count': 65866.53156307897,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ParseNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 293,
            'incoming': [280, 288, 289, 290, 291, 292],
            'name': 'sentence@7385a85d-928e-4d89-a87f-6f36a470491e_parse_0',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.9909999966621399,
                    'count': 88088.85592238154,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ParseNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 93,
            'incoming': [88, 87, 89, 90, 91, 92],
            'name': 'sentence@17302cea-0d43-40f0-b454-311c18d6478b_parse_0',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.9909999966621399,
                    'count': 88088.85592238154,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ParseNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 279,
            'incoming': [],
            'name': '',
            'outgoing': [287, 221],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ParseLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 280,
            'incoming': [],
            'name': '',
            'outgoing': [293, 219],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ParseLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 87,
            'incoming': [],
            'name': '',
            'outgoing': [93, 42],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'ParseLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 183,
            'incoming': [284, 144, 294, 261, 295, 186, 262],
            'name': '.@9d9fdef4-db0f-4ad4-908f-7d397e6eb0d1',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordInstanceNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 29,
            'incoming': [37, 55, 35, 32, 53, 51, 49, 78, 5, 90, 13, 99, 79, 100],
            'name': 'he@5c3978be-30a7-493b-b276-ebaf4a879669',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordInstanceNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 191,
            'incoming': [288, 160, 296, 195, 199, 210, 269],
            'name': 'LEFT-WALL@sentence@7385a85d-928e-4d89-a87f-6f36a470491e_parse_0',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordInstanceNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 179,
            'incoming': [258, 283, 150, 297, 257, 298, 215, 190, 182, 204, 231, 236, 252],
            'name': 'runs@ab2940c8-f997-4d4d-9200-80c7ab661019',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordInstanceNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 25,
            'incoming': [73, 28, 37, 58, 57, 35, 70, 91, 11, 97, 71, 98],
            'name': 'runs@838adddd-073f-4e19-8e53-2f6b398809ea',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordInstanceNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 178,
            'incoming': [268, 282, 148, 299, 218, 186, 182],
            'name': 'LEFT-WALL@sentence@9f079f5d-052f-47d5-aae4-a0f1c1b8ea93_parse_0',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordInstanceNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 24,
            'incoming': [41, 28, 32, 81, 89, 15, 96],
            'name': 'LEFT-WALL@sentence@17302cea-0d43-40f0-b454-311c18d6478b_parse_0',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordInstanceNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 38,
            'incoming': [41, 75, 76, 92, 9, 94, 95],
            'name': '.@fdd913dc-2262-46ca-94e1-eda3630fcbe9',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordInstanceNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 192,
            'incoming': [131, 289, 154, 300, 265, 301, 207, 195, 202, 227, 233, 234, 237, 267],
            'name': 'he@0dc3eaff-5250-4a13-a49c-b823f1329c73',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordInstanceNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 200,
            'incoming': [251, 290, 162, 302, 256, 303, 207, 210, 202, 226, 229, 259],
            'name': 'runs@3c28a178-5584-4800-bef7-68f7c25a9f78',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordInstanceNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 187,
            'incoming': [264, 281, 152, 304, 266, 305, 190, 218, 204, 235, 238, 239, 228, 140],
            'name': 'he@be348474-26a7-4bb7-b37a-1cb282327d73',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordInstanceNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 196,
            'incoming': [291, 158, 306, 260, 307, 199, 263],
            'name': '.@7eb1de0f-f72e-4a1f-a881-47341119a150',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordInstanceNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 211,
            'incoming': [253, 285, 156, 308, 254, 309, 215, 136],
            'name': 'quickly@7c8c7ca3-44bd-46b9-9e09-941254ac91d7',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordInstanceNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 285,
            'incoming': [],
            'name': '',
            'outgoing': [211, 287],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordInstanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 284,
            'incoming': [],
            'name': '',
            'outgoing': [183, 287],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordInstanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 283,
            'incoming': [],
            'name': '',
            'outgoing': [179, 287],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordInstanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 290,
            'incoming': [],
            'name': '',
            'outgoing': [200, 293],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordInstanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 90,
            'incoming': [],
            'name': '',
            'outgoing': [29, 93],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordInstanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 92,
            'incoming': [],
            'name': '',
            'outgoing': [38, 93],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordInstanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 89,
            'incoming': [],
            'name': '',
            'outgoing': [24, 93],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordInstanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 91,
            'incoming': [],
            'name': '',
            'outgoing': [25, 93],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordInstanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 291,
            'incoming': [],
            'name': '',
            'outgoing': [196, 293],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordInstanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 288,
            'incoming': [],
            'name': '',
            'outgoing': [191, 293],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordInstanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 289,
            'incoming': [],
            'name': '',
            'outgoing': [192, 293],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordInstanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 281,
            'incoming': [],
            'name': '',
            'outgoing': [187, 287],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordInstanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 282,
            'incoming': [],
            'name': '',
            'outgoing': [178, 287],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordInstanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 144,
            'incoming': [],
            'name': '',
            'outgoing': [183, 145],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordSequenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 15,
            'incoming': [],
            'name': '',
            'outgoing': [24, 16],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordSequenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 158,
            'incoming': [],
            'name': '',
            'outgoing': [196, 159],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordSequenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 156,
            'incoming': [],
            'name': '',
            'outgoing': [211, 157],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordSequenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 13,
            'incoming': [],
            'name': '',
            'outgoing': [29, 14],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordSequenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 11,
            'incoming': [],
            'name': '',
            'outgoing': [25, 12],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordSequenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 162,
            'incoming': [],
            'name': '',
            'outgoing': [200, 163],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordSequenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 9,
            'incoming': [],
            'name': '',
            'outgoing': [38, 10],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordSequenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 152,
            'incoming': [],
            'name': '',
            'outgoing': [187, 153],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordSequenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 150,
            'incoming': [],
            'name': '',
            'outgoing': [179, 151],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordSequenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 154,
            'incoming': [],
            'name': '',
            'outgoing': [192, 155],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordSequenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 160,
            'incoming': [],
            'name': '',
            'outgoing': [191, 161],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordSequenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 148,
            'incoming': [],
            'name': '',
            'outgoing': [178, 149],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'WordSequenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 142,
            'incoming': [],
            'name': '',
            'outgoing': [221, 143],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'SentenceSequenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 146,
            'incoming': [],
            'name': '',
            'outgoing': [219, 147],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'SentenceSequenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 7,
            'incoming': [],
            'name': '',
            'outgoing': [42, 8],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'SentenceSequenceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 65,
            'incoming': [273, 270, 39, 197, 184, 85],
            'name': 'Xp',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LinkGrammarRelationshipNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 20,
                'vlti': false
            },
            'handle': 64,
            'incoming': [271, 31, 193, 216, 277, 83],
            'name': 'Wd',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LinkGrammarRelationshipNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 243,
            'incoming': [213, 276],
            'name': 'MVa',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LinkGrammarRelationshipNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 67,
            'incoming': [272, 26, 208, 180, 278, 86],
            'name': 'WV',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LinkGrammarRelationshipNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 61,
            'incoming': [274, 205, 34, 188, 84, 275],
            'name': 'Ss',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LinkGrammarRelationshipNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 7,
                'vlti': false
            },
            'handle': 310,
            'incoming': [308],
            'name': 'adv',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'DefinedLinguisticConceptNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 45,
            'incoming': [166, 58, 226, 236, 173, 19],
            'name': 'present',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.0010000000474974513
                },
                'type': 'simple'
            },
            'type': 'DefinedLinguisticConceptNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 56,
            'incoming': [57, 229, 231],
            'name': '.v',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'DefinedLinguisticConceptNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 54,
            'incoming': [55, 227, 235],
            'name': 'pronoun',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'DefinedLinguisticConceptNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 13,
                'vlti': false
            },
            'handle': 52,
            'incoming': [233, 53, 238],
            'name': 'masculine',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'DefinedLinguisticConceptNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 22,
                'vlti': false
            },
            'handle': 50,
            'incoming': [234, 51, 239],
            'name': 'definite',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'DefinedLinguisticConceptNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 103,
            'incoming': [306, 294, 94],
            'name': 'punctuation',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'DefinedLinguisticConceptNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 48,
            'incoming': [237, 49, 228],
            'name': 'singular',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'DefinedLinguisticConceptNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 47,
            'incoming': [168, 174, 21],
            'name': 'DeclarativeSpeechAct',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.0010000000474974513
                },
                'type': 'simple'
            },
            'type': 'DefinedLinguisticConceptNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 102,
            'incoming': [302, 297, 97],
            'name': 'verb',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'DefinedLinguisticConceptNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 101,
            'incoming': [300, 304, 99],
            'name': 'noun',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'DefinedLinguisticConceptNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 60,
            'incoming': [167, 175, 20],
            'name': 'definite',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.9900000095367432,
                    'count': 79200.07629401807,
                    'strength': 0.0010000000474974513
                },
                'type': 'simple'
            },
            'type': 'DefinedLinguisticPredicateNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 246,
            'incoming': [212],
            'name': '_advmod',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'DefinedLinguisticRelationshipNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 69,
            'incoming': [36, 201, 203],
            'name': '_subj',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'DefinedLinguisticRelationshipNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 304,
            'incoming': [],
            'name': '',
            'outgoing': [187, 101],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'PartOfSpeechLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 297,
            'incoming': [],
            'name': '',
            'outgoing': [179, 102],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'PartOfSpeechLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 308,
            'incoming': [],
            'name': '',
            'outgoing': [211, 310],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'PartOfSpeechLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 300,
            'incoming': [],
            'name': '',
            'outgoing': [192, 101],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'PartOfSpeechLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 94,
            'incoming': [],
            'name': '',
            'outgoing': [38, 103],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'PartOfSpeechLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 294,
            'incoming': [],
            'name': '',
            'outgoing': [183, 103],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'PartOfSpeechLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 302,
            'incoming': [],
            'name': '',
            'outgoing': [200, 102],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'PartOfSpeechLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 99,
            'incoming': [],
            'name': '',
            'outgoing': [29, 101],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'PartOfSpeechLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 306,
            'incoming': [],
            'name': '',
            'outgoing': [196, 103],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'PartOfSpeechLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 97,
            'incoming': [],
            'name': '',
            'outgoing': [25, 102],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'PartOfSpeechLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 257,
            'incoming': [],
            'name': '',
            'outgoing': [179, 72],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LemmaLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 256,
            'incoming': [],
            'name': '',
            'outgoing': [200, 72],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LemmaLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 254,
            'incoming': [],
            'name': '',
            'outgoing': [211, 255],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LemmaLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 265,
            'incoming': [],
            'name': '',
            'outgoing': [192, 80],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LemmaLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 261,
            'incoming': [],
            'name': '',
            'outgoing': [183, 77],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LemmaLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 75,
            'incoming': [],
            'name': '',
            'outgoing': [38, 77],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LemmaLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 260,
            'incoming': [],
            'name': '',
            'outgoing': [196, 77],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LemmaLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 71,
            'incoming': [],
            'name': '',
            'outgoing': [25, 72],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LemmaLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 266,
            'incoming': [],
            'name': '',
            'outgoing': [187, 80],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LemmaLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 79,
            'incoming': [],
            'name': '',
            'outgoing': [29, 80],
            'truthvalue': {
                'details': {
                    'confidence': 0.9999998211860657,
                    'count': 4473923466.666667,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LemmaLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 223,
            'incoming': [168, 169, 292],
            'name': 'sentence@7385a85d-928e-4d89-a87f-6f36a470491e_parse_0_interpretation_$X',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'InterpretationNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 224,
            'incoming': [286, 174, 176],
            'name': 'sentence@9f079f5d-052f-47d5-aae4-a0f1c1b8ea93_parse_0_interpretation_$X',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'InterpretationNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 46,
            'incoming': [88, 21, 22],
            'name': 'sentence@17302cea-0d43-40f0-b454-311c18d6478b_parse_0_interpretation_$X',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'InterpretationNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 286,
            'incoming': [],
            'name': '',
            'outgoing': [224, 287],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'InterpretationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 292,
            'incoming': [],
            'name': '',
            'outgoing': [223, 293],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'InterpretationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 88,
            'incoming': [],
            'name': '',
            'outgoing': [46, 93],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'InterpretationLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 312,
            'incoming': [311],
            'name': 'MVa',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgConnectorNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 314,
            'incoming': [313],
            'name': 'MV',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgConnectorNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 105,
            'incoming': [104],
            'name': 'dWV',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgConnectorNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 108,
            'incoming': [106, 107],
            'name': 'Ss',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgConnectorNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 110,
            'incoming': [109],
            'name': 'RW',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgConnectorNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 113,
            'incoming': [111, 112],
            'name': 'Xp',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgConnectorNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 115,
            'incoming': [114],
            'name': 'hWV',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgConnectorNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 118,
            'incoming': [116, 117],
            'name': 'Wd',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgConnectorNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 119,
            'incoming': [311, 117, 107, 104, 112],
            'name': '-',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgConnDirNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 120,
            'incoming': [313, 116, 114, 111, 106, 109],
            'name': '+',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgConnDirNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 116,
            'incoming': [315, 316, 128, 127],
            'name': '',
            'outgoing': [118, 120],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgConnector'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 313,
            'incoming': [317, 318],
            'name': '',
            'outgoing': [314, 120],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgConnector'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 114,
            'incoming': [319, 320, 128, 124],
            'name': '',
            'outgoing': [115, 120],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgConnector'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 109,
            'incoming': [121],
            'name': '',
            'outgoing': [110, 120],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgConnector'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 117,
            'incoming': [315, 316, 126, 127],
            'name': '',
            'outgoing': [118, 119],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgConnector'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 311,
            'incoming': [321, 318],
            'name': '',
            'outgoing': [312, 119],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgConnector'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 106,
            'incoming': [322, 323, 126, 125],
            'name': '',
            'outgoing': [108, 120],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgConnector'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 107,
            'incoming': [317, 322, 323, 123, 125],
            'name': '',
            'outgoing': [108, 119],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgConnector'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 104,
            'incoming': [317, 319, 320, 123, 124],
            'name': '',
            'outgoing': [105, 119],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgConnector'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 111,
            'incoming': [324, 325, 128, 122],
            'name': '',
            'outgoing': [113, 120],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgConnector'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 112,
            'incoming': [324, 325, 121, 122],
            'name': '',
            'outgoing': [113, 119],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgConnector'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 321,
            'incoming': [309],
            'name': '',
            'outgoing': [311],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgAnd'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 317,
            'incoming': [298],
            'name': '',
            'outgoing': [107, 104, 313],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgAnd'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 121,
            'incoming': [307, 295, 95],
            'name': '',
            'outgoing': [112, 109],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgAnd'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 123,
            'incoming': [303, 98],
            'name': '',
            'outgoing': [107, 104],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgAnd'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 126,
            'incoming': [301, 305, 100],
            'name': '',
            'outgoing': [117, 106],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgAnd'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 128,
            'incoming': [296, 299, 96],
            'name': '',
            'outgoing': [116, 114, 111],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgAnd'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 295,
            'incoming': [],
            'name': '',
            'outgoing': [183, 121],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgWordCset'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 309,
            'incoming': [],
            'name': '',
            'outgoing': [211, 321],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgWordCset'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 299,
            'incoming': [],
            'name': '',
            'outgoing': [178, 128],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgWordCset'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 98,
            'incoming': [],
            'name': '',
            'outgoing': [25, 123],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgWordCset'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 296,
            'incoming': [],
            'name': '',
            'outgoing': [191, 128],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgWordCset'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 95,
            'incoming': [],
            'name': '',
            'outgoing': [38, 121],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgWordCset'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 298,
            'incoming': [],
            'name': '',
            'outgoing': [179, 317],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgWordCset'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 100,
            'incoming': [],
            'name': '',
            'outgoing': [29, 126],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgWordCset'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 305,
            'incoming': [],
            'name': '',
            'outgoing': [187, 126],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgWordCset'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 96,
            'incoming': [],
            'name': '',
            'outgoing': [24, 128],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgWordCset'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 301,
            'incoming': [],
            'name': '',
            'outgoing': [192, 126],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgWordCset'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 303,
            'incoming': [],
            'name': '',
            'outgoing': [200, 123],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgWordCset'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 307,
            'incoming': [],
            'name': '',
            'outgoing': [196, 121],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgWordCset'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 240,
            'incoming': [320, 181, 278],
            'name': 'WV@90f5e59e-d7e3-470d-a213-47dfb642af5c',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgLinkInstanceNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 63,
            'incoming': [33, 84, 125],
            'name': 'Ss@cbd19ce8-c893-49c5-8b19-0e1a2d06a43f',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgLinkInstanceNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 62,
            'incoming': [30, 83, 127],
            'name': 'Wd@57a18b7c-2fdf-40b2-aaf3-a444bf7df212',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgLinkInstanceNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 68,
            'incoming': [27, 86, 124],
            'name': 'WV@65356044-9b52-4580-81c2-5fe7c90553d7',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgLinkInstanceNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 247,
            'incoming': [206, 322, 275],
            'name': 'Ss@179225fd-e0c2-479e-8a2e-ccb0d69b93fd',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgLinkInstanceNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 249,
            'incoming': [273, 324, 198],
            'name': 'Xp@0f5eee7a-7541-49b3-9057-e831f402fb0b',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgLinkInstanceNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 244,
            'incoming': [274, 323, 189],
            'name': 'Ss@c8ca87c2-3064-48e1-bce8-4e10dab8fea5',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgLinkInstanceNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 248,
            'incoming': [316, 194, 277],
            'name': 'Wd@45cfbdac-5eb0-48f2-889c-e42c204e1458',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgLinkInstanceNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 241,
            'incoming': [271, 315, 217],
            'name': 'Wd@3bc94a11-569b-44d2-a3f2-56927fa2811a',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgLinkInstanceNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 66,
            'incoming': [40, 85, 122],
            'name': 'Xp@58792729-0309-4fc1-afdc-267b6908791b',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgLinkInstanceNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 250,
            'incoming': [272, 319, 209],
            'name': 'WV@d6dae407-a5b9-4ef7-9aaf-f1177d45faf7',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgLinkInstanceNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 245,
            'incoming': [270, 325, 185],
            'name': 'Xp@44355044-58b9-44ad-8406-58cc60a9bbc5',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgLinkInstanceNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 242,
            'incoming': [318, 214, 276],
            'name': 'MVa@48608ad3-93b1-4736-8ab4-aba058391a56',
            'outgoing': [],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgLinkInstanceNode'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 320,
            'incoming': [],
            'name': '',
            'outgoing': [240, 114, 104],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgLinkInstanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 125,
            'incoming': [],
            'name': '',
            'outgoing': [63, 106, 107],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgLinkInstanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 323,
            'incoming': [],
            'name': '',
            'outgoing': [244, 106, 107],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgLinkInstanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 4,
                'vlti': false
            },
            'handle': 318,
            'incoming': [],
            'name': '',
            'outgoing': [242, 313, 311],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgLinkInstanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 127,
            'incoming': [],
            'name': '',
            'outgoing': [62, 116, 117],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgLinkInstanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 122,
            'incoming': [],
            'name': '',
            'outgoing': [66, 111, 112],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgLinkInstanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 325,
            'incoming': [],
            'name': '',
            'outgoing': [245, 111, 112],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgLinkInstanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 124,
            'incoming': [],
            'name': '',
            'outgoing': [68, 114, 104],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgLinkInstanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 322,
            'incoming': [],
            'name': '',
            'outgoing': [247, 106, 107],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgLinkInstanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 30,
                'vlti': false
            },
            'handle': 315,
            'incoming': [],
            'name': '',
            'outgoing': [241, 116, 117],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgLinkInstanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 316,
            'incoming': [],
            'name': '',
            'outgoing': [248, 116, 117],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgLinkInstanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 319,
            'incoming': [],
            'name': '',
            'outgoing': [250, 114, 104],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgLinkInstanceLink'
        }, {
            'attentionvalue': {
                'lti': 0,
                'sti': 0,
                'vlti': false
            },
            'handle': 324,
            'incoming': [],
            'name': '',
            'outgoing': [249, 111, 112],
            'truthvalue': {
                'details': {
                    'confidence': 0.0,
                    'count': 0.0,
                    'strength': 1.0
                },
                'type': 'simple'
            },
            'type': 'LgLinkInstanceLink'
        }],
        'complete': true,
        'skipped': 0,
        'total': 325
    }
};

  private defaultState = this.atomsSample3; // atomsSample1 | atomsSample2 | atomsSample3 | atomsSample4.

  private editItemSource: BehaviorSubject<any> = new BehaviorSubject(this.defaultState);

  public editItem = this.editItemSource.asObservable().distinctUntilChanged();

  changeItem(state) {
    this.editItemSource.next(state);
    console.log('Item Changed', state);
  }
}
