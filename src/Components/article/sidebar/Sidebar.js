import React, { useState, useEffect } from "react";
import { client } from "../client";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function Sidebar() {
  const [sideNavData, setSideNavData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [sideNavLinksIsland, setSideNavLinksIsland] = useState();
  const [sideNavLinksFinnland, setSideNavLinksFinnland] = useState();
  const [sideNavLinksSchweden, setSideNavLinksSchweden] = useState();
  const [sideNavLinksNorwegen, setSideNavLinksNorwegen] = useState();

  useEffect(() => {
    client
      .getEntries({
        content_type: "article",
      })
      .then((response) => {
        setSideNavData(response.items);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (sideNavData) {
      let ids = [];
      let i = 0;
      console.log(sideNavData);
      setSideNavLinksIsland(
        sideNavData.map((navLink, index) => {
          switch (navLink.fields.articleCategory) {
            case "Island":
              if (i === 0) {
                i = 1;
                return (
                  <>
                    <h2 key={uuidv4()}>
                      <Link to={`/country/${navLink.fields.articleCategory}`}>
                        {navLink.fields.articleCategory}
                      </Link>
                    </h2>
                    <li>
                      <Link
                        to={`/country/${navLink.fields.articleCategory}/article/${navLink.fields.slugArticle}`}
                      >
                        {navLink.fields.title}
                      </Link>
                    </li>
                  </>
                );
              } else if (!ids.includes(navLink.sys.id)) {
                ids.push(navLink.sys.id);
                return (
                  <li>
                    <Link
                      to={`/country/${navLink.fields.articleCategory}/article/${navLink.fields.slugArticle}`}
                    >
                      {navLink.fields.title}
                    </Link>
                  </li>
                );
              }
          }
        })
      );
    }
  }, [sideNavData]);
  useEffect(() => {
    if (sideNavData) {
      let ids = [];
      let i = 0;
      console.log(sideNavData);
      setSideNavLinksFinnland(
        sideNavData.map((navLink, index) => {
          switch (navLink.fields.articleCategory) {
            case "Finnland":
              if (i === 0) {
                i = 1;
                return (
                  <>
                    <h2 key={uuidv4()}>
                      <Link to={`/country/${navLink.fields.articleCategory}`}>
                        {navLink.fields.articleCategory}
                      </Link>
                    </h2>
                    <li>
                      <Link
                        to={`/country/${navLink.fields.articleCategory}/article/${navLink.fields.slugArticle}`}
                      >
                        {navLink.fields.title}
                      </Link>
                    </li>
                  </>
                );
              } else if (!ids.includes(navLink.sys.id)) {
                ids.push(navLink.sys.id);
                return (
                  <li>
                    <Link
                      to={`/country/${navLink.fields.articleCategory}/article/${navLink.fields.slugArticle}`}
                    >
                      {navLink.fields.title}
                    </Link>
                  </li>
                );
              }
          }
        })
      );
    }
  }, [sideNavData]);
  useEffect(() => {
    if (sideNavData) {
      let ids = [];
      let i = 0;
      console.log(sideNavData);
      setSideNavLinksSchweden(
        sideNavData.map((navLink, index) => {
          switch (navLink.fields.articleCategory) {
            case "Schweden":
              if (i === 0) {
                i = 1;
                return (
                  <>
                    <h2 key={uuidv4()}>
                      <Link to={`/country/${navLink.fields.articleCategory}`}>
                        {navLink.fields.articleCategory}
                      </Link>
                    </h2>
                    <li>
                      <Link
                        to={`/country/${navLink.fields.articleCategory}/article/${navLink.fields.slugArticle}`}
                      >
                        {navLink.fields.title}
                      </Link>
                    </li>
                  </>
                );
              } else if (!ids.includes(navLink.sys.id)) {
                ids.push(navLink.sys.id);
                return (
                  <li>
                    <Link
                      to={`/country/${navLink.fields.articleCategory}/article/${navLink.fields.slugArticle}`}
                    >
                      {navLink.fields.title}
                    </Link>
                  </li>
                );
              }
          }
        })
      );
    }
  }, [sideNavData]);
  useEffect(() => {
    if (sideNavData) {
      let ids = [];
      let i = 0;
      console.log(sideNavData);
      setSideNavLinksNorwegen(
        sideNavData.map((navLink, index) => {
          switch (navLink.fields.articleCategory) {
            case "Norwegen":
              if (i === 0) {
                i = 1;
                return (
                  <>
                    <h2 key={uuidv4()}>
                      <Link to={`/country/${navLink.fields.articleCategory}`}>
                        {navLink.fields.articleCategory}
                      </Link>
                    </h2>
                    <li>
                      <Link
                        to={`/country/${navLink.fields.articleCategory}/article/${navLink.fields.slugArticle}`}
                      >
                        {navLink.fields.title}
                      </Link>
                    </li>
                  </>
                );
              } else if (!ids.includes(navLink.sys.id)) {
                ids.push(navLink.sys.id);
                return (
                  <li>
                    <Link
                      to={`/country/${navLink.fields.articleCategory}/article/${navLink.fields.slugArticle}`}
                    >
                      {navLink.fields.title}
                    </Link>
                  </li>
                );
              }
          }
        })
      );
    }
  }, [sideNavData]);

  return (
    <>
      {sideNavLinksIsland}
      {sideNavLinksFinnland}
      {sideNavLinksSchweden}
      {sideNavLinksNorwegen}
    </>
  );
}
