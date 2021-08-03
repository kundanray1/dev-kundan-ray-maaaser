import {
  MEMBERS_FAIL,
  MEMBERS_START,
  MEMBERS_SUCCESS,
  PERMISSIONS_ASSIGN_START,
  PERMISSIONS_ASSIGN_SUCCESS,
  PERMISSIONS_ASSIGN_FAIL,
  PERMISSIONS_ASSIGN_CLEAR,
} from "./actions";

const initialState = {
  isLoading: true,
  members: null,
  permissionsAssign: null,
  error: null,
};

export const membersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MEMBERS_START:
      return {
        ...state,
        isLoading: true,
      };
    case MEMBERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        members: payload,
      };
    case MEMBERS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case PERMISSIONS_ASSIGN_START:
      return {
        ...state,
        isLoading: true,
      };
    case PERMISSIONS_ASSIGN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        permissionsAssign: payload,
      };
    case PERMISSIONS_ASSIGN_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case PERMISSIONS_ASSIGN_CLEAR:
      return {
        ...state,
        isLoading: false,
        permissionsAssign: null,
      };

    default:
      return state;
  }
};
