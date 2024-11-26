export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    status: 'Active' | 'Inactive';
    avatar: string;
  }
  
  export interface Role {
    id: string;
    name: string;
    description: string;
    permissions: string[];
  }
  
  export interface Permission {
    id: string;
    name: string;
    description: string;
    category: 'User Management' | 'Content Management' | 'System' | 'Reporting';
  }
  
  export interface DashboardStat {
    name: string;
    value: number;
    icon: React.ElementType;
  }
  
  