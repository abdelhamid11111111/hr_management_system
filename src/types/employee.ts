

// types.ts
export interface Department {
  id: number;
  name: string;
}

export interface Employee {
  id: number;
  name: string;
  phone: string;
  email: string;
  department: Department;
  profilePic: string | null;
  salary: number;
}

export type EmployeeForm = Omit<Employee, "id" | "department"> & {
  department: number; // departmentId
};
