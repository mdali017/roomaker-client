import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AnnousmentSection = () => {
  return (
    <section
      className="hero min-h-[80vh] mb-16"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=600)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div>
          <SectionTitle
            subHeading="Check it out"
            heading="Big Annousment"
          ></SectionTitle>
          <div className="max-w-[90%] flex  px-20">
            <div className="w-1/2">
              <img
                src="https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
            <div className="text-left w-1/2 flex items-center ml-5">
              <div>
                <h1 className="mb-5 text-xl font-bold">
                  March 20, 2023 <br />
                  WHERE CAN I GET SOME?
                </h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnousmentSection;
