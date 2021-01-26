import React from 'react';
import styled from 'styled-components';
import QRGenerator from "./QRGenerator";
import QRScanner from "./QRScanner";

const MainWrapper = styled.div`
`;
 

function HomeRouteRoute() {
  return (
    <MainWrapper>
      <QRScanner />
      <QRGenerator />
    </MainWrapper>
  );
}

export default HomeRouteRoute;
