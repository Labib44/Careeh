import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";
import jwtDecode from "jwt-decode";

export const admin_login = createAsyncThunk(
    "auth/admin_login",
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.post("/login", info, {
                withCredentials: true,
            });
            localStorage.setItem("accessToken", data.token);
            return fulfillWithValue(data);
        } catch (error) {
            rejectWithValue(error.response.data);
        }
    }
);

export const user_register = createAsyncThunk(
    "auth/user_register",
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.post("/login", info, {
                withCredentials: true,
            });
            localStorage.setItem("accessToken", data.token);
            return fulfillWithValue(data);
        } catch (error) {
            rejectWithValue(error.response.data);
        }
    }
);

export const user_login = createAsyncThunk(
    "auth/user_login",
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.post("/login", info, {
                withCredentials: true,
            });
            localStorage.setItem("accessToken", data.token);
            return fulfillWithValue(data);
        } catch (error) {
            rejectWithValue(error.response.data);
        }
    }
);

export const get_user_info = createAsyncThunk(
    "auth/get_user_info",
    async (_, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get("/get-user", {
                withCredentials: true,
            });
            return fulfillWithValue(data);
        } catch (error) {
            rejectWithValue(error.response.data);
        }
    }
);

const returnRole = (token) => {
    if (token) {
        const decodeToken = jwtDecode(token);
        const expireTime = new Date(decodeToken.exp * 1000);
        if (new Date() > expireTime) {
            localStorage.removeItem("accessToken");
        } else {
            decodeToken.role;
        }
    } else {
        return "";
    }
};

export const authReducer = createSlice({
    name: "auth",
    initialState: {
        successMessage: "",
        errorMessage: "",
        loading: false,
        userInfo: "",
        role: returnRole(localStorage.getItem("accessToken")),
        token: localStorage.getItem("accessToken"),
    },
    reducers: {
        clearMessage: (state) => {
            (state.errorMessage = ""), (state.successMessage = "");
        },
    },
    extraReducers: {
        [admin_login.pending]: (state) => {
            state.loading = true;
        },
        [admin_login.rejected]: (state, { payload }) => {
            (state.loading = false), (state.errorMessage = payload.error);
        },
        [admin_login.fulfilled]: (state, { payload }) => {
            (state.loading = false),
                (state.successMessage = payload.message),
                (state.token = payload.token),
                (state.role = returnRole(payload.token));
        },
        [user_register.pending]: (state) => {
            state.loading = true;
        },
        [user_register.rejected]: (state, { payload }) => {
            (state.loading = false), (state.errorMessage = payload.error);
        },
        [user_register.fulfilled]: (state, { payload }) => {
            (state.loading = false),
                (state.successMessage = payload.message),
                (state.token = payload.token),
                (state.role = returnRole(payload.token));
        },
        [user_login.pending]: (state) => {
            state.loading = true;
        },
        [user_login.rejected]: (state, { payload }) => {
            (state.loading = false), (state.errorMessage = payload.error);
        },
        [user_login.fulfilled]: (state, { payload }) => {
            (state.loading = false),
                (state.successMessage = payload.message),
                (state.token = payload.token),
                (state.role = returnRole(payload.token));
        },
        [get_user_info.fulfilled]: (state, { payload }) => {
            (state.loading = false), (state.userInfo = payload.userInfo);
            state.role = payload.userInfo.token;
        },
    },
});

export const { clearMessage } = authReducer.actions;

export default authReducer.reducer;
