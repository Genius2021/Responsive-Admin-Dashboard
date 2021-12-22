import { CLOSE__SIDEBAR, OPEN__SIDEBAR } from "../constants/sidebarConstants";

export const sidebarStateReducer = (state = {sidebarState: true}, action) => {
    switch (action.type) {
        case OPEN__SIDEBAR:
            return { ...state, sidebarState: true };
        case CLOSE__SIDEBAR:
            return { ...state, sidebarState: false};
        default:
            return state;
    }
};

