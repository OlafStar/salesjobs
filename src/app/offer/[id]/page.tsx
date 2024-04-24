const Page = ({params: {id}}: {params: {id: string}}) => {
  return (
    <div className="my-80">
      <div>{id}</div>
    </div>
  );
};

export default Page;
