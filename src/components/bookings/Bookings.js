import React, { useState } from "react";
import "./Bookings.css";
import Header from "../reusable-components/Header";
import Footer from "../reusable-components/Footer";
import des1 from "../../assets/images/product-image.jpg";
import des2 from "../../assets/images/product-image1.jpg";
import Backdrop from "../reusable-components/Backdrop";
import BookingDestination from "./BookingDestination";
import BookingModal from "./BookingModal";
function Bookings() {
  const [showModal, setShowModal] = useState(false);
  const [desData, setDesData] = useState({
    src: "",
    name: "",
    desc: "",
  });

  function seeMoreHandler(e) {
    setShowModal(true);
    setDesData({
      src: e.target.parentElement.children[0].src,
      name: e.target.parentElement.children[1].innerText,
      desc: e.target.parentElement.children[2].innerText,
    });
  }

  function onCloseHandler() {
    setShowModal(false);
  }

  return (
    <>
      <Header />
      <div className="bookings-container">
        <BookingDestination
          src={des1}
          name={"destination 1"}
          desc={
            "lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumvlorem ipsumlorem ipsumlorem ipsumvlorem ipsum lorem ipsumlorem ipsumvvlorem ipsum lorem ipsumvlorem ipsum"
          }
          onSeeMore={seeMoreHandler}
        />
        <BookingDestination
          src={des2}
          name={"destination 2"}
          desc={
            "lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumvlorem ipsumlorem ipsumlorem ipsumvlorem ipsum lorem ipsumlorem ipsumvvlorem ipsum lorem ipsumvlorem ipsum"
          }
          onSeeMore={seeMoreHandler}
        />
        <BookingDestination
          src={des1}
          name={"destination 1"}
          desc={
            "lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumvlorem ipsumlorem ipsumlorem ipsumvlorem ipsum lorem ipsumlorem ipsumvvlorem ipsum lorem ipsumvlorem ipsum"
          }
          onSeeMore={seeMoreHandler}
        />
        <BookingDestination
          src={des2}
          name={"destination 2"}
          desc={
            "lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumvlorem ipsumlorem ipsumlorem ipsumvlorem ipsum lorem ipsumlorem ipsumvvlorem ipsum lorem ipsumvlorem ipsum"
          }
          onSeeMore={seeMoreHandler}
        />
        <BookingDestination
          src={des1}
          name={"destination 1"}
          desc={
            "lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumvlorem ipsumlorem ipsumlorem ipsumvlorem ipsum lorem ipsumlorem ipsumvvlorem ipsum lorem ipsumvlorem ipsum"
          }
          onSeeMore={seeMoreHandler}
        />
        <BookingDestination
          src={des2}
          name={"destination 2"}
          desc={
            "lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumvlorem ipsumlorem ipsumlorem ipsumvlorem ipsum lorem ipsumlorem ipsumvvlorem ipsum lorem ipsumvlorem ipsum"
          }
          onSeeMore={seeMoreHandler}
        />
        <BookingDestination
          src={des1}
          name={"destination 1"}
          desc={
            "lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumvlorem ipsumlorem ipsumlorem ipsumvlorem ipsum lorem ipsumlorem ipsumvvlorem ipsum lorem ipsumvlorem ipsum"
          }
          onSeeMore={seeMoreHandler}
        />
        <BookingDestination
          src={des2}
          name={"destination 2"}
          desc={
            "lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumvlorem ipsumlorem ipsumlorem ipsumvlorem ipsum lorem ipsumlorem ipsumvvlorem ipsum lorem ipsumvlorem ipsum"
          }
          onSeeMore={seeMoreHandler}
        />
        {showModal && <Backdrop />}
        {showModal && (
          <BookingModal
            src={desData.src}
            name={desData.name}
            desc={desData.desc}
            onClose={onCloseHandler}
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default Bookings;
