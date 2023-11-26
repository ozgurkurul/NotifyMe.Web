import React, { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { map } from "lodash";

//redux
import { useSelector, useDispatch } from "react-redux"

//i18n
import { withTranslation } from "react-i18next"

import { getWorkspaces as onGetWorkspaces } from "/src/store/actions"

const WorkspaceDropdown = () => {
  // Declare a new state variable, which we'll call "menu"
  const [selectedWorkspaceId, setSelectedWorkspaceId] = useState("2");
  const [menu, setMenu] = useState(false);

  const workspaces = [
    {
      id: "1",
      name: "Workspace 1"
    },
    {
      id: "2",
      name: "Workspace 2"
    },
    {
      id: "3",
      name: "Workspace 3"
    }
  ];

  useEffect(() => {
    let currentWorkspaceId = localStorage.getItem("WORKSPACE");
    if(currentWorkspaceId == null || currentWorkspaceId == "")
      currentWorkspaceId = "1"
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
            { workspaces.find(x => x.id === selectedWorkspaceId).name} <i className="mdi mdi-chevron-down" />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu">
          {map(workspaces, item => (
            <DropdownItem
              key={ 'ws_' + item.id.toString() }
              onClick={() => changeWorkspaceAction(item.id)}
              className={`notify-item ${selectedWorkspaceId === item.id ? "active" : "none"}`}
            >
              <span className="align-middle">
                {item.name}
              </span>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

export default withTranslation()(WorkspaceDropdown)
