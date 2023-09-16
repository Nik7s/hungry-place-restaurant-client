// eslint-disable-next-line react/prop-types
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center pb-6 md:w-4/12">
      <p className="text-yellow-600 ">--- {subHeading} ---</p>
      <h1 className="uppercase text-3xl border-y-2 py-3 my-3">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
