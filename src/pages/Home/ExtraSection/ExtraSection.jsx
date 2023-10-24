const ExtraSection = () => {
  return (
    <div
      className="hero min-h-[70vh]"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/376531/pexels-photo-376531.jpeg?auto=compress&cs=tinysrgb&w=600)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className=" bg-white md:w-[60%] text-black p-12 rounded-lg">
          <h1 className="mb-5 text-5xl font-bold">Best Roomaker</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. In deleniti eaque aut
            repudiandae et a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
