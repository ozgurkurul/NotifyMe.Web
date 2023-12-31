import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";

// //Import Scrollbar
import SimpleBar from "simplebar-react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

//i18n
import { withTranslation } from "react-i18next";

const SidebarContent = props => {
  const ref = useRef();
  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname;

    const initMenu = () => {
      new MetisMenu("#side-menu");
      let matchingMenuItem = null;
      const ul = document.getElementById("side-menu");
      const items = ul.getElementsByTagName("a");
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i];
          break;
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem);
      }
    };
    initMenu();
  }, [props.location.pathname]);

  useEffect(() => {
    ref.current.recalculate();
  });

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop;
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300;
      }
    }
  }

  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement;
    const parent2El = parent.childNodes[1];
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show"); // ul tag

        const parent3 = parent2.parentElement; // li tag

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement; // ul
          if (parent4) {
            parent4.classList.add("mm-show"); // ul
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add("mm-show"); // li
              parent5.childNodes[0].classList.add("mm-active"); // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false;
    }
    scrollElement(item);
    return false;
  }

  return (
    <React.Fragment>
      <SimpleBar className="h-100" ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{props.t("Menu")} </li>

            <li>
              <Link to="/dashboard" >
                <i className="bx bx-columns"></i>
                <span>{props.t("Dashboards")}</span>
              </Link>
            </li>

            <li>
              <Link to="/workspace" >
                <i className="bx bx-network-chart"></i>
                <span>{props.t("Workspace")}</span>
              </Link>
            </li>

            <li>
              <Link to="/my-boards" >
                <i className="bx bx-home-circle"></i>
                <span>{props.t("My Boards")}</span>
              </Link>
            </li>
            <li>
              <Link to="/board-detail" >
                <i className="bx bx-home-circle"></i>
                <span>{props.t("Board Detail")}</span>
              </Link>
            </li>
            <li>
              <Link to="/issue-detail" >
                <i className="bx bx-home-circle"></i>
                <span>{props.t("Issue Detail")}</span>
              </Link>
            </li>

            <li>
              <Link to="/settings" >
                <i className="bx bx-cog"></i>
                <span>{props.t("Settings")}</span>
              </Link>
            </li>
            
            <li>
              <Link to="/users" >
                <i className="bx bx-user"></i>
                <span>{props.t("Users")}</span>
              </Link>
            </li>
            <li>
              <Link to="/user-detail" >
                <i className="bx bx-user"></i>
                <span>{props.t("User Detail")}</span>
              </Link>
            </li>

            <li>
              <Link to="/integrations" >
                <i className="bx bx-customize"></i>
                <span>{props.t("Integrations")}</span>
              </Link>
            </li>

            <li>
              <Link to="/profile" >
                <i className="bx bx-user-circle"></i>
                <span>{props.t("Profile")}</span>
              </Link>
            </li>
            



            <li className="menu-title">{props.t("General")} </li>

            <li>
              <Link to="/mainpage" >
                <i className="bx bx-user-circle"></i>
                <span>{props.t("Main Page")}</span>
              </Link>
            </li>

            <li>
              <Link to="/login" >
                <i className="bx bx-user-circle"></i>
                <span>{props.t("Login")}</span>
              </Link>
            </li>

            <li>
              <Link to="/register" >
                <i className="bx bx-user-circle"></i>
                <span>{props.t("Register")}</span>
              </Link>
            </li>

            <li>
              <Link to="/forgot-password" >
                <i className="bx bx-user-circle"></i>
                <span>{props.t("Forgot Password")}</span>
              </Link>
            </li>

            <li>
              <Link to="/password-reset" >
                <i className="bx bx-user-circle"></i>
                <span>{props.t("Password Reset")}</span>
              </Link>
            </li>

            <li>
              <Link to="/logout" >
                <i className="bx bx-user-circle"></i>
                <span>{props.t("Logout")}</span>
              </Link>
            </li>

          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  );
};

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
};

export default withRouter(withTranslation()(SidebarContent));
