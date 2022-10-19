import React, { Component } from "react";

const Menu = () => {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" className="brand-link">
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </a>
        <div className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
          <div className="os-resize-observer-host observed">
            <div
              className="os-resize-observer"
              style={{ left: 0, right: "auto" }}
            />
          </div>
          <div
            className="os-size-auto-observer observed"
            style={{ height: "calc(100% + 1px)", float: "left" }}
          >
            <div className="os-resize-observer" />
          </div>
          <div
            className="os-content-glue"
            style={{ margin: "0px -8px", width: 249, height: 559 }}
          />
          <div className="os-padding">
            <div
              className="os-viewport os-viewport-native-scrollbars-invisible"
              style={{ overflowY: "scroll" }}
            >
              <div
                className="os-content"
                style={{ padding: "0px 8px", height: "100%", width: "100%" }}
              >
                <nav className="mt-2">
                  <ul
                    className="nav nav-pills nav-sidebar flex-column"
                    data-widget="treeview"
                    role="menu"
                    data-accordion="false"
                  >
                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        <i className="nav-icon fas fa-table" />
                        <p>Movie</p>
                      </a>
                    </li>
                  </ul>
                  <ul
                    className="nav nav-pills nav-sidebar flex-column"
                    data-widget="treeview"
                    role="menu"
                    data-accordion="false"
                  >
                    <li className="nav-item">
                      <a href="/category" className="nav-link">
                        <i className="nav-icon fas fa-table" />
                        <p>Category Movie</p>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
            <div className="os-scrollbar-track">
              <div
                className="os-scrollbar-handle"
                style={{ width: "100%", transform: "translate(0px, 0px)" }}
              />
            </div>
          </div>
          <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
            <div className="os-scrollbar-track">
              <div
                className="os-scrollbar-handle"
                style={{ height: "41.2068%", transform: "translate(0px, 0px)" }}
              />
            </div>
          </div>
          <div className="os-scrollbar-corner" />
        </div>
      </aside>
    </div>
  );
};

export default Menu;