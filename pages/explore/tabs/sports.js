import React from 'react';
import List from '@/components/explore/Lists/ListItem';
import dummyData from '@/model/sports';
import Nba from '@/components/explore/Lists/NBA';

const sports = () => {
  return (
    <>
      <div className='.entertainment mt-5 ms:pb-12 md:pb-44 mx-3'>
        <Nba />
        <div>
          <ul>
            {dummyData.map((item) => {
              return (
                <List
                  key={item.id}
                  title={item.title}
                  likes={item.tweets}
                  header='Trending in Sports'
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
