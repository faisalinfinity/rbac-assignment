'use client';

import React, { createContext, useContext, useState } from "react";
import { Permission, Role, User as UserType } from '@/types';

// Initial Data
const initialUsers: UserType[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', avatar: '/placeholder.svg?height=40&width=40' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active', avatar: '/placeholder.svg?height=40&width=40' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive', avatar: '/placeholder.svg?height=40&width=40' },
];

const initialRoles: Role[] = [
  { id: '1', name: 'Admin', description: 'Full access to all features', permissions: ['user:read', 'user:write', 'role:read', 'role:write'] },
  { id: '2', name: 'Editor', description: 'Can edit and publish content', permissions: ['user:read', 'content:write'] },
  { id: '3', name: 'Viewer', description: 'Can view content only', permissions: ['user:read', 'content:read'] },
];

const allPermissions: Permission[] = [
  { id: '1', name: 'user:read', description: 'Read user information', category: 'User Management' },
  { id: '2', name: 'user:write', description: 'Create or update users', category: 'User Management' },
  { id: '3', name: 'role:read', description: 'Read role information', category: 'User Management' },
  { id: '4', name: 'role:write', description: 'Create or update roles', category: 'User Management' },
  { id: '5', name: 'content:read', description: 'Read content', category: 'Content Management' },
  { id: '6', name: 'content:write', description: 'Create or update content', category: 'Content Management' },
];


interface MainContextType {
  users: UserType[];
  setUsers: React.Dispatch<React.SetStateAction<UserType[]>>;
  permissions: Permission[];
  setPermissions: React.Dispatch<React.SetStateAction<Permission[]>>;
  roles: Role[];
  setRoles: React.Dispatch<React.SetStateAction<Role[]>>;
}


const MainContext = createContext<MainContextType | undefined>(undefined);

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<UserType[]>(initialUsers);
  const [permissions, setPermissions] = useState<Permission[]>(allPermissions);
  const [roles, setRoles] = useState<Role[]>(initialRoles);

  return (
    <MainContext.Provider value={{ users, setUsers, permissions, setPermissions, roles, setRoles }}>
      {children}
    </MainContext.Provider>
  );
};


const useMain = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("useMain must be used within a MainProvider");
  }
  return context;
};

export default useMain;
