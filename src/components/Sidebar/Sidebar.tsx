import { SidebarContainer, SidebarHeader, SidebarInfo } from "./Sidebar.styled"
import { Create, FiberManualRecord } from "@material-ui/icons"

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>My Company</h2>
          <h3>
            <FiberManualRecord/>
            Can Ocalir
          </h3>
        </SidebarInfo>
        <Create/>
      </SidebarHeader>
    </SidebarContainer>
  )
}

export default Sidebar