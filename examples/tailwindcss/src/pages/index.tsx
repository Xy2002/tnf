import React from 'react';
import { createFileRoute } from '@umijs/tnf/router';
import styles from './index.module.less';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div className={styles.foo}>
      <h3>Welcome Home!</h3>
    </div>
  );
}