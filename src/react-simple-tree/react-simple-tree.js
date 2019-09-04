import React from "react";
import PropTypes from "prop-types";
// mui
import { makeStyles } from "@material-ui/core/styles";
import { Grid, List } from "@material-ui/core";

const useStyles = makeStyles({
  root: {}
});

const ReactSimpleTree = props => {
  const classes = useStyles();
  const { treeData } = props;
  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid item xs={12} style={props.subheadingStyle}>
        {props.subheading}
      </Grid>
      <Grid item xs={12}>
        MAIN
      </Grid>
    </Grid>
  );
};

ReactSimpleTree.prototypes = {
  subheadingStyle: PropTypes.object,
  subheading: PropTypes.element,
  data: PropTypes.object
};

export default ReactSimpleTree;
