import { useProduct } from '@/hooks';
import { Separator } from '../ui';

export const ProductDisplay = ({ productId }) => {
  const { product, httpStatus, loading } = useProduct(productId);

  if (loading) {
    return '...loading';
  }

  if (httpStatus === 404) {
    return 'Product not found';
  }

  const { title } = product;

  return (
    <article>
      <section className="grid grid-cols-2 gap-6 container mx-auto px-4">
        <picture>{/* <Image></Image> */}</picture>

        <div>
          <h1>{title}</h1>
        </div>
      </section>

      <Separator></Separator>
      <section></section>
      {/* <section>pdp tabs</section> */}
    </article>
  );
};
