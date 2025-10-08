import React from 'react';
import { Todo } from '@/data/todos';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const priorityColors = {
  low: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  high: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
};

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center p-3 rounded-lg transition-colors hover:bg-muted/50">
      <Checkbox
        id={`todo-${todo.id}`}
        checked={todo.completed}
        onCheckedChange={() => onToggle(todo.id)}
        className="mr-4"
      />
      <label
        htmlFor={`todo-${todo.id}`}
        className={cn(
          'flex-grow text-sm font-medium',
          todo.completed ? 'line-through text-muted-foreground' : ''
        )}
      >
        {todo.text}
      </label>
      <Badge variant="outline" className={cn('mr-4', priorityColors[todo.priority])}>
        {todo.priority}
      </Badge>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(todo.id)}
        className="text-muted-foreground hover:text-destructive"
        aria-label="Delete todo"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};