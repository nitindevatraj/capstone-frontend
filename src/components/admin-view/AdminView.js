import React, { useState } from "react";
import Header from "../reusable-components/Header";
import Footer from "../reusable-components/Footer";
import Profile from "../reusable-components/Profile";
import Admin from "../../assets/images/admin.png";
import Card from "../reusable-components/Card";
import Box from "../reusable-components/Box";
import Backdrop from "../reusable-components/Backdrop";
import AddAdventures from "./AddAdventures";
import AddProduct from "./AddProduct";
import AdventureCompleted from "./AdventureCompleted";
import AdventurePending from "./AdventurePending";
import UserInformation from "./UserInformation";
function AdminView() {
  const [showModal, setShowModal] = useState(false);
  const [addAdventure, setAddAdventure] = useState(false);
  const [addProduct, setAddProduct] = useState(false);
  const [adventureCompleted, setAdventureCompleted] = useState(false);
  const [adventurePending, setAdventurePending] = useState(false);
  const [userInformation, setUserInformation] = useState(false);

  const addAdventureHandler = () => {
    setShowModal(true);
    setAddAdventure(true);
  };

  const addProductHandler = () => {
    setShowModal(true);
    setAddProduct(true);
  };

  const adventureCompletedHandler = () => {
    setShowModal(true);
    setAdventureCompleted(true);
  };

  const adventurePendingHandler = () => {
    setShowModal(true);
    setAdventurePending(true);
  };

  const userInformationHandler = () => {
    setShowModal(true);
    setUserInformation(true);
  };

  function closeModalHandler() {
    setShowModal(false);
    setAddAdventure(false);
    setAddProduct(false);
    setAdventureCompleted(false);
    setAdventurePending(false);
    setUserInformation(false);
  }

  return (
    <>
      <Header />
      <Profile src={Admin} name="nitin devatraj" role="admin" />
      <Card>
        <Box top={"5rem"} onClick={addAdventureHandler}>
          <p>
            add adventures <span>&#187;</span>
          </p>
        </Box>
        <Box top={"10rem"} onClick={addProductHandler}>
          <p>
            add products <span>&#187;</span>
          </p>
        </Box>
        <Box top={"15rem"} onClick={adventureCompletedHandler}>
          <p>
            adventures completed <span>&#187;</span>
          </p>
        </Box>
        <Box top={"20rem"} onClick={adventurePendingHandler}>
          <p>
            adventures pending <span>&#187;</span>
          </p>
        </Box>
        <Box top={"25rem"} onClick={userInformationHandler}>
          <p>
            user information <span>&#187;</span>
          </p>
        </Box>
      </Card>
      <Footer />
      {showModal && <Backdrop onClick={closeModalHandler} />}
      {showModal && addAdventure && (
        <AddAdventures onClick={closeModalHandler} />
      )}
      {showModal && addProduct && <AddProduct onClick={closeModalHandler} />}
      {showModal && adventureCompleted && (
        <AdventureCompleted onClick={closeModalHandler} />
      )}
      {showModal && adventurePending && (
        <AdventurePending onClick={closeModalHandler} />
      )}
      {showModal && userInformation && (
        <UserInformation onClick={closeModalHandler} />
      )}
    </>
  );
}

export default AdminView;
