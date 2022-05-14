import Head from "next/head";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
import { getRequestWithAuth } from "../../../components/utils/requests";
import { useState } from "react";
import HandleForm from "../../../components/Forms/HandleForm";
import ProgressBar from "../../../components/UI/ProgressBar";

const progressData = {};
const data = {
  labels: [],
  datasets: [
    {
      label: "# of Votes",
      backgroundColor: ["rgba(255, 161, 23, 1)", "rgb(211,211,211)"],
      borderColor: ["rgba(255, 161, 23, 1)", "rgb(211,211,211)"],
      borderWidth: 10,
    },
  ],
};
const options = {
  elements: {
    arc: {
      weight: 0.5,
      borderWidth: 3,
    },
  },
  cutout: 150,
};

export default function LeetcodeProfile() {
  const [error, setError] = useState(null);
  const [handle, setHandle] = useState(false);
  const [loading, setLoading] = useState(false);

  //   const value = await getRequestWithAuth(`ananalytics/leetcode/${username}`)
  async function submitHandler(username) {
    console.log(username);
    setHandle(false);
    setLoading(true);
    if (error) {
      setError(null);
    }

    try {
      console.log(username);
      const value = await getRequestWithAuth(
        `/analytics/leetcode/${username.handle}`
      );
      console.log(value);
      data.datasets[0].data = [
        value.getLeetcodeProfile.totalSolved,
        value.getLeetcodeProfile.totalQuestions,
      ];
      console.log(data.datasets[0].data);
      progressData.easyPerc =
        (value.getLeetcodeProfile.easySolved /
          value.getLeetcodeProfile.totalEasy) *
        100;
      progressData.mediumPerc =
        (value.getLeetcodeProfile.mediumSolved /
          value.getLeetcodeProfile.totalMedium) *
        100;
      progressData.hardPerc =
        (value.getLeetcodeProfile.hardSolved /
          value.getLeetcodeProfile.totalHard) *
        100;
      progressData.easy =
        value.getLeetcodeProfile.easySolved +
        "/" +
        value.getLeetcodeProfile.totalEasy;
      progressData.medium =
        value.getLeetcodeProfile.mediumSolved +
        "/" +
        value.getLeetcodeProfile.totalMedium;
      progressData.hard =
        value.getLeetcodeProfile.hardSolved +
        "/" +
        value.getLeetcodeProfile.totalHard;
      setHandle(true);
      console.log(value);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }
  return (
    <>
      <Head>
        <title>Analytics - Dashboard | CodeSpace</title>
      </Head>
      <h1 className="text-center text-2xl mt-2">Leetcode</h1>
      <div className="mt-20 flex justify-center flex-col">
        <HandleForm submitHandler={submitHandler} />
        {handle == true ? (
          <div className="mt-20 flex justify-center">
            <div className="w-1/2 h-5 flex justify-center bg-white  items-center shadow-md m-20">
              <div className="w-100 m-20 mr-20">
                <Doughnut
                  data={data}
                  width={150}
                  height={150}
                  options={options}
                />
              </div>
              <div className="mt-10">
                <div className="w-1/2 m-40 mb-20 ml-10">
                  <div>
                    <div className="flex justify-between">
                      <div className="">Easy</div>
                      <div className="">{progressData.easy}</div>
                    </div>
                    <ProgressBar
                      id="solved"
                      className="rounded-full"
                      bgcolor="green"
                      progress={progressData.easyPerc}
                      max="100"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <div className="">Medium</div>
                      <div className="">{progressData.medium}</div>
                    </div>
                    <ProgressBar
                      id="solved"
                      bgcolor="orange"
                      progress={progressData.mediumPerc}
                      max="100"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-10">
                      <div className="">Hard</div>
                      <div className="">{progressData.hard}</div>
                    </div>
                    <ProgressBar
                      id="solved"
                      bgcolor="red"
                      progress={progressData.hardPerc}
                      max="100"
                    />
                    <div className="mt-10"></div>
                  </div>
                </div>
              </div>
              <div className="w-2"></div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
