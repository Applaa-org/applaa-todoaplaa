import React, { useState, useMemo } from 'react';
import { initialTodos, Todo } from '@/data/todos';
import { AddTodoForm } from './AddTodoForm';
import { TodoItem } from './TodoItem';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatePresence, motion } from 'framer-motion';

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const handleAddTodo = (text: string, priority: 'low' | 'medium' | 'high') => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      priority,
      createdAt: new Date(),
    };
    setTodos([newTodo, ...todos]);
  };

  const handleToggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const sortedTodos = useMemo(() => {
    return [...todos].sort((a, b) => {
      if (a.completed !== b.completed) {
        return a.completed ? 1 : -1;
      }
      return b.createdAt.getTime() - a.createdAt.getTime();
    });
  }, [todos]);

  const incompleteCount = todos.filter(todo => !todo.completed).length;

  return (
    <Card className="max-w-2xl mx-auto shadow-lg border-none bg-white/80 dark:bg-black/50 backdrop-blur-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          My Tasks ({incompleteCount})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <AddTodoForm onAdd={handleAddTodo} />
        <div className="space-y-2">
          <AnimatePresence>
            {sortedTodos.map((todo) => (
              <motion.div
                key={todo.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <TodoItem
                  todo={todo}
                  onToggle={handleToggleTodo}
                  onDelete={handleDeleteTodo}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </CardContent>
    </Card>
  );
};