import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_vcxsdd_list = createAsyncThunk(
  "vcxsdds/api_v1_vcxsdd_list",
  async payload => {
    const response = await apiService.api_v1_vcxsdd_list(payload)
    return response.data
  }
)
export const api_v1_vcxsdd_create = createAsyncThunk(
  "vcxsdds/api_v1_vcxsdd_create",
  async payload => {
    const response = await apiService.api_v1_vcxsdd_create(payload)
    return response.data
  }
)
export const api_v1_vcxsdd_retrieve = createAsyncThunk(
  "vcxsdds/api_v1_vcxsdd_retrieve",
  async payload => {
    const response = await apiService.api_v1_vcxsdd_retrieve(payload)
    return response.data
  }
)
export const api_v1_vcxsdd_update = createAsyncThunk(
  "vcxsdds/api_v1_vcxsdd_update",
  async payload => {
    const response = await apiService.api_v1_vcxsdd_update(payload)
    return response.data
  }
)
export const api_v1_vcxsdd_partial_update = createAsyncThunk(
  "vcxsdds/api_v1_vcxsdd_partial_update",
  async payload => {
    const response = await apiService.api_v1_vcxsdd_partial_update(payload)
    return response.data
  }
)
export const api_v1_vcxsdd_destroy = createAsyncThunk(
  "vcxsdds/api_v1_vcxsdd_destroy",
  async payload => {
    const response = await apiService.api_v1_vcxsdd_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const vcxsddsSlice = createSlice({
  name: "vcxsdds",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_vcxsdd_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vcxsdd_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vcxsdd_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vcxsdd_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vcxsdd_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vcxsdd_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vcxsdd_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vcxsdd_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vcxsdd_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vcxsdd_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vcxsdd_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vcxsdd_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vcxsdd_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vcxsdd_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vcxsdd_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vcxsdd_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_vcxsdd_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_vcxsdd_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_vcxsdd_list,
  api_v1_vcxsdd_create,
  api_v1_vcxsdd_retrieve,
  api_v1_vcxsdd_update,
  api_v1_vcxsdd_partial_update,
  api_v1_vcxsdd_destroy,
  slice: vcxsddsSlice
}
