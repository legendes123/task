"use client";
import React from "react";
import Fullpage, { FullPageSections, FullpageSection } from "@ap.cx/react-fullpage";
import LogoAria from "@/components/logoAria/logoAria";
import TextAria from "@/components/textAria/textAria";

const FullPage = () => {
  return (
    <>
      <Fullpage>
        <FullPageSections>
          <FullpageSection
            style={{
              height: "100vh",
              padding: "1em",
            }}
          >
            <LogoAria></LogoAria>
          </FullpageSection>
          <FullpageSection
            style={{
              height: "100vh",
              padding: "1em",
            }}
          >
            <TextAria />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </>
  );
};

export default FullPage;
