import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';

const Apple: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data }) => {
  return (
    <pre>
      <br />
      hello
      <code>{JSON.stringify(data, null, 2)}</code>
    </pre>
  );
};

export const getServerSideProps: GetServerSideProps<{ data: any }> = async () => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  const json = await data.json();
  console.log({ ssg: json });

  return {
    props: {
      data: json,
    },
  };
};

export default Apple;
