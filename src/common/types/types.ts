import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

export interface SideBarLinkProps {
    title: string;
    Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    addChannel?: true;
    id?: string;
}