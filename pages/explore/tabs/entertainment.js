import withExploreLayout from "@/components/explore/withExploreLayout";
import React from "react";
import List from "@/components/explore/Lists/ListItem";
import dummyData from "@/model/entertainment";

const entertainment = () => {
  return (
    <>
      <div className=".entertainment pt-2">
        <div>
          <ul>
            {dummyData.map((item) => {
              return (
                <List
                  key={item.id}
                  title={item.title}
                  likes={item.tweets}
                  header={item.header}
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

export default withExploreLayout(entertainment);
