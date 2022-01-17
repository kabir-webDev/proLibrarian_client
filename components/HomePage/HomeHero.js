const HomeHero = () => {
  return (
    <div
      className="w-full h-48 md:h-80 xl:h-96 flex flex-col justify-center items-center text-white px-10"
      style={{
        background:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('/Assets/contactuspage/nyc.webp') center/cover no-repeat",
        gap: "1.5em",
      }}
    >
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">
        {" "}
        <h1>Welcome to </h1>
        <span className="text-yellow-300">Pro Librarian Web Application</span>
      </h1>
      <p className="text-center text-sm md:text-base">
        We are looking forward to work on your project. You can email us or fill
        in the form or directly reach out to our contact number, one of us will
        connect with you.
      </p>
    </div>
  );
};
export default HomeHero;
