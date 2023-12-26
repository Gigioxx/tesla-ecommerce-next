import { ProductGrid, Title } from '@/components';
import { initialData } from '@/seed/seed';

const products = initialData.products;

export default function Home() {
  return (
    <>
      <Title className='mb-2' subtitle='All products' title='Store' />

      <ProductGrid products={products} />
    </>
  );
}
