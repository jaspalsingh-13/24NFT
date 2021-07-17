import { UIStore } from "./Ui.store";

export class RootStore {
  public uiStore: UIStore;

  constructor() {
    this.uiStore = new UIStore();
  }
}
