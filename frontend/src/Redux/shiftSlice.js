import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching shifts
export const fetchShifts = createAsyncThunk("shifts/fetchShifts", async () => {
  const response = await axios.get("http://localhost:8080/shifts");
  return response.data;
});

// Async thunk for adding a shift
export const addShift = createAsyncThunk(
  "shifts/addShift",
  async (newShift) => {
    const response = await axios.post("http://localhost:8080/shifts", newShift);
    return response.data;
  },
);

// Async thunk for updating a shift
export const updateShift = createAsyncThunk(
  "shifts/updateShift",
  async (updatedShift) => {
    const response = await axios.put(
      `http://localhost:8080/shifts/${updatedShift.id}`,
      updatedShift,
    );
    return response.data;
  },
);

// Async thunk for deleting a shift
export const deleteShift = createAsyncThunk(
  "shifts/deleteShift",
  async (id) => {
    await axios.delete(`http://localhost:8080/shifts/${id}`);
    return id;
  },
);

const shiftSlice = createSlice({
  name: "shifts",
  initialState: {
    shifts: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShifts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchShifts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.shifts = action.payload;
      })
      .addCase(fetchShifts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addShift.fulfilled, (state, action) => {
        state.shifts.push(action.payload);
      })
      .addCase(updateShift.fulfilled, (state, action) => {
        const index = state.shifts.findIndex(
          (shift) => shift.id === action.payload.id,
        );
        state.shifts[index] = action.payload;
      })
      .addCase(deleteShift.fulfilled, (state, action) => {
        state.shifts = state.shifts.filter(
          (shift) => shift.id !== action.payload,
        );
      });
  },
});

export default shiftSlice.reducer;
