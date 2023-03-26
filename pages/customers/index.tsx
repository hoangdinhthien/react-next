import axios from 'axios';
import { NextPage, GetStaticProps, InferGetServerSidePropsType } from 'next';

type Customer = {
   id: number;
   name: string;
   industry: string;
};

export const getStaticProps: GetStaticProps = async (context) => {
   const result = await axios.get<{
      customers: Customer[];
   }>('http://127.0.0.1:8000/api/customers/');
   console.log(result.data.customers);

   return {
      props: {
         customers: result.data.customers,
      },
      revalidate: 60, // in seconds
   };
};

const Customers: NextPage = ({
   customers,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
   console.log(customers);
   return (
      <>
         <h1>Customers</h1>
         {customers.map((customer: Customer) => {
            return (
               <div key={customer.id}>
                  <p>Name: {customer.name}</p>
                  <p>Industry: {customer.industry}</p>
                  <p>Id: {customer.id}</p>
               </div>
            );
         })}
      </>
   );
};

export default Customers;
