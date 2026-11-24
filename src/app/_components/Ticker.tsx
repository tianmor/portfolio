import { Fragment } from "react";
import { tickerTerms } from "../../data/portfolio";
import styles from "../portfolio.module.css";

const loop = [...tickerTerms, ...tickerTerms];

export default function Ticker() {
  return (
    <div className={styles.ticker}>
      <div>
        {loop.map((term, index) => (
          <Fragment key={`${term}-${index}`}>
            {term} <b>✳</b>
            {index < loop.length - 1 ? " " : ""}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
