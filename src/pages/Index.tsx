import { AppLayout } from '@/components/layout/AppLayout';
import { TodoList } from '@/components/todos/TodoList';

const Index = () => {
  return (
    <AppLayout>
      <TodoList />
    </AppLayout>
  );
};

export default Index;