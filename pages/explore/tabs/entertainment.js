
import React from "react";
import List from "@/components/explore/Lists/ListItem";
import dummyData from "@/model/entertainment";

const entertainment = () => {
  return (
    <>
      <div className=".entertainment mt-5">
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

export default entertainment;
