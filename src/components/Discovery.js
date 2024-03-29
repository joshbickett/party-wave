import React from "react";
import "../App.css";
import styled from "@emotion/styled";
import icon from "../assets/icon.png";
import { Button } from "@mui/material";

const Discovery = ({
  filters,
  activeFilter,
  setActiveFilter,
  projects,
  appCardClicked,
}) => {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 2fr 0.2fr" }}
      className="content-container"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          margin: "20px",
        }}
      >
        <h3 style={{ margin: "10px" }}>View by</h3>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {filters.map((filter) => {
            if (filter.name === activeFilter) {
              return (
                <FilterCardActive>
                  <img
                    src={filter.img}
                    style={{
                      width: "125px",
                      margin: "10px",
                      borderRadius: "10px",
                    }}
                    alt=""
                  />
                  <div style={{ textAlign: "center" }}>{filter.name}</div>
                </FilterCardActive>
              );
            } else {
              return (
                <FilterCard>
                  <img
                    src={filter.img}
                    style={{
                      width: "125px",
                      margin: "10px",
                      borderRadius: "10px",
                    }}
                    alt="filter"
                    onClick={() => setActiveFilter(filter.name)}
                  />
                  <div style={{ textAlign: "center" }}>{filter.name}</div>
                </FilterCard>
              );
            }
          })}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "20px",
          borderLeft: "1px solid black",
        }}
        className="project-list"
      >
        <h3 style={{ margin: "10px" }}>Projects</h3>

        <div style={{ padding: "0 20px" }}>
          {projects
            .filter(
              (project) =>
                project.type === activeFilter || activeFilter === "All"
            )
            .map((project) => {
              return (
                <AppCard
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 6fr 3fr 2fr 1fr",
                    gridGap: "5px",
                  }}
                  onClick={(e) => {
                    appCardClicked(e, project);
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={project?.assets?.icon}
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "5px",
                        margin: "0 15px",
                      }}
                      alt="icon"
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        padding: "0",
                      }}
                    >
                      {project?.name}
                    </div>
                    <div
                      class="text-secondary"
                      style={{
                        fontSize: "16px",
                        color: "#383838",
                      }}
                    >
                      {project?.description}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        margin: "1px",
                        backgroundColor: "#0C9291",
                        color: "white",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    >
                      {project?.type}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      class="badge badge-light"
                      style={{
                        paddingTop: "15px",
                        height: "50px",
                        fontSize: "20px",
                      }}
                    >
                      {project?.votes} 🌊
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <VoteButton id="vote-button">⬆️</VoteButton>
                  </div>
                </AppCard>
              );
            })}
        </div>
        {/* <Button style={{ color: "#0b807f" }}>See more</Button> */}
        <div style={{ color: "#0F6969", margin: "20px" }}>
          More projects coming soon
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Discovery;

const FilterCardActive = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  margin: 5px;
  background-color: #cff0f0;
`;

const AppCard = styled.div`
  border-radius: 5px;
  margin: 15px 5px;
  box-shadow: 1px 1px 2px #dbdbdb;
  padding: 5px 0;
  cursor: pointer;
  :hover {
    box-shadow: 1px 2px 5px #dbdbdb;
  }
`;

const VoteButton = styled.div`
  font-size: 20px;
  &:hover {
    scale: 1.05;
  }
  &:active {
    scale: 1.1;
  }
`;

const FilterCard = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  margin: 5px;
  background-color: #f9f9f9;
  :hover {
    scale: 1.01;
  }
  :active {
    scale: 1.05;
  }
`;
