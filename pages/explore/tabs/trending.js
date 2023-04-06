import withExploreLayout from "@/components/explore/withExploreLayout";
import React from "react";
import List from "@/components/explore/Lists/ListItem";
import dummyData from "@/model/trending";

const trending = () => {
  return (
    <>
      <div className=" .header dark:text-white py-3 mx-2 text-xl font-bold">
        United Kingdom trends
      </div>
      <div className=".trends">
        <div>
          <ul>
            {dummyData.map((item) => {
              return (
                <List
                  key={item.id}
                  title={item.title}
                  likes={item.tweets}
                  header={`${item.id}. Trending`}
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

export default withExploreLayout(trending);
