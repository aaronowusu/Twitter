import React from "react";
import List from "@/components/explore/Lists/ListItem";
import dummyData from "@/model/news";

const news = () => {
  return (
    <>
      <div className=".news pt-2">
        <div>
          <ul>
            {dummyData.map((item) => {
              return (
                <List
                  key={item.id}
                  title={item.title}
                  likes={item.tweets}
                  header={item.trend}
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

export default news;
