const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="md:w-3/12 mx-auto text-center mt-16 mb-16">
      <p className="text-yellow-500">--------{subHeading}---------</p>
      <h3 className="uppercase text-2xl border-y-4 py-3 font-semibold ">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
