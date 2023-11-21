import React, { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { map } from "lodash";

//i18n
import { withTranslation } from "react-i18next"

const WorkspaceDropdown = () => {
  // Declare a new state variable, which we'll call "menu"
  const [selectedWorkspaceId, setSelectedWorkspaceId] = useState("1");
  const [menu, setMenu] = useState(false);

  const workspaces = [
    {
      id: "1",
      label: "Workspace 1"
    },
    {
      id: "2",
      label: "Workspace 2"
    },
    {
      id: "3",
      label: "Workspace 3"
    }
  ];

  useEffect(() => {
    const currentWorkspaceId = localStorage.getItem("WORKSPACE");
    if(currentWorkspaceId == null || currentWorkspaceId == '')
      currentWorkspaceId = '1'
    setSelectedWorkspaceId(currentWorkspaceId);
  }, [])

  const changeWorkspaceAction = workspaceId => {
    //set Workspace
    localStorage.setItem("WORKSPACE", workspaceId);
    setSelectedWorkspaceId(workspaceId);
  }

  const toggle = () => {
    setMenu(!menu);
  }
  
  return (
    <>
      <Dropdown isOpen={menu} toggle={toggle} className="d-inline-block">
        <DropdownToggle className="btn header-item " tag="button">
            { workspaces.find(x => x.id === selectedWorkspaceId).label} <i className="mdi mdi-chevron-down" />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu">
          {map(workspaces, item => (
            <DropdownItem
              key={ 'w_' + item.id }
              onClick={() => changeWorkspaceAction(item.id)}
              className={`notify-item ${selectedWorkspaceId === item.id ? "active" : "none"}`}
            >
              <span className="align-middle">
                {item.label}
              </span>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

export default withTranslation()(WorkspaceDropdown)
