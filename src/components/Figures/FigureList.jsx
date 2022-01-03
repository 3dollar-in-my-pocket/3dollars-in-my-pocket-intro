import React from "react";
import UsersIcon from "../../assets/icons/icon_users.svg";
import DownloadIcon from "../../assets/icons/icon_download.svg";
import MapPinIcon from "../../assets/icons/icon_map_pin.svg";
import FigureItem from "./FigureItem";
import { FigureListStyled } from "./Figures.styles";

const FigureList = () => {
  return (
    <FigureListStyled className="figurelist_responsive">
      {data.map((item) => (
        <FigureItem key={item.id} {...item} />
      ))}
    </FigureListStyled>
  );
};

export default FigureList;

const data = [
  {
    id: 1,
    icon: { src: UsersIcon, sort: "users icon" },
    figure: 5000,
    description: "일일활성 유저 수",
  },
  {
    id: 2,
    icon: { src: DownloadIcon, sort: "download icon" },
    figure: 5000,
    description: "iOS App 전체 다운로드 수",
  },
  {
    id: 3,
    icon: { src: MapPinIcon, sort: "map pin icon" },
    figure: 5000,
    description: "등록된 점포 수",
  },
];
