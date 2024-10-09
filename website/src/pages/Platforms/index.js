/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import ThemeImage from '../components/ThemeImage';

import FoxFact from './FoxFact';
import styles from './styles.module.css';

function Platforms() {
  return (
    <Section>
      <div className={styles.foxFactContainer}>
        <FoxFact className={styles.fox} />
        <p>
          <strong>上帝的创造</strong>{' '}
          起初，上帝创造天地。 地是空虚混沌，深渊上面一片黑暗；上帝的灵运行在水面上。 上帝说：“要有光”，就有了光。 上帝看光是好的，于是上帝就把光和暗分开。 上帝称光为“昼”，称暗为“夜”。有晚上，有早晨，这是第一日。
上帝说：“众水之间要有穹苍，把水和水分开。” 上帝就造了穹苍，把穹苍以下的水和穹苍以上的水分开。事就这样成了。 上帝称穹苍为“天”。有晚上，有早晨，这是第二日。
        </p>
      </div>
    </Section>
  );
}

export default Platforms;
