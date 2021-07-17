import { action, observable } from 'mobx';

class ModalStore {
  private bodyClassName: string = 'overflow-hidden';
  @observable public data: any;

  @action
  public configure(opt: { bodyClassName: string }): void {
    this.bodyClassName = opt?.bodyClassName || 'overflow-hidden';
  }

  @action
  public open(content: any): void {
    document.body.classList.add(this.bodyClassName);
    this.data = content;
  }

  @action
  public close(): void {
    document.body.classList.remove(this.bodyClassName);
    this.data = null;
  }
}

const modalStore = new ModalStore();

export default modalStore;
export { ModalStore as PureModalStore };
