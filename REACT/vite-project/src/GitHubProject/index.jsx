import { useState, useEffect } from "react";
import axios from "axios";
import TopNav from "./TopNav";
import InfoSection from "./InfoSection";
import PersonCard from "./PersonCard";
function GithubProject() {
  const [people, setPeople] = useState([]); // Fetch GitHub users
  const getUserData = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "https://api.github.com/users",
        headers: {
          Authorization:
            "Allele mtoto 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",
          Accept: "application/vnd.github+json",
        },
      });
      setPeople(response.data);
    } catch (e) {
      console.log("Error is", e);
    }
  }; // Run once when component mounts
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div>
      {" "}
      <TopNav setPeople={setPeople} /> <InfoSection people={people} />{" "}
      {people.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}{" "}
    </div>
  );
}
export default GithubProject;
