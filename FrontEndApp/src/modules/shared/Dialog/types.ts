import { ReactNode, SyntheticEvent } from "react";

export interface IModal {
  title: string | ReactNode;
  dialogContent: () => ReactNode;
  dialogActions: () => ReactNode;
  closeBtn?: boolean;
  fullScreen?: boolean;
  onEnter?: () => void;
  open: boolean;
  isLoading?: () => boolean;
  onClose: (event: SyntheticEvent) => void;
}
