export type Todo = {
  id: string;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
};

export const initialTodos: Todo[] = [
  {
    id: '1',
    text: 'Finalize project proposal for Q3',
    completed: false,
    priority: 'high',
    createdAt: new Date('2024-07-28T09:00:00Z'),
  },
  {
    id: '2',
    text: 'Schedule team meeting to discuss new design system',
    completed: false,
    priority: 'medium',
    createdAt: new Date('2024-07-27T14:30:00Z'),
  },
  {
    id: '3',
    text: 'Review and approve expense reports',
    completed: true,
    priority: 'low',
    createdAt: new Date('2024-07-26T11:00:00Z'),
  },
  {
    id: '4',
    text: 'Prepare presentation for the client kickoff',
    completed: false,
    priority: 'high',
    createdAt: new Date('2024-07-25T16:00:00Z'),
  },
  {
    id: '5',
    text: 'Update dependencies and run security audit',
    completed: false,
    priority: 'medium',
    createdAt: new Date('2024-07-24T10:15:00Z'),
  },
  {
    id: '6',
    text: 'Draft the weekly progress report',
    completed: true,
    priority: 'medium',
    createdAt: new Date('2024-07-23T17:45:00Z'),
  },
  {
    id: '7',
    text: 'Book flights for the upcoming conference',
    completed: false,
    priority: 'low',
    createdAt: new Date('2024-07-22T08:30:00Z'),
  },
  {
    id: '8',
    text: 'Onboard the new marketing intern',
    completed: false,
    priority: 'medium',
    createdAt: new Date('2024-07-21T13:00:00Z'),
  },
];