import { CLOSE__SIDEBAR, OPEN__SIDEBAR } from "../constants/sidebarConstants";

export const openSidebar = (sidebarState) => (dispatch) => {
    dispatch({ type: OPEN__SIDEBAR, payload: { sidebarState } });
};


export const closeSidebar = (sidebarState) => (dispatch) => {
    dispatch({ type: CLOSE__SIDEBAR, payload: { sidebarState } });
};
