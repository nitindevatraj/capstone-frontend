import React, { useState } from "react";
import Header from "../reusable-components/Header";
import Footer from "../reusable-components/Footer";
import User from "../../assets/images/user.png";
import Profile from "../reusable-components/Profile";
import Card from "../reusable-components/Card";
import Box from "../reusable-components/Box";
import Backdrop from "../reusable-components/Backdrop";
import RecentAdventure from "./RecentAdventure";
import BookedAdventure from "./BookedAdventure";
import TravelStory from "./TravelStory";
import ShareExperience from "./ShareExperience";
function UserView() {
  const [showModal, setShowModal] = useState(false);
  const [recentAdventure, setRecentAdventure] = useState(false);
  const [bookedAdventure, setBookedAdventure] = useState(false);
  const [travelStory, setTravelStory] = useState(false);
  const [shareExperience, setShareExperience] = useState(false);

  const recentAdventureHandler = () => {
    setShowModal(true);
    setRecentAdventure(true);
  };

  const bookedAdventureHandler = () => {
    setShowModal(true);
    setBookedAdventure(true);
  };

  const travelStoryHandler = () => {
    setShowModal(true);
    setTravelStory(true);
  };

  const shareExperienceHandler = () => {
    setShowModal(true);
    setShareExperience(true);
  };

  function closeModalHandler() {
    setShowModal(false);
    setRecentAdventure(false);
    setBookedAdventure(false);
    setTravelStory(false);
    setShareExperience(false);
  }

  return (
    <>
      <Header />
      <Profile src={User} name="karan patel" role="user" />
      <Card>
        <Box top={"5rem"} onClick={recentAdventureHandler}>
          <p>
            Recent Adventures <span>&#187;</span>
          </p>
        </Box>
        <Box top={"10rem"} onClick={bookedAdventureHandler}>
          <p>
            Booked Adventures <span>&#187;</span>
          </p>
        </Box>
        <Box top={"15rem"} onClick={travelStoryHandler}>
          <p>
            Add Your Travel Story <span>&#187;</span>
          </p>
        </Box>
        <Box top={"20rem"} onClick={shareExperienceHandler}>
          <p>
            Share Your Experience <span>&#187;</span>
          </p>
        </Box>
      </Card>

      <Footer />
      {showModal && <Backdrop onClick={closeModalHandler} />}
      {showModal && recentAdventure && (
        <RecentAdventure onClick={closeModalHandler} />
      )}
      {showModal && bookedAdventure && (
        <BookedAdventure onClick={closeModalHandler} />
      )}
      {showModal && travelStory && <TravelStory onClick={closeModalHandler} />}
      {showModal && shareExperience && (
        <ShareExperience onClick={closeModalHandler} />
      )}
    </>
  );
}

export default UserView;
