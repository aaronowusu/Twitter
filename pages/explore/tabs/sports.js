
import React from "react";
import List from "@/components/explore/Lists/ListItem";
import dummyData from "@/model/sports";
import Nba from "@/components/explore/Lists/NBA";

const sports = () => {
  return (
    <>
    <Nba/>
      <div className=".entertainment pt-2">
        <div>
          <ul>
            {dummyData.map((item) => {
              return (
                <List
                  key={item.id}
                  title={item.title}
                  likes={item.tweets}
                  header="Trending in Sports"
                >
                  {item.title}
                </List>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default sports;
