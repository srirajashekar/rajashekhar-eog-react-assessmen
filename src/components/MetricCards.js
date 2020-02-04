import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  metricHeader__card: {
    alignItems: "center",
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: "5px",
    color: "#555",
    display: "flex",
    flexDirection: "column",
    height: "90%",
    margin: "0.8em",
    padding: "1em",
  },
  close: {
    color: "red",
    cursor: "pointer",
  },
  name:{
    margin: 0
  }
});

export default (props) => {
  const classes = useStyles();

  const removeMetric = metricName => {
    props.setActiveMetrics(props.activeMetrics.filter(metric => metric !== metricName));
  }

  const cards = props.activeMetrics.map((metricName) => 
    <div key={metricName} className={classes.metricHeader__card} onClick={() => removeMetric(metricName)}>
      <h4 className={classes.name}>{metricName}</h4>
      <h3 className={classes.name}>{props.latestMetrics[metricName].value}</h3>
      <button className={classes.close}>Remove</button>
    </div>
  );

  return(
    <Fragment>{cards}</Fragment>
  );
}