import useAuthContext from "../../../components/contexts/useAuthContext";
import useGetRequest from "../../../components/Hooks/useGetRequest";
import ShowFiles from "../../../components/UI/Files/ShowFiles";
export default function ViewFile() {
  const { userDetail } = useAuthContext();

  const { data, error, loading } = useGetRequest(`/user/${userDetail.sub}`);
  // const value = data.user;
  // console.log(data.user);
  console.log(data);
  return <>{/* <ShowFiles additionalData={data} fileIds={data.files} /> */}</>;
}
