import * as React from "react";
import { observer } from "mobx-react";
import { withStyles } from "@material-ui/core";

import ModalStore from "./Modal.store";

import { styles } from "./ModalKeeper.styles";

type Props = {
  classes: Record<string, string>;
};

@observer
export class ModalKeeper extends React.Component<Props> {
  private get fallback(): React.ReactNode {
    const { classes } = this.props;

    return <div className={classes.container}>Please wait...</div>;
  }

  render() {
    if (!ModalStore.data) {
      return null;
    }

    return (
      <React.Suspense fallback={() => this.fallback}>
        {ModalStore.data}
      </React.Suspense>
    );
  }
}

export default withStyles(styles)(ModalKeeper);
