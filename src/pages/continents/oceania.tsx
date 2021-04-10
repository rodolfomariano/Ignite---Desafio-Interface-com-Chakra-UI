import { BannerContinents } from "../../components/BannerContinents";
import { HeaderContinents } from "../../components/HeaderContinents";

export default function Oceania() {
  return (
    <>
      <HeaderContinents />
      <BannerContinents 
        bannerImage="../images/oceania.jpg" 
        bannerTitle="Oceania"
        titleColor="green.800"
      />
    </>
  )
}