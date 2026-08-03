import Navigation from "./Navigation";
import MainSection from "./MainSection";
import SideBar from "./SideBar";
function AmazonPage2() {
  return (
    <div>
      {" "}
      <Navigation />{" "}
      <div style={{ display: "flex" }}>
        <SideBar />
        <MainSection />
      </div>
    </div>
  );
}
export default AmazonPage2;
