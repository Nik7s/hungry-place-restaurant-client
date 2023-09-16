const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div>
      <p className="text-yellow-600">{subHeading}</p>
      <h1>{heading}</h1>
    </div>
  );
};

export default SectionTitle;
