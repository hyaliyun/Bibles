/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

const QUOTES = [
  {
    thumbnail: require('./quotes/pos.png'),
    name: '犹太教',
    title: translate({
      id: 'homepage.quotes.christopher-chedeau.title',
      message: '',
      description: '犹太教',
    }),
    text: (
      <Translate
        id="homepage.quotes.christopher-chedeau"
        description="Quote of Christopher Chedeau on the home page">
         犹太教是犹太人的一神论民族宗教，崇拜雅赫维为独一无二的真神，对犹太人而言不仅是信仰，更是民族文化的体现。
      </Translate>
    ),
  },
  {
    thumbnail: require('./quotes/shop.png'),
    name: '基督教',
    title: translate({
      id: 'homepage.quotes.hector-ramos.title',
      message: '',
      description: '基督教',
    }),
    text: (
      <Translate
        id="homepage.quotes.hector-ramos"
        description="Quote of Hector Ramos on the home page">
        基督教源于犹太教，强调耶稣的救赎与复活，成为影响深远的国际大教。
      </Translate>
    ),
  },
  {
    thumbnail: require('./quotes/wordpress.png'),
    name: '圣经',
    title: translate({
      id: 'homepage.quotes.risky-vetter.title',
      message: '',
      description: '圣经',
    }),
    text: (
      <Translate
        id="homepage.quotes.risky-vetter"
        description="Quote of Ricky Vetter on the home page">
      圣经是基督教的经典文献，包含了旧约与新约两部分，为信徒提供了行为的准则和精神的指引。
      </Translate>
    ),
  },
];

export default QUOTES;
