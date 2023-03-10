import Link from 'next/link';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => (
  <Main meta={<Meta title="Optimizely Demo" description="Optimizely Demo" />}>
    <p>Checkout the below posts</p>

    {[...Array(10)].map((_, index) => (
      <div
        className="my-4 w-full rounded-md border-2 border-gray-400 px-2 py-1"
        key={index}
      >
        <Link href={`/posts/post-${index}`}>{`Post - ${index}`}</Link>
      </div>
    ))}
  </Main>
);

export default Index;
