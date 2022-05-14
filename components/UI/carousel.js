import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import { FaChartPie, FaChartLine, FaChartBar } from "react-icons/fa";
import analytics from "../../public/images/analytics.png";
import file from "../../public/images/file.jpg";
import todo from "../../public/images/todo.png";

import Image from "next/image";
class MyCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle",
    };
  }

  static get CARD_STYLE() {
    return {
      height: "500px",
      width: "500px",
      paddingTop: "80px",
      padding: "50px",
      textAlign: "center",
      background: "#334155",
      color: "#FFF",
      fontFamily: "sans-serif",
      fontSize: "20px",
      textTransform: "",
      borderRadius: "10px",
      boxSizing: "border-box",
    };
  }

  render() {
    console.log(analytics);

    return (
      <div style={MyCarousel.CONTAINER_STYLE}>
        <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
          <div style={MyCarousel.CARD_STYLE}>
            Analyse your performance
            <div className="h-10"></div>
            <Image src={analytics} alt="analytics" className="w-full h-30" />
            <div className="mt-5">
              Are you a competitive programmer? Do you want to improve yourself
              by comapring your performance with different users.
            </div>
          </div>
          <div style={MyCarousel.CARD_STYLE}>
            Upload and view your files
            <div className="h-10"></div>
            <Image src={file} alt="file uploader" className="w-full " />
            <div className="mt-5">
              Manage all your documents at one place. Upload your files to a
              secured cloud storage.
            </div>
          </div>
          <div style={MyCarousel.CARD_STYLE}>
            Manage your daily work
            <div className="h-10"></div>
            <Image src={todo} alt="todo-list" className="w-full h-30" />
            <div className="mt-5">
              Manage your daya to day work by preparing a todo list.
            </div>
          </div>
        </ReactCardCarousel>
      </div>
    );
  }
}

export default MyCarousel;
