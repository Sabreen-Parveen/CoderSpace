import Loader from "react-loader-spinner";

export default function Spinner({ loading, message }) {
  return (
    <>
      {loading ? (
        <div className="mx-auto mt-10">
          <div className="w-20 mx-auto">
            <Loader type="Oval" color="#2c4444" height={80} width={80} />
          </div>
          <p className="text-center  text-xl my-8">{message}</p>
        </div>
      ) : null}
    </>
  );
}
