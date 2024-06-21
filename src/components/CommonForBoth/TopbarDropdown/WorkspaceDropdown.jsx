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

//Actions
import { getWorkspaces as onGetWorkspaces, setWorkspaceId as onSetWorkspaceId } from "/src/store/actions"

const WorkspaceDropdown = () => {
  // Declare a new state variable, which we'll call "menu"
  const [selectedWorkspaceId, setSelectedWorkspaceId] = useState(0);
  const [menu, setMenu] = useState(false);

  const dispatch = useDispatch()

  useEffect(() => {
    let currentWorkspaceId = localStorage.getItem("WORKSPACE");
    
    if(currentWorkspaceId == null || currentWorkspaceId == "")
      currentWorkspaceId = "0";

    setSelectedWorkspaceId(parseInt(currentWorkspaceId));

    dispatch(onSetWorkspaceId(currentWorkspaceId));
  }, [])

  const changeWorkspaceAction = workspaceId => {
    localStorage.setItem("WORKSPACE", workspaceId);
    
    setSelectedWorkspaceId(workspaceId);
    
    dispatch(onSetWorkspaceId(workspaceId));
  }

  const toggle = () => {
    setMenu(!menu);
  }

  const { workspaces } = useSelector(state => ({
    workspaces: state.Workspace.workspaces.items
  }))

  useEffect(() => {
    if(workspaces){
      let workspaceItem = workspaces.find(x => x.id === selectedWorkspaceId);
      if(!workspaceItem && workspaces.length > 0){
        changeWorkspaceAction(workspaces[0].id);
      }
    }
  }, [workspaces])

  useEffect(() => {
    dispatch(onGetWorkspaces())
  }, [dispatch])
  
  return (
    <>
      {
        workspaces &&
        <Dropdown isOpen={menu} toggle={toggle} className="d-inline-block">
          <DropdownToggle className="btn header-item " tag="button">
              { workspaces && selectedWorkspaceId > 0 && workspaces.find(x => x.id === selectedWorkspaceId).name } <i className="mdi mdi-chevron-down" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu">
            { workspaces &&
              map(workspaces, item => (
                <DropdownItem
                  key={ 'ws_' + item.id.toString() }
                  onClick={() => changeWorkspaceAction(item.id)}
                  className={`notify-item ${selectedWorkspaceId === item.id ? "active" : "none"}`}
                >
                  <span className="align-middle">
                    {item.name}
                  </span>
                </DropdownItem>
              ))
            }
          </DropdownMenu>
        </Dropdown>
      }
    </>
  )
}

export default withTranslation()(WorkspaceDropdown)
