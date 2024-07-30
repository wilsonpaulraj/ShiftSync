import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  employees: [],
  status: "idle",
  error: null,
};

// Thunks for async actions
export const fetchEmployees = createAsyncThunk(
  "employees/fetchEmployees",
  async () => {
    const response = await axios.get("http://localhost:8080/employees");
    return response.data;
  },
);

export const addEmployee = createAsyncThunk(
  "employees/addEmployee",
  async (newEmployee) => {
    const response = await axios.post(
      "http://localhost:8080/employees",
      newEmployee,
    );
    return response.data;
  },
);

export const updateEmployee = createAsyncThunk(
  "employees/updateEmployee",
  async (updatedEmployee) => {
    const response = await axios.put(
      `http://localhost:8080/employees/${updatedEmployee.id}`,
      updatedEmployee,
    );
    return response.data;
  },
);

export const deleteEmployee = createAsyncThunk(
  "employees/deleteEmployee",
  async (employeeId) => {
    await axios.delete(`http://localhost:8080/employees/${employeeId}`);
    return employeeId;
  },
);

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.employees.push(action.payload);
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        const index = state.employees.findIndex(
          (employee) => employee.id === action.payload.id,
        );
        if (index !== -1) {
          state.employees[index] = action.payload;
        }
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.employees = state.employees.filter(
          (employee) => employee.id !== action.payload,
        );
      });
  },
});

export default employeeSlice.reducer;
