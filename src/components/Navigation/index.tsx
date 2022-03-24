import React from "react";
import "./index.less";
import { Button } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { trim, get } from "lodash";
import { ReactComponent as ArrowLeft } from "../../assets/images/arrow-left.svg";
import TransferNFT from "../../routes/TransferNFT";

const getPathName = (path: string) => trim(path, "/");

const navigationMap = {
  detail: "Detail",
  create: "Create",
};

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathName = getPathName(location.pathname);
  const router = get(navigationMap, pathName, "List");

  return (
    <div className="navigation">
      <div className="router">
        {router !== "List" && <ArrowLeft onClick={() => navigate(-1)} />}
        {router}
      </div>
      {router === "List" && (
        <Link to="/create">
          <Button type="primary">+ Create</Button>
        </Link>
      )}
      {router === "Detail" && <TransferNFT type="primary" inDetail={true} />}
    </div>
  );
};

export default Navigation;
