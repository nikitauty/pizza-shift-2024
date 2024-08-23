import { Button, Card, Input, Loader } from '@components/ui';

import { useGetPizzaCatalogQuery } from '@/shared/api/hooks/useGetPizzaCatalogQuery';

export const MainPage = () => {
  const getPizzaCatalogQuery = useGetPizzaCatalogQuery();

  if (getPizzaCatalogQuery.isLoading) {
    return <Loader />;
  }

  if (!getPizzaCatalogQuery.data) {
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      <h1>Main Page</h1>
      <Button variant='contained'>Button</Button>
      <Input label='Input' placeholder='placeholder' />
      {getPizzaCatalogQuery.data.data.catalog.map((pizza: Pizza) => (
        <Card key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};
