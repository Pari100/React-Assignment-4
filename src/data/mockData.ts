export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  lastLogin: string;
  avatar: string;
}

export interface SalesData {
  month: string;
  sales: number;
  revenue: number;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high';
  assignee: string;
  dueDate: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  color: string;
  description?: string;
}

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'active',
    lastLogin: '2024-01-15',
    avatar: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Manager',
    status: 'active',
    lastLogin: '2024-01-14',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    role: 'User',
    status: 'inactive',
    lastLogin: '2024-01-10',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  }
];

export const mockSalesData: SalesData[] = [
  { month: 'Jan', sales: 120, revenue: 12000 },
  { month: 'Feb', sales: 150, revenue: 15000 },
  { month: 'Mar', sales: 180, revenue: 18000 },
  { month: 'Apr', sales: 200, revenue: 20000 },
  { month: 'May', sales: 170, revenue: 17000 },
  { month: 'Jun', sales: 220, revenue: 22000 }
];

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Update user interface',
    description: 'Redesign the main dashboard layout',
    status: 'todo',
    priority: 'high',
    assignee: 'John Doe',
    dueDate: '2024-01-20'
  },
  {
    id: '2',
    title: 'Fix API integration',
    description: 'Resolve authentication issues',
    status: 'in-progress',
    priority: 'medium',
    assignee: 'Jane Smith',
    dueDate: '2024-01-18'
  },
  {
    id: '3',
    title: 'Write documentation',
    description: 'Create user manual for new features',
    status: 'review',
    priority: 'low',
    assignee: 'Mike Johnson',
    dueDate: '2024-01-25'
  }
];

export const mockEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Team Meeting',
    start: new Date(2024, 0, 16, 10, 0),
    end: new Date(2024, 0, 16, 11, 0),
    color: '#6366F1',
    description: 'Weekly team sync meeting'
  },
  {
    id: '2',
    title: 'Client Presentation',
    start: new Date(2024, 0, 18, 14, 0),
    end: new Date(2024, 0, 18, 15, 30),
    color: '#10B981',
    description: 'Present new project proposal'
  }
];