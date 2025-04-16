import React from "react";
import kilos from "../../assets/kilos.png";
import appliance from "../../assets/appliance.png";
import computer from "../../assets/computer.png";
import fashion from "../../assets/fashion.png";
import furniture from "../../assets/furniture.png";
import mobile from "../../assets/mobile.png";
import twowheelers from "../../assets/twowheelers.png";
import travel from "../../assets/travel.png";
import toys from "../../assets/toys.png";


export default function productCategory() {
  const mocdata = [
    {
      tittle: "KIlos",
      img: kilos,
    },
    {
      tittle: "Appliance",
      img: appliance,
    },
    {
      tittle: "Computers",
      img: computer,
    },
    {
      tittle: "Fashions",
      img: fashion,
    },
    {
      tittle: "Furniture",
      img: furniture,
    },
    {
      tittle: "Mobiles",
      img: mobile,
    },
    {
      tittle: "Two Wheellers",
      img: twowheelers,
    },
    {
      tittle: "Travel",
      img: travel,
    },
    {
      tittle: "Toys",
      img: toys,
    }
  ];

  return (
    <div
      style={{
        margin: "20px",
        height: "100px",

        backgroundColor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      {mocdata?.map((item, index) => {
        return (
          <div>
            <img src={item?.img} alt="logo" width={40} />

            <div style={{ display: "flex", justifyContent: "center" }}>
              {item?.tittle}
            </div>
          </div>
        );
      })}
    </div>
  );
}
