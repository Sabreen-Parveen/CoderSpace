import { Oval } from "react-loader-spinner";

export default function Spinner({ loading, message }) {
  return (
    <>
      {loading ? (
        <div className="mx-auto mt-10">
          <div className="w-20 mx-auto">
            {/* <Loader type="Oval" color="#2c4444" height={80} width={80} /> */}
            <Oval
              ariaLabel="loading-indicator"
              height={100}
              width={100}
              strokeWidth={5}
              strokeWidthSecondary={4}
              color="rgb(15 23 42)"
              secondaryColor="white"
            />
          </div>
          <p className="text-center  text-xl my-8">{message}</p>
        </div>
      ) : null}
    </>
  );
}
