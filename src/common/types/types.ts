import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

export type SideBarLinkProps = {
  title: string;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  addChannel?: true;
  id?: string;
}

export type ChatInputProps = {
  channelId: string | null;
  channelName: string | null;
  scroll: () => void;
};

export type MessageProps = {
  message: string;
  timestamp: {
    seconds: number;
    nanoseconds: number;
  };
  user: string;
  userImage: string;
};

export type RoomSliceProps = {
  roomId: null;
}

export type ModalSliceProps = {
  isOpen: boolean;
  name: string;
}
