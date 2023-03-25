import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Customer: NextPage = () => {
   const router = useRouter();
   const { id } = router.query;
   return <h1>Customers {id}</h1>;
};

export default Customer;
