import React from 'react'
import styles from './Loader.module.scss'
import { Dna } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader__rotate}>
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    </div>
  )
}

export default Loader
