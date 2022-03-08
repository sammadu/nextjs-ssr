import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

const Tomato: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
}) => {
  return (
    <pre>
      <br />
      <code>{JSON.stringify(data, null, 2)}</code>
    </pre>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  const json = await data.json();
  console.log({ ssr: json });

  return {
    props: {
      data: json,
    },
    revalidate: 1,
  };
};

export default Tomato;
