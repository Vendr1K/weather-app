import React from 'react';
import styles from './pointer.module.css'

export function Pointers() {
  return (
    <div className={styles.lds_ellipsis}><div></div><div></div><div></div><div></div></div>
  )
}
